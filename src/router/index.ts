import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import { ROUTES } from '@/utils/dictionaryRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ROUTES.home,
      component: HomeView
    },
    {
      path: '/favorites',
      name: ROUTES.favorites,
      component: () => import('../views/FavoritesView.vue')
    }
  ]
})

export default router
