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
