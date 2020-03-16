<template>
  <div class="nav_list">
		<router-view></router-view>
     <div class="footer">
			 <ul>
				 
				<li @click="change(1)" :class="{ currt: active==1 }"><router-link :to="{ name: 'index',}">
				 <p class="biao fist"></p><p>首页</p></router-link> </li>
			  <li @click="change(2)" :class="{ currt: active==2 }"><router-link :to="{ name: 'category',}">
				 <p class="biao two"></p><p>分类</p></router-link></li>
				<li @click="change(3)" :class="{ currt: active==3 }"><router-link :to="{ name: 'cart',}">
				 <p class="biao fre"></p> <p>购物车</p></router-link> </li>
			  <li @click="change(4)" :class="{ currt: active==4 }"><router-link :to="{ name: 'Center',}">
			  	<p class="biao fro"></p> <p>个人中心</p></router-link> </li>
				
				
			</ul>
		 </div>
   
  </div>
</template>

<script>
	import { Toast } from 'mint-ui';
export default {
  name: 'nav_list',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
			active:1,
    }
  },
	methods: {
			change(o){
				if(o==1){this.active=1}
				if(o==2){this.active=2}
				if(o==3){this.active=3}
				if(o==4){this.active=4}
		}
	},
	 created(){
	
	}, 
	mounted: function () {
		 
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.footer{ height: 0.7rem; padding-top: 0.1rem;  left: 0; right: 0; bottom: 0; position: fixed; background: #fff;
  ul li{ 
		 a{color: #A0A0A0;}
		width: 25%; float: left; text-align: center; 
		p{ margin: 0; padding: 0;height: 0.45rem;}
		.biao{width:0.45rem;height: 0.45rem; margin: 0 auto;}
		.fist{ background:url( /static/images/nav/home.png) ;background-repeat:no-repeat;background-size: 0.45rem  0.45rem;}
		.two{ background:url( /static/images/nav/category.png) ;background-repeat:no-repeat;background-size: 0.45rem  0.45rem;}
		.fre{ background:url( /static/images/nav/cart.png) ;background-repeat:no-repeat;background-size: 0.45rem  0.45rem;}
		.fro{ background:url( /static/images/nav/my.png) ;background-repeat:no-repeat;background-size: 0.45rem  0.45rem;}
		img{ width: 0.45rem; height: 0.45rem;}
		}
		ul li.currt{ 
		    a{color: #AB956D;}
		   .fist{ background:url( /static/images/nav/home@selected.png) ;background-repeat:no-repeat;background-size: 0.45rem  0.45rem;}
		   .two{ background:url( /static/images/nav/category@selected.png) ;background-repeat:no-repeat;background-size: 0.45rem  0.45rem;}
		   .fre{ background:url( /static/images/nav/cart@selected.png) ;background-repeat:no-repeat;background-size: 0.45rem  0.45rem;}
		   .fro{ background:url( /static/images/nav/my@selected.png) ;background-repeat:no-repeat;background-size: 0.45rem  0.45rem;}
		}
}
</style>
