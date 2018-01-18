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

    <section class="m-study-new-act-noimg">
      <h3>
        Here's the title
      </h3>

      <p>
        ASPA WELCOMES ANONYMOUS OR ATTRIBUTED  OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTYASPA WELCOMES ANONYMOUS OR ATTRIBUTED NOTIFICATION OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTYASPA WELCOMES ANONYMOUS OR ATTRIBUTED NOTIFICATION OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTY

        <span>
          ...MORE
        </span>

        <i>...</i>
      </p>
    </section>

    <section class="m-study-new-act-noimg">
      <h3>
        Here's the title
      </h3>

      <p>
        ASPA WELCOMES ANONYMOUS OR ATTRIBUTED  OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTYASPA WELCOMES ANONYMOUS OR ATTRIBUTED NOTIFICATION OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTYASPA WELCOMES ANONYMOUS OR ATTRIBUTED NOTIFICATION OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTY

        <span>
          ...MORE
        </span>

        <i>...</i>
      </p>
    </section>

    <section class="m-study-new-act-hasimg">
      <figure >
        <img src="../../assets/mobile-images/luqu.png" alt="">
      </figure>

      <section>
        <h3>
          <span>留学资讯</span>
          <i>MORE</i>
        </h3>
        <p>
          SPA WELCOMES ANONYMOUS OR ATTRIBUTED  OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTYASPA WELCOMES ANONYMOUS OR ATTRIBUTED NOTIFICATION OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTYASPA WELCOMES ANONYMOUS OR ATTRIBUTED NOTIFICATION OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPER
        </p>
      </section>
    </section>

    <section class="m-study-new-act-hasimg">
      <figure >
        <img src="../../assets/mobile-images/luqu.png" alt="">
      </figure>

      <section>
        <h3>
          <span>留学资讯</span>
          <i>MORE</i>
        </h3>
        <p>
          SPA WELCOMES ANONYMOUS OR ATTRIBUTED  OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTYASPA WELCOMES ANONYMOUS OR ATTRIBUTED NOTIFICATION OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTYASPA WELCOMES ANONYMOUS OR ATTRIBUTED NOTIFICATION OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPER
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
      <li v-for="(item,index) in 5" :style="{marginRight: index % 2 == 0 ? '0.2rem':0}">
        <figure>
          <img src="../../assets/mobile-images/11.png" alt="">
          <div>专升本</div>
        </figure>

        <h3>
          <span>留学资讯</span>
          <i>MORE</i>
        </h3>

        <p>
          A WELCOMES ANONYMOUS OR ATTRIBUTED  OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTYASPA WELCOMES ANONYMOUS OR ATTRIBUTED NOTIFICATION OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTYASPA WELCOMES ANONYMOUS OR ATTRIBUTED NOTIFICATION OF ANY QUESTIONAL OR ILLEGAL ACTIVITY O
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
      <li v-for="(item,index) in 10" :style="{marginRight: index % 2 == 0 ? '0.2rem':0}">
        <figure>
          <img src="../../assets/mobile-images/kuang.png" alt="">
        </figure>
        <section >
           <h3>澳大利亚国立大学</h3>
           <p>THE AUSTRILIAN National University</p>
           <p><span>了解详情</span></p>
        </section>
      </li>
    </ul>



    <!-- 学校排名 -->
    <section class="m-schools-top">
       <section class="m-schools-top-type">
          美国综合排名<span>TOP20:</span>
       </section>

       <ul class="m-schools-top-list">
          <li v-for="(item,index) in 20" :class="{'m-hot-active':index === 0 ? true:false}">
            {{index % 2 == 0 ? '普林顿大学' : '哥伦比亚大学'}}
          </li>
       </ul>
    </section>

    <section class="m-schools-top">
       <section class="m-schools-top-type">
          美国文理排名<span>TOP20:</span>
       </section>

       <ul class="m-schools-top-list">
          <li v-for="(item,index) in 20" :class="{'m-hot-active':index === 0 ? true:false}">
            {{index % 2 == 0 ? '普林顿大学' : '哥伦比亚大学'}}
          </li>
       </ul>
    </section>

    <section class="m-schools-top">
       <section class="m-schools-top-type">
          美国寄宿高中<span>TOP20:</span>
       </section>

       <ul class="m-schools-top-list">
          <li v-for="(item,index) in 20" :class="{'m-hot-active':index === 0 ? true:false}">
            {{index % 2 == 0 ? '普林顿大学' : '哥伦比亚大学'}}
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
        baseUrl:'/static/image/banner1.jpg',
        link:'',
      },{
        baseUrl:'/static/image/banner2.jpg',
        link:'',
      },{
        baseUrl:'/static/image/banner3.jpg',
        link:'',
      },{
        baseUrl:'/static/image/banner4.jpg',
        link:'',
      }]

    }
  },


  created(){
  }
}

</script>
<style lang="less">

</style>
