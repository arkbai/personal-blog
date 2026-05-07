import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  {
    path: '/essays',
    name: 'Essays',
    component: () => import('../pages/EssaysPage.vue'),
  },
  {
    path: '/cs-notes',
    name: 'CSNotes',
    component: () => import('../pages/CSNotesPage.vue'),
  },
  {
    path: '/oc-settings',
    name: 'OCSettings',
    component: () => import('../pages/OCSettingsPage.vue'),
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import('../pages/MusicPage.vue'),
  },
  {
    path: '/upcoming',
    name: 'Upcoming',
    component: () => import('../pages/UpcomingPage.vue'),
  },
  {
    path: '/guestbook',
    name: 'Guestbook',
    component: () => import('../pages/GuestbookPage.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
