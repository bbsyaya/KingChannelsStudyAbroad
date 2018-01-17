<template>
  <section>
    <ul class="m-nav">
      <li 
      v-for="(item,index) in navList" 
      :class="{navActive:index == navActiveIndex ? true:false}"
      @click="navActiveIndex = index"
      >
         {{item.title}}
      </li>
    </ul>
  </section>
</template>
<script>

export default {
  data() {
    return {
     searchType: '1',
     navList:[
       {
        title:'全站首页',
        path:''
       },
       {
        title:'关于金桥',
        path:''
       },
       {
        title:'合作院校',
        path:''
       },
       {
        title:'留学服务',
        path:''
       },
       {
        title:'留学分类',
        path:''
       },
       {
        title:'联系我们',
        path:''
       },

     ],

     navActiveIndex:0
    }
  },

  created(){
  }
}

</script>
<style lang="less">



</style>
