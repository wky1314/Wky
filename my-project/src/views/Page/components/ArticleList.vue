<template>
  <div class="article">
      <dl v-for="item in list">
            <dd>
               <p>{{item.tit}}</p>
               <div class="bottom">
                    <span><i></i>{{item.num}}</span>
                    <span>{{item.read}}</span>
               </div>
            </dd>         
            <dt style='background-image: url("https://gw.alicdn.com/i4/TB1JImEd_wKL1JjSZFgXXb6aVXa_.jpg_360x360Q30.jpg");'></dt>
         </dl>
    </div>
</template>
<script>
    export default{
        name: 'Article',
          data () {
            return {
            list: [
                {
                tit: '诺兰连个手机都没有,他随身携带的居然是个保温杯!',
                read: '阅读314',
                num: '电影纵需求'
                },
                {
                tit: '诺兰连个手机都没有,他随身携带的居然是个保温杯!',
                read: '阅读314',
                num: '电影纵需求'
                },
                {
                tit: '诺兰连个手机都没有,他随身携带的居然是个保温杯!',
                read: '阅读314',
                num: '电影纵需求'
                }
              ]
            }
        },
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.article{
    margin-top: 0;
}
    dl{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .2rem .2rem;
        box-sizing: border-box;
        border-bottom: 1px solid #e5e5e5;
        dt{
            background-image: url("https://gw.alicdn.com/i4/TB1JImEd_wKL1JjSZFgXXb6aVXa_.jpg_360x360Q30.jpg");
            width: 1.35rem;
            height: 1.09rem;
            background-size: cover;
            background-position: 50%;
            background-repeat: no-repeat;
        }
        dd{
            padding-right: .05rem;
            p{
                width: 2.1rem;
                color: #222227;
                overflow: hidden;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                 height: .5rem;
                font-size: .14rem;
            }
            .bottom{
                padding-top: .3rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-right: .1rem;
                span{
                    color: #8a869e;
                    font-size: .12rem;
                    i{
                        align-self: center;
                        background-color: #ccc;
                        background-image: url("https://gw.alicdn.com/i4/TB1kcbCQFXXXXaYXXXXXXXXXXXX_.jpg_360x360Q30.jpg");
                        background-position: 50%;
                        background-size: cover;
                        border-radius: 50%;
                        width: .16rem;
                        height: .16rem;
                        display: inline-block;
                        margin-right: .05rem;
                    }
                }
            }
        }
    }
</style>