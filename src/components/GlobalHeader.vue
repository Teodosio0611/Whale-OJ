<template>
    <a-row  id="globalHeader" align="center" :wrap="false">
    <a-col flex="auto">
      <a-menu mode="horizontal"
    :selected-keys="selectedKeys"
    @menu-item-click = "doMenuClick">
      <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
        <div class="title-bar">
          <img class="logo" src="../assets/whale.png">
          <div class="title"> Whale-OJ </div>
        </div>
      </a-menu-item>
      <a-menu-item v-for="item in visibleRoutes" :key="item.path">{{ item.name }}</a-menu-item>
    </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>
        {{ store.state.user?.loginUser?.userName ?? "未登录" }}
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from '../router/routes'
import { useRouter, useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import checkAccess from '@/access/checkAccess'
import ACCESS_ENUM from '@/access/accessEnum'

const router = useRouter()
const store = useStore()
const loginUser = store.state.user.loginUser

const visibleRoutes = computed(() => {
  return routes.filter((item, index) => {
    if (item.meta?.hideInMenu) {
      return false
    }

    if (!checkAccess(store.state.user.loginUser, item.meta?.access as string)) {
      return false
    }
    return true
  })
})

const selectedKeys = ref(['/'])

router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path]
})

setTimeout(() => {
  store.dispatch('user/getLoginUser', {
    userName: 'Teodosio',
    userRole: ACCESS_ENUM.ADMIN
  })
}, 3000)

const doMenuClick = (key: string) => {
  router.push({
    path: key
  })
}

</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.logo {
  height: 48px;
}

.title {
  color: #444;
  margin-left: 16px;
  font: 20px 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
