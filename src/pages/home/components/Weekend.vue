<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img"
               :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1603/e9/e9727ce75946b9fe90.water.jpg_256x160_71c5e7da.jpg',
        title: '呼伦贝尔',
        desc: '越野穿越+草原'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1603/e9/e9727ce75946b9fe90.water.jpg_256x160_71c5e7da.jpg',
        title: '呼伦贝尔',
        desc: '越野穿越+草原'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1603/e9/e9727ce75946b9fe90.water.jpg_256x160_71c5e7da.jpg',
        title: '呼伦贝尔',
        desc: '越野穿越+草原'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem

  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%

  .item-img
    width 100%

  .item-info
    padding .1rem

    .item-title
      line-height .54rem
      font-size .32rem
      ellipse()

    .item-desc
      line-height .4rem
      color #ccc
      ellipse()
</style>
