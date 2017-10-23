<template>
 <div class="list-box">
    <router-link to="/page/'+index">
      <div class="box" v-for="(item,index) in MovieList" :key="index">
        <dl>
            <dt><img :src="item.image" alt=""></dt>
            <dd>
                <h2> {{$route.params.movie_id}}{{item.name}}</h2>
                <div class="star">
                   {{item.star}}
                </div>
                <p>{{item.director}}</p>
                <p>{{item.leadingRole}}</p>
               
            </dd>  
           
        </dl>
         <span>{{item.type == 1 ? '购票' : '预售'}}</span>
        <div class="newPerson">
            <h3>新人专享 <b>| 新人首张特惠,名额有限抢完即止</b></h3>
        </div>
      </div>
   </router-link>
    <router-link to="/page/002">
 
   </router-link>
</div>
</template>
<script>
export default {
  props: ['MovieList'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.box{
    padding: .15rem;
    position: relative;
    overflow:hidden;
    ::after{
        content: "";
        display: block;
        height: 1px;
        width: 200%;
        position: absolute;
        left: 0.15rem;
        bottom: 0;
        background: #e5e5e5; 
        -webkit-transform: scale(0.5);
        -webkit-transform-origin:  0 0;

    }
    dl{
        display: flex;
        dt{
            width: .65rem;
            height: .9rem;
            img{
                display: block;
                width: 100%;
                height: 100%;
            }
        }
        dd{
            padding-left: .1rem;
            h2{
                font-size: 0.18rem;
                color: #000;
                font-weight: 400;
            }
            p{
                 font-size: 0.12rem;
                 color: #8a869e;
                 padding-top: .07rem;
            }
            .star{
                width: .48rem;
                height: .18rem;
                img{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    span{
            position: absolute;
            right: .2rem;
            top: .5rem;
            background: transparent;
            border: 1px solid #ff4d64;
            color: #ff4d64;
            padding: 0.05rem 0.1rem;
            border-radius: 0.05rem; 
        }  
    .newPerson{
        padding-left: .75rem;
        padding-top: .16rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        ::after{
            content: "";
            display: block;
            width: 200%;
            -webkit-transform: scale(0.5);
            -webkit-transform-origin:  0 0;
            background-color: #e5e5e5;
            pointer-events: absolute;
            bottom: 0.4rem;
            left: .88rem;
        }
        h3{
            color: #fea54c;
            font-weight: 400;
            b{
                font-weight: 400;
                color: #8a869e;
            }
        }
    }
}
</style>
