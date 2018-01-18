<template>
  <section class="m-coopuni">
     <section class="m-coopuni-img">
       <img src="../../assets/mobile-images/banner4.jpg">
     </section>

     <section class="m-study-new-act" style="margin-top:-0.1rem">
        <span>新闻动态</span>
      </section>


      <section class="m-study-new-act-noimg" style="height: auto;overflow: visible">
	      <h3>
	        Here's the title
	      </h3>

	      <p style="-webkit-line-clamp: 100;">
	        ASPA WELCOMES ANONYMOUS OR ATTRIBUTED  OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTYASPA WELCOMES ANONYMOUS OR ATTRIBUTED NOTIFICATION OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTYASPA WELCOMES ANONYMOUS OR ATTRIBUTED NOTIFICATION OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTY ASPA WELCOMES ANONYMOUS OR ATTRIBUTED  OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTYASPA WELCOMES ANONYMOUS OR ATTRIBUTED NOTIFICATION OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTYASPA WELCOMES ANONYMOUS OR ATTRIBUTED NOTIFICATION OF ANY QUESTIONAL OR ILLEGAL ACTIVITY ON PORT AUTHORITY PROPERTY
	      </p>
    </section>

    <!-- 各大院校 -->
    <section class="m-section">
       <section class="m-section-cont">
          <b>各大院校</b>
          <span>待提供的软文</span>
       </section>
    </section>


    <ul class="m-section-filter">
    	<li
    	@click="activeFilterIndex = index"
    	v-for="(item,index) in filterList"
    	:class="{'m-section-filter-active':index == activeFilterIndex ? true : false}"
    	>{{item.title}}</li>
    </ul>


    <section class="m-coopuni-search">
    	<span>院校查询：</span>
    	<input type="" name="" placeholder="请输入查询的院校">
    	<i>查询</i>
    </section>

    <ul class="m-hot-schools">
      <li v-for="(item,index) in 10" :style="{marginRight: index % 2 == 0 ? '0.2rem':0}">
        <figure>
          <img src="../../assets/mobile-images/kuang.png" alt="">
        </figure>
        <section >
           <h3>澳大利亚国立大学</h3>
           <p>THE AUSTRILIAN National University</p>
           <p><span>了解详情</span></p>
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


     <!-- 最有名的大学 -->
    <section class="m-section" style="margin-bottom:0.2rem">
       <section class="m-section-cont">
          <b>2017最新世界大学排名</b>
          <span>待提供的软文</span>
       </section>
    </section>

    <section class="m-coopuni-top" :style="{background:'url(/static/image/kuang1.jpg)',backgroundPosition:'center',backgroundSize:'contain'}">
    	<h3><span>2017 QS </span><br>世界大学排名</h3>

    	<ul class="m-coopuni-top-list">
    		<li v-for="(item,index) in 15">
    			<span><i :style="{background: index == 0 ? '#fe0200':(index == 1 ? '#03ace8':(index == 2 ? '#f2a83a':'#bbb'))}">{{index + 1}}</i>麻省理工大学</span>
    			<span>美国</span>
    		</li>
    	</ul>

    	<section class="m-coopuni-top-btn">
    		了解更多
    	</section>
    </section>

    <section class="m-coopuni-top" :style="{background:'url(/static/image/kuang1.jpg)',backgroundPosition:'center',backgroundSize:'contain'}">
    	<h3><span>2017 QS </span><br>世界大学排名</h3>

    	<ul class="m-coopuni-top-list">
    		<li v-for="(item,index) in 15">
    			<span><i :style="{background: index == 0 ? '#fe0200':(index == 1 ? '#03ace8':(index == 2 ? '#f2a83a':'#bbb'))}">{{index + 1}}</i>麻省理工大学</span>
    			<span>美国</span>
    		</li>
    	</ul>

    	<section class="m-coopuni-top-btn">
    		了解更多
    	</section>
    </section>

    <section class="m-coopuni-top" :style="{background:'url(/static/image/kuang1.jpg)',backgroundPosition:'center',backgroundSize:'contain'}">
    	<h3><span>2017 QS </span><br>世界大学排名</h3>

    	<ul class="m-coopuni-top-list">
    		<li v-for="(item,index) in 15">
    			<span><i :style="{background: index == 0 ? '#fe0200':(index == 1 ? '#03ace8':(index == 2 ? '#f2a83a':'#bbb'))}">{{index + 1}}</i>麻省理工大学</span>
    			<span>美国</span>
    		</li>
    	</ul>

    	<section class="m-coopuni-top-btn">
    		了解更多
    	</section>
    </section>


  </section>
</template>
<script>
export default {
  data() {
    return {
       filterList:[
       {
       	 title:'全部',
       },
       {
       	 title:'大学',
       },
       {
       	 title:'中专',
       },
       {
       	 title:'艺术学院',
       },
       {
       	 title:'文理学院',
       },
       {
       	 title:'社区大学',
       },
       ],

       activeFilterIndex:0,
    }
  },

  created(){
  }
}

</script>
<style lang="less">

</style>
