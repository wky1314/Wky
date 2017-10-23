<template>
     <div class="book">
            <ul>
                <li><i class="fa fa-book"></i><p><span>幕后花絮</span><br><span>为了使影片得到绝佳效果</span></p></li>
                <li><i class="fa fa-book"></i><p><span>幕后花絮</span><br><span>为了使影片得到绝佳效果</span></p></li>
                <li><i class="fa fa-book"></i><p><span>幕后花絮</span><br><span>为了使影片得到绝佳效果</span></p></li>
                <li><i class="fa fa-book"></i><p><span>幕后花絮</span><br><span>为了使影片得到绝佳效果</span></p></li>
            </ul>
        </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
      .book{
       border-top: 1px solid #e5e5e5;
       ul{
           display: flex;
           flex: 1;
           flex-wrap: wrap;
           justify-content: space-between;
           align-items: center;
           padding: 0 .18rem;
           box-sizing: border-box;
           li{
              display: flex;
              padding-top: .1rem;
              &:first-child{
                  padding-right: .15rem;
                  border-right: 1px solid #e5e5e5
              }
              &:nth-child(3){
                  padding-right: .15rem;
                  border-right: 1px solid #e5e5e5
              }
              i.fa{
                  color: #999;
                  padding: .05rem .05rem 0.4rem 0;
                  font-size: .18rem;
              }
              span{
                  &:first-child{
                      color: #222227;
                      font-size: .14rem;
                  }
                  &:last-child{
                      color: #8a869e;
                      font-size: .12rem;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap; 
                  }
              }
           }
       }
   }
</style>