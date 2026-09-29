<script setup>
import { ref, computed, watch, onUnmounted } from 'vue'

const props = defineProps({ visible: { type: Boolean, default: false } })
const emit = defineEmits(['close'])

const BASE = import.meta.env.BASE_URL
const imgUrl = `${BASE}images/background/149087630_p0.webp`

const now = ref(new Date())
let timer = null

watch(() => props.visible, (v) => {
  if (v) {
    now.value = new Date()
    timer = setInterval(() => { now.value = new Date() }, 1000)
  } else {
    clearInterval(timer)
    timer = null
  }
})

onUnmounted(() => clearInterval(timer))

const pad = (n) => String(n).padStart(2, '0')
const WEEK = ['日', '一', '二', '三', '四', '五', '六']
const timeStr = computed(() => {
  const d = now.value
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
})
const dateStr = computed(() => {
  const d = now.value
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 星期${WEEK[d.getDay()]}`
})
</script>

<template>
  <Teleport to="body">
    <Transition name="focus-fade">
      <div
        v-if="visible"
        class="fixed inset-0 z-[9999] overflow-hidden bg-black select-none"
        style="height: 100dvh"
      >
        <img
          :src="imgUrl"
          alt="专注背景"
          class="absolute inset-0 h-full w-full object-cover"
        />
        <div class="absolute inset-0 bg-black/30"></div>

        <div class="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <div class="text-6xl font-light tabular-nums tracking-widest md:text-8xl">{{ timeStr }}</div>
          <div class="mt-4 text-base tracking-wider text-white/80 md:text-xl">{{ dateStr }}</div>
        </div>

        <button
          class="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl leading-none text-white transition-colors hover:bg-white/25"
          aria-label="退出专注模式"
          @click="emit('close')"
        >✕</button>

        <p class="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs tracking-widest text-white/50">
          点右上角 ✕ 或按 Esc 退出
        </p>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.focus-fade-enter-active,
.focus-fade-leave-active { transition: opacity 0.4s ease; }
.focus-fade-enter-from,
.focus-fade-leave-to { opacity: 0; }
</style>
