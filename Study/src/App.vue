<template>
        <div v-if="isPC">
              <span class="apply-for-btn" @click="personalApply">
                个人留学申请
              </span>
              <span class="online-service-btn" @click="service"> </span>
              <div class="web-container">
                      <!-- header -->
                      <WebHeader></WebHeader>
                      <router-view/>
              </div>
              <div class="web-footer">
                      <!-- footer -->
                      <WebFooter></WebFooter>
              </div>
              <!-- 留学报名-->
              <div class="apply-for-modal" :class="{hideApply:isHideApply}">
                      <h4>留学报名</h4>
                      <div>
                              <div class="form-inline">
                                      <span>意向国家</span>
                                      <div class="form-main">
                                              <Select v-model="applyDatas.country" placeholder="选择意向国家">
                                                      <Option value="美国" style="font-size: 14px!important">美国</Option>
                                              </Select>
                                      </div>
                              </div>
                              <div class="form-inline">
                                      <span>申请学历</span>
                                      <div class="form-main">
                                              <Select v-model="applyDatas.education" placeholder="选择申请学历">
                                                      <Option value="大学" style="font-size: 14px!important">大学</Option>
                                                      <Option value="高中" style="font-size: 14px!important">高中</Option>
                                                      <Option value="研究生" style="font-size: 14px!important">研究生</Option>
                                              </Select>
                                      </div>
                              </div>
                              <div class="form-inline">
                                      <span>在读年级 </span>
                                      <div class="form-main">
                                              <Select v-model="applyDatas.grade" placeholder="选择在读年级">
                                                      <Option value="初一" style="font-size: 14px!important">初一</Option>
                                                      <Option value="初二" style="font-size: 14px!important">初二</Option>
                                                      <Option value="初三" style="font-size: 14px!important">初三</Option>
                                                      <Option value="高一" style="font-size: 14px!important">高一</Option>
                                                      <Option value="高二" style="font-size: 14px!important">高二</Option>
                                                      <Option value="高三" style="font-size: 14px!important">高三</Option>
                                                      <Option value="大一" style="font-size: 14px!important">大一</Option>
                                                      <Option value="大二" style="font-size: 14px!important">大二</Option>
                                                      <Option value="大三" style="font-size: 14px!important">大三</Option>
                                                      <Option value="大四" style="font-size: 14px!important">大四</Option>
                                              </Select>
                                      </div>
                              </div>
                              <div class="form-inline">
                                      <span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</span>
                                      <div class="form-main">
                                              <Input v-model="applyDatas.fullName" placeholder="请输入您的姓名"></Input>
                                      </div>
                              </div>
                              <div class="form-inline">
                                      <span>手 机 号</span>
                                      <div class="form-main">
                                              <Input v-model="applyDatas.mobile" placeholder="请输入您的手机号"></Input>
                                      </div>
                              </div>
                              <div class="apply-submit-btn" @click="submitBtn">
                                      立即报名
                              </div>
                      </div>
                      <div class="apply-close-btn" @click="closeApply"></div>
              </div>
              <!-- 客服服务-->
              <div class="online-service-modal" :class="{hideService:isHideService}">
                      <div class="online-service-header">
                      </div>
                      <ul class="online-service-main">
                              <li>
                                      <a title="点击这里咨询客服" href="http://wpa.qq.com/msgrd?v=3&amp;uin=179158105&amp;site=www.cactussoft.cn&amp;menu=yes" target="_blank">
          <span class="service-logo"></span>
          <span class="service-text">客服1</span>
        </a>
                              </li>
                              <li>
                                      <a title="点击这里咨询客服" href="http://wpa.qq.com/msgrd?v=3&amp;uin=36291722&amp;site=www.cactussoft.cn&amp;menu=yes" target="_blank">
          <span class="service-logo"></span>
          <span class="service-text">客服2</span>
        </a>
                              </li>
                              <li>
                                      <a title="点击这里咨询客服" href="http://wpa.qq.com/msgrd?v=3&amp;uin=48613027&amp;site=www.cactussoft.cn&amp;menu=yes" target="_blank">
          <span class="service-logo"></span>
          <span class="service-text">客服3</span>
        </a>
                              </li>
                      </ul>
              </div>
        </div>


        <div v-else>
             <router-view/>
        </div>
</template>
<script>
import WebHeader from '@/components/web/Header'
import WebFooter from '@/components/web/Footer'
//使用iview的警告框进行个人申请表单验证的提示
import { Modal } from 'iview'
export default {
        data() {
                return {
                        applyDatas: {
                                country: '',
                                education: '',
                                grade: '',
                                fullName: '',
                                mobile: ''
                        },
                        isHideApply: true,
                        isHideService: true,
                        //用于表示个人申请的表单是否为空
                        isDataComplete: false,

                        isPC:true
                }
        },
        components: {
                WebHeader,
                WebFooter
        },
        methods: {
                //客服QQ按钮切换
                service() {
                        this.isHideService = !this.isHideService;
                },
                //个人申请按钮切换
                personalApply() {
                        this.isHideApply = !this.isHideApply;
                        // console.log(this.isHideApply);
                },
                //手动关闭了申请报名的窗口,将数据清空
                closeApply() {
                        this.isHideApply = true;
                        this.applyDatas.country = '';
                        this.applyDatas.education = '';
                        this.applyDatas.grade = '';
                        this.applyDatas.fullName = '';
                        this.applyDatas.mobile = '';
                        // console.log(this.isHideApply);
                },
                checkValue() {
                        //手机校验
                        var mobileReg = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
                        if (this.applyDatas.country == '') {
                                Modal.warning({
                                        title: '警告',
                                        content: '意向国家不能为空',
                                        onOk: () => {
                                                // this.$router.push('/')
                                        }
                                });
                                return;
                        }
                        if (this.applyDatas.education == '') {
                                Modal.warning({
                                        title: '警告',
                                        content: '申请学历不能为空',
                                        onOk: () => {
                                                // this.$router.push('/')
                                        }
                                });
                                return;
                        }
                        if (this.applyDatas.grade == '') {
                                Modal.warning({
                                        title: '警告',
                                        content: '在读年级不能为空',
                                        onOk: () => {
                                                // this.$router.push('/')
                                        }
                                });
                                return;
                        }
                        if (this.applyDatas.fullName == '') {
                                Modal.warning({
                                        title: '警告',
                                        content: '姓名不能为空',
                                        onOk: () => {
                                                // this.$router.push('/')
                                        }
                                });
                                return;
                        }
                        if (!mobileReg.test(this.applyDatas.mobile)) {
                                Modal.warning({
                                        title: '警告',
                                        content: '请输入正确的手机号码',
                                        onOk: () => {
                                                // this.$router.push('/')
                                        }
                                });
                                return;
                        }
                        this.isDataComplete = true;
                },
                submitBtn() {
                        //非空校验
                        this.checkValue();
                        if (this.isDataComplete) {
                                this.$http.post(`/frontend/sign?country=${this.applyDatas.country}&education=${this.applyDatas.education}
                          &grade=${this.applyDatas.grade}&fullName=${this.applyDatas.fullName}&mobile=${this.applyDatas.mobile}
                          `)
                                        .then((res) => {
                                                console.log(res.data.data);
                                                Modal.success({
                                                        title: '提示',
                                                        content: '报名申请已提交',
                                                        //提交完成后关闭报名对话框,防止用户重复提交
                                                        onOk: () => {
                                                                this.closeApply();
                                                        }
                                                })
                                        })
                        }

                }
        },

        created() {
           this.isPC = isPC();

           if(!this.isPC && location.href.indexOf('mobile') == -1) {
              this.$router.push('/mobile');
           }else if(this.isPC && location.href.indexOf('mobile') !== -1){
              this.$router.push('/');
           }
        }

}

</script>
<style lang="less">
.perfecture-each {
  width: 23.5% !important;
}
.clearfix:after {
        display: block;
        clear: both;
        content: ".";
        visibility: hidden;
        height: 0
}

.clearfix {
        zoom: 1;
}

.fl {
        float: left;
}

.fr {
        float: right;
}

.hideApply,
.hideService {
        display: none;
}

// @media screen and (min-width: 1220px) {
.apply-for-modal {
        height: 438px;
        width: 387px;
        border-radius: 4px;
        background-color: #00688b;
        position: fixed;
        left: 22px;
        top: 160px;
        z-index: 999;
        padding: 25px 22px 30px 19px;
        .apply-submit-btn {
                height: 44px;
                color: #fff;
                line-height: 44px;
                text-align: center;
                background-color: #c20009;
                border-radius: 2px;
                cursor: pointer;
        }
        >h4 {
                font-size: 14px;
                margin: 0;
                padding-bottom: 18px;
                border-bottom: 1px solid #fff;
                color: #fff;
        }
        >div {
                padding: 24px 13px 0 11px;
        }
        .apply-close-btn {
                width: 24px;
                height: 24px;
                background: url('/static/image/guanbi.png');
                position: absolute;
                right: -12px;
                top: -12px;
                z-index: 1000;
                cursor: pointer;
        }
        .form-inline {
                border: 1px solid #eee;
                margin-bottom: 10px;
                height: 46px;
                background-color: #fff;
                width: 100%;
                border-radius: 2px;
                color: #000;
                font-size: 14px;
                overflow: hidden;
                >span {
                        display: inline-block;
                        width: 74px;
                        line-height: 35px;
                        height: 35px;
                        margin-top: 5px;
                        text-align: center;
                        float: left;
                        position: relative;

                        &:after {
                                content: '';
                                height: 100%;
                                width: 1px;
                                background-color: #bfbfbf;
                                position: absolute;
                                right: 0;
                                top: 0;
                        }
                }

                .form-main {
                        width: 245px;
                        float: right;
                        .ivu-select-placeholder {
                                font-size: 14px;
                        }
                        .ivu-select-selection {
                                border: none!important;
                                height: 34px;
                                margin-top: 6px;
                        }
                        .ivu-select-visible .ivu-select-selection {
                                box-shadow: none!important;
                        }
                        .ivu-select-single .ivu-select-selection .ivu-select-selected-value {
                                font-size: 14px;
                        }
                        .ivu-input {
                                border: none!important;
                                box-shadow: none!important;
                                height: 34px;
                                margin-top: 6px;
                                font-size: 14px;
                        }
                }
        }
}

.online-service-modal {
        height: 162px;
        width: 130px;
        position: fixed;
        top: 85px;
        right: 22px;
        background-color: #74ad44;
        border-radius: 4px;
        padding: 6px;
}

.online-service-header {
        height: 34px;
        /*outline: 1px solid red;*/
}

.online-service-main {
        background-color: #fff;
        height: 116px;
        border-radius: 4px;
        overflow: hidden;
        color: #000;
        font-size: 14px;
        padding: 8px;
        >li {
                height: 31px;
                width: 100px;
                border: 1px solid #f1f1f1;
                border-left: none;
                border-right: none;
                overflow: hidden;
                cursor: pointer;
                margin-bottom: 4px;
                >a {
                        color: #000;
                }
        }
        .service-logo {
                display: inline-block;
                float: left;
                width: 20px;
                height: 21px;
                background: url('/static/image/qq.png');
                margin: 3px 17px 0 5px;
        }
        .service-text {
                line-height: 30px;
                float: left;
        }
}

.apply-for-btn,
.online-service-btn {
        width: 22px;
        position: fixed;
        top: 78px;
        color: #fff;
        text-align: center;
        font-size: 12px;
        line-height: 14px;
        padding: 5px 0;
        cursor: pointer;
}

.apply-for-btn {
        left: 0;
        z-index: 99;
        background-color: #00688b;
        border-radius: 0 4px 0 0;
        overflow: hidden;
}

.online-service-btn {
        right: 0;
        z-index: 99;
        height: 76px;
        background-color: #74ad44;
        display: inline-block;
        background: url('/static/image/zaixianbg.png') no-repeat 100% 100%;
        background-position: center;
}

.web-footer {
        background-color: #1b1b1b;
}

.web-container {
        width: 1220px;
        margin: 0 auto;
        overflow: hidden;
        .title {
                font-size: 32px;
                color: #000;
                font-weight: normal;
                position: relative;
                text-indent: 13px;
                &:before {
                        content: '';
                        display: inline-block;
                        width: 5px;
                        height: 45px;
                        position: absolute;
                        left: 0;
                        background-color: #00aee9;
                }
                .subhead {
                        font-size: 12px;
                        color: #808080;
                        padding-left: 14px;
                        vertical-align: baseline;
                }
        }
}

// }
// @media screen and (min-width: 768px) and (max-width: 1219px) {
//   .web-container {
//     width: 100%;
//   }
// }
// @media screen and (max-width: 767px) {
//   .web-container {
//     width: 100%;
//   }
// }

</style>
