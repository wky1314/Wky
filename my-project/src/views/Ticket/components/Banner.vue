<template>
  
      <!-- swiper -->
      <swiper :options="swiperOption" class="banner">
        <swiper-slide><img src="//gw.alicdn.com/i2/TB1ogsiXwvGK1Jjy0FaXXb7lpXa_.jpg_160x160Q30s150.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="//gw.alicdn.com/i3/TB1stNnSVXXXXa5aXXXXXXXXXXX_.jpg_160x160Q30s150.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="//gw.alicdn.com/i1/TB1MmNrNXXXXXbRXFXXXXXXXXXX_.jpg_160x160Q30s150.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="//gw.alicdn.com/i4/TB1kW43JpXXXXbfXpXXXXXXXXXX_.jpg_160x160Q30s150.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="//gw.alicdn.com/i2/TB1ogsiXwvGK1Jjy0FaXXb7lpXa_.jpg_160x160Q30s150.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="//gw.alicdn.com/i3/TB1stNnSVXXXXa5aXXXXXXXXXXX_.jpg_160x160Q30s150.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="//gw.alicdn.com/i1/TB1MmNrNXXXXXbRXFXXXXXXXXXX_.jpg_160x160Q30s150.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="//gw.alicdn.com/i4/TB1kW43JpXXXXbfXpXXXXXXXXXX_.jpg_160x160Q30s150.jpg" alt=""></swiper-slide>
      </swiper>

</template>
<script>
  export default {
    data () {
      return {
        swiperOption: {
          slidesPerView: 4,
          paginationClickable: true,
          spaceBetween: 10,
          autoplay: 3000,
          loop: true
        }
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.banner{
  height: 1.2rem;
  padding: 0 .2rem;
  box-sizing: border-box;
    .swiper-slide{
      height: 1.2rem;
        img{
            display: block;
            width: 100%;
            height: 100%;
        }
    }
}
</style>
