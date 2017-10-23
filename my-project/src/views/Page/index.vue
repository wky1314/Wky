<template>
  <div class="page">
        <StoryList></StoryList>
        <SectionBox title="演职人员"></SectionBox>
        <Banner></Banner>
        <ActorList></ActorList>
        <WatchBox title="查看全部118位演职人员"></WatchBox>
        <SectionBox title="视频和剧照"></SectionBox>
        <Banner></Banner>
        <WatchBox title="查看全部299张剧照"></WatchBox>
        <div class="head">
           <SectionBox title="主创来了"></SectionBox>
           <div class="picture"></div>
        </div>
        <div class="movie">
            <SectionBox title="影片资料"></SectionBox>
            <MovieBook></MovieBook>
        </div>
        <router-link to="/ticket">
            <div class="ticket">
                <SectionBox title="票房"></SectionBox>
                <TicketNum></TicketNum>
                <WatchBox title="查看票房详情"></WatchBox>
            </div>
        </router-link>
      <div class="content">
         <SectionBox title="热门影评"></SectionBox>
         <ContentList></ContentList>
         <WatchBox title="查看全部51225条影评"></WatchBox>
      </div>
      <div class="tips">
          <SectionBox title="话题讨论"></SectionBox>
          <div class="src"></div>
          <TitleList></TitleList>
      </div>
      <div class="article">
          <SectionBox title="相关文章"></SectionBox>
           <ArticleList></ArticleList>
           <WatchBox title="查看全部75篇文章"></WatchBox>
      </div>
      <div class="back">
         <a href="javascript:;"></a>
      </div>
      <div class="show">
         <i></i> 
      </div>
      <div class="foot">
         <h3>新人专享抢票</h3>
      </div>
      
  </div>
</template>
<script>
import Banner from './components/Banner'
import StoryList from './components/StoryList'
import SectionBox from '@/components/SectionBox'
import WatchBox from '@/components/WatchBox'
import ActorList from './components/ActorList'
import MovieBook from './components/MovieBook'
import TicketNum from './components/TicketNum'
import ContentList from './components/ContentList'
import TitleList from './components/TitleList'
import ArticleList from './components/ArticleList'
export default {
  name: 'Page',
  components: {
    Banner,
    StoryList,
    SectionBox,
    ActorList,
    WatchBox,
    MovieBook,
    TicketNum,
    ContentList,
    TitleList,
    ArticleList
  },
  data () {
      return {
          
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


.watch{
    padding-top: .2rem;
    padding-bottom: .2rem;
    text-align: center;
    color: #108ee9;
    font-size: .14rem;
    background: #fff;
}
.video{
    background: #fff;
    margin-top: .2rem;
    h3{
        padding: .2rem 0 .1rem .2rem;
        color: #000;
    }

}
.head{
    margin-top: .2rem;
    padding-left: .2rem;
    background: #fff;
    padding-bottom: .2rem;
    h3{
         padding: .2rem 0 .1rem 0;
         color: #000;
    }
    .picture{
        padding: 0 .2rem;
        opacity: 1;
        background-repeat: no-repeat;
        width: 2rem;
        height: 1.8rem;
        transition: opacity 0.5s ease-in;
        -webkit-background-size: cover;
        background-position: 50%;
        background-image:url("https://img.alicdn.com/tfs/TB1Qr6ta.gQMeJjy0FjXXaExFXa-670-452.jpg");
    }
}
.movie{
   margin-top: .2rem;
   background: #fff; 
   h3{
     padding: .2rem 0 .1rem 0.2rem;
     color: #000;
   }
 
}
.ticket{
    margin-top: .2rem;
    background: #fff;
    h3{
       padding: .2rem 0 .1rem 0.2rem;
       color: #000; 
    }
}
.content{
    margin-top: .2rem;
    background: #fff;
    h3{
       padding: .2rem 0 .1rem 0.2rem;
       color: #000;  
    }
}
.tips{
    overflow: hidden;
    margin-top: .2rem;
    background: #fff;
    position: relative;
    padding-bottom: .2rem;
    h3{
       padding: .2rem 0 .1rem 0.2rem;
       color: #000;  
    }
    .src{
        background-image: url(https://gw.alicdn.com/i3/TB1JugOXU6FK1Jjy1XbXXXovXXa_.jpg_360x360Q30);
        display: flex;
        width: 3.45rem;
        height: 1.8rem;
        margin: 0 auto;
        -webkit-background-size: cover;
        background-position: 50%;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
    }
    
}
.article{
    margin-top: .2rem;
    background: #fff;
    h3{
      padding: .2rem 0 .1rem 0.2rem;
      color: #000;    
    } 
}
.foot{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: .57rem;
    line-height: .57rem;
    background: #ff4d64;
    z-index: 999;
    h3{
        color: #fff;
        text-align: center;
        font-size: .18rem;
        font-weight: 400;
    }
}
.back{
    z-index: 100;
    width: 100%;
    text-align: center;
    a{
        background: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cpath opacity='.7' fill-rule='evenodd' clip-rule='evenodd' fill='%23FFF' stroke='%23CDCDCD' stroke-miterlimit='10' d='M27.97.564c14.944 0 27.058 12.12 27.058 27.068 0 14.95-12.114 27.068-27.058 27.068C13.026 54.7.912 42.58.912 27.632.912 12.682 13.026.564 27.97.564z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' fill='%23606060' d='M29.733 13.424l.027-.026-.904-.926-.05.048-.048-.048-.904.926.027.026-6.685 6.526.904.926 6.008-5.866-.02 15.08 1.295.01.02-15.19 6.11 5.967.905-.926-6.685-6.526zm6.472-3.407h-14.99v1.25h14.99v-1.25z'/%3E%3Cpath fill='%23606060' d='M24.428 40.212v-1.348h-.944v1.372c0 1.487-.282 2.598-.846 3.333-.637.783-1.728 1.396-3.272 1.837.237.32.433.613.588.882 1.667-.524 2.84-1.25 3.517-2.182.1-.13.19-.278.27-.44 1.202.808 2.35 1.666 3.445 2.573l.686-.82c-1.135-.85-2.393-1.716-3.774-2.598.222-.72.332-1.59.332-2.61zm-1.47-2.83h-2.292V43.3h.944v-5.037h4.73v4.988h.944v-5.87h-3.382l.392-1.653h3.542v-.882h-7.304v.882h2.77l-.344 1.654zm-2.66-2.244h-4.56v.895h1.974v8.137c0 .376-.196.564-.588.564-.4 0-.788-.045-1.164-.135.09.35.155.714.196 1.09.253.016.588.025 1.005.025 1.006 0 1.508-.486 1.508-1.458v-8.223h1.63v-.896zm14.853.625h-3.16l.6-.282c-.155-.358-.417-.845-.784-1.457l-.846.392c.323.53.564.98.723 1.348H28.62v.82h6.53v-.82zm-4.68 3.223l.833-.478c-.335-.58-.707-1.16-1.115-1.74l-.747.453c.433.663.777 1.25 1.03 1.766zm3.897-1.826l-.907-.466c-.306.695-.703 1.463-1.19 2.304h-3.92v.82h7.022V39h-2.138c.4-.604.778-1.217 1.133-1.838zm-5.135 8.934h.907v-.92h3.48v.908h.906v-4.988h-5.294v5zm.907-4.18h3.48v2.415h-3.48v-2.415zm8.565-2.903c.67-1.314 1.164-2.385 1.483-3.21v-1.005h-4.412v11.36h.93V35.702h2.5c-.546 1.29-1.086 2.463-1.617 3.517 1.216.914 1.84 1.81 1.874 2.683.065.99-.26 1.483-.98 1.483-.425 0-.935-.05-1.532-.147.065.424.118.783.16 1.077.693.082 1.25.098 1.666.05 1.103-.115 1.654-.875 1.654-2.28 0-1.152-.575-2.178-1.727-3.076z'/%3E%3C/svg%3E ") 50% no-repeat;
        background-size: 100%;
        text-indent: -999rem;
        z-index: 998;
        width: .4rem;
        height: .4rem;
        display: block;
        position: fixed;
        right: 0;
        bottom: 10%;
    }
}
.show{
    width: 100%;
    height: .2rem;
    i{
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='106' height='30' viewBox='0 0 106 30' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EPage 1%3C/title%3E%3Cdefs%3E%3Cpath id='a' d='M0 30h105.712V0H0z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M57.74 19.96v1.988h10.075v2.99c0 .387-1.058.383-2.96.383 0 0 .673 2.37.755 2.483 5.044 0 5.857-.202 5.857-1.815v-4.04h9.08V19.96H57.74z' fill='%23D0D0D0'/%3E%3Cpath d='M57.74 26.764l3.118 1.038c1.082-1.045 2.642-2.59 3.62-3.937l-3.816-1.262c-.797 1.535-2.037 3.237-2.923 4.16M74.21 23.635c1.065 1.053 1.86 2.794 2.433 4.167l3.904-1.167c-.966-1.39-2.275-2.797-3.356-3.98l-2.98.98z' fill='%23D0D0D0'/%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cpath fill='%23D0D0D0' mask='url(%23b)'/%3E%3C/g%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: 50%;
        -webkit-background-size: cover;
        width: 3.3125rem;
        width: 14.1vmin;
        height: .9375rem;
        height: 4vmin;
        display: inline-block;
        margin: 0 auto;
        color: #fff;
    }
}
</style>
