<template>
  <section>
    <ul class="m-nav">
      <li 
      v-for="(item,index) in navList" 
      :class="{navActive:index == navActiveIndex ? true:false}"
      @click="toPath(index,item.path)"
      >
         {{item.title}}


         <ul class="m-nav-school" style="height:1.1rem;" v-if="index == 4" v-show="isAboutUsShow">
            <li 
            v-for="(item,index) in aboutList" 
            :class="{'m-nav-school-active':aboutIndex == index ? true:false}"
            @click.stop="toAboutPath(item,index)"
            >{{item.title}}</li>
          </ul>


         <ul class="m-nav-school" v-if="index == 2" v-show="isSchoolListShow">
            <li 
            v-for="(item,index) in schList" 
            :class="{'m-nav-school-active':schIndex == index ? true:false}"
            @click.stop="toSchoolPath(item,index)"
            >{{item.title}}</li>
          </ul>
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
        title:'首页',
        path:'/index'
       },
       {
        title:'合作院校',
        path:'/coopUni'
       },
       {
        title:'留学分类',
        path:'/xiaxiao'
       },
       {
        title:'服务',
        path:'/server'
       },
       {
        title:'关于金桥',
        path:'/aboutUs'
       },
     ],

     schList:[
       {
         title:'夏校',
       },
       {
         title:'交换生',
       },
       {
         title:'升学',
       },
       {
         title:'插班生',
       },
     ],

     aboutList:[
       {
         title:'关于我们',
         path:'/aboutUs'
       },
       {
         title:'联系我们',
         path:'/contactUs'
       },
     ],



     navActiveIndex:0,
     schIndex: -1,
     aboutIndex:-1,
     isSchoolListShow:false,
     isAboutUsShow:false,
    }
  },

  methods:{
    toPath(index,path) {
      this.navActiveIndex = index;
      if(index == 2) {
         this.isSchoolListShow = !this.isSchoolListShow ;
         this.isAboutUsShow = false;
      }else if(index == 4) {
         this.isSchoolListShow = false ;
         this.isAboutUsShow = !this.isAboutUsShow;

      }else {
         this.isSchoolListShow = false;
         this.isAboutUsShow = false;
         this.$router.push('/mobile'+ path);
      }
    },

    //去关于我们
    toAboutPath(item,index) {
      this.aboutIndex = index;
      this.schIndex = -1;
      this.isAboutUsShow = false;
      this.$router.push('/mobile' + item.path);
    },
    
    //去学校
    toSchoolPath(item,index) {
      this.schIndex = index;
      this.aboutIndex = -1;
      this.isSchoolListShow = false;
      this.$router.push({
        path:'/mobile/xiaxiao',
        query:{
          catId:index + 1
        }
      });
    }
  },

  mounted() {
    let path = this.$route.path;
    if(path.indexOf('index') !== -1 ) {
      this.navActiveIndex = 0;
    }else if(path.indexOf('coopUni') !== -1) {
      this.navActiveIndex = 1;
    }else if(path.indexOf('xiaxiao') !== -1) {
      this.navActiveIndex = 2;
    }else if(path.indexOf('server') !== -1) {
      this.navActiveIndex = 3;
    }else if(path.indexOf('aboutUs') !== -1 || path.indexOf('contactUs') !== -1) {
      this.navActiveIndex = 4;
    }
   },

  created(){
  }
}

</script>
<style lang="less">



</style>
