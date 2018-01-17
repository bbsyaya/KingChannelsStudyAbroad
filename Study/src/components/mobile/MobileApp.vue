<template>
  <div>
     <Header></Header>
     <NavBar></NavBar>
     <router-view/>
     <Footer></Footer>
  </div>
</template>
<script>
import Header from './common/Header.vue';
import NavBar from './common/NavBar.vue';
import Footer from './common/Footer.vue';

import '../../assets/mobile-style/mobile.less';
export default {
  data() {
    return {

    }
  },

  components:{
    Header,
    NavBar,
    Footer
  },

  created(){
  }
}

</script>
<style lang="less">

</style>
