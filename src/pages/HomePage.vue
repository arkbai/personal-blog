<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import FocusMode from '../components/FocusMode.vue'

const BASE = import.meta.env.BASE_URL
const router = useRouter()

const phase = ref('idle')
const pinyinText = ref('')
const fullPinyin = 'Welcome(·ω<)☆'
const cardsVisible = ref(false)
const focusVisible = ref(false)
let observer = null

const sections = [
  { name: '随笔', desc: '随想随写，记录日常思绪', path: '/essays', icon: '✍️', size: 'h-40' },
  { name: '计算机笔记', desc: '技术积累与学习记录', path: '/cs-notes', icon: '💻', size: 'h-52' },
  { name: 'OC设定', desc: '原创角色与世界观设定', path: '/oc-settings', icon: '🎨', size: 'h-36' },
  { name: '音乐', desc: '聆听与收藏', path: '/music', icon: '🎵', size: 'h-48' },
  { name: '待续', desc: '更多内容即将到来', path: '/upcoming', icon: '🚧', size: 'h-36' },
  { name: '留言', desc: '来都来了，说点什么吧', path: '/guestbook', icon: '💬', size: 'h-44' },
  { name: '专注', desc: '沉浸式全屏时钟', path: null, action: 'focus', icon: '🧘', size: 'h-40' },
]

onMounted(() => {
  startAnimation()
  const el = document.getElementById('cards-section')
  if (el) {
    observer = new IntersectionObserver(
      ([entry]) => { cardsVisible.value = entry.isIntersecting },
      { threshold: 0.4 }
    )
    observer.observe(el)
  }
  document.addEventListener('fullscreenchange', onFullscreenChange)
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
  document.removeEventListener('fullscreenchange', onFullscreenChange)
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})

watch(focusVisible, (v) => {
  document.body.style.overflow = v ? 'hidden' : ''
})

function startAnimation() {
  phase.value = 'typing'
  let i = 0
  const typeInterval = setInterval(() => {
    pinyinText.value = fullPinyin.slice(0, i + 1)
    i++
    if (i >= fullPinyin.length) {
      clearInterval(typeInterval)
      setTimeout(() => { phase.value = 'done' }, 500)
    }
  }, 100)
}

function onCardClick(section) {
  if (section.action === 'focus') {
    focusVisible.value = true
    enterFullscreen()
  } else {
    router.push(section.path)
  }
}

function enterFullscreen() {
  const el = document.documentElement
  const req = el.requestFullscreen || el.webkitRequestFullscreen
  if (req) {
    try {
      const p = req.call(el)
      if (p && typeof p.catch === 'function') p.catch(() => {})
    } catch (e) {}
  }
}

function exitFullscreen() {
  const exit = document.exitFullscreen || document.webkitExitFullscreen
  if (exit && (document.fullscreenElement || document.webkitFullscreenElement)) {
    try { exit.call(document) } catch (e) {}
  }
}

function closeFocus() {
  exitFullscreen()
  focusVisible.value = false
}

function onFullscreenChange() {
  if (!document.fullscreenElement && !document.webkitFullscreenElement && focusVisible.value) {
    focusVisible.value = false
  }
}

function onKeydown(e) {
  if (e.key === 'Escape' && focusVisible.value) {
    closeFocus()
  }
}
</script>

<template>
  <div class="absolute inset-0 overflow-y-scroll snap-y snap-mandatory scroll-smooth">
    <!-- Fixed background image -->
    <div
      class="fixed inset-0 bg-cover bg-center bg-no-repeat z-0 bg-slate-200"
      :style="{ backgroundImage: `url('${BASE}images/background/pic-1-chr-0007-ikut__2048x1024__53195f50c069.webp')` }"
    />

    <!-- Overlay: transitions between clear (welcome) and blurred (cards) -->
    <div
      class="fixed inset-0 z-0 transition-all duration-700 ease-in-out"
      :class="cardsVisible ? 'bg-white/50 backdrop-blur-md' : 'bg-white/10'"
    />

    <!-- ═══ Screen 1: Welcome ═══ -->
    <section class="h-full snap-start flex flex-col items-center justify-center relative">
      <div class="relative h-32 flex items-center justify-center">
        <transition name="fade">
          <div
            v-if="phase === 'typing'"
            class="text-4xl md:text-5xl lg:text-6xl font-light tracking-widest text-black/60 absolute whitespace-nowrap"
          >
            {{ pinyinText }}
            <span class="typing-cursor after:!text-black/50" />
          </div>
        </transition>
        <div
          v-if="phase === 'done'"
          class="text-7xl md:text-[5.4rem] lg:text-[7.2rem] leading-none text-black absolute whitespace-nowrap"
          style="font-family: 'ZhouFang', var(--font-body); text-shadow: 4px 4px 8px rgba(100, 116, 139, 0.5);"
        >
          Welcome<span style="font-family: var(--font-body), sans-serif;">(·ω&lt;)☆</span>
        </div>
      </div>

      <transition name="fade">
        <div v-if="phase === 'done'" class="absolute bottom-8 flex flex-col items-center gap-2">
          <p class="text-xs text-black/40 tracking-wider">向下滚动</p>
          <svg class="w-4 h-4 text-black/40 animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </transition>
    </section>

    <!-- ═══ Screen 2: Cards (4×3 grid) ═══ -->
    <section
      id="cards-section"
      class="h-full snap-start flex items-center relative overflow-hidden"
    >
      <div class="w-full h-full px-4 md:px-8 py-16 flex flex-col">
        <transition name="cards-enter">
          <div
            v-if="cardsVisible"
            class="w-full flex-1 min-h-0 grid gap-3 md:gap-4 grid-cols-2 grid-rows-6 md:grid-cols-4 md:grid-rows-3"
          >
            <div
              v-for="(section, i) in sections"
              :key="section.name"
              class="rounded-2xl p-3 md:p-4 cursor-pointer text-center flex flex-col items-center justify-center group transition-all duration-500 overflow-hidden"
              :class="cardsVisible
                ? 'bg-white shadow-md hover:shadow-lg hover:scale-[1.02]'
                : 'bg-white/30 backdrop-blur-md border border-white/50'"
              :style="{ transitionDelay: `${i * 0.06}s` }"
              @click="onCardClick(section)"
            >
              <div class="text-2xl md:text-3xl mb-1">{{ section.icon }}</div>
              <div class="text-sm md:text-base font-medium text-slate-700 group-hover:text-blue-500 transition-colors">
                {{ section.name }}
              </div>
              <div class="text-[11px] md:text-xs text-slate-500 mt-1 leading-relaxed">
                {{ section.desc }}
              </div>
            </div>
          </div>
        </transition>

        <transition name="fade">
          <p v-if="cardsVisible" class="shrink-0 text-xs text-black/30 text-center mt-4 tracking-wider">
            向上滚动回到欢迎
          </p>
        </transition>
      </div>
    </section>

    <FocusMode :visible="focusVisible" @close="closeFocus" />
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'ZhouFang';
  src: url('../assets/fonts/ZhouFang-subset.woff2') format('woff2');
  font-display: swap;
}

.fade-enter-active { transition: opacity 0.4s ease; }
.fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }

.cards-enter-enter-active { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
.cards-enter-leave-active { transition: all 0.25s ease; }
.cards-enter-enter-from { opacity: 0; transform: translateY(30px); }
.cards-enter-leave-to { opacity: 0; transform: translateY(10px); }
</style>
