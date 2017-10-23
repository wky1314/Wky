<template>
  <div class="page">
    <div class="box">
    <div class="info">
      <div class="wrap">
        <h2 class="name">星美国际影商城上海松江店</h2>
        <div class="address">松江区环城路555号LOMO玩库3楼</div>
        <ul class="tags">
          <li>退票</li>
          <li>改签</li>
          <li>3D眼镜</li>
          <li>儿童优惠</li>
          <li>可停车</li>
        </ul>
      </div>
      <div class="collect">
      </div>
    </div>
    <div class="banners">
      <div class="banners-wrap">
        <p class="card-title">联名卡送影票</p>
        <p class="card-content">申请浦发信用卡专享</p>
        <span class="arrow">
        </span>
      </div>  
    </div>
    <div class="swiper">
            <Banner></Banner>
        </div>
    <div class="movies">
    </div>
    <div class="schedules">
      <div class="tab-hd">
        <span class="bg">今天09-07<i>惠</i></span>
        <span>明天09-08<i>惠</i></span>
      </div>
      <div class="activity">
        <i>惠</i>
        <div class="title">《蜘蛛侠：英雄归来》18.8元起抢票活动，抢完即止！</div>
        <div class="arrow"></div>
      </div>
      <div class="list">
        <p>开场前5分钟停止售票</p>
        <div class="bot">
          <span class="zero-schedule">次日放映</span>
          <div class="item-wrap">
            <div class="item-contain">
              <span class="item-clock">00:05</span>
              <span class="item-type">英语 3D</span>
              <span class="item-act">特惠</span>
              <span class="item-price"><span>22.8 </span>元</span>
            </div>
            <div class="item-con">
              <span>02:18散场</span>
              <span>4号厅</span>
              <span>80元</span>
            </div>
          </div>
          <div class="item-btn">购票</div>
        </div>
      </div>
    </div>
    <div class="login">
      <span class="info">登录后可查看实际能享受的价格</span>
      <span class="btn">登录</span>
    </div>
  </div>
  </div>
</template>
<script>
import Banner from './Banner'

export default {
  name: 'hello',
  data () {
    return {
      title: '首页'
    }
  },
  components: {
    Banner
  },
  methods: {
  },
  watch: {
    '$route': (to, from) => {
    }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.box,html,body{
  height: 100%;
  background: #fff;
}
.page{
  font-size: 14px;
  .info{
    display: flex;
    .wrap{
      padding: .1rem;
      .name{
        font-size: .16rem;
      }
      .address{
        font-size: .13rem;
        color: #8a869e;
        line-height: .3rem;
      }
      .tags{
        display: flex;
        li{
          font-size: .1rem;
          color: #80c0e4;
          border: 1px solid #80c0e4;
          border-radius: 50px;
          margin-right: .05rem;
          padding: 0 .05rem;
        }
      }
    }
    .collect {
      width: 4.6875rem;
      width: 20vmin;
      background-size: 33%;
      background-position: 50%;
      background-repeat: no-repeat;
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' w… 3.278 2.454 2.022 3.91-3.544 4.01-9.814 10.63-9.814 10.63z'/%3E%3C/svg%3E");
    }
  }
  .banners{
    padding: .1rem;
    padding-top: 0;
    .banners-wrap{
      padding: .03rem .1rem;
      box-sizing: border-box;
      width: 100%;
      height: .4rem;
      background: rgba(128,193,229,.08);
      border: 1px solid rgba(128,193,229,.7);
      border-radius: 3px;
      color: #65b1db;
      .content{
        font-size: .08rem;
      }
      .arrow{
        content: " ";
        position: absolute;
        width: .375rem;
        width: 1.6vmin;
        height: .6875rem;
        height: 2.9vmin;
        top: 0;
        bottom: 0;
        right: 14px;
        margin: auto;
        -webkit-background-size: contain;
        background-position: 50%;
        background-repeat: no-repeat;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' w…0L11.858 11.35c.19-.193.19-.506 0-.7L1.52.146z' opacity='.4'/%3E%3C/svg%3E");
      }
    }
    
  }
  .schedules{
    .tab-hd{
      height: .4rem;
      border-top: 1px solid #d5d5d5;
      border-bottom: 1px solid #d5d5d5;
      span{
        display: inline-block;
        height: 100%;
        margin-left: .1rem;
        line-height: .4rem;
        font-size: .12rem;
        color: #8a869e;
        &.bg{
          border-bottom: 1px solid #ff4d64;
          color: #ff4d64;
        }
        i{
          background: #ff8625;
          color: #fff;
          font-size: .1rem;
          font-style: normal;
          padding: .02rem;
          margin-left: .05rem;
        }
      }
    }
    .activity{
      height: .37rem;
      display: flex;
      align-items: center;
      padding-left: .1rem;
      border-bottom: 1px solid #d5d5d5;
      i{
        background: #ff8625;
        color: #fff;
        height: .12rem;
        line-height: .12rem;
        font-size: .1rem;
        font-style: normal;
        padding: .02rem;
        margin-left: .05rem;
      }
      .title{
        font-size: .12rem;
        color: #8a869e;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-right: .3rem;
        padding-left: .05rem;
      }
    }
    .list{
      color: #8a869e;
      border: none;
      font-size: .12rem;
      padding-top: .1rem;
      padding-left: .1rem;
      .bot{
        position: relative;
        .zero-schedule{
          background: #b4b0c8;
          border-radius: 1px;
          color: #fff;
          font-size: .05rem;
        }
        .item-clock{
          color: #333;
          font-weight: 700;
          font-size: .18rem;
        }
        .item-type{
          color: #333;
          font-size: .13rem;
          padding-left: .15rem;
          padding-right: .3rem; 
        }
        .item-act{
          font-size: .13rem;
          color: #fd2c32;
        }
        .item-price{
          font-weight: 400;
          font-size: .13rem;
          color: #fd2c32;
          span{
            font-weight: 700;
            font-size: .18rem;
          }
        }
        .item-con{
          padding-top: .05rem;
          span{
            &:nth-child(2){
              padding: 0 1rem 0 .07rem
            }
            &:nth-child(3){
              text-decoration: line-through;
            }
          }
        }
        .item-btn{
          color: #fd2c32;
          border: 1px solid #fd2c32;
          border-radius: 5px;
          width: .35rem;
          height: .25rem;
          text-align: center;
          line-height: .25rem;
          position: absolute;
          top: .25rem;
          right: .1rem;
        }
      }
    }
  }
  .login{
    position: fixed;
    bottom: 0;
    left: 0;
    height: .4rem;
    line-height: .4rem;
    padding: 0 .1rem;
    border-top: 1px solid #f2f2f2;
    font-size: .13rem;
    width: 100%;
    .info{
      color: #50505a;
    }
    .btn{
      float: right;
      height: .25rem;
      border-radius: 5px;
      background: #ff4d64;
      color: #fff;
      width: .38rem;
      text-align: center;
      font-size: .12rem;
      line-height: .25rem;
      margin-right: .2rem;
      margin-top: .08rem;
    }
  }
}
</style>
