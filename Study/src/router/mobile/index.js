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
          }
	    ]
	  }
  ]