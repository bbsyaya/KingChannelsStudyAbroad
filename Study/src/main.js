import Vue from 'vue'
import App from './App'
import router from './router'

import iview from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iview)

Vue.config.productionTip = false

import axios from "./http.js"
Vue.prototype.$http = axios;


import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//路由跳转如果要跳转到页面的顶部，必须要使用下面的方式，让新的页面跳转到页面顶部

// router.beforeEach((to,from,next)=>{
// 	//根据当前的平台进行路由拦截，如果是移动端，路径没有带mobile则默认去到主页
// 	var href = location.href;
//  console.log(to)
// 	if(isPC()) {
//        if(href.indexOf('mobile') !== -1) {
//           //此时匹配到地址栏的mobile，但是此时是在PC上，则应该去PC的首页
//           next('/');
//        }

// 	}else {
//        if(href.indexOf('mobile') == -1) {
//           //此时没有匹配到地址栏的mobile，但是此时是在mobile上，则应该去mobile的首页
//           next('/mobile');
//        }
// 	}
// 	next();
// })

router.afterEach((to,from,next)=>{
	window.scrollTo(0,0);
})



new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
