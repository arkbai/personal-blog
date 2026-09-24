import { ref, computed } from 'vue'
import { marked } from 'marked'

marked.setOptions({ breaks: true, gfm: true })

function renderMarkdown(md) {
  // Pre-process: ==highlight== → <mark>highlight</mark>
  const processed = md.replace(/==(.+?)==/g, '<mark>$1</mark>')
  return marked.parse(processed)
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
      const basePrefix = globPattern.replace(/\/\*$/, '') // e.g. /src/content/cs-notes
      const results = []
      for (const [path, content] of Object.entries(modules)) {
        if (!path.startsWith(basePrefix)) continue
        const rel = path.replace(basePrefix, '').replace(/^\//, '') // e.g. "操作系统/操作系统-408.md"
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

  // Group posts by category for sidebar display
  const categories = computed(() => {
    const map = new Map()
    for (const post of filteredPosts.value) {
      const cat = post.category || '未分类'
      if (!map.has(cat)) map.set(cat, [])
      map.get(cat).push(post)
    }
    // Sort: "未分类" last, others alphabetically
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
