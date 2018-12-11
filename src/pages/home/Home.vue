<template>
  <div>
    <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    // 将驼峰形式自动转换为横线形式
    HomeHeader
  }
}
</script>

<style scoped>

</style>
