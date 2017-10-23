<template>
  <div class="page">
    <HeaderBar v-title="title">
      <TabMenu slot="right" @tabList='tabList'></TabMenu>
      <CityRender slot="left"></CityRender>
    </HeaderBar>
    <FooterBar></FooterBar>
    <div class="content" v-show="flag==0">
      <Banner></Banner>
      <ListData :MovieList='MovieList' v-scrollEvent="scrollLoad">
      </ListData>   
    </div>
    <div class="content" v-show="flag==1">
      <h2 style="padding-top:.5rem;padding-left:.2rem">即将上映</h2>
      <ListData :MovieList='MovieList'></ListData>
    </div>
  </div>
</template>
<script>
import HeaderBar from '@/components/HeaderBar'
import FooterBar from '@/components/FooterBar'
import ListData from '@/components/ListData'
import TabMenu from './components/TabMenu'
import Banner from './components/Banner'
import CityRender from '@/components/CityRender'
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  name: "movie",
  data () {
    return {
      flag: 0,
      title: '电影',
      cityId: 0,
      keepAlive: true,
      page: 0,
      pageSize: 10,
      flg: true
    }
  },
  computed: {
    ...mapGetters('movie/',[
      'MovieList'
    ])
  },
  components: {
    HeaderBar,
    FooterBar,
    ListData,
    TabMenu,
    Banner,
    CityRender
  },
  methods: {
    tabList (index) {
      this.flag = index
    },
    sel (data) {
      this.cityId = data[0]
    },
    // getmovieList () {
    //   this.flg = false
    //   this.$axios.get('/api/queryAdvertise', {
    //     params: {
    //       cityId: 1234,
    //       page: this.page,
    //       pageSize: this.pageSize
    //     }
    //   }).then((response) => {
    //     this.MovieList =this.MovieList.concat(response.data.data)
    //     console.log(this.MovieList)
    //     this.flg= true
    //   }).catch((error) => {
    //     console.log(error)
    //     this.flg = true
    //   })
    // },
   
     getmovieList () {
      this.flg = false
      this.$store.dispatch( 'movie/getmovieList', {
          cityId: 12345,
          page: this.page,
          pageSize: this.pageSize,
          type:1
      }).then(
        ( data ) => {
         console.log(data)
          this.flg = true
        },
        () => {
          this.flg = true
        }
      )
    },
   isScrollBottom () {
        let [
            scrollTop,
            winHeight,
            bodyHeight
        ] = [
            (document.documentElement.scrollTop),
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
        if (this.isScrollBottom()) {
          if( this.flg ) {
            this.page += 1
            this.getmovieList()
          }
        }
      })
    },
  },
  watch: {
    '$route': (to, from) => {
      // console.log(to, from)
    },
    'cityId': function () {
      this.getmovieList()
    },
    activated () {
      console.log('组件启用')
      this.keepAlive = true
    },
    deactivated () {
      this.keepAlive = false;
      console.log('组件停用')
    },
    destroyed () {
      console.log('销毁首页')
    }
  },
  created () {
    this.getmovieList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.content{
  background: #fff;
}
</style>

