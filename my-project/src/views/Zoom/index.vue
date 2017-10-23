<template>
  <div class="page" v-title="title"> 
    <div class="menu" v-show="flag">
      <ul>
        <li>
           <div class="letter">
              <a href="https://h5.m.taobao.com/app/mymovie/pages/mine/orders-list.html?from=def&spm=a1z2r.7661912.h5-movie-list.204&sqm=a1z2r.7661912.1.1" class="order-item--child ticket"></a>
              <b @click="movie">我的电影票</b>
           </div>
           <div class="icon"><i class= "fa fa-angle-right"></i></div>
        </li>
        <li>
           <div class="letter">
              <a href="https://h5.m.taobao.com/app/moviemine/pages/coupon-list/index.html?from=def&spm=a1z2r.7661912.h5-movie-list.204&sqm=a1z2r.7661912.1.1" class="order-item--child ticket"></a>
              <b @click="card">优惠券</b>
           </div>
           <div class="icon"><i class= "fa fa-angle-right"></i></div>
        </li>
        <li>
           <div class="letter">
              <a href="javascript:;" class="order-item--child lottery"></a>
              <b @click="help">帮助中心</b>
           </div>
           <div class="icon"> <i class= "fa fa-angle-right"></i></div>
        </li>
        <li>
           <div class="letter">
              <a href="//feedback.taobao.com/h5/m/feedbacks?productId=279&source=h5" class="order-item--child opinion"></a>
              <b @click="idea">意见反馈</b>
           </div>
           <div class="icon"> <i class= "fa fa-angle-right"></i></div>
        </li>
      </ul>
    </div>
    <MyTicket v-show="tagflag"></MyTicket>
    <DisCount v-show="dflag"></DisCount>
    <HeLpMy v-show="hflag"></HeLpMy>
    <IdeAMy v-show="iflag"></IdeAMy>
    <FooterBar></FooterBar>
  </div>
</template>
<script>
import FooterBar from '@/components/FooterBar'
import MyTicket from './components/MyTicket'
import DisCount from './components/DisCount'
import HeLpMy from './components/HeLpMy'
import IdeAMy from './components/IdeAMy'
export default {
  name: 'zoom',
  data () {
    return {
      flag: -1,
      tagflag: false,
      title: '个人中心',
      dflag: false,
      hflag: false,
      iflag: false
    }
  },
  components: {
    FooterBar,
    MyTicket,
    DisCount,
    HeLpMy,
    IdeAMy
  },
  methods: {
    movie () {
      this.flag = false
      this.tagflag = true
    },
    card () {
      this.flag = false
      this.dflag = true
    },
    help () {
      this.flag = false
      this.hflag = true
    },
    idea () {
      this.flag = false
      this.iflag = true
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.page{
    font-size: 20px;
    .menu{
      margin-top: .2rem;
      ul{
        overflow: hidden;
        li{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.15rem .2rem;
          box-sizing: border-box;
          background: #fff;
          position: relative;
          color: #50505a;
          font-size: .14rem;
          ::after{
              content: '';
              display: block;
              height: 0.01rem;
              width: 100%;
              background: #e5e5e5;
              position: absolute;
              bottom: 0rem;
              left: 0.12rem;  
          }
          &:nth-child(3){
            margin-top: .2rem;
          }
          .letter{
            display: block;
            display: flex;
            align-items: center;
            background-color: #fff;
            .icon{
              i.fa{
                color: #ccc;
                font-size: .14rem;
              }
            }
            b{
              font-weight: 400;
            }
            a{
              display: block;
              margin-left: 2.8125rem;
              margin-left: 14.1vmin;
              padding-left: .3125rem;
              padding-left: 1.6vmin;
              padding-top: .75rem;
              padding-top: 3.8vmin;
              padding-bottom: .75rem;
              padding-bottom: 3.8vmin;
              border-bottom: 1px solid #f5f5f5;
              position: relative;
              color: #50505a;
              &::before{
                content: '';
                display: block;
                position: absolute;
                top: 0;
                height: 100%;
                background-size: contain;
                background-position: center center;
                background-repeat: no-repeat;
              }
              &::before{
                left: -1.6875rem;
                left: -8.4vmin;
                width: 1.125rem;
                width: 5.6vmin;
                background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1000' height='1000' viewBox='0 0 1000 1000'%3E%3Cpath fill='%2389849B' d='M501 167.667c-61.367 0-111.11 49.745-111.11 111.11 0 61.364 49.743 111.113 111.11 111.113 61.366 0 111.11-49.75 111.11-111.112 0-61.366-49.744-111.11-111.11-111.11zm0 166.666c-30.684 0-55.556-24.872-55.556-55.556 0-30.683 24.872-55.555 55.556-55.555s55.556 24.872 55.556 55.555c0 30.684-24.873 55.556-55.556 55.556m222.222 55.556c-61.367 0-111.11 49.744-111.11 111.11 0 61.363 49.743 111.112 111.11 111.112 61.366 0 111.11-49.75 111.11-111.112 0-61.366-49.744-111.11-111.11-111.11zm0 166.666c-30.684 0-55.556-24.872-55.556-55.556 0-30.683 24.872-55.555 55.556-55.555 30.684 0 55.556 24.872 55.556 55.555s-24.873 55.556-55.556 55.556M278.778 389.89c-61.367 0-111.11 49.744-111.11 111.11 0 61.363 49.743 111.112 111.11 111.112 61.366 0 111.11-49.75 111.11-111.112 0-61.366-49.744-111.11-111.11-111.11zm0 166.666c-30.683 0-55.556-24.872-55.556-55.556 0-30.683 24.872-55.555 55.556-55.555 30.684 0 55.556 24.872 55.556 55.555s-24.873 55.556-55.556 55.556M501 612.11c-61.367 0-111.11 49.746-111.11 111.112 0 61.363 49.743 111.112 111.11 111.112 61.366 0 111.11-49.75 111.11-111.112 0-61.366-49.744-111.11-111.11-111.11zm0 166.668c-30.684 0-55.556-24.872-55.556-55.556 0-30.683 24.872-55.555 55.556-55.555s55.556 24.872 55.556 55.555-24.873 55.556-55.556 55.556m222.222 170.25C656.28 982.293 580.824 1001 501 1001 224.858 1001 1 777.142 1 501S224.858 1 501 1s500 223.858 500 500c0 102.786-31.015 198.328-84.197 277.778h4.364a111.316 111.316 0 0 0-3.5 27.778c0 41.127 22.344 77.035 55.556 96.246v60.937c-53.666-18.97-94.716-64.643-107.184-121.054-1.302 1.39-2.61 2.77-3.928 4.146v-86.68c52.447-72.952 83.333-162.445 83.333-259.15C945.445 255.54 746.46 56.555 501 56.555S56.556 255.54 56.556 501 255.54 945.444 501 945.444c80.953 0 156.85-21.643 222.222-59.46v63.043z'/%3E%3C/svg%3E");
              }
           }
         
        }
      }
    } 
  }
}
</style>
