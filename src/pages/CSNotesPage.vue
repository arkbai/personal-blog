<script setup>
import { ref, computed, onMounted } from 'vue'
import LayoutWithSidebar from '../components/LayoutWithSidebar.vue'
import { useMarkdown } from '../composables/useMarkdown'

const {
  posts, loading, activePost,
  categories, searchQuery, filteredPosts, selectPost: selectPostRaw,
} = useMarkdown('/src/content/cs-notes/')

const activeSection = ref(0)

const currentSection = computed(() => activePost.value?.sections?.[activeSection.value])

function selectPost(id) {
  activeSection.value = 0
  selectPostRaw(id)
  window.scrollTo(0, 0)
}

function selectSection(i) {
  activeSection.value = i
  window.scrollTo(0, 0)
}

onMounted(() => {
  if (posts.value.length > 0 && !activePost.value) {
    selectPost(posts.value[0].id)
  }
})
</script>

<template>
  <LayoutWithSidebar
    placeholder="搜索计算机笔记..."
    :sections="activePost?.sections || []"
    :sub-headings="currentSection?.subHeadings || []"
    :active-section="activeSection"
    :categories="categories"
    :search-query="searchQuery"
    :active-id="activePost?.id"
    @update:search-query="searchQuery = $event"
    @select-post="selectPost"
    @select-section="selectSection"
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
      >
        <h1 v-if="currentSection?.title" class="!text-2xl !md:text-3xl !mb-6">{{ currentSection.title }}</h1>
        <div v-html="currentSection?.html" />
      </article>
    </template>
  </LayoutWithSidebar>
</template>
