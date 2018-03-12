<template>
  <div class="cooper-all">
  	<div class="clearfix"></div>
    <h3 class="title" ref="coopUniContent">合作院校</h3>
		<div class="cooper-container">
			<div class="cooper-header">
				<ul class="cooper-select">
					<li v-for="(item,index) in title" @click="selectChange(item,item.index)">
                         <span :class="item.isActive ? 'active' : ''">{{item.navInfo}}</span>
                     </li>
				</ul>
				<div class="cooper-btn">
					<Button class="cooper-btns" @click="setSort('rank')">综合排名</Button>
					<Button class="cooper-btns" @click="setSort('cost')">总费用</Button>
					<Button class="cooper-btns" @click="setSort('follow')">人气</Button>
					<Button class="cooper-btns">筛选</Button>
				</div>
				<div class="cooper-input">
					<span class="cooper-span">院校查询：</span>
					<input type="text" class="input-box" v-model="searchKeywords" @keyup.enter="searchSchool(searchKeywords)" placeholder="请输入要查询的院校"></input>
					<button class="input-btn" @click="searchSchool(searchKeywords)">查询</button>
				</div>
			</div>

			<div class="cooper-content">
				<!-- <AllSchool :index = 'index' :searchDataList="searchDataList"></AllSchool>
				<University :index = 'index' :searchDataList="searchDataList"></University>
				<MiddleSchool :index = 'index' :searchDataList="searchDataList"></MiddleSchool>
				<ArtsSchool :index = 'index' :searchDataList="searchDataList"></ArtsSchool>
				<ScienceSchool :index = 'index' :searchDataList="searchDataList"></ScienceSchool>
				<CommunitySchool :index = 'index' :searchDataList="searchDataList"></CommunitySchool> -->
				<div class="all-all">
				  	<div class="content-one" v-for="(item,index) in searchDataList">
				  		<div class="content-img fl" :style="{background:'url(/static/image/kuang.jpg)'}">
				  			<!-- <img :src="item.logo" :alt="item.name" :title="item.name"> -->
				  			<div 
				  			:style="{background:'url('+item.logo+')',
				  			backgroundSize:'cover',
				  			backgroundRepeat:'no-repeat',
				  			backgroundPosition:'center'}">
				  				
				  			</div>
				  		</div>
				  		<div class="content-text fl">
				  			<div class="content-title">
				  				<span>{{item.name}}</span>
								<a title="点击这里咨询客服" href="http://wpa.qq.com/msgrd?v=3&amp;uin=179158105&amp;site=www.cactussoft.cn&amp;menu=yes" target="_blank">
									<button >咨询</button>
								</a>
				  			</div>
				  			<div class="content-content">
				  				<div class="part-two fl">
						  			<span>所在州省：{{item.area}}</span>
						  			<span>总费用：$:{{(item.cost/1000)/10}}万</span>
						  			<span>官网：{{item.officialUrl}}</span>
						  			<span>课程内容：{{item.content}}</span>
						  		</div>
						  		<div class="part-three fl">
						  			<span>学校性质：{{item.natures}}</span>
						  			<span>录取率：{{item.acceptanceRate}}</span>
						  			<span>招生对象：{{item.target}}</span>
						  			<span>课程时间：{{item.courseDate}}</span>
						  		</div>
						  		<div class="part-four fl">
						  			<span>综合排名：{{item.rank}}</span>
						  			<span>中国教育部是否认证：{{item.authentication}}</span>
						  			<span>语言要求：{{item.language}}</span>
						  			<span class="top-span" @click="getTable(item,index)">专业排行&gt&gt</span>
						  		</div>
				  			</div>
				  			<div class="clearfix"></div>
				  			<div class="content-table" v-show="item.flag">
				  				<Table :columns="columns" :data="item.majors"></Table>
				  			</div>
				  		</div>
				  	</div>
				  </div>
			</div>
		</div>
  </div>
</template>
<script>
import AllSchool from '@/components/web/AllSchool';
import University from '@/components/web/University';
import MiddleSchool from '@/components/web/MiddleSchool';
import ArtsSchool from '@/components/web/ArtsSchool';
import ScienceSchool from '@/components/web/ScienceSchool';
import CommunitySchool from '@/components/web/CommunitySchool';
export default {
  data() {
    return {
    	title: [{
        navInfo: '全部',
        isActive: true,
        index:0
      }, {
        navInfo: '大学',
        isActive: false,
        index:1
      }, {
        navInfo: '中学',
        isActive: false,
        index:2
      }, {
        navInfo: '艺术学院',
        isActive: false,
        index:3
      }, {
        navInfo: '文理学院',
        isActive: false,
        index:4
      },{
        navInfo: '社区大学',
        isActive: false,
        index:5
      }],

//		isActive:true,
      	index:0,
		searchKeywords:'',
		sort:'',
		type:'全部',
        searchDataList:[],
        columns: [
            {
                title: '专业',
                key: 'name'
            },
            {
                title: '全美排名',
                key: 'usRank'
            },
            {
                title: '全球排名',
                key: 'globalRank'
            } 
        ],
    	data1: [
        {
            name: '电脑工程',
            age: '|',
            address: '-',
            date: '化学工程'
        },
      ],
    }
  },
  components:{
  	AllSchool,
  	University,
  	MiddleSchool,
  	ArtsSchool,
  	ScienceSchool,
  	CommunitySchool
  },
  methods:{
  	/**
  	 * [选择不同学校]
  	 * @作者     王柳
  	 * @日期     2017-11-07
  	 */
	  selectChange(item,index){
		//  		console.log(item);
			this.index = index;
			// console.log(this.index);
            for(let i = 0;i<this.title.length;i++){
	            this.title[i].isActive = false;
            }
            this.title[index].isActive = true;
	  },
	  //设置表格开关
	  getTable(item,index){
  			item.flag = !item.flag;
  			this.$set(this.searchDataList,index,item);
  		},
	  //学校搜索
	  searchSchool(keywords){
	  	  //处理学校类型type
	      let type = null;
	      type = this.title[this.index].navInfo !== '全部' ? this.title[this.index].navInfo : null;
	      
	      //处理排序
	      let sort = null;
	      sort = this.sort !== '' ?  this.sort : null;

	      this.$http.get('frontend/category/info',{
	      	params:{
              cateId:this.$route.query.id,
              sort:sort,
              keywords:this.searchKeywords,
              type:type,
              pageSize:99,
              page:1,
	      	}
	      })
	        .then((res)=>{
	        	this.searchDataList = [];
	        	this.searchDataList = res.data.data.colleges.rows;
	        	   this.searchDataList = this.searchDataList.map((item)=>{
		                return Object.assign({flag:false},item);
			       });

	        	this.$nextTick(()=>{
			       if(this.$route.query.keywords && this.$route.query.keywords != '') {
		               //此时是通过顶部搜索进入这个页面，需要直接定位到学校列表
		               window.scrollTo(0,this.$refs.coopUniContent.offsetTop);
		           }
	        	})
	        })		  
	  },
	  //综合排名
	  setSort(sort){
	  	this.sort = sort;
	  	this.searchSchool();
	  },
  },
  created(){

  },

  mounted() {
     this.searchKeywords = this.$route.query.keywords || '';
     this.searchSchool();
  },


  watch:{
  	'index':function(nv) {
       this.searchSchool();
  	}
  }
}

</script>
<style lang="less">
.cooper-all{
	height: auto;
	margin: 54px 0;
	.cooper-container{
		height:auto ;
		.cooper-header{
			height: 72px;
			border-bottom: 1px solid black;
			.cooper-select,.cooper-input,.cooper-btn{
				float: left;
			}
			.cooper-select{
				width: 46%;
				li{
					float: left;
					font-size: 20px;
					cursor: pointer;
					margin: 30px 11px 10px 11px;
					.active{
						color:#00aeea ;
					}
				}
			}
			.cooper-btn{
				width: 26.4%;
				margin-top: 30px;
				.cooper-btns{
					color: white;
					background-color: #00aeea;
				}
			}
			.cooper-input{
				margin-top: 30px;
				width:27.6%;
				position: relative;
				right: 0;
				.cooper-span{
					font-size: 20px;
				}
				.input-box{
					width: 68%;
					height: 32px;
					font-size: 16px;
					border: 2px solid #00aeea;
				}
				.input-btn{
					cursor: pointer;
					height: 31px;
					padding: 6px 15px;
					position: absolute;
					right: 5px;
					bottom: 1px;
					border: none;
					background-color: #00aeea;
					color: white;
				}
			}
		}
		.cooper-content{
			height:100%;
		}
	}
}


.all-all{
	height: auto;//原为1024px，但是数据多的时候会被截取，无法正常显示
	margin: 0 0 8px 0;
	.content-one{
		height: auto;
		overflow: hidden;
		margin-top: 12px;
		border-bottom: 1px solid black;
		.content-img{
			width: 17.7%;
			height: 118px;
			margin-right: 36px;
			div {
				width: 100px;
				height: 100px;
				margin: 9px auto ;
				border: none;
				outline: none;
			}
		}
		.content-text{
			width: 79.3%;
			.content-title{
				margin-bottom: 16px;
				span{
					font-size: 16px;
				}
				button{
					background-color: #fd0002;
					color: white;
					margin-left: 10px;
					width: 50px;
					border: none;
				}
			}
			.content-content{
				span{
					display:block;
					font-size: 14px;
				}
				.part-two{
					width: 27.7%;
				}
				.part-three{
					width: 24.8%;
				}
				.part-four{
					width: 47.5%;
					.top-span{
						color:#fd0002;
						cursor: pointer;
						text-decoration: underline;
					}
				}
			}
			.content-table{
				margin-top: 6px;
			}
		}

	}
}



</style>
