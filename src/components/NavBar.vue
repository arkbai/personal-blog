<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useMusic } from '../composables/useMusic'

const route = useRoute()
const scrolled = ref(false)
const mobileOpen = ref(false)

const { playing, currentSong, togglePlay, nextTrack } = useMusic()

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 40
  })
}

const navItems = [
  { name: '首页', path: '/' },
  { name: '随笔', path: '/essays' },
  { name: '计算机笔记', path: '/cs-notes' },
  { name: 'OC设定', path: '/oc-settings' },
  { name: '音乐', path: '/music' },
  { name: '待续', path: '/upcoming' },
  { name: '留言', path: '/guestbook' },
]

function isActive(path) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-2.5"
  >
    <div class="w-full px-6 flex items-center justify-between">
      <!-- Left: Logo + Music bar -->
      <div class="flex items-center gap-3">
        <router-link to="/" class="text-xl font-bold gradient-text tracking-tight shrink-0">
          Arkbai Blog
        </router-link>

        <!-- Global music mini bar -->
        <div
          class="hidden sm:flex items-center gap-2 bg-white/40 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/60 text-xs"
        >
          <svg class="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
          <span class="text-slate-500 truncate max-w-[100px]">{{ currentSong.name }}</span>
          <button
            class="text-slate-400 hover:text-primary-500 transition-colors shrink-0"
            @click="togglePlay"
            :title="playing ? '暂停' : '播放'"
          >
            <svg v-if="playing" class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
            <svg v-else class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
          <button
            class="text-slate-400 hover:text-primary-500 transition-colors shrink-0"
            @click="nextTrack"
            title="下一首"
          >
            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Right: nav links -->
      <div class="hidden md:flex items-center gap-6 lg:gap-8">
        <router-link
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          :class="[
            'text-sm tracking-wide transition-colors duration-200',
            isActive(item.path) ? 'text-primary-500 font-medium' : 'text-slate-500 hover:text-primary-500'
          ]"
        >
          {{ item.name }}
        </router-link>
      </div>

      <!-- Mobile toggle -->
      <button
        class="md:hidden text-slate-500 hover:text-primary-500 transition-colors"
        @click="mobileOpen = !mobileOpen"
      >
        <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileOpen"
      class="md:hidden glass border-t border-primary-100 mt-3 px-6 py-4 flex flex-col gap-3"
    >
      <router-link
        v-for="item in navItems"
        :key="item.name"
        :to="item.path"
        :class="[
          'text-sm py-1 transition-colors duration-200',
          isActive(item.path) ? 'text-primary-500 font-medium' : 'text-slate-500'
        ]"
        @click="mobileOpen = false"
      >
        {{ item.name }}
      </router-link>
    </div>
  </nav>
</template>
