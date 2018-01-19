<template>
  <div>
     <Header></Header>
     <NavBar></NavBar>
     <router-view/>
     <Footer></Footer>

     <ul class="m-flex-menu">
       <li @click="modalShow = !modalShow">
         <figure>
           <img src="/static/image/baoming.png" alt="">
         </figure>
         <p>立即报名</p>
       </li>
       <li>
         <figure>
           <img src="/static/image/zaixian.png" alt="">
         </figure>
         <p>在线客服</p>
       </li>
       <a href="#">
         <li>
           <figure>
             <img src="/static/image/dingbu.png" alt="">
           </figure>
           <p>回顶部</p>
         </li>
       </a>
     </ul>


     <section class="m-dialog" v-show="modalShow">
        <span class="m-dialog-close" @click="modalShow = false">
          <img src="/static/image/guanbi.png" alt="">
        </span>
        <h2>
          留学报名
        </h2>

        <section class="m-form">
          <section class="m-form-item">
            <section class="m-form-item-title">
               意向国家
            </section>
            <Select v-model="model1" placeholder="选择意向国家" style="width:2.5rem">
                <Option value="美国">美国</Option>
            </Select>
          </section>


          <section class="m-form-item">
            <section class="m-form-item-title">
               申请学历
            </section>
            <Select v-model="model1" placeholder="选择您要申请的学历" style="width:2.5rem">
                <Option value="研究生">研究生</Option>
                <Option value="大学">大学</Option>
                <Option value="高中">高中</Option>
            </Select>
          </section>


          <section class="m-form-item">
            <section class="m-form-item-title">
               在读年级
            </section>
            <Select v-model="model1" placeholder="选择您在读的年级" style="width:2.5rem">
                <Option value="研三">研三</Option>
                <Option value="研二">研二</Option>
                <Option value="研一">研一</Option>
                <Option value="大四">大四</Option>
                <Option value="大三">大三</Option>
                <Option value="大二">大二</Option>
                <Option value="大一">大一</Option>
                <Option value="高三">高三</Option>
                <Option value="高二">高二</Option>
                <Option value="高一">高一</Option>
            </Select>
          </section>


          <section class="m-form-item">
            <section class="m-form-item-title">
               姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名
            </section>
            <input type="text"  placeholder="请输入您的姓名">
            
          </section>


          <section class="m-form-item">
            <section class="m-form-item-title">
               手 机 号
            </section>
            <input type="text" placeholder="请输入您的手机号">
          </section>
        </section>


        <section class="m-form-submit">
          立即报名
        </section>


     </section>
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
       modalShow:false,
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
