<template>
  <section class="m-xiaxiao">
    <section class="m-coopuni-img">
       <img src="../../assets/mobile-images/banner4.jpg">
     </section>

     <section class="m-study-new-act" style="margin-top:-0.1rem">
        <span>简介</span>
      </section>

      <section class="m-study-new-act-noimg" style="height: auto;overflow: visible">
	      <h3>
	        {{schoolDetail.info.cname}}
	      </h3>

	      <p style="-webkit-line-clamp: 100;margin-bottom:0.1rem">
	        {{schoolDetail.info.introduce}}
        </p>  
    </section>

    <!-- 流程 -->
    <section class="m-section">
       <section class="m-section-cont">
          <b>流程</b>
          <span>待提供的软文</span>
       </section>
    </section>

    <figure class="m-xiaxiao-step">
    	<img src="/static/image/1111.png">
    </figure>


    <!-- 合作院校 -->
    <section class="m-section">
       <section class="m-section-cont">
          <b>合作院校</b>
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


    <section class="m-xiaxiao-search">
    	<span @click="setSort('rank')">综合排名↓</span>
    	<span @click="setSort('cost')">总费用↓</span>
    	<span @click="setSort('follow')">人气↓</span>
    	<span>筛选</span>
    	查询：
    	<input type="" placeholder="请输入查询的院校" name="" v-model="keywords">
    	<i @click="getSchoolInfo">查询</i>
    </section>

    <section v-for="(item,index) in schoolDetail.colleges.rows">
      <section class="m-xiaxiao-item">
          <section class="m-xiaxiao-item-logo" :style="{background:'url(/static/image/dakuang.jpg)',backgroundPosition:'center',backgroundSize:'contain'}">

          </section>
          <section class="m-xiaxiao-item-detail">
            <p>{{item.name}} <span>咨询</span></p>
            <p>所在州省：{{item.area}}</p>
            <p>总&nbsp;&nbsp;费&nbsp;&nbsp;用：${{item.cost}}</p>
            <p>官&nbsp;&nbsp;&nbsp;网：{{item.officialUrl}}</p>
            <p>课程内容：{{item.content}}</p>
            <p>学校性质：{{item.natures}}</p>
            <p>录&nbsp;&nbsp;取&nbsp;&nbsp;率：{{item.acceptanceRate}}%</p>
            <p>招生对象：{{item.target}}</p>
            <p>课程时间：{{item.courseDate}}</p>
            <p>综合排名：{{item.rank}}</p>
            <p>中国教育部是否认证：{{item.authentication}}</p>
            <p>语言要求：{{item.language}}</p>
            <p v-show="!item.isMajorShow" @click="showMajor(item,index)"><i>专业排行&gt;&gt;</i></p>
            <p v-show="item.isMajorShow" @click="showMajor(item,index)"><i>收起专业排行&lt;&lt;</i></p>
          </section>

        </section>

        <table border="1" v-show="item.isMajorShow">
          <thead>
            <tr>
              <th>专业</th>
              <th>全美排名</th>
              <th>全球排名</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(mitem,mindex) in item.majors" v-if="item.majors.length !== 0">
              <td>{{mitem.name}}</td>
              <td>{{mitem.usRank}}</td>
              <td>{{mitem.globalRank}}</td>
            </tr>

            <tr v-show="item.majors.length == 0">
               <td colspan="3">暂无数据</td>
            </tr>
          </tbody>
        </table>
    </section>


    <section class="m-papagation" v-if="record != 0">
      <ul >
        <li>&lt;</li>
        <li 
        v-for="(item,index) in pageNum(record)" 
        :class="{'pag-active':index == pageIndex ? true : false}"
        @click="pageIndex = index;cp = pageIndex + 1;getSchoolInfo()"
        >
           {{index + 1}}
        </li>
        <li>></li>
      </ul>
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
       schoolType:1,   //1 - 夏校  2- 交换生  3 - 专升本  4 - 直升  5 - 插班生
       schoolDetail:{
         colleges:{majors:[]},
         info:{}
       },


       type:'全部',
       keywords:'',
       sort:'',
       ps:5,
       cp:1,


       //分页
       pageIndex:0,
       record:0,
    }
  },

  methods:{
    //获取学校类型的信息
    getSchoolInfo() {
      //处理学校类型type
      let type = null;
      type = this.type !== '全部' ?  this.type : null;
      
      //处理排序
      let sort = null;
      sort = this.sort !== '' ?  this.sort : null;


      this.$http.get('/frontend/category/info',{
        params:{
          cateId:this.schoolType,
          type:type,
          keywords:this.keywords,
          sort:sort,
          pageSize:this.ps,
          page:this.cp
        }
      })
      .then((res)=>{
         this.schoolDetail = res.data.data;

         this.record = parseInt(this.schoolDetail.colleges.totalRows);
         this.schoolDetail.colleges.rows = this.schoolDetail.colleges.rows.map((item)=>{
             return Object.assign({},item,{isMajorShow:false})
         })


      })
    },

    //改变学校分类
    changeSchoolType(index,type){
        this.activeFilterIndex = index;
        this.pageIndex = 0;
        this.type = type;
        this.sort = '';
        this.getSchoolInfo();
    },

    //设置排序方式
    setSort(sort) {
        this.sort = sort;
        this.getSchoolInfo();
    },

    //显示当前学校的专业排行
    showMajor(item,index) {
        item.isMajorShow = !item.isMajorShow;
        this.$set(this.schoolDetail.colleges.rows,index,item)
    },


    //分页
    pageNum(record) {
      if(record % this.ps !== 0)  {
        return (record - record % this.ps) / this.ps + 1;
      }else {
        return record / this.ps;
      }
    },

  },

  created(){
    this.schoolType = this.$route.query.catId || 1;
    this.keywords = this.$route.query.keywords || '';
    this.getSchoolInfo();
  },


  watch:{
    '$route.query.catId':function(nv,ov) {
      this.schoolType = nv;
      this.getSchoolInfo();
    },
    '$route.query.keywords':function(nv,ov) {
      this.keywords = nv;
      this.getSchoolInfo();
    },
  }
}

</script>
<style lang="less">

</style>
