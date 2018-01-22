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
       <a title="点击这里咨询客服" href="http://wpa.qq.com/msgrd?v=3&amp;uin=179158105&amp;site=www.cactussoft.cn&amp;menu=yes" target="_blank">
          <li>
           <figure>
             <img src="/static/image/zaixian.png" alt="">
           </figure>
            <p>在线客服</p>
         </li>
       </a>
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

        <section class="m-form" >
          <section class="m-form-item">
            <section class="m-form-item-title">
               意向国家
            </section>
            <Select v-model="formData.country" placeholder="选择意向国家" style="width:5.13rem">
                <Option value="美国">美国</Option>
            </Select>
          </section>


          <section class="m-form-item">
            <section class="m-form-item-title">
               申请学历
            </section>
            <Select v-model="formData.education" placeholder="选择您要申请的学历" style="width:5.13rem">
                <Option value="研究生">研究生</Option>
                <Option value="大学">大学</Option>
                <Option value="高中">高中</Option>
            </Select>
          </section>


          <section class="m-form-item">
            <section class="m-form-item-title">
               在读年级
            </section>
            <Select v-model="formData.grade" placeholder="选择您在读的年级" style="width:5.13rem">
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
            <input type="text" v-model="formData.fullName"  placeholder="请输入您的姓名">
            
          </section>


          <section class="m-form-item">
            <section class="m-form-item-title">
               手 机 号
            </section>
            <input type="text" v-model="formData.mobile" placeholder="请输入您的手机号">
          </section>
        </section>


        <section class="m-form-submit" @click="submit">
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
       formData:{
        country:'',
        education:'',
        grade:'',
        fullName:'',
        mobile:''
       }
    }
  },

  components:{
    Header,
    NavBar,
    Footer
  },

  methods:{
    submit() {
      if(this.valid()) {
         //提交申请
         this.$http.post('/frontend/sign',this.formData)
          .then((res)=>{
          //默认只展示第一条数据即可
           if(res.data.status == 200) {
             this.$Message.success('申请成功！');
           }else {
             this.$Message.warning(res.data.message);
           } 
        })
      }
    },


    valid() {
      let info = ['意向国家','申请学历','在读年级','姓名','手机号'];
      let values = Object.values(this.formData);
      
      //验证非空
      for(let i  = 0; i < values.length ; i ++) {
         if(values[i] === '') {
            this.$Message.warning(info[i] + '不能为空！');
            return false;
         }
      }

      //个性化验证
      if(!/1\w{10}/g.test(this.formData.mobile)) {
         this.$Message.warning('请输入正确的手机号！');
         return false;
      }

      return true;
    }
  },

  created(){
  },
}

</script>
<style lang="less">

</style>
