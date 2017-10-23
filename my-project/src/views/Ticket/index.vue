<template>
	<div class="content">
			<div class="movie">
				<div class="banner">
					<div class="picture"></div>
					<div class="content">
						<p>
							<span>猩球崛起3：终极之战</span> 
							<img src="https://gw.alicdn.com/tps/TB1RZpPPVXXXXczaXXXXXXXXXXX-264-84.png" style="visibility: visible;">
						</p>
						<h2>War for the Planet of the Apes</h2>
						<p class='classify'><span>动作</span><span>剧情</span><span>冒险</span></p>
						<p><span>美国</span> <span>|</span> <span>140分钟</span></p>
						<p>2017-09-15<span> 在中国大陆</span>上映</p>
					</div>
					<div class="commont">
						<div class="remark">
							<h2>用户评分
		                    	<time>(6,196)</time>
		                	</h2>
		                	<div class="star"><span>8.4</span><i>★★★★★</i></div>
						</div>
						<div class="number">
							<h2>想看人数</h2>
							<span>409,905</span>
						</div>
					</div>
				</div>	
				<div class="list">
					<div class='num'>
						<h2>4658.7万</h2>
						<span>累计票房</span>
					</div>
					<div class='num'>
						<h2>4361.1万</h2>
						<span>分账票房</span>
					</div>
					<div class='num'>
						<h2>--</h2>
						<span>首周票房</span>
					</div>
					<div class='num'>
						<h2>3747.8万</h2>
						<span>首日票房</span>
					</div>
				</div>
			</div>
			<div class="tab">
				<div class="tab-chart">
					<ul>
						<li v-for='(item,index) in tabList' :class="{active:ind == index}" @click='tab(index)'>{{item}}</li>
					</ul>
					<div v-show='flg==0'>
						<schart></schart>
					</div>
					<div v-show='flg==1'>
						<scharts></scharts>
					</div>
				</div>
			</div>
			<div class="date">
				<ul>
					<li>日期</li>
					<li>当日票房<span>(万)</span></li>
					<li>票房占比</li>
					<li>排片占比</li>
					<li>场均人次</li>
				</ul>
			</div>
			<div class="list">
				<div class="list-date">
					<p>2017-09-15</p> 
					<p class="week">
						<span class="">周五</span> 
						<span style="color: rgb(32, 165, 242);">上映首日</span></p>
				</div> 
				<div class="percent">6699.7</div> 
				<div class="percent">68.5%</div> 
				<div class="percent">44.4%</div> 
				<div class="percent">18</div>
			</div>
			<div class="list" style='background:none;'>
				<div class="list-date" style="width:24%;">
					<p>2017-09-16</p> 
					<p class="weekday">
						<span class="" style="color: rgb(32, 165, 242);">周六</span> 
					</p>
				</div> 
				<div class="percent" >6699.7</div> 
				<div class="percent">68.5%</div> 
				<div class="percent">44.4%</div> 
				<div class="percent">18</div>
			</div>
			<div class="list">
				<div class="list-date" style="width:24%;">
					<p>2017-09-17</p> 
					<p class="week">
						<span class="" style="color: rgb(32, 165, 242);">周六</span></p>
				</div> 
				<div class="percent">6699.7</div> 
				<div class="percent">68.5%</div> 
				<div class="percent">44.4%</div> 
				<div class="percent">18</div>
			</div>
			<div class="all">
				<span>查看全部日期和指标</span>
			</div>
			<div class="want">
				<h4>想看人数</h4>
				<div class="head">
					<div class="select_all">
						<select name="" id="">
						<option value="全国">全国</option>	
						</select>
						<select name="" id="">
							<option value="2017年08月16日-9月14日">
								2017年08月16日-9月14日
							</option>
						</select>
					</div>
				</div>
				<div>
					<schart1></schart1>
				</div>
			</div>
			<div class="photo">
				<div class="photo-all">
					<h4>想看受众画像</h4> 
					<div class="process" style="width: 55.32%;color:rgb(32, 165, 242)">
					<span class="text" style='color:#575757'>男</span> 
					<span class="number" style="color: rgb(32, 165, 242);">58.32%</span>
					</div>
					<div class="process" style="width: 38.32%;background:rgba(251, 119, 125, 0.12);margin-left:.05rem;text-align:right;">
					<span class="number" style="color: rgb(32, 165, 242);color:rgb(251, 119, 125)">41.68%</span>
					<span class="text">女</span>
					</div>
				</div>
				<div class="photo-all">
					<h4 style="margin-top:.1rem;">优酷预告片播放数 5,653,854</h4> 
					<div class="process" style="width: 65.88%;color:rgb(32, 165, 242)">
					<span class="text" style='color:#575757'>男</span> 
					<span class="number" style="color: rgb(32, 165, 242);">70.88%</span>
					</div>
					<div class="process" style="width: 30.12%;background:rgba(251, 119, 125, 0.12);margin-left:.05rem;text-align:right;">
					<span class="number" style="color: rgb(32, 165, 242);color:rgb(251, 119, 125)">29.12%</span>
					<span class="text">女</span>
					</div>
				</div>
				<div class="photo-all">
					<h4 style="margin-top:.1rem;">优酷预告片播放数 2,860,073</h4> 
					<div class="process" style="width: 60.32%;color:rgb(32, 165, 242)">
					<span class="text" style='color:#575757'>男</span> 
					<span class="number" style="color: rgb(32, 165, 242);">66.32%</span>
					</div>
					<div class="process" style="width: 34.32%;background:rgba(251, 119, 125, 0.12);margin-left:.05rem;text-align:right;">
					<span class="number" style="color: rgb(32, 165, 242);color:rgb(251, 119, 125)">33.68%</span>
					<span class="text">女</span>
					</div>
				</div>
				<div class="all">
					<span>查看更多用户画像</span>
				</div>
			</div>
			<div class="event">
				<h4>
					<b>营销事件</b>
					<span>更多事件 ></span>
				</h4>
				<p class="one">
					<a href="javascriot:;">上映前一天</a>
					<span>2017-09-14</span>
					<small>海报</small>
				</p>
				<h3>爆中国独家终极海报及预告片点题</h3>
				<p class="two">由二十世纪福斯电影公司出品的科幻动作巨制《猩球崛起3：终极之战》即将于9月15日登陆国内各大院线，福斯为中国影迷独家定制的终极海报和预告片也于日前正式发布。</p>
			</div>
			<div class="menu">
	        	<h3>演职人员</h3>
		        <div class="swiper">
		            <Banner></Banner>
		        </div>
		        <div class="main">
		            <dl>
		                <dt></dt>
		                <dd>
		                    <h3>马特·里弗斯</h3>
		                </dd>
		            </dl>
		            <dl>
		                <dt></dt>
		                <dd>
		                    <h3>泰瑞·诺塔里</h3>
		                </dd>
		            </dl>
		            <dl>
		                <dt></dt>
		                <dd>
		                    <h3>伍迪·哈里森</h3>
		                </dd>
		            </dl>
		            <dl>
		                <dt></dt>
		                <dd>
		                    <h3>朱迪·格雷尔</h3>
		                </dd>
		            </dl>
		        </div>
	      	</div>
	      	<div class="text">
	      		<h3>影片简介</h3>
	      		<p>故事发生在第二部《猩球崛起：黎明之战》的后两年。猿族和人类的战争已经持续了两年之久，凯撒一直生活在暴力与疯狂之中。他被科巴的死折磨着，同时也看够了猿族的同胞死于战争中...他想要复仇。所以凯撒发起了一场“史诗远征”，以刺杀人类军队的领导者“上校”，一场人猿之间的生死决战一触即发</p>
	      		<div class="all">
					<span>展开</span>
				</div>
	      	</div>
		</div>
	</div>
</template>
<script>
import Banner from './components/Banner'
import schart from '@/components/schart'
import scharts from '@/components/scharts'
import schart1 from '@/components/schart1'
export default {
  name: 'Ticket',
  data () {
    return {
      tit: '票房详情',
      ind:0,
      tabList:['日票房','日排片'],
      flg:0,
    }
  },
  components: {
    Banner,
	schart,
	scharts,
	schart1
  },
  methods:{
  	tab (index) {
  		this.ind=index;
  		this.flg=index;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.content{
		width: 100%;
		height: 100%;
		box-sizing:border-box;
		overflow: hidden;
		.movie{
			width: 100%;
			height: 2.65rem;
			background: #fff;
			.banner{
				width: 100%;
				height: 1.75rem;
				background: rgba(0,0,0,0.4);
				box-sizing:border-box;
				position: relative;
	    		overflow: hidden;
	    		.picture{
	    			background:url("//gw.alicdn.com/tfscom/i4/TB1SjYYSpXXXXaBapXXXXXXXXXX_.jpg_400x400q50.jpg_.webp") no-repeat;
	    			background-position: center center;
	    			background-size: cover;
				    position: absolute;
				    display: block;
				    left: .2rem;
				    top: .25rem;
				    bottom: 0;
				    width: 1.1rem;
				    height: 1.5rem;
	    		}
	    		.content{
	    			position: absolute;
	    			width: 2.2rem;
	    			height: 1.02rem;
				    top: .25rem;
				    left: 1.5rem;
				    right: .4rem;
				    color: hsla(0,0%,100%,.7);
				    p{
				    	width: 1.71rem;
					    font-size: .18rem;
					    color: #fff;
					    font-weight: 400;
					    white-space: nowrap;
					    overflow: hidden;
					    text-overflow: ellipsis;
					    img{
					    	position: absolute;
					    	top: .05rem;
					    	margin-left: .05rem;
					    	display:inline-block;
					    	visibility: visible;
					    	width: .45rem;
					    	height: .16rem;
					    }
				    }
				    h2{
				    	font-weight: normal;
				    	font-size: .12rem;
				    }
				    p{
				    	font-size: .12rem;
				    	line-height: .18rem;
				    }
				    .classify{
				    	padding-top: .1rem;
				    }
	    		}
	    		.commont{
				    position: absolute;
				    left: 1.5rem;
				    height: .25rem;
				    text-align: left;
				    bottom: .15rem;
				    font-weight: normal;
				    right: 0;
				    font-size: .12rem;
				    color: hsla(0,0%,100%,.7);
				    .remark{
						float: left;
						width: 50%;
						h2{
							font-size: .12rem;
							time{
								font-size: .1rem;
								font-weight: normal;
							}
						}
						.star{
							color: #fea54c;
							font-size: .14rem;
							i{
								font-style: normal;
								margin-left: .05rem;
							}
						}
				    }
				    .number{
						width: 50%;
						float: left;
						h2{
							font-size: .12rem;
						}
						span{
							color: #fea54c;
							font-size: .14rem;
						}
				    }
	    		}
			}
			.list{
				font-size: .12rem;
				display: flex;
				.num{
					flex:1;
					text-align: center;
					vertical-align: center;
					h2{
						font-size: .14rem;
						font-weight: normal;
						padding-top: .25rem;
					}
					span{
						display: block;
						color:#657786;
						padding-top: .05rem;
					}
				}
			}
		}
		.tab{
			height: 2.62rem;
			width: 100%;
			background: #fff;
			margin-top: .1rem;
			box-sizing:border-box;
			.tab-chart{
				height: .32rem;
				padding-top: .2rem;
				line-height: .32rem;
				width: 100%;
				position: relative;
				ul{
					width: 1.25rem;
					position: absolute;
					left: 50%;
					margin-left: -.625rem;
					display: flex;
					li{
						flex:1;
						font-size: .14rem;
						text-align: center;
						border: 1px solid #ccc;
						&.active{
							color: red;
						}
					}
				}
			}
		}
		.date{
			width: 100%;
			height: .5rem;
			padding-top: .1rem;
			ul{
				li{
					float: left;
					font-size: .12rem;
					margin-left: .2rem;
					line-height: .2rem;
					span{
						display: block;
						padding-left: .15rem;
					}
					&:first-child{
						margin-right: .4rem;
					}
				}
			}
		}
		.list{
			height: .6rem;
			display: flex;
			box-sizing:border-box;
			font-size: .14rem;
			background: #fff;
			padding: .1rem .1rem;
			.list-date{
				width: 30%;
				text-align: left;
			}
			.percent{
				padding-left: .1rem;
				width: 16%;
				text-align: center;
			}
		}
		.all{
			width: 100%;
			height: .5rem;
			line-height: .5rem;
			font-size: .14rem;
			background: #fff;
			text-align: center;
			border-top: 1px solid #eee;
			span{
				color: rgb(32, 165, 242);
			}
		}
		.want{
			height: 3.13rem;
			background: #fff;
			margin-top: .1rem;
			h4{
				color: #575757;
				padding: .15rem .2rem;
			}
			.head{
				padding: 0 .2rem;
				height: .19rem;
				font-size: .16rem;
				.select_all{
					display: flex;
					justify-content:space-between;
					select{
						border:none;
						outline: none;
					}
				}
			}
		}
		.photo{
			width: 100%;
			height: 3.44rem;
			padding: 0.1rem .15rem;
			background: #fff;
			margin-top: .1rem;
			color: #575757;
			box-sizing:border-box;
			.photo-all{
				height: .86rem;
				h4{
					font-size: .14rem;
				}
				.process{
					background: rgba(32, 165, 242, 0.12);
					max-width: 259px;
					float:left;
					height: .2rem;
					font-size: .14rem;
					margin:.15rem 0;
					.text{
						padding: 0 .12rem;
					}
				}
			}
		}
		.event{
			height: 3rem;
			background: #fff;
			margin-top: .1rem;
			box-sizing:border-box;
			h4{
				padding:.15rem .1rem;
				display: flex;
				font-weight: normal;
				justify-content:space-between;
				font-size: .16rem;
				span{
					color: #657786;
					font-size: .14rem;
				}
			}
			.one{
				height: .21rem;
				padding-top: .1rem;
				padding-left: .2rem;
				font-size: .16rem;
				a{
					color:#20a5f2;
				}
				span{
					margin-right: 35%;

				}
				small{
					display: inline-block;
					border:1px solid #ccc;
					padding: .02rem .1rem;
				}
			}
			h3{
				font-size: .18rem;
				padding: .2rem .16rem;
			}
			.two{
				width: 90%;
				padding: 0 .2rem;
				line-height: .3rem;
				font-size: .16rem;
			}
		}
		.menu{
		    margin-top: .15rem;
		    background: #fff;
		    height: 2.4rem;
		    h3{
		    	font-size: .16rem;
		    	padding: .15rem;
		    }
		    dl{
		    	display: inline-block;
		    	h3{
			        padding: .2rem 0 .1rem .12rem;
			        color: #000;
			        font-size: .14rem;
			        font-weight: normal;
		    	}
		    }
		}
		.text{
			height: 1.73rem;
			background: #fff;
			margin-top: .1rem;
			h3{
				font-size: .16rem;
				padding: .15rem;
			}
			p{
				padding-left: .15rem;
				font-size: .16rem;
				height: .85rem;
				padding: 0rem .15rem;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
	}	
	
</style>

</template>