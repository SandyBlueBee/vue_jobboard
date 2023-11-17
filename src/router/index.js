import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'
import JobFeed from '../components/JobFeed'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feed',
    name: 'Feed',
    component: JobFeed
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
