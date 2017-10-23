<template>
    <swiper :options="swiperOption" ref="mySwiper" class="banner">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in banners" :key="index">
            <img :src="item" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      banners: [
        '//gw.alicdn.com/tfs/TB118acQFXXXXcKXpXXXXXXXXXX-1280-520.jpg_720x720Q30.jpg',
        '//gw.alicdn.com/tfs/TB1u9oZa3MPMeJjy1XcXXXpppXa-1280-520.jpg_720x720Q30.jpg',
        '//gw.alicdn.com/tfs/TB13f8za3oQMeJjy0FpXXcTxpXa-1280-520.jpg_720x720Q30.jpg'
      ],
      swiperOption: {
        autoplay: 3000,
        initialSlide: 1,
        loop: true,
        pagination: '.swiper-pagination',
        onSlideChangeEnd: swiper => {
          // console.log('onSlideChangeEnd', swiper.realIndex)
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.banner{
  padding-top: .45rem;
    .swiper-slide{
      height: 1.4rem;
        img{
            display: block;
            width: 100%;
        }
    }
}
</style>
