import { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import About from '@/views/About.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: '浏览题目',
    component: HomeView
  },
  {
    path: '/about',
    name: '关于我的',
    component: About
  }
]
