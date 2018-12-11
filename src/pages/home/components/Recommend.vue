<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img"
             :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/p/tts6/1803/53/6f3276907a789902.jpg_r_390x260x90_6f5b802c.jpg',
        title: '呼伦贝尔',
        desc: '越野穿越+草原'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/p/tts6/1803/53/6f3276907a789902.jpg_r_390x260x90_6f5b802c.jpg',
        title: '呼伦贝尔',
        desc: '越野穿越+草原'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/p/tts6/1803/53/6f3276907a789902.jpg_r_390x260x90_6f5b802c.jpg',
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

  .item
    overflow hidden
    display flex
    height 1.9rem

    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem

    .item-info
      flex 1
      padding .1rem
      min-width 0

      .item-title
        line-height .54rem
        font-size .32rem
        ellipse()

      .item-desc
        line-height .4rem
        color #ccc
        ellipse()

      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .1rem
        border-radius .06rem
        color #fff
</style>
