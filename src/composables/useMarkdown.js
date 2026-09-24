import { ref, computed } from 'vue'
import { marked } from 'marked'
import katex from 'katex'
import 'katex/dist/katex.min.css'

marked.setOptions({ breaks: true, gfm: true })

// ── 行内/块级 LaTeX 渲染（$...$ / $$...$$）──
const inlineMath = {
  name: 'inlineMath',
  level: 'inline',
  start(src) { return src.indexOf('$') },
  tokenizer(src) {
    const match = /^\$([^$\n]+?)\$/.exec(src)
    if (match) return { type: 'inlineMath', raw: match[0], text: match[1] }
  },
  renderer(token) {
    try { return katex.renderToString(token.text, { throwOnError: false }) }
    catch { return token.raw }
  },
}

const blockMath = {
  name: 'blockMath',
  level: 'block',
  start(src) { return src.indexOf('$$') },
  tokenizer(src) {
    const match = /^\$\$([\s\S]+?)\$\$/.exec(src)
    if (match) return { type: 'blockMath', raw: match[0], text: match[1].trim() }
  },
  renderer(token) {
    try { return katex.renderToString(token.text, { displayMode: true, throwOnError: false }) }
    catch { return token.raw }
  },
}

marked.use({ extensions: [inlineMath, blockMath] })

// ── 预处理 ──
// 1) ==高亮== → <mark>
// 2) 图片后紧跟列表/引用（无空行）→ 补空行，让 `- ` / `> ` 正常渲染
// 3) 分割线 `---`（3 个以上连字符）→ 显式 <hr>，避免被识别为 Setext 标题
function preprocess(md) {
  let processed = md.replace(/==(.+?)==/g, '<mark>$1</mark>')

  const lines = processed.split('\n')
  const out = []
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const next = lines[i + 1]

    // 分割线 → <hr>
    if (/^-{3,}\s*$/.test(line)) {
      out.push('<hr>')
      continue
    }

    out.push(line)

    // 图片后紧跟块级元素 → 补空行
    if (next !== undefined) {
      const isImage = /^\s*((<img\b[^>]*>)|(!\[[^\]]*\]\([^)]*\)))\s*$/.test(line)
      const isBlock = /^\s*(?:[-*+]|\d+\.|>)\s+/.test(next)
      if (isImage && isBlock) out.push('')
    }
  }
  return out.join('\n')
}

function renderMarkdown(md) {
  return marked.parse(preprocess(md))
}

// 按该笔记最浅的标题层级拆成多节：有 `#` 用 h1，否则 `##`，再否则 `###`；没有标题则整篇一节。
function splitSections(raw) {
  let level = 0
  for (const l of [1, 2, 3]) {
    if (new RegExp(`^#{${l}}\\s`, 'm').test(raw)) { level = l; break }
  }
  if (!level) {
    return [{ id: 's0', title: '', html: renderMarkdown(raw) }]
  }
  const re = new RegExp(`^(#{${level}})\\s+(.+)$`, 'gm')
  const matches = [...raw.matchAll(re)]
  return matches.map((m, i) => {
    const start = m.index + m[0].length
    const end = i + 1 < matches.length ? matches[i + 1].index : raw.length
    const body = raw.slice(start, end).trim()
    return { id: `s${i}`, title: m[2].trim(), html: renderMarkdown(body) }
  })
}

export function useMarkdown(globPattern) {
  const posts = ref([])
  const loading = ref(true)
  const activeId = ref(null)
  const searchQuery = ref('')

  function loadPosts() {
    try {
      const modules = import.meta.glob('/src/content/**/*.md', { query: '?raw', import: 'default', eager: true })
      const basePrefix = globPattern.replace(/\/\*$/, '')
      const results = []
      for (const [path, content] of Object.entries(modules)) {
        if (!path.startsWith(basePrefix)) continue
        const rel = path.replace(basePrefix, '').replace(/^\//, '')
        const parts = rel.split('/')
        const filename = parts.pop().replace('.md', '')
        const category = parts.length > 0 ? parts.join('/') : ''
        results.push({
          id: path,
          title: filename,
          category,
          html: renderMarkdown(content),
          sections: splitSections(content),
        })
      }
      posts.value = results.sort((a, b) => {
        if (a.category !== b.category) return a.category.localeCompare(b.category)
        return a.title.localeCompare(b.title)
      })
    } catch (e) {
      console.error('Failed to load markdown files:', e)
    }
    loading.value = false
  }

  loadPosts()

  const activePost = computed(() =>
    posts.value.find((p) => p.id === activeId.value) || posts.value[0]
  )

  const categories = computed(() => {
    const map = new Map()
    for (const post of filteredPosts.value) {
      const cat = post.category || '未分类'
      if (!map.has(cat)) map.set(cat, [])
      map.get(cat).push(post)
    }
    const entries = [...map.entries()].sort((a, b) => {
      if (a[0] === '未分类') return 1
      if (b[0] === '未分类') return -1
      return a[0].localeCompare(b[0])
    })
    return entries
  })

  const filteredPosts = computed(() => {
    const q = searchQuery.value.trim().toLowerCase()
    if (!q) return posts.value
    return posts.value.filter((p) => p.title.toLowerCase().includes(q))
  })

  function selectPost(id) {
    activeId.value = id
  }

  return { posts, loading, activePost, categories, searchQuery, filteredPosts, selectPost }
}
