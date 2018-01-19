<template>
  <section class="m-coopuni">
     <section class="m-coopuni-img">
       <img src="../../assets/mobile-images/banner4.jpg">
     </section>

     <section class="m-study-new-act" style="margin-top:-0.1rem">
        <span>新闻动态</span>
      </section>


      <section class="m-study-new-act-noimg" style="height: auto;overflow: visible" v-for="(item,index) in newsList">
	      <h3>
	        {{item.title}}
	      </h3>

	      <p style="-webkit-line-clamp: 100;">
	        {{item.content}}
	      </p>
     </section>

    <!-- 各大院校 -->
    <section class="m-section">
       <section class="m-section-cont">
          <b>各大院校</b>
          <span>待提供的软文</span>
       </section>
    </section>


    <ul class="m-section-filter">
    	<li
    	@click="changeSchoolType(index,item.title)"
    	v-for="(item,index) in filterList"
    	:class="{'m-section-filter-active':index == activeFilterIndex ? true : false}"
    	>{{item.title}}</li>
    </ul>


    <section class="m-coopuni-search">
    	<span>院校查询：</span>
    	<input type="" name="" placeholder="请输入查询的院校" v-model="keywords">
    	<i @click="getSchoolList">查询</i>
    </section>

    <ul class="m-hot-schools" v-if="schoolListDatas.length !== 0">
      <li 
      v-for="(item,index) in schoolListDatas" 
      :style="{marginRight: index % 2 == 0 ? '0.2rem':0}"
       @click="learnMore(item.url)"
      >
        <figure>
          <img src="../../assets/mobile-images/kuang.png" alt="">
          <img :src="item.logo" :alt="item.name">
        </figure>
        <section >
           <h3>{{item.name}}</h3>
           <p>{{item.enName}}</p>
           <p><span @click="learnMore(item.url)">了解详情</span></p>
        </section>
      </li>
    </ul>

    <p class="m-hot-schools-nodata" v-else>暂无相关院校</p>


    <section class="m-papagation" v-if="record !== 0">
      <ul >
        <li>&lt;</li>
        <li 
        v-for="(item,index) in pageNum(record)" 
        :class="{'pag-active':index == pageIndex ? true : false}"
        @click="pageIndex = index;cp = pageIndex + 1;getSchoolList()"
        >
           {{index + 1}}
        </li>
        <li>></li>
      </ul>


    </section>


     <!-- 最有名的大学 -->
    <section class="m-section" style="margin-bottom:0.2rem">
       <section class="m-section-cont">
          <b>2017最新世界大学排名</b>
          <span>待提供的软文</span>
       </section>
    </section>

    <section class="m-coopuni-top" :style="{background:'url(/static/image/kuang1.jpg)',backgroundPosition:'center',backgroundSize:'contain'}">
    	<h3><span>2017 QS </span><br>世界大学排名</h3>

    	<ul class="m-coopuni-top-list">
    		<li v-for='(item,index) in schoolQSDatas'>
    			<span><i :style="{background: index == 0 ? '#fe0200':(index == 1 ? '#03ace8':(index == 2 ? '#f2a83a':'#bbb'))}">{{index + 1}}</i>{{item.name}}</span>
    			<span>{{item.country}}</span>
    		</li>
    	</ul>

    	<section class="m-coopuni-top-btn">
    		了解更多
    	</section>
    </section>

   <section class="m-coopuni-top" :style="{background:'url(/static/image/kuang1.jpg)',backgroundPosition:'center',backgroundSize:'contain'}">
      <h3><span>2017 US </span><br>世界大学排名</h3>

      <ul class="m-coopuni-top-list">
        <li v-for='(item,index) in schoolUSDatas'>
          <span><i :style="{background: index == 0 ? '#fe0200':(index == 1 ? '#03ace8':(index == 2 ? '#f2a83a':'#bbb'))}">{{index + 1}}</i>{{item.name}}</span>
          <span>{{item.country}}</span>
        </li>
      </ul>

      <section class="m-coopuni-top-btn">
        了解更多
      </section>
    </section>

    <section class="m-coopuni-top" :style="{background:'url(/static/image/kuang1.jpg)',backgroundPosition:'center',backgroundSize:'contain'}">
      <h3><span>2017 THE </span><br>世界大学排名</h3>

      <ul class="m-coopuni-top-list">
        <li v-for='(item,index) in schoolTHEDatas'>
          <span><i :style="{background: index == 0 ? '#fe0200':(index == 1 ? '#03ace8':(index == 2 ? '#f2a83a':'#bbb'))}">{{index + 1}}</i>{{item.name}}</span>
          <span>{{item.country}}</span>
        </li>
      </ul>

      <section class="m-coopuni-top-btn">
        了解更多
      </section>
    </section>


  </section>
</template>
<script>
export default {
  data() {
    return {
       filterList:[
       {
       	 title:'全部',
       },
       {
       	 title:'大学',
       },
       {
       	 title:'中专',
       },
       {
       	 title:'艺术学院',
       },
       {
       	 title:'文理学院',
       },
       {
       	 title:'社区大学',
       },
       ],

       activeFilterIndex:0,

       newsList:[],
       schoolListDatas:[],

       keywords:'',
       ps:10,
       cp:1,
       type:'全部',
       record:0,


       //分页
       pageIndex:0,


       schoolQSDatas:[],
      schoolTHEDatas:[],
      schoolUSDatas:[]
    }
  },
  methods:{
    //获取新闻动态方法
    getNews(){
        this.$http.get('/frontend/article/news')
            .then((res)=>{
            //默认只展示第一条数据即可
            this.newsList = res.data.data.current.list;
        })
    },

    changeSchoolType(index,type){
        this.activeFilterIndex = index;
        this.pageIndex = 0;
        this.type = type;
        this.getSchoolList();
    },

    getSchoolList(){
      //请求全部的时候,不需要传参数
      
      let type = null;
      type = this.type !== '全部' ?  this.type : null;

      this.$http.get('/frontend/college',{
        params:{
          type,
          keywords:this.keywords,
          page:this.cp,
          pageSize:this.ps,
        }
      })
      .then((res)=>{
        this.schoolListDatas = [];
        this.$nextTick(()=>{
          this.schoolListDatas = res.data.data.rows;
          this.record = parseInt(res.data.data.totalRows);
        })
      })
    },

    //了解更多页面跳转
    learnMore(url){
        window.open(url);
    },


    //分页
    pageNum(record) {
      if(record % 10 !== 0)  {
        return (record - record % 10) / 10 + 1;
      }else {
        return record / 10;
      }
    },


    getSchoolRanking(){
      this.$http.get('/frontend/college/rank')
      .then((res)=>{
        this.schoolUSDatas = res.data.data.US;
        this.schoolQSDatas = res.data.data.QS;
        this.schoolTHEDatas = res.data.data.THE;
      })
    }  
  },

  created(){
    this.getNews();
    this.getSchoolList();
    this.getSchoolRanking();
  }
}

</script>
<style lang="less">

</style>
