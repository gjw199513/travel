<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://img1.qunarzz.com/vc/2a/c6/74/6828c07028fe71f2adcc36b3c5.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://img1.qunarzz.com/vc/a4/36/26/07c5904b545d66b3abe72e9dfa.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  /*对标签进行穿透，从而摆脱scoped只对当前页的约束*/
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff

  .wrapper
    overflow hidden
    width 100%
    height 0
    //图片宽高比31.25
    padding-bottom 31.25%
    background #eee

    .swiper-img
      width 100%
</style>
