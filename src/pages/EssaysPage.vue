<script setup>
import { ref, onMounted } from 'vue'
import LayoutWithSidebar from '../components/LayoutWithSidebar.vue'
import { useMarkdown } from '../composables/useMarkdown'

const {
  posts, loading, activePost, tocItems,
  categories, searchQuery, filteredPosts, selectPost,
} = useMarkdown('/src/content/essays/')

const easterEggVisible = ref(true)

onMounted(() => {
  if (posts.value.length > 0 && !activePost.value) {
    selectPost(posts.value[0].id)
  }
})
</script>

<template>
  <LayoutWithSidebar
    placeholder="搜索随笔..."
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

  <!-- Easter egg: top-right corner, click to dismiss -->
  <transition name="egg-pop">
    <div
      v-if="easterEggVisible"
      class="fixed top-20 right-4 z-40 cursor-pointer group"
      @click="easterEggVisible = false"
    >
      <img
        src="/gif/ca9227357326d827ea8c7268590aa051.jpg"
        alt="彩蛋"
        class="w-20 h-20 object-cover rounded-xl shadow-lg border-2 border-white/60 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
      />
      <span class="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full shadow text-[10px] flex items-center justify-center text-slate-400 group-hover:text-red-400 transition-colors">×</span>
    </div>
  </transition>
</template>

<style scoped>
.egg-pop-enter-active { transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
.egg-pop-leave-active { transition: all 0.3s ease; }
.egg-pop-enter-from { opacity: 0; transform: scale(0.5) rotate(-15deg); }
.egg-pop-leave-to { opacity: 0; transform: scale(0.5) rotate(15deg); }
</style>
