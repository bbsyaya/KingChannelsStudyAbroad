<template>
  <section class="m-xiaxiao">
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

    <!-- 流程 -->
    <section class="m-section">
       <section class="m-section-cont">
          <b>流程</b>
          <span>待提供的软文</span>
       </section>
    </section>

    <figure class="m-xiaxiao-step">
    	<img src="/static/image/1111.png">
    </figure>


    <!-- 合作院校 -->
    <section class="m-section">
       <section class="m-section-cont">
          <b>合作院校</b>
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


    <section class="m-xiaxiao-search">
    	<span>综合排名↓</span>
    	<span>总费用↓</span>
    	<span>人气↓</span>
    	<span>筛选</span>
    	查询：
    	<input type="" placeholder="请输入查询的院校" name="">
    	<i>查询</i>
    </section>

    <section class="m-xiaxiao-item">
    	<section class="m-xiaxiao-item-logo" :style="{background:'url(/static/image/dakuang.jpg)',backgroundPosition:'center',backgroundSize:'contain'}">

    	</section>
    	<section class="m-xiaxiao-item-detail">
    		<p>新泽西州立罗格斯大学 <span>咨询</span></p>
    		<p>所在州省：北部地區</p>
    		<p>总&nbsp;&nbsp;费&nbsp;&nbsp;用：$:3.66790004万</p>
    		<p>官&nbsp;&nbsp;&nbsp;网：www.rutgers.edu</p>
    		<p>课程内容：大学预备课程（无学分）</p>
    		<p>学校性质：公立</p>
    		<p>录&nbsp;&nbsp;取&nbsp;&nbsp;率：8.2%</p>
    		<p>招生对象：高三或者大学在读， 要求16周岁以上</p>
    		<p>课程时间：7.9-7.29</p>
    		<p>综合排名：141</p>
    		<p>中国教育部是否认证：认证</p>
    		<p>语言要求：建议托福80雅思7.0或者等同</p>
    		<p><i>专业排行&gt;&gt;</i></p>
    	</section>

    </section>

    <table border="1">
		<thead>
			<tr>
				<th>专业</th>
				<th>全美排名</th>
				<th>全球排名</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>电脑工程</td>
				<td>1</td>
				<td>—</td>
			</tr>

			<tr>
				<td>电脑工程</td>
				<td>1</td>
				<td>—</td>
			</tr>

			<tr>
				<td>电脑工程</td>
				<td>1</td>
				<td>—</td>
			</tr>
		</tbody>
	</table>


	<section class="m-xiaxiao-item">
    	<section class="m-xiaxiao-item-logo" :style="{background:'url(/static/image/dakuang.jpg)',backgroundPosition:'center',backgroundSize:'contain'}">

    	</section>
    	<section class="m-xiaxiao-item-detail">
    		<p>新泽西州立罗格斯大学 <span>咨询</span></p>
    		<p>所在州省：北部地區</p>
    		<p>总&nbsp;&nbsp;费&nbsp;&nbsp;用：$:3.66790004万</p>
    		<p>官&nbsp;&nbsp;&nbsp;网：www.rutgers.edu</p>
    		<p>课程内容：大学预备课程（无学分）</p>
    		<p>学校性质：公立</p>
    		<p>录&nbsp;&nbsp;取&nbsp;&nbsp;率：8.2%</p>
    		<p>招生对象：高三或者大学在读， 要求16周岁以上</p>
    		<p>课程时间：7.9-7.29</p>
    		<p>综合排名：141</p>
    		<p>中国教育部是否认证：认证</p>
    		<p>语言要求：建议托福80雅思7.0或者等同</p>
    		<p><i>专业排行&gt;&gt;</i></p>
 
    	</section>

    </section>


    <section class="m-xiaxiao-item">
    	<section class="m-xiaxiao-item-logo" :style="{background:'url(/static/image/dakuang.jpg)',backgroundPosition:'center',backgroundSize:'contain'}">

    	</section>
    	<section class="m-xiaxiao-item-detail">
    		<p>新泽西州立罗格斯大学 <span>咨询</span></p>
    		<p>所在州省：北部地區</p>
    		<p>总&nbsp;&nbsp;费&nbsp;&nbsp;用：$:3.66790004万</p>
    		<p>官&nbsp;&nbsp;&nbsp;网：www.rutgers.edu</p>
    		<p>课程内容：大学预备课程（无学分）</p>
    		<p>学校性质：公立</p>
    		<p>录&nbsp;&nbsp;取&nbsp;&nbsp;率：8.2%</p>
    		<p>招生对象：高三或者大学在读， 要求16周岁以上</p>
    		<p>课程时间：7.9-7.29</p>
    		<p>综合排名：141</p>
    		<p>中国教育部是否认证：认证</p>
    		<p>语言要求：建议托福80雅思7.0或者等同</p>
    		<p><i>专业排行&gt;&gt;</i></p>
    	</section>

    </section>

    <section class="m-xiaxiao-item">
    	<section class="m-xiaxiao-item-logo" :style="{background:'url(/static/image/dakuang.jpg)',backgroundPosition:'center',backgroundSize:'contain'}">

    	</section>
    	<section class="m-xiaxiao-item-detail">
    		<p>新泽西州立罗格斯大学 <span>咨询</span></p>
    		<p>所在州省：北部地區</p>
    		<p>总&nbsp;&nbsp;费&nbsp;&nbsp;用：$:3.66790004万</p>
    		<p>官&nbsp;&nbsp;&nbsp;网：www.rutgers.edu</p>
    		<p>课程内容：大学预备课程（无学分）</p>
    		<p>学校性质：公立</p>
    		<p>录&nbsp;&nbsp;取&nbsp;&nbsp;率：8.2%</p>
    		<p>招生对象：高三或者大学在读， 要求16周岁以上</p>
    		<p>课程时间：7.9-7.29</p>
    		<p>综合排名：141</p>
    		<p>中国教育部是否认证：认证</p>
    		<p>语言要求：建议托福80雅思7.0或者等同</p>
    		<p><i>专业排行&gt;&gt;</i></p>

    	</section>

    </section>

    <section class="m-xiaxiao-item">
    	<section class="m-xiaxiao-item-logo" :style="{background:'url(/static/image/dakuang.jpg)',backgroundPosition:'center',backgroundSize:'contain'}">

    	</section>
    	<section class="m-xiaxiao-item-detail">
    		<p>新泽西州立罗格斯大学 <span>咨询</span></p>
    		<p>所在州省：北部地區</p>
    		<p>总&nbsp;&nbsp;费&nbsp;&nbsp;用：$:3.66790004万</p>
    		<p>官&nbsp;&nbsp;&nbsp;网：www.rutgers.edu</p>
    		<p>课程内容：大学预备课程（无学分）</p>
    		<p>学校性质：公立</p>
    		<p>录&nbsp;&nbsp;取&nbsp;&nbsp;率：8.2%</p>
    		<p>招生对象：高三或者大学在读， 要求16周岁以上</p>
    		<p>课程时间：7.9-7.29</p>
    		<p>综合排名：141</p>
    		<p>中国教育部是否认证：认证</p>
    		<p>语言要求：建议托福80雅思7.0或者等同</p>
    		<p><i>专业排行&gt;&gt;</i></p>
    	</section>

    </section>

    <section class="m-papagation" style="margin-top: -0.2rem">
      <ul>
        <li>&lt;</li>
        <li v-for="(item,index) in 10" :class="{'pag-active':index == 2 ? true : false}">
           {{index + 1}}
        </li>
        <li>></li>
      </ul>
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
