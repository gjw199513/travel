<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'

export default {
  name: 'Home',
  components: {
    // 将驼峰形式自动转换为横线形式
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style scoped>

</style>
