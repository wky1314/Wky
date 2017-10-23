<template>
 <div class="list-box">
<router-link to='CinemaPage'>
    <ul v-for="(item,index) in cinemaList" :key="index">
        <li>
            <h2>{{item.name}}<span><b>15.8</b>元起</span></h2>
        </li>
        <li>
            <h3>{{item.title}}</h3>
        </li>
        <li>
            <em>{{item.ticket1}}</em>
            <em>{{item.ticket2}}</em>
        </li>
        <li>
            <a href="javascript:;">新</a><i>{{item.person}}</i>
        </li>
    </ul>
</router-link>
</div>
</template>
<script>
export default {
  name: 'ListRender',
  props: ['cinemaList'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.list-box{
    padding-top: .4rem;
    ul{
        position: relative;
        border-bottom: 1px solid #e5e5e5;
        padding: .08rem 0.2rem;
        li{
            height: .25rem;
            h2{
                color: #222227;
                font-size: .16rem;
                span{
                    font-size: .12rem;
                    padding-left: .05rem;
                    color: #8a869e;
                    b{
                      color: #ff4d64; 
                    }
                }
                
            }
            h3{
                color: #8a869e;
                font-size: .14rem;
                font-weight: 400;
            }
            em{
                font-style: normal;
                width: .45rem;
                height: .15rem;
                line-height: .15rem;
                text-align: center;
                color: #7ab5e0;
                display: inline-block;
                border: 1px solid #7ab5e0;
                border-radius: .08rem;
            }
            a{
                width: .17rem;
                height: .17rem;
                line-height: .17rem;
                text-align: center;
                color: #fff;
                display: inline-block;
                border-radius: .03rem;
                background: #fe7a4c;
            }
            i{
                color: #8a869e;
                font-style: normal;
                padding-left: .06rem;
            }
        }
    }
}
</style>
