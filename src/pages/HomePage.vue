<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const BASE = import.meta.env.BASE_URL
const router = useRouter()

const phase = ref('idle')
const pinyinText = ref('')
const fullPinyin = 'huan ying   welcome'
const cardsVisible = ref(false)
let observer = null

const sections = [
  { name: '随笔', desc: '随想随写，记录日常思绪', path: '/essays', icon: '✍️' },
  { name: '计算机笔记', desc: '技术积累与学习记录', path: '/cs-notes', icon: '💻' },
  { name: 'OC设定', desc: '原创角色与世界观设定', path: '/oc-settings', icon: '🎨' },
  { name: '音乐', desc: '聆听与收藏', path: '/music', icon: '🎵' },
  { name: '待续', desc: '更多内容即将到来', path: '/upcoming', icon: '🚧' },
  { name: '留言', desc: '来都来了，说点什么吧', path: '/guestbook', icon: '💬' },
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
})

onUnmounted(() => {
  if (observer) observer.disconnect()
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
</script>

<template>
  <div class="absolute inset-0 overflow-y-scroll snap-y snap-mandatory scroll-smooth">
    <!-- Fixed background image -->
    <div
      class="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
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
          class="text-6xl md:text-7xl lg:text-8xl text-black absolute whitespace-nowrap"
          style="font-family: 'ZhouFang', var(--font-body)"
        >
          欢迎   welcome
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

    <!-- ═══ Screen 2: Cards ═══ -->
    <section
      id="cards-section"
      class="h-full snap-start flex flex-col items-center justify-center relative px-6"
    >
      <div class="w-full max-w-lg mx-auto relative z-10">
        <transition name="cards-enter">
          <div v-if="cardsVisible" class="grid grid-cols-2 gap-4">
            <div
              v-for="(section, i) in sections"
              :key="section.name"
              class="rounded-2xl p-6 cursor-pointer text-center group transition-all duration-500"
              :class="cardsVisible
                ? 'bg-white shadow-md hover:shadow-lg hover:scale-[1.02]'
                : 'bg-white/30 backdrop-blur-md border border-white/50'"
              :style="{ transitionDelay: `${i * 0.05}s` }"
              @click="router.push(section.path)"
            >
              <div class="text-3xl mb-3">{{ section.icon }}</div>
              <div class="text-base font-medium text-slate-700 group-hover:text-blue-500 transition-colors">
                {{ section.name }}
              </div>
              <div class="text-xs text-slate-500 mt-1.5 leading-relaxed">
                {{ section.desc }}
              </div>
            </div>
          </div>
        </transition>

        <transition name="fade">
          <p v-if="cardsVisible" class="text-xs text-black/30 text-center mt-8 tracking-wider">
            向上滚动回到欢迎
          </p>
        </transition>
      </div>
    </section>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'ZhouFang';
  src: url('fonts/ZhouFangRiMingTiXieTi-2.ttf') format('truetype');
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
