<template>
  <header class="m-header">
     <section class="m-header-content">
       <section class="m-logo">
         <img src="../../../assets/mobile-images/logo.png">
       </section>


       <section class="m-search">
          <section class="m-search-right">
            <img src="../../../assets/mobile-images/lianmxi.png" alt="">
          </section>
          <section class="m-search-cont">
            <section class="m-search-select">
               <Select v-model="searchType" >
                  <!--<Option value="0" style="font-size: 14px!important">全部</Option>-->
                <Option value="1" >夏校</Option>
                <Option value="2" >交换生院校</Option>
                <Option value="3" >专升本院校</Option>
                <Option value="4" >直升</Option>
                <Option value="5" >插班生</Option>
              </Select>
            </section>

            <input type="text" v-model="keywords">

            <section class="m-search-btn" @click="searchSchool">
              搜索
            </section>
          </section>
       </section>

       
     </section>


  </header>
</template>
<script>

export default {
  data() {
    return {
     searchType: '1',
     keywords:''
    }
  },

  methods:{
    searchSchool() {
      console.log(this.searchType);
      this.$router.push({
        path:'/mobile/xiaxiao',
        query:{
          catId:this.searchType,
          keywords:this.keywords,
        }
      })
    }
  },

  created(){
  }
}

</script>
<style lang="less">



</style>
