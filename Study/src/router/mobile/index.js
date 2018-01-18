export default [
	  {
	    path: '/mobile',
	    name: '应用容器',
	    component: resolve => require.ensure([], () => resolve(require('@/components/mobile/MobileApp')), 'index'),
	    redirect: '/mobile/index',
	    children:[
          {
          	path: 'index',
		    name: '首页',
		    component: resolve => require.ensure([], () => resolve(require('@/components/mobile/Index')), 'index'),
          },
          {
          	path: 'info',
		    name: '资讯',
		    component: resolve => require.ensure([], () => resolve(require('@/components/mobile/info')), 'other'),
          },
          {
          	path: 'infoDetail',
		    name: '资讯详情',
		    component: resolve => require.ensure([], () => resolve(require('@/components/mobile/InfoDetail')), 'other'),
          },
          {
          	path: 'aboutUs',
		    name: '关于我们',
		    component: resolve => require.ensure([], () => resolve(require('@/components/mobile/AboutUs')), 'other'),
          },
          {
          	path: 'contactUs',
		    name: '联系我们',
		    component: resolve => require.ensure([], () => resolve(require('@/components/mobile/ContactUs')), 'other'),
          },

          {
          	path: 'server',
		    name: '服务',
		    component: resolve => require.ensure([], () => resolve(require('@/components/mobile/Server')), 'other'),
          },
	    ]
	  }
  ]