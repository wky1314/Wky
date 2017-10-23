<template>
  <div class="page">
    <HeaderBar v-title="title">
      <CityRender slot="left"></CityRender>
      <FilterBar slot='right'  :filterVal.sync='filterVal'></FilterBar>
      <SearchData slot='right'></SearchData>
    </HeaderBar>
    <div class="content">
           <div v-if="filterVal.length>=1" class="choose">
             已选: <b v-for="item in filterVal">{{item}}</b>
              <button @click="filterVal=[]">取消筛选</button>
          </div>
          <ListRender :cinemaList="cinemaList"></ListRender>
    </div>
  </div>
</template>
<script>
import HeaderBar from '@/views/Cinema/components/HeaderBar'
import TabMenu from '@/views/Cinema/components/TabMenu'
import CityRender from '@/components/CityRender'
import ListRender from './components/ListRender'
import ChooseData from './components/ChooseData'
import SearchData from './components/SearchData'
import FilterBar from './components/FilterBar'
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  name:'cinema',
  data () {
    return {
      title: '影院',
      str: '',
      page: 0,
      pageSize:10,
      flg: true,
      countFlg: true,
      filterVal: ['静安区',"4D厅"]
    }
  },
  components: {
    HeaderBar,
    TabMenu,
    SearchData,
    ListRender,
    CityRender,
    FilterBar
  },
  mounted () {
    this.scrollLoad()
  },
  computed: {
    ...mapGetters('cinema/',[
      'cinemaList'
    ])
  },
  methods: {
    tabList (index) {
      this.flag = index
      this.tagFlag = false
    },
     isScrollBottom () {
        let [
            scrollTop,
            winHeight,
            bodyHeight
        ] = [
            (document.body.scrollTop),
            (window.outerHeight),
            (document.body.clientHeight)
        ]

        if (bodyHeight-scrollTop <= winHeight+50) {
            return true
        } else {
            return false
        }
    },
    scrollLoad () {
      $( document ).on( 'scroll',() => {
        if( !this.countFlg ) return;
        if (this.isScrollBottom()) {
          if( this.flg ) {
            this.page += 1
            this.getCinemaList()
          }
        }
      })
    },
    // getCinemaList () {
    //   this.flg=false
    //   this.$axios.get('/api/cinemaAdvertise', {
    //     params: {
    //       page: this.page,
    //       pageSize: this.pageSize
    //     }
    //   }).then((response)=>{
    //     this.cinemaList = response.data.data
    //     this.page += 1
    //     this.flg = true
    //     if( response.data.data.length <= 0 ){
    //       this.countFlg = false
    //     }
    //   }).catch(function(error){
    //     console.log(error)
    //   })
     getCinemaList () {
       this.flg = false
       this.$store.dispatch('cinema/getCinemaList', {
          cityId: 12345,
          page: this.page,
          pageSize: this.pageSize
      }).then(
       ( data ) => {
         console.log(data)
          this.flg = true
        },
        () => {
          this.flg = true
        }
      )
    }
  },
  created () {
      this.getCinemaList()
  },
  destroyed () {
    console.log("销毁影院")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.content{
  background: #fff;
  overflow-y: auto;
  .choose{
    border-bottom: 1px solid #ccc;
    padding: .5rem 0 .05rem .2rem;
    span{
      color: #8a869e!important;
      font-size: .14rem;
      font-weight: 400;
    }
    button{
      float: right;
      border:none;
      background: transparent;
      margin-right: .08rem;
      color: #8a869e;
    }
  }
}
 img{
      display: inline-block;
      width: 0.25rem;
      margin-right: 0.1rem;
      margin-top: .05rem;
      height: .26rem;
  }
  .left{
    a{
      padding-left: 0;
    }
  }
.top{
  margin-top: .4rem;
  height: .4rem;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .2rem;
  box-sizing: border-box;
  span{
    color: #8a869e;
    font-size: .14rem;
    b{
      padding: 0 .1rem;
      font-weight: 400;
    }
  }
}
</style>
