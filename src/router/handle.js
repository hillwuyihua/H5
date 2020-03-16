import router from './index'
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
 //console.log(to)
  if (to.meta.title) {
    document.title = to.meta.title;
  }
 
 if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限, 定义用户中心需要登录权限
 	  
 	 let user=localStorage.getItem("usreName");
 	  
	 	if(!user){
	 		alert("请先注册登录！")
	 	  next({ 
	        name: 'index'    //强制跳转指定页面       
	     })
	 	 }else{
	 	 	next()
	 	 }
	 
 }else{
 	 next()
 }
})