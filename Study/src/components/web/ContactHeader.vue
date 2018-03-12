<template>
  <div class="cooperate-banner-container">
    <div class="cooperate-banner">
      <img src="/static/image/map.jpg" alt="">
    </div>
    <div class="cooperate-text">
      <h4>地址信息</h4>
      <div class="cooperate-text-main">
        <p class="text-bold">中新金桥 北京（Beijing HQ）</p>
        <p>联系电话（Tel）：+8601-82938420</p>
        <p>公司网址（Web）：www.kingchannels.com</p>
        <p>邮件地址（Email）：sales@kingchannels.com</p>
        <p>传真（Fax）：+8601-82781332</p>
        <p>邮编（Zip code）：100096</p>
        <br>
        <p class="text-bold">KingChannels LLC</p>
        <p>TEL：+1 425-614-9123</p>
        <p>Email：usasales@kingchannels.com</p>
        <p>Address：12613 SE 4th PL Bellevue WA 98005</p>
        <p>Zip code：98005</p>
        <br>

        <p class="text-bold">中新金桥 重庆  教育基地</p>
        <p>联系电话（Tel）：</p>
        <p>公司网址（Web）：</p>
        <p>邮件地址（Email）：</p>
        <p>传真（Fax）：</p>
        <p>邮编（Zip code）：</p>
        <br>

        <p class="text-bold">中新金桥 广州分公司</p>
        <p>联系电话（Tel）：</p>
        <p>公司网址（Web）：</p>
        <p>邮件地址（Email）：</p>
        <p>传真（Fax）：</p>
        <p>邮编（Zip code）：</p>
        <br>

        <p class="text-bold">中新金桥 南京分公司</p>
        <p>联系电话（Tel）：</p>
        <p>公司网址（Web）：</p>
        <p>邮件地址（Email）：</p>
        <p>传真（Fax）：</p>
        <p>邮编（Zip code）：</p>
        <br>

        <p class="text-bold">中新金桥 成都分公司</p>
        <p>联系电话（Tel）：</p>
        <p>公司网址（Web）：</p>
        <p>邮件地址（Email）：</p>
        <p>传真（Fax）：</p>
        <p>邮编（Zip code）：</p>
        <br>
      </div>



    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sliderDefault: 0,

      sliderDatas: [{
        baseUrl: '/static/image/banner1.jpg',
        link: '',
      }, {
        baseUrl: '/static/image/banner2.jpg',
        link: '',
      }, {
        baseUrl: '/static/image/banner3.jpg',
        link: '',
      }, {
        baseUrl: '/static/image/banner4.jpg',
        link: '',
      }]
    }
  }
}

</script>
<style lang="less">
// @media screen and (min-width: 1220px) {
  .cooperate-banner-container {
    height: 400px;
    overflow: hidden;
    .cooperate-banner {
      width: 800px;
      float: left;
      .ivu-carousel-dots {
        text-align: right;
        padding-right: 118px;
      }
      .ivu-carousel-dots-inside {
        bottom: 10px;
      }
      .ivu-carousel-dots li button {
        width: 30px;
        height: 4px;
      }
      .ivu-carousel-dots li.ivu-carousel-active>button {
        width: 40px;
      }
    }
    .cooperate-text {
      width: 410px;
      float: right;
      color: #000;
      h4 {
        font-size: 14px;
        text-indent: 10px;
        height: 30px;
        line-height: 30px;
        background-color: #00688b;
        color: #fff;
        letter-spacing: 1px;
      }
    }
    .cooperate-text-main {
      padding: 5px 10px 0;
      height: 370px;
      border-bottom: 1px solid #010101;
      overflow-y: auto;
      h5 {
        font-size: 12px;
        height: 22px;
        line-height: 22px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p{
      	font-size: 12px;
      }
    }
  }
  .text-center{
      text-align: center;
  }
  .text-bold{
      font-weight: bold;
  }
// }

</style>
