import { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import About from '@/views/About.vue'
import AdminView from '@/views/AdminView.vue'
import NoAuthView from '@/views/NoAuthView.vue'
import ACCESS_ENUM from '@/access/accessEnum'
import UserLayout from '@/layout/UserLayout.vue'
import UserLoginView from '@/views/user/UserLoginView.vue'
import UserRegisterView from '@/views/user/UserRegisterView.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/user',
    name: '用户',
    component: UserLayout,
    children: [
      {
        path: '/user/login',
        name: '用户登录',
        component: UserLoginView
      },
      {
        path: '/user/register',
        name: '用户注册',
        component: UserRegisterView
      }
    ],
    meta: {
      hideInMenu: true
    }
  },
  {
    path: '/home',
    name: '浏览题目',
    component: HomeView
  },
  {
    path: '/admin',
    name: '管理员可见',
    component: AdminView,
    meta: {
      access: ACCESS_ENUM.ADMIN
    }
  },
  {
    path: '/noAuth',
    name: '无权限',
    component: NoAuthView
  },
  {
    path: '/hide',
    name: '隐藏界面',
    component: HomeView,
    meta: {
      hideInMenu: true
    }
  },
  {
    path: '/about',
    name: '关于我的',
    component: About
  }
]
