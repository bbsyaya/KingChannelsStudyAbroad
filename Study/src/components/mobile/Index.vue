<template>
  <section>
    <section class="m-swipe">
      <mt-swipe :auto="3000">
       <mt-swipe-item v-for="(item,index) in sliderDatas" :key="item.baseUrl+index">
        <section class="m-swipe-content" :style="{background:'url('+item.baseUrl +')',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}">
        </section>
      </mt-swipe-item>
     </mt-swipe>
    </section>

    <!-- 留学意义 -->
    <section class="m-section">
       <section class="m-section-cont">
          <b>留学的意义</b>
          <span>出国留学的意义</span>
       </section>
    </section>

    <section class="m-study-yiyi">
       <img src="../../assets/mobile-images/shou.png" alt="">
    </section>

    <!-- 留学动态 -->
    <section class="m-section">
       <section class="m-section-cont">
          <b>留学动态</b>
          <span>“留学”需要专业团队为您保驾护航</span>
       </section>
    </section>

    <section class="m-study-new-act">
      <span>最新动态</span>
      <span>MORE</span>
    </section>

    <section class="m-study-new-act-noimg" v-for="(item,index) in recentNews">
      <h3>
        {{item.title}}
      </h3>

      <p>
        {{item.content}}

        <span @click="jumpToDetailes(item.id)">
          ...MORE
        </span>

        <i>...</i>
      </p>
    </section>


    <section class="m-study-new-act-hasimg">
      <figure >
        <img src="../../assets/mobile-images/zixun.png" alt="">
      </figure>

      <section>
        <h3>
          <span @click="$router.push('/infolist?type='+abroadInfo.type)">留学资讯</span>
          <i>MORE</i>
        </h3>
        <p>
          {{abroadInfo.content}}
        </p>
      </section>
    </section>

    <section class="m-study-new-act-hasimg">
      <figure >
        <img src="../../assets/mobile-images/luqu.png" alt="">
      </figure>

      <section>
        <h3>
          <span>最新录取</span>
          <i @click="$router.push('/infolist?type='+newOffer.type)">MORE</i>
        </h3>
        <p>
          {{newOffer.content}}
        </p>
      </section>
    </section>


    <!-- 留学专区 -->
    <section class="m-section">
       <section class="m-section-cont">
          <b>留学专区</b>
          <span>测试文字</span>
       </section>
    </section>

    <section style="height:0.05rem;"></section>
       
    <ul class="m-study-prefecture">
      <li v-for="(item,index) in dataList" :style="{marginRight: index % 2 == 0 ? '0.2rem':0}">
        <figure>
          <img :src="item.cover" alt="">
          <div>{{item.cname}}</div>
        </figure>

        <h3>
          <span>适合人群</span>
          <i>MORE</i>
        </h3>

        <p>
          {{item.introduce}}
        </p>
      </li>
    </ul>



    <!-- 热门院校推荐 -->
    <section class="m-section" style="margin-top:0.05rem">
       <section class="m-section-cont">
          <b>热门院校推荐</b>
          <span>测试文字</span>

          <i>查看更多 >></i>
       </section>
    </section>

    <ul class="m-hot-schools">
      <li v-for="(item,index) in hotSchoolDatas" @click="learnMore(item.url)" :style="{marginRight: index % 2 == 0 ? '0.2rem':0}">
        <figure>
          <img src="../../assets/mobile-images/kuang.png" alt="">
          <img :src="item.logo" :alt="item.name">
        </figure>
        <section >
           <h3>{{item.name}}</h3>
           <p>{{item.enName}}</p>
           <p><span >了解详情</span></p>
        </section>
      </li>
    </ul>



    <!-- 学校排名 -->
    <section class="m-schools-top">
       <section class="m-schools-top-type">
          美国综合排名<span>TOP20:</span>
       </section>

       <ul class="m-schools-top-list">
          <li v-for="(item,index) in zhRankingDatas" @click="zhRankingDatasIndex = index" :class="{'m-hot-active':index === zhRankingDatasIndex ? true:false}">
            {{item.name}}
          </li>
       </ul>
    </section>

    <section class="m-schools-top">
       <section class="m-schools-top-type">
          美国文理排名<span>TOP20:</span>
       </section>

       <ul class="m-schools-top-list">
          <li v-for="(item,index) in wlRankingDatas" @click="wlRankingDatasIndex = index" :class="{'m-hot-active':index === wlRankingDatasIndex ? true:false}">
            {{item.name}}
          </li>
       </ul>
    </section>

    <section class="m-schools-top">
       <section class="m-schools-top-type">
          美国寄宿高中<span>TOP20:</span>
       </section>

       <ul class="m-schools-top-list">
          <li v-for="(item,index) in jsRankingDatas" @click="jsRankingDatasIndex = index" :class="{'m-hot-active':index === jsRankingDatasIndex ? true:false}">
            {{item.name}}
          </li>
       </ul>
    </section>



    <!-- 公司能力 -->
    <section class="m-section" style="margin-top:0.05rem">
       <section class="m-section-cont">
          <b>公司能力</b>
          <span>测试文字</span>

       </section>
    </section>

    <section class="m-company-power">
      <section class="m-company-power-section1">
        <ul class="m-company-power-section1-left">
          <li>
            <img src="../../assets/mobile-images/nengli1.png" alt="">
            <span class="m-item-metion">说明文字</span>
          </li>
          <li>
            <img src="../../assets/mobile-images/nengli2.png" alt="">
            <span class="m-item-metion">说明文字</span>
          </li>
          <li>
            <img src="../../assets/mobile-images/nengli3.png" alt="">
            <span class="m-item-metion">说明文字</span>
          </li>
        </ul>

        <ul class="m-company-power-section1-right">
          <li>
            <img src="../../assets/mobile-images/nengli4.png" alt="">
            <span class="m-item-metion">说明文字</span>
          </li>
          <li>
            <img src="../../assets/mobile-images/nengli5.png" alt="">
            <span class="m-item-metion">说明文字</span>
          </li>
        </ul>
      </section>

      <section class="m-company-power-section2">
        <section class="m-company-power-section2-left">
          <img src="../../assets/mobile-images/11.jpg" alt="">
          <span class="m-item-metion">说明文字</span>
        </section>
        <ul class="m-company-power-section2-right">
          <li>
            <img src="../../assets/mobile-images/nengli6.png" alt=""><span class="m-item-metion">说明文字</span></li>
          <li>
            <img src="../../assets/mobile-images/nengli7.png" alt=""><span class="m-item-metion">说明文字</span></li>
        </ul>
      </section>

      <ul class="m-company-power-section3">
        <li>
          <img src="../../assets/mobile-images/nengli8.png" alt=""><span class="m-item-metion">说明文字</span></li>
        <li>
          <img src="../../assets/mobile-images/nengli9.png" alt=""><span class="m-item-metion">说明文字</span>
        </li>
      </ul>
    </section>


  </section>
</template>
<script>

import '../../assets/mobile-style/mobile.less';
export default {
  data() {
    return {
      sliderDatas:[{
        baseUrl:'/static/image/mbanner2.jpg',
        link:'',
      },{
        baseUrl:'/static/image/mbanner1.jpg',
        link:'',
      },{
        baseUrl:'/static/image/mbanner3.jpg',
        link:'',
      },{
        baseUrl:'/static/image/mbanner4.jpg',
        link:'',
      }],

      recentNews:[],
      abroadInfo:{},
      newOffer:{},
      dataList:[],
      coverList:['/static/image/11.png','/static/image/22.png','/static/image/33.png','/static/image/44.png','/static/image/55.png'],

      hotSchoolDatas:[],

      zhRankingDatas:[],
      zhRankingDatasIndex:0,
      wlRankingDatas:[],
      wlRankingDatasIndex:0,
      jsRankingDatas:[],
      jsRankingDatasIndex:0
     
    }
  },

  methods:{
    getTrends(){
      this.$http.get('/frontend/article/list')
      .then((res)=>{
        this.recentNews = res.data.data.news;
        this.abroadInfo = res.data.data.information[0];
        this.newOffer = res.data.data.enroll[0];
      })
    },
    jumpToDetailes(id){
      this.$router.push('/infolist/details?id='+id);
      },


    getPrefecture(){
      this.$http.get('/frontend/category/list')
      .then((res)=>{
        res.data.data.forEach((item,index)=>{
          this.$set(item,'cover',this.coverList[index]);
        });
//          console.log(res.data.data);
        this.dataList = res.data.data;
      })
    },
    // 跳转到指定页面
    jumpTo(index){
//        console.log(index);
        this.$router.push({path:this.dataUrl[index],query:{id:index+1}});
    },


    getHotSchool(){
      this.$http.get('/frontend/college/hotRecommend')
      .then((res)=>{
              // console.log(res.data.data);
          this.hotSchoolDatas = res.data.data;
      })
    },
    getSchoolRanking(){
      this.$http.get('/frontend/college/top20')
      .then((res)=>{
        this.zhRankingDatas = res.data.data.usTop;
        this.wlRankingDatas = res.data.data.wlTop;
        this.jsRankingDatas = res.data.data.highTop;
      })
    },
    //了解更多页面跳转
    learnMore(url){
        window.open(url);
    }  

  },
  created(){
    this.getTrends();
    this.getPrefecture();
    this.getHotSchool();
    this.getSchoolRanking();
  },
}

</script>
<style lang="less">

</style>
