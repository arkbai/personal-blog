<script setup>
const props = defineProps({
  placeholder: { type: String, default: '搜索笔记...' },
  tocItems: { type: Array, default: () => [] },
  categories: { type: Array, default: () => [] },
  searchQuery: { type: String, default: '' },
  activeId: { type: String, default: '' },
})

const emit = defineEmits(['update:searchQuery', 'selectPost'])

function onSearchInput(e) {
  emit('update:searchQuery', e.target.value)
}
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 pt-28 pb-16">
    <div class="flex flex-col lg:flex-row gap-6 lg:gap-8">
      <!-- Sidebar — always visible, fixed on desktop -->
      <aside class="w-full lg:w-56 lg:shrink-0">
        <nav class="lg:sticky lg:top-28 space-y-5 bg-white lg:bg-transparent rounded-2xl lg:rounded-none p-4 lg:p-0 shadow-sm lg:shadow-none border border-slate-100 lg:border-none">
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

          <!-- Categories & posts -->
          <div class="space-y-4 max-h-64 lg:max-h-none overflow-y-auto">
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

          <!-- TOC divider -->
          <div v-if="tocItems.length > 0" class="border-t border-slate-100 pt-4">
            <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">当前目录</h3>
            <ul class="space-y-0.5">
              <li v-for="item in tocItems" :key="item.id">
                <a
                  :href="`#${item.id}`"
                  class="block text-sm text-slate-500 hover:text-primary-500 transition-all py-1 px-2 rounded-md hover:bg-slate-100 active:bg-slate-200"
                >
                  {{ item.label }}
                </a>
                <ul v-if="item.children" class="ml-3 space-y-0.5">
                  <li v-for="child in item.children" :key="child.id">
                    <a
                      :href="`#${child.id}`"
                      class="block text-xs text-slate-400 hover:text-primary-500 transition-all py-0.5 px-2 rounded-md hover:bg-slate-100 active:bg-slate-200"
                    >
                      {{ child.label }}
                    </a>
                  </li>
                </ul>
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
    </div>
  </div>
</template>
