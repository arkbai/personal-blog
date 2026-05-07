import { ref, computed, watch } from 'vue'

// ── Module-level shared state (singleton across all components) ──
const audio = ref(null)
const playing = ref(false)
const currentIndex = ref(0)
const currentTime = ref(0)
const duration = ref(0)
const volume = ref(70)

const playlist = ref([
  { name: '打扰了', artist: '蔡明希（不才）', src: '/music/蔡明希（不才） - 打扰了.mp3' },
  { name: '订书机BPM110', artist: '0629', src: '/music/0629订书机BPM110.m4a' },
])

const currentSong = computed(() => playlist.value[currentIndex.value] || playlist.value[0])

const progressPercent = computed(() =>
  duration.value > 0 ? (currentTime.value / duration.value) * 100 : 0
)

const formattedCurrentTime = computed(() => formatTime(currentTime.value))
const formattedDuration = computed(() => formatTime(duration.value))

function formatTime(sec) {
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

function ensureAudio() {
  if (!audio.value) {
    audio.value = new Audio()
    audio.value.volume = volume.value / 100
    audio.value.addEventListener('timeupdate', () => { currentTime.value = audio.value.currentTime })
    audio.value.addEventListener('loadedmetadata', () => { duration.value = audio.value.duration })
    audio.value.addEventListener('ended', nextTrack)
    audio.value.addEventListener('play', () => { playing.value = true })
    audio.value.addEventListener('pause', () => { playing.value = false })
  }
  return audio.value
}

function loadAndPlay() {
  const a = ensureAudio()
  a.src = currentSong.value.src
  a.play().catch(() => {})
}

function togglePlay() {
  const a = audio.value
  if (!a || !a.src) { loadAndPlay(); return }
  if (playing.value) { a.pause() }
  else { a.play().catch(() => {}) }
}

function nextTrack() {
  currentIndex.value = currentIndex.value >= playlist.value.length - 1
    ? 0
    : currentIndex.value + 1
  loadAndPlay()
}

function prevTrack() {
  currentIndex.value = currentIndex.value <= 0
    ? playlist.value.length - 1
    : currentIndex.value - 1
  loadAndPlay()
}

function randomTrack() {
  if (playlist.value.length <= 1) return
  let next
  do {
    next = Math.floor(Math.random() * playlist.value.length)
  } while (next === currentIndex.value && playlist.value.length > 1)
  currentIndex.value = next
  loadAndPlay()
}

function selectTrack(i) {
  currentIndex.value = i
  loadAndPlay()
}

function seek(pct) {
  if (audio.value && duration.value) {
    audio.value.currentTime = pct * duration.value
  }
}

watch(volume, (v) => {
  if (audio.value) audio.value.volume = v / 100
})

export function useMusic() {
  return {
    audio, playing, currentIndex, currentTime, duration, volume,
    playlist, currentSong, progressPercent,
    formattedCurrentTime, formattedDuration,
    togglePlay, nextTrack, prevTrack, randomTrack, selectTrack, seek,
  }
}
