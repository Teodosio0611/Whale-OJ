<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/whale.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
  }
})
export default class About extends Vue {}
</script>
