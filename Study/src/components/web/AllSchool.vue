<template>
  <div class="all-all" v-show="index == 0">
  	<div class="content-one" v-for="(item,index) in keywordsSearch.length?keywordsSearch:collegeLists">
  		<div class="content-img fl" :style="{background:'url(/static/image/kuang.jpg)'}">
  			<!-- <img :src="item.logo" :alt="item.name" :title="item.name"> -->
<!--   			<div :style="{background:'url('+item.logo+'),backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}">
  				
  			</div> -->
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
  				<Table :columns="columns1" :data="data1"></Table>
  			</div>
  		</div>
  	</div>
  </div>
</template>
<script>
export default {
	//父组件传递查询的结果放在searchDataList
	props:['index','Keywords','searchDataList'],
  	data() {
    	return {
    	 	columns1: [
            {
                title: '专业',
                key: 'name'
            },
            {
                title: '全美排名',
                key: 'age'
            },
            {
                title: '全球排名',
                key: 'address'
            },
            {
                title: '专业',
                key: 'date'
            },
            {
                title: '全美排名',
                key: 'address'
            },
            {
                title: '全美排名',
                key: 'address'
            }
        ],
        	data1: [
            {
                name: '电脑工程',
                age: '|',
                address: '-',
                date: '化学工程'
            },
            {
                name: '工商生产管理',
                age: '|',
                address: '-',
                date: '机械工程'
            },
            {
                name: '天空科技工程',
                age: '|',
                address: '-',
                date: '人工智能'
            },
            {
                name: '材料科学',
                age: '|',
                address: '-',
                date: '基因科学'
            },
            {
                name: '数学分析',
                age: '|',
                address: '-',
                date: '......'
            }
        ],
        	flag:true,
			collegeLists:[],
    	}
  	},
  	methods:{
  		getTable(item,index){
  			// this.flag = !this.flag;
  			item.flag = !item.flag;
  			this.$set(this.collegeLists,index,item);
  		/* if(this.flag){
  		 	this.flag = false;
  		 	$('.content-one').css('borderBottom','1px solid black');
  		 }else{
  		 	this.flag = true;
  		 	$('.content-one').css('border','none');
  		 }*/
  		},

		getSchoolLists(id){
			this.$http.get(`/frontend/category/info?cateId=${id}`)
				.then((res)=>{
					// console.log(res);
					this.collegeLists = res.data.data.colleges.rows;
			    	this.collegeLists = this.collegeLists.map((item)=>{
		                return Object.assign({flag:false},item);
			    	}) 
				})
		},
	    searchResult(id,keywords){
		    this.$http.get(`/frontend/college/search?keywords=${keywords}&cateId=${id}`)
			    .then((res)=>{
				    // console.log('cooperationSchool',res.data.data);
				    if(res.data.data.totalRows.length){
					    this.collegeLists = res.data.data.rows;
					    this.collegeLists = this.collegeLists.map((item)=>{
			                return Object.assign({flag:false},item);
				    	}) 
	                }else{
					    // this.collegeLists = res.data.data.colleges.rows;
	                }
			    })
	    }
	  },
	created(){
		let keywords = this.$route.query.keywords;
		let id = this.$route.query.id;
		//每次渲染该组件时,需要对当前的关键词进行判断,如果关键词存在,则执行搜索查询,若不存在,则执行列表查询
		if(keywords){
			this.searchResult(id,keywords);
		}else{
			this.getSchoolLists(id);
        }
        // console.log(this.$props.searchDataList)
	},
    //
    computed:{
	    keywordsSearch:function () {
	    	let arr = [];
	    	arr = this.$props.searchDataList.map((item)=>{
                return Object.assign({flag:false},item);
	    	})
            return arr;
	    },
    },
    watch:{
		//监听关键词变化,再次请求查询api,
		"$route.query.keywords":{
			handler:function (val,oldval) {
				let keywords = this.$route.query.keywords;
				let id = this.$route.query.id;
				this.searchResult(id, keywords);
				// console.log('watch',val,oldval)
			},
            immediate:true
		}
    }

}

</script>
<style lang="less">
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
				width: 110px;
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
