<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NavBar from './components/NavBar.vue'
import PageFooter from './components/PageFooter.vue'

const route = useRoute()
const router = useRouter()
const transitionName = ref('page-fade')

// Track navigation direction for slide animation
router.beforeEach((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  if (from.path === '/') {
    transitionName.value = 'page-slide-left'
  } else if (to.path === '/') {
    transitionName.value = 'page-slide-right'
  } else if (toDepth >= fromDepth) {
    transitionName.value = 'page-slide-left'
  } else {
    transitionName.value = 'page-slide-right'
  }
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#f0f6fc]">
    <NavBar />
    <main class="flex-1 relative overflow-hidden">
      <router-view v-slot="{ Component }">
        <transition :name="transitionName" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <PageFooter v-if="route.path !== '/'" />
  </div>
</template>

<style>
/* Fade fallback */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.2s ease;
}
.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}

/* Slide left (forward) */
.page-slide-left-enter-active,
.page-slide-left-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.page-slide-left-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.page-slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Slide right (back) */
.page-slide-right-enter-active,
.page-slide-right-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.page-slide-right-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.page-slide-right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
