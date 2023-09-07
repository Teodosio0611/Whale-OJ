import router from '@/router'
import store from '@/store'
import ACCESS_ENUM from './accessEnum'
import checkAccess from './checkAccess'

router.beforeEach(async (to, from, next) => {
  if (to.meta?.access === 'canAdmin') {
    if (store.state.user?.loginUser?.role !== 'admin') {
      next('/noAuth')
      return
    }
  }

  const loginUser = store.state.user.loginUser
  const needAccess = to.meta?.access as string ?? ACCESS_ENUM.NOT_LOGIN
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    if (!loginUser || !loginUser.userRole) {
      next(`/user/login?redirect=${to.fullPath}`)
      return
    }

    if (!checkAccess(loginUser, needAccess)) {
      next('/noAuth')
      return
    }
  }
  next()
})
