<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<style>
#app {
}
</style>

<script setup lang="ts">
import BasicLayout from './layout/BasicLayout'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { onMounted } from 'vue'

const doInit = () => {
  console.log('hello 欢迎来到我的世界')
}

onMounted(() => {
  doInit()
})

const router = useRouter()
const store = useStore()

router.beforeEach((to, from, next) => {
  if (to.meta?.access === 'canAdmin') {
    if (store.state.user?.loginUser?.role !== 'admin') {
      next('/noAuth')
      return
    }
  }
  next()
})
</script>
