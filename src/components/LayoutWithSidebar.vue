<script setup>
import { computed } from 'vue'

const props = defineProps({
  placeholder: { type: String, default: '搜索笔记...' },
  sections: { type: Array, default: () => [] },
  activeSection: { type: Number, default: 0 },
  categories: { type: Array, default: () => [] },
  searchQuery: { type: String, default: '' },
  activeId: { type: String, default: '' },
})

const emit = defineEmits(['update:searchQuery', 'selectPost', 'selectSection'])

const hasSections = computed(() => props.sections.length > 1)
const prevTitle = computed(() =>
  props.activeSection > 0 ? props.sections[props.activeSection - 1].title : ''
)
const nextTitle = computed(() =>
  props.activeSection < props.sections.length - 1 ? props.sections[props.activeSection + 1].title : ''
)

function onSearchInput(e) {
  emit('update:searchQuery', e.target.value)
}
function goSection(i) {
  if (i < 0 || i >= props.sections.length) return
  emit('selectSection', i)
}
</script>

<template>
  <div class="w-full px-4 md:px-6 pt-24 md:pt-28 pb-16">
    <div class="flex flex-col lg:flex-row gap-6">
      <!-- Left sidebar — notes list + section list, sticky on desktop -->
      <aside class="w-full lg:w-64 lg:shrink-0">
        <nav class="lg:sticky lg:top-24 space-y-5 bg-white rounded-2xl lg:rounded-xl border border-slate-100 p-4 shadow-sm">
          <!-- Search bar -->
          <div class="relative">
            <svg class="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              :value="searchQuery"
              type="text"
              :placeholder="placeholder"
              class="w-full pl-8 pr-3 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-100 transition-all text-slate-500 placeholder-slate-300"
              @input="onSearchInput"
            />
          </div>

          <!-- Notes directory (top) -->
          <div class="space-y-4 max-h-48 lg:max-h-[42vh] overflow-y-auto">
            <div v-for="[category, catPosts] in categories" :key="category">
              <h3 class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                {{ category }}
              </h3>
              <ul class="space-y-0.5">
                <li v-for="post in catPosts" :key="post.id">
                  <button
                    :class="[
                      'text-left w-full text-sm py-1 px-2 rounded-md transition-colors truncate',
                      activeId === post.id
                        ? 'bg-primary-50 text-primary-500 font-medium'
                        : 'text-slate-500 hover:bg-slate-50'
                    ]"
                    @click="emit('selectPost', post.id)"
                  >
                    {{ post.title }}
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <!-- No results -->
          <p
            v-if="categories.length === 0 && searchQuery"
            class="text-xs text-slate-400 text-center py-4"
          >
            无匹配笔记
          </p>

          <!-- Section directory (bottom) — current note's heading titles -->
          <div v-if="hasSections" class="border-t border-slate-100 pt-4">
            <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">标题目录</h3>
            <ul class="space-y-0.5 max-h-48 lg:max-h-[38vh] overflow-y-auto">
              <li v-for="(s, i) in sections" :key="s.id">
                <button
                  :class="[
                    'text-left w-full text-sm py-1 px-2 rounded-md transition-colors',
                    i === activeSection
                      ? 'bg-primary-50 text-primary-500 font-medium'
                      : 'text-slate-500 hover:bg-slate-50'
                  ]"
                  @click="goSection(i)"
                >
                  {{ s.title }}
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      <!-- Main content -->
      <article class="flex-1 min-w-0">
        <div class="prose-custom">
          <slot name="content">
            <div class="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
              <p class="text-slate-400 text-center py-12">暂无内容</p>
            </div>
          </slot>
        </div>
      </article>

      <!-- Right prev/next buttons — sticky, edge-aligned -->
      <div v-if="hasSections" class="lg:w-40 lg:shrink-0 order-none lg:order-last">
        <div class="flex lg:flex-col gap-2 lg:sticky lg:top-1/2 lg:-translate-y-1/2">
          <button
            :disabled="activeSection <= 0"
            class="flex-1 lg:flex-none text-left px-3 py-2.5 rounded-xl border border-slate-200 bg-white/90 backdrop-blur-sm shadow-sm transition-all text-xs disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary-200 hover:shadow"
            @click="goSection(activeSection - 1)"
          >
            <span class="block text-[10px] text-slate-400 mb-0.5">← 上一节</span>
            <span class="block truncate text-slate-600 font-medium">{{ prevTitle || '已是最前' }}</span>
          </button>
          <button
            :disabled="activeSection >= sections.length - 1"
            class="flex-1 lg:flex-none text-left px-3 py-2.5 rounded-xl border border-slate-200 bg-white/90 backdrop-blur-sm shadow-sm transition-all text-xs disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary-200 hover:shadow"
            @click="goSection(activeSection + 1)"
          >
            <span class="block text-[10px] text-slate-400 mb-0.5">下一节 →</span>
            <span class="block truncate text-slate-600 font-medium">{{ nextTitle || '已是最后' }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
