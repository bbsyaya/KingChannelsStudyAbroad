<template>
  <section class="m-info">
     <section class="m-info-img">
       <img src="../../assets/mobile-images/banner.jpg">
     </section>

     <!-- 资讯 -->
    <section class="m-section">
       <section class="m-section-cont">
          <b>资讯</b>
          <span>待提供的软文</span>
          <p class="m-bread-nav">
            当前位置：首页 > 留学资讯
          </p>
       </section>
    </section>

    <section class="m-study-new-act">
      <span>留学资讯</span>
    </section>


    <ul class="m-info-list">
      <li v-for="(item,index) in 10">
         <section>
           资讯标题资讯内容资讯标题资讯内容资讯标题资讯内容资讯标题资讯内容资讯标题资讯内容
         </section>
         <section>
          2017-08-15
         </section>
         <section>
          15:40:25
         </section>
      </li>
    </ul>

    <section class="m-papagation">
      <ul>
        <li>&lt;</li>
        <li v-for="(item,index) in 10" :class="{'pag-active':index == 2 ? true : false}">
           {{index + 1}}
        </li>
        <li>></li>
      </ul>
    </section>

    <section class="m-study-new-act">
      <span>最新动态</span>
      <span>MORE</span>
    </section>

    <section class="m-info-newest">
      A WELCOMES ANONYMOUS OR ATTRIBUTED  OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTYASPA WELCOMES ANONYMOUS OR ATTRIBUTED NOTIFICATION OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTYASPA WELCOMES ANONYMOUS OR ATTRIBUTED NOTIFICATION OF ANY QUESTIONAL OR ILLEGAL ACTIVITY <OBJECT>A WELCOMES ANONYMOUS OR ATTRIBUTED  OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTYASPA WELCOMES ANONYMOUS OR ATTRIBUTED NOTIFICATION OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTYASPA WELCOMES ANONYMOUS OR ATTRIBUTED NOTIFICATION OF ANY QUESTIONAL OR ILLEGAL ACTIVITY O</OBJECT>
    </section>

    <section class="m-study-new-act">
      <span>最新录取</span>
      <span>MORE</span>
    </section>

     <section class="m-info-newest">
      A WELCOMES ANONYMOUS OR ATTRIBUTED  OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTYASPA WELCOMES ANONYMOUS OR ATTRIBUTED NOTIFICATION OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTYASPA WELCOMES ANONYMOUS OR ATTRIBUTED NOTIFICATION OF ANY QUESTIONAL OR ILLEGAL ACTIVITY <OBJECT>A WELCOMES ANONYMOUS OR ATTRIBUTED  OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTYASPA WELCOMES ANONYMOUS OR ATTRIBUTED NOTIFICATION OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTYASPA WELCOMES ANONYMOUS OR ATTRIBUTED NOTIFICATION OF ANY QUESTIONAL OR ILLEGAL ACTIVITY O</OBJECT>
    </section>


  </section>
</template>
<script>
export default {
  data() {
    return {

    }
  },

  created(){
  }
}

</script>
<style lang="less">

</style>
