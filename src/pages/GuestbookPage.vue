<script setup>
import { ref, onMounted } from 'vue'

const STORAGE_KEY = 'blog_guestbook_messages'

const messages = ref([])
const author = ref('')
const text = ref('')
const submitting = ref(false)

onMounted(() => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) messages.value = JSON.parse(saved)
  } catch {}
})

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.value))
}

function submit() {
  const t = text.value.trim()
  if (!t) return
  submitting.value = true

  messages.value.unshift({
    id: Date.now(),
    author: author.value.trim() || '匿名',
    text: t,
    time: new Date().toLocaleString('zh-CN', {
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit',
    }),
  })

  save()
  text.value = ''
  author.value = ''
  submitting.value = false
}

function removeMsg(id) {
  messages.value = messages.value.filter((m) => m.id !== id)
  save()
}
</script>

<template>
  <div class="max-w-2xl mx-auto px-6 pt-32 pb-16">
    <h1 class="text-2xl md:text-3xl font-bold text-slate-700 mb-8">留言</h1>

    <!-- Message form -->
    <div class="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm mb-6">
      <div class="flex gap-3 mb-3">
        <input
          v-model="author"
          type="text"
          placeholder="你的名字（选填）"
          maxlength="20"
          class="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-600 placeholder-slate-300 focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-100 transition-all"
        />
      </div>
      <textarea
        v-model="text"
        class="w-full h-28 rounded-xl border border-slate-200 p-3 text-sm text-slate-600 resize-none placeholder-slate-300 focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-100 transition-all"
        placeholder="留下你想说的话..."
        maxlength="500"
      />
      <div class="flex items-center justify-between mt-3">
        <span class="text-xs text-slate-300">{{ text.length }}/500</span>
        <button
          :disabled="!text.trim() || submitting"
          class="px-5 py-2 rounded-lg bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          @click="submit"
        >
          提交留言
        </button>
      </div>
    </div>

    <!-- Messages -->
    <div v-if="messages.length === 0" class="text-center py-16">
      <p class="text-slate-300 text-sm">还没有留言，来说点什么吧</p>
    </div>
    <div v-else class="space-y-4">
      <div
        v-for="msg in messages"
        :key="msg.id"
        class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm group"
      >
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2">
            <span class="w-7 h-7 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center text-xs font-medium">
              {{ msg.author.charAt(0) }}
            </span>
            <span class="text-sm font-medium text-slate-600">{{ msg.author }}</span>
            <span class="text-xs text-slate-300">{{ msg.time }}</span>
          </div>
          <button
            class="text-slate-300 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100 text-xs"
            @click="removeMsg(msg.id)"
          >
            删除
          </button>
        </div>
        <p class="text-sm text-slate-500 leading-relaxed whitespace-pre-wrap">{{ msg.text }}</p>
      </div>
    </div>
  </div>
</template>
