<template>
  <div id="userLoginView">
    <a-form :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
    <a-form-item field="userAccount" label="账号">
      <a-input
        v-model="form.userAccount"
        placeholder="请输入账号"
      />
    </a-form-item>
    <a-form-item field="userPassword" tooltip="密码不少于8位" label="密码">
      <a-input-password v-model="form.userPassword" placeholder="请输入密码" />
    </a-form-item>
    <a-form-item>
      <a-button html-type="submit">提交</a-button>
    </a-form-item>
  </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { UserControllerService, UserLoginRequest } from '../../../generated'
import message from '@arco-design/web-vue/es/message'
const form = reactive({
  userAccount: '',
  userPassword: ''
} as UserLoginRequest)

const handleSubmit = async () => {
  const res = await UserControllerService.userLoginUsingPost(form)
  if (res.code === 0) {
    alert('登陆成功' + JSON.stringify(res.data))
  } else {
    message.error('登录失败' + res.message)
  }
}

</script>
