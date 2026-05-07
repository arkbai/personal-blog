<script setup>
import { onMounted } from 'vue'
import LayoutWithSidebar from '../components/LayoutWithSidebar.vue'
import { useMarkdown } from '../composables/useMarkdown'

const {
  posts, loading, activePost, tocItems,
  categories, searchQuery, filteredPosts, selectPost,
} = useMarkdown('/src/content/cs-notes/')

onMounted(() => {
  if (posts.value.length > 0 && !activePost.value) {
    selectPost(posts.value[0].id)
  }
})
</script>

<template>
  <LayoutWithSidebar
    placeholder="搜索计算机笔记..."
    :toc-items="tocItems"
    :categories="categories"
    :search-query="searchQuery"
    :active-id="activePost?.id"
    @update:search-query="searchQuery = $event"
    @select-post="selectPost"
  >
    <template #content>
      <div v-if="loading" class="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
        <p class="text-slate-300 text-center py-16">加载中...</p>
      </div>
      <div v-else-if="!activePost" class="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
        <p class="text-slate-300 text-center py-16">什么都没有...</p>
      </div>
      <article
        v-else
        class="bg-white rounded-2xl border border-slate-100 p-6 md:p-10 shadow-sm prose-custom"
        v-html="activePost.html"
      />
    </template>
  </LayoutWithSidebar>
</template>
