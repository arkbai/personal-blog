import { ref, computed } from 'vue'
import { marked } from 'marked'

marked.setOptions({ breaks: true, gfm: true })

export function useMarkdown(globPattern) {
  const posts = ref([])
  const loading = ref(true)
  const activeId = ref(null)
  const searchQuery = ref('')

  function extractToc(html) {
    const headingRegex = /<h([23])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h[23]>/g
    const items = []
    let match
    while ((match = headingRegex.exec(html)) !== null) {
      const level = parseInt(match[1])
      const id = match[2]
      const label = match[3].replace(/<[^>]*>/g, '')
      if (level === 2) {
        items.push({ id, label, children: [] })
      } else if (level === 3 && items.length > 0) {
        items[items.length - 1].children.push({ id, label })
      }
    }
    return items
  }

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
        // Pre-process: ==highlight== → <mark>highlight</mark>
        const processed = content.replace(/==(.+?)==/g, '<mark>$1</mark>')
        const html = marked.parse(processed)
        results.push({
          id: path,
          title: filename,
          category,
          html,
          toc: extractToc(html),
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

  const tocItems = computed(() => activePost.value?.toc || [])

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

  return { posts, loading, activePost, tocItems, categories, searchQuery, filteredPosts, selectPost }
}
