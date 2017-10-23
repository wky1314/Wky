<template>
    <div class="box">
        <a href="javascript:;" class="select" @click="CityRender">
           
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc1MCcgaGVpZ2h0PSc1MCc+ICAgPGcgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz4gICAgIDxwYXRoIGZpbGw9JyNGNjMwM0UnIGQ9J00zOC43OTMgNTBIMTEuMjA3QzUuMDE3IDUwIDAgNDQuOTgyIDAgMzguNzkzVjExLjIwN0MwIDUuMDE3IDUuMDE3IDAgMTEuMjA3IDBoMjcuNTg2QzQ0Ljk4MyAwIDUwIDUuMDE3IDUwIDExLjIwN3YyNy41ODZDNTAgNDQuOTgzIDQ0Ljk4MiA1MCAzOC43OTMgNTAnLz4gICAgIDxwYXRoIGZpbGw9JyNGRkYnIGQ9J00zMC4wMDQgMTAuNjNjLTMuMTU4LS44MzctNC4xMy01LjAwNi0xMC4wMzItNS4wMDYgMi4xMzcgMi40NTQgMS4xNSA0LjYxLS40NTMgNS4xMDMtNy44MyAyLjA5LTEzLjY5IDguNjgtMTMuMzIgMTcuNzkuMzggOS4zOCA4LjM5IDE1LjQ5NSAxOC43NSAxNS40OTUgMTAuMzUgMCAxOC4zNy02LjExNiAxOC43NS0xNS40OTQuMzctOS4yNTgtNS42OS0xNS45MTMtMTMuNy0xNy44ODgnLz4gICAgIDxwYXRoIGZpbGw9JyMzNzNENDInIGQ9J00yNSAyNi4zYy0uNzE2IDAtMS4yNjcgMy4wOTItMi40NzMgNC43OTQtLjg5NiAxLjI2NS0yLjE2MiAxLjgzOC00LjM3IDEuOTc2LS43NjMuMDQ4LTEuNjQuMDQ1LTIuNjg3LS4wMS0xLjQzMi0uMDc1LTIuNjctLjg0Ny0zLjU4Mi0yLjIzNC0uNjUtLjk5Mi0xLjEzNC0yLjI4My0xLjQzNi0zLjgzOHYtLjAwN2MtLjEwNy0uNTQtLjIwNS0xLjA1LS4yNjUtMS41NC0uMTYzLTEuMDgtLjYyMy0xLjQ2LS45MjYtMS41OWwtLjAzLS4wMWMtLjIzLS4wNi0uMjgtLjI5NC0uMjgtLjM0LS4wMy0uNDQtLjEzLTEuNDEtLjE3LTIuMDE1LS4wMy0uNDUzLjM1LS41MTIuNDItLjUxNyAyLjYwOC0uMTYzIDguNjU1LS40OSAxMS40LjIzLjgyNS4yMTQgMy4xNy42NiA0LjQxLjY2IDEuMjQgMCAzLjU5LS40NDYgNC40MS0uNjYgMi43NS0uNzIgOC43OTgtLjM5MyAxMS40LS4yMy4wNzUuMDA1LjQ0OC4wNjQuNDIuNTE3LS4wNC42MDUtLjE0NiAxLjU4LS4xNzQgMi4wMTQtLjAwMi4wNDQtLjA0Ny4yOC0uMjguMzQtLjAxMi4wMDMtLjAyMi4wMS0uMDMzLjAxNC0uMzA1LjEzNC0uNzY1LjUxNi0uOTMgMS41OTQtLjA2LjQ4Ny0uMTYuOTk2LS4yNjMgMS41NDJWMjdjLS4zMDQgMS41NTMtLjc4NyAyLjg0NC0xLjQzOCAzLjgzNi0uOTEgMS4zODctMi4xNSAyLjE2LTMuNTg0IDIuMjM0LTEuMDQ1LjA1NS0xLjkyMy4wNi0yLjY4Ni4wMS0yLjIwNy0uMTM4LTMuNDczLS43MS00LjM3LTEuOTc2LTEuMjEtMS43MDYtMS43Ni00LjgtMi40OC00LjgnLz4gICAgIDxwYXRoIGZpbGw9JyNGNjMwM0UnIGQ9J00xOS45MjUgMjMuMzA4Yy0uMDYtLjAxLS4xMjUtLjAyNC0uMTk1LS4wMzgtLjk4LS4xODMtMi45NzUtLjQzNi00LjUyLS4zMzgtLjY4LjA0My0xLjI3LjE1Mi0xLjY1LjM2Ny0uOTQuNTMtMS4wMTYgMS4zNi0uODU4IDIuNDkuMDQ2LjMyLjExMi42Ny4xODIgMS4wNS4zNzYgMiAxLjI2NCA0LjEzIDMuMTEyIDQuMjQuODMuMDUgMS41MS4wNSAyLjA3NS4wMSAxLjc0LS4xMSAyLjM2LS41OCAyLjgtMS4yMjcgMi40Ny0zLjY2IDEuNDktNi4wNjYtLjkzMi02LjU3Jy8+ICAgICA8cGF0aCBmaWxsPScjMUY5QkRFJyBkPSdNMzAuMDc1IDIzLjMwOGMuMDYtLjAxLjEyNS0uMDI0LjE5NS0uMDM4Ljk4LS4xODMgMi45NzUtLjQzNiA0LjUyLS4zMzguNjguMDQzIDEuMjcuMTUyIDEuNjUuMzY3Ljk0LjUzIDEuMDE2IDEuMzYuODU4IDIuNDktLjA0Ni4zMi0uMTEyLjY3LS4xODIgMS4wNS0uMzc2IDItMS4yNjQgNC4xMy0zLjExMiA0LjI0LS44My4wNS0xLjUxLjA1LTIuMDc1LjAxLTEuNzQtLjExLTIuMzYtLjU4LTIuOC0xLjIyNy0yLjQ3LTMuNjYtMS40OS02LjA2Ni45MzItNi41NycvPiAgIDwvZz4gPC9zdmc+" class="logo" />
            <span>{{city}}</span>
             <i class="fa fa-angle-down"></i>
        </a>
        <transition name="fade">
        <div class="city" v-show="flag">
            <HeaderBar >
                <h3 slot="left">选择城市</h3>
                <a href="javascript:;"  @click="CityRender" slot="right">X</a>
            </HeaderBar>
            <div class="render">
                <div class="main">
                    <div class="list" v-for="(item, key) in allCityData" :key="key">
                        <h3 class="head">
                            {{key}}
                        </h3>
                        <ul class="main_list">
                            <li class="item" v-for="(item2,index) in item" :key="index" @click="selectCity(item2)">{{item2.split('|')[0]}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="fixed">
                <ul>
                    <li>当前</li>
                    <li>热门</li>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                    <li>E</li>
                    <li>F</li>
                    <li>G</li>
                    <li>H</li>
                    <li>I</li>
                    <li>J</li>
                    <li>K</li>
                    <li>L</li>
                    <li>M</li>
                    <li>N</li>
                    <li>O</li>
                    <li>P</li>
                    <li>Q</li>
                    <li>R</li>
                    <li>S</li>
                    <li>T</li>
                    <li>U</li>
                    <li>V</li>
                    <li>W</li>
                    <li>X</li>
                    <li>Y</li>
                    <li>Z</li>
                </ul>
            </div>
        </div>
    </transition>
  </div>
</template>

<script>
import HeaderBar from './HeaderBar'
let CityData = ['北京|beijing|bj', '上海|shanghai|sh', '重庆|chongqing|cq', '深圳|shenzhen|sz', '广州|guangzhou|gz', '杭州|hangzhou|hz',
  '南京|nanjing|nj', '苏州|shuzhou|sz', '天津|tianjin|tj', '成都|chengdu|cd', '南昌|nanchang|nc', '三亚|sanya|sy', '青岛|qingdao|qd',
  '厦门|xiamen|xm', '西安|xian|xa', '长沙|changsha|cs', '合肥|hefei|hf', '西藏|xizang|xz', '内蒙古|neimenggu|nmg', '安庆|anqing|aq', '阿泰勒|ataile|atl', '安康|ankang|ak',
  '阿克苏|akesu|aks', '包头|baotou|bt', '北海|beihai|bh', '百色|baise|bs', '保山|baoshan|bs', '长治|changzhi|cz', '长春|changchun|cc', '常州|changzhou|cz', '昌都|changdu|cd',
  '朝阳|chaoyang|cy', '常德|changde|cd', '长白山|changbaishan|cbs', '赤峰|chifeng|cf', '大同|datong|dt', '大连|dalian|dl', '达县|daxian|dx', '东营|dongying|dy', '大庆|daqing|dq', '丹东|dandong|dd',
  '大理|dali|dl', '敦煌|dunhuang|dh', '鄂尔多斯|eerduosi|eeds', '恩施|enshi|es', '福州|fuzhou|fz', '阜阳|fuyang|fy', '贵阳|guiyang|gy',
  '桂林|guilin|gl', '广元|guangyuan|gy', '格尔木|geermu|gem', '呼和浩特|huhehaote|hhht', '哈密|hami|hm',
  '黑河|heihe|hh', '海拉尔|hailaer|hle', '哈尔滨|haerbin|heb', '海口|haikou|hk', '黄山|huangshan|hs', '邯郸|handan|hd',
  '汉中|hanzhong|hz', '和田|hetian|ht', '晋江|jinjiang|jj', '锦州|jinzhou|jz', '景德镇|jingdezhen|jdz',
  '嘉峪关|jiayuguan|jyg', '井冈山|jinggangshan|jgs', '济宁|jining|jn', '九江|jiujiang|jj', '佳木斯|jiamusi|jms', '济南|jinan|jn',
  '喀什|kashi|ks', '昆明|kunming|km', '康定|kangding|kd', '克拉玛依|kelamayi|klmy', '库尔勒|kuerle|kel', '库车|kuche|kc', '兰州|lanzhou|lz',
  '洛阳|luoyang|ly', '丽江|lijiang|lj', '林芝|linzhi|lz', '柳州|liuzhou|lz', '泸州|luzhou|lz', '连云港|lianyungang|lyg', '黎平|liping|lp',
  '连成|liancheng|lc', '拉萨|lasa|ls', '临沧|lincang|lc', '临沂|linyi|ly', '芒市|mangshi|ms', '牡丹江|mudanjiang|mdj', '满洲里|manzhouli|mzl', '绵阳|mianyang|my',
  '梅县|meixian|mx', '漠河|mohe|mh', '南充|nanchong|nc', '南宁|nanning|nn', '南阳|nanyang|ny', '南通|nantong|nt', '那拉提|nalati|nlt',
  '宁波|ningbo|nb', '攀枝花|panzhihua|pzh', '衢州|quzhou|qz', '秦皇岛|qinhuangdao|qhd', '庆阳|qingyang|qy', '齐齐哈尔|qiqihaer|qqhe',
  '石家庄|shijiazhuang|sjz', '沈阳|shenyang|sy', '思茅|simao|sm', '铜仁|tongren|tr', '塔城|tacheng|tc', '腾冲|tengchong|tc', '台州|taizhou|tz',
  '通辽|tongliao|tl', '太原|taiyuan|ty', '威海|weihai|wh', '梧州|wuzhou|wz', '文山|wenshan|ws', '无锡|wuxi|wx', '潍坊|weifang|wf', '武夷山|wuyishan|wys', '乌兰浩特|wulanhaote|wlht',
  '温州|wenzhou|wz', '乌鲁木齐|wulumuqi|wlmq', '万州|wanzhou|wz', '乌海|wuhai|wh', '兴义|xingyi|xy', '西昌|xichang|xc', '襄樊|xiangfan|xf',
  '西宁|xining|xn', '锡林浩特|xilinhaote|xlht', '西双版纳|xishuangbanna|xsbn', '徐州|xuzhou|xz', '义乌|yiwu|yw', '永州|yongzhou|yz', '榆林|yulin|yl', '延安|yanan|ya', '运城|yuncheng|yc',
  '烟台|yantai|yt', '银川|yinchuan|yc', '宜昌|yichang|yc', '宜宾|yibin|yb', '盐城|yancheng|yc', '延吉|yanji|yj', '玉树|yushu|ys', '伊宁|yining|yn', '珠海|zhuhai|zh', '昭通|zhaotong|zt',
  '张家界|zhangjiajie|zjj', '舟山|zhoushan|zs', '郑州|zhengzhou|zz', '中卫|zhongwei|zw', '芷江|zhijiang|zj', '湛江|zhanjiang|zj'
]
export default {
  name: 'CityRender',
  data () {
    return {
      flag: false,
      code: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      allCityData: {},
      city: CityData[0].split('|')[0],
      cityBox: ''
    }
  },
  components: {
    HeaderBar
  },
  methods: {
    CityRender () {
      this.flag = !this.flag
    },
    AllCity () {
      this.allCityData['热门'] = []
      for (let i = 0; i < 6; i++) {
        this.allCityData['热门'].push(CityData[i])
      }
      for (let i = 0; i < this.code.length; i++) {
        let code = this.code.charAt(i)
        this.allCityData[code] = []
        for (let j = 0; j < CityData.length; j++) {
          let firstCode = CityData[j].split('|')[1].charAt(0).toLocaleUpperCase()
          if (firstCode === code) {
            this.allCityData[code].push(CityData[j])
          }
        }
      }
    },
    selectCity (item) {
      this.CityRender()
      this.city = item.split('|')[0]
      this.$emit('selectCity', item.split('|'))
    }
  },
  created () {
    this.AllCity()
  },
  mounted () {
    this.cityBox = this.$el.querySelector('.city')
    document.body.appendChild(this.cityBox)
  },
  destroyed () {
    document.body.removeChild(this.cityBox)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.fade-enter-active, .fade-leave-active {
  transition: .2s;
  opacity: 1;
  -webkit-transform: translateY(0);
}
.fade-enter, .fade-leave-to{
    opacity: 0;
    -webkit-transform: translateY(-100px);
}
.city{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #eee;
    z-index: 10000;
    overflow-y: auto;
    padding-top: 0.4rem;
    .left{
        h3{
            color: #000;
            font-size: .16rem;
            text-align: center;
            font-weight: 400;
            padding-left: 1.5rem;
        }
    }
    .right{
        a{
            color: #777;
        }
    }
    .list{
        h3{
            font-size: 0.14rem;
            line-height: 0.4rem;
            padding-left: 0.2rem;
            color: #777;
        }
        li{
            font-size: 0.12rem;
            background: #fff;
            line-height: 0.4rem;
            padding-left: 0.2rem;
            position: relative;
            background: #fcfcfc;
            color: #777;
            &::after{
            content: "";
            display: block;
            height: 1px;
            width: 200%;
            position: absolute;
            left: 0;
            bottom: 0;
            background: #d7d7d7; 
            -webkit-transform: scale(0.5);
            -webkit-transform-origin:  0 0;
            }
        }
    }
}
.select{
  display: flex;
  color: #928ea5;
  img{
      display: block;
      width: 0.25rem;
      margin-right: 0.1rem;
      margin-top: .05rem;
      height: .26rem;
  }
  span{
      color: #8a869e;
      font-size: .14rem;
  }
  i.fa{
      padding-top: .12rem;
      padding-left: .06rem;
      font-size: .16rem;
  }
}
.fixed{
    position:fixed;
    top: .8rem;
    right: 0;
    border: 1px solid #ccc;
    padding: 3px 0;
    width: 40px;
    background: hsla(0,0%,100%,.5);
    ul{
        li{
            text-align: center;
            color: #a9a9a9;
            font-size: .12rem;
            line-height: .2rem;
        }
    }
}
</style>
