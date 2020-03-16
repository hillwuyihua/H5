import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/nav' //首页
import index from '@/components/index'//首页默认页
import category from '@/components/category'//分类
import cart from '@/components/cart'//购物车
import Center from '@/components/Center'//个人中心
import detail from '@/components/detail'//详细页
import buyNow from '@/components/buyNow'//下单页
import order from '@/components/order'//确认定单
import Error from '@/components/404'//下单页
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
     // name: 'nav',
      component: Home,
			 children: [
									{ path: '',
										name: 'index',
										component: index,
										 meta: {
											 title: '首页',
											// requireAuth: true, // 判断该路由是否需要登录权限
										}
									},
									{ path: 'category',
										name: 'category',
										component: category,
										 meta: {
											 title: '分类',
											 requireAuth: true, // 判断该路由是否需要登录权限
										}
									},
									{ path: 'cart',
										name: 'cart',
										component: cart,
										 meta: {
											 title: '购物车',
											// requireAuth: true, // 判断该路由是否需要登录权限
										}
									},
									{ path: 'Center',
										name: 'Center',
										component: Center,
										 meta: {
											 title: '个人中心',
											// requireAuth: true, // 判断该路由是否需要登录权限
										}
									},
	 ]
    },
	{ path: '/detail',
	  name: 'detail',
	  component: detail,
	   meta: {
		  title: '详细页',
		}
	},
	{ path: '/buyNow',
	  name: 'buyNow',
	  component: buyNow,
	   meta: {
		  title: '购物车中心',
		}
	},
	{ path: '/order',
	  name: 'order',
	  component: order,
	   meta: {
		  title: '确认下单',
		}
	},
	
	{ path: '*',
	  component: Error,
	   meta: {
		  title: '404错误!!',
		}
	},
	
  ]
})
