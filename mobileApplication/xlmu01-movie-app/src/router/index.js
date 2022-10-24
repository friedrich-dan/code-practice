import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/home',
    name:'home',
    component: () => import('../views/HomeView.vue')

  },
  {
    path:'/movie/:id',
    name:'MovieItem',
    component: () => import('../views/MovieItem.vue')

  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
