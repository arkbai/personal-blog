<script setup>
import { useMusic } from '../composables/useMusic'

const {
  playing, volume, currentIndex,
  playlist, currentSong, progressPercent,
  formattedCurrentTime, formattedDuration,
  togglePlay, prevTrack, nextTrack, randomTrack, selectTrack, seek,
} = useMusic()

function setVolume(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  volume.value = Math.round(((e.clientX - rect.left) / rect.width) * 100)
}
</script>

<template>
  <div class="max-w-2xl mx-auto px-6 pt-32 pb-16">
    <h1 class="text-2xl md:text-3xl font-bold text-slate-700 mb-10 text-center">音乐</h1>

    <!-- Visualizer -->
    <div class="mb-10 flex justify-center">
      <div
        :class="[
          'w-48 h-48 md:w-56 md:h-56 rounded-3xl bg-gradient-to-br from-blue-300 via-blue-400 to-sky-400',
          'flex items-center justify-center shadow-lg shadow-blue-200/50',
          'transition-transform duration-500',
          playing ? 'scale-100' : 'scale-95'
        ]"
      >
        <div class="flex items-end gap-1.5 h-16">
          <span
            v-for="h in [16, 32, 20, 40, 24, 28, 36]"
            :key="h"
            class="w-1.5 bg-white/80 rounded-full transition-all duration-300"
            :class="playing ? 'animate-pulse' : ''"
            :style="{ height: playing ? `${Math.random() * 40 + 8}px` : h + 'px' }"
          />
        </div>
      </div>
    </div>

    <!-- Song info -->
    <div class="text-center mb-8">
      <h3 class="text-lg font-semibold text-slate-600">{{ currentSong.name }}</h3>
      <p class="text-sm text-slate-400 mt-1">{{ currentSong.artist }}</p>
    </div>

    <!-- Progress -->
    <div class="flex items-center gap-3 mb-8">
      <span class="text-xs text-slate-400 w-10 text-right">{{ formattedCurrentTime }}</span>
      <div
        class="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden cursor-pointer group"
        @click="(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          seek((e.clientX - rect.left) / rect.width)
        }"
      >
        <div
          class="h-full bg-primary-400 rounded-full transition-all duration-300"
          :style="{ width: progressPercent + '%' }"
        />
      </div>
      <span class="text-xs text-slate-400 w-10">{{ formattedDuration }}</span>
    </div>

    <!-- Controls -->
    <div class="flex items-center justify-center gap-8">
      <button
        class="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-primary-500 hover:bg-primary-50 transition-all"
        title="随机播放"
        @click="randomTrack"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 3h5v5M4 20l7-7m0-6l7 7M21 3l-5 5M9 14l-5 5" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 3v5h-5M3 21v-5h5" />
        </svg>
      </button>

      <button
        class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-primary-500 transition-colors"
        @click="prevTrack"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
        </svg>
      </button>

      <button
        class="w-16 h-16 rounded-full bg-primary-500 hover:bg-primary-600 text-white flex items-center justify-center transition-all duration-200 hover:shadow-lg hover:shadow-blue-300/40 hover:scale-105 active:scale-95"
        @click="togglePlay"
      >
        <svg v-if="!playing" class="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
        <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
        </svg>
      </button>

      <button
        class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-primary-500 transition-colors"
        @click="nextTrack"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
        </svg>
      </button>

      <button
        class="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-primary-500 hover:bg-primary-50 transition-all"
        title="列表循环"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </button>
    </div>

    <!-- Volume -->
    <div class="flex items-center justify-center gap-2 mt-8">
      <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M6.5 8.5H3.75A.75.75 0 003 9.25v5.5c0 .414.336.75.75.75H6.5l3.5 3.5V5.5L6.5 8.5z" />
      </svg>
      <div
        class="w-24 h-1 bg-slate-200 rounded-full overflow-hidden cursor-pointer"
        @click="setVolume"
      >
        <div class="h-full bg-slate-400 rounded-full" :style="{ width: volume + '%' }" />
      </div>
    </div>

    <!-- Playlist -->
    <div class="mt-12">
      <h3 class="text-sm font-semibold text-slate-500 mb-3">播放列表</h3>
      <div class="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm">
        <div
          v-for="(song, i) in playlist"
          :key="i"
          :class="[
            'flex items-center gap-3 px-4 py-3 text-sm cursor-pointer transition-colors',
            i === currentIndex ? 'bg-primary-50 text-primary-600' : 'text-slate-500 hover:bg-slate-50'
          ]"
          @click="selectTrack(i)"
        >
          <span class="w-5 text-xs text-slate-300 text-right">{{ i + 1 }}</span>
          <span class="flex-1 truncate">{{ song.name }}</span>
          <span class="text-xs text-slate-300">{{ song.artist }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
