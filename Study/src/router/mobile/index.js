export default [
	  {
	    path: '/mobile',
	    name: '首页',
	    component: resolve => require.ensure([], () => resolve(require('@/components/mobile/Index')), 'index'),
	  }
  ]