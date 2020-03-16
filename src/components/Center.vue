<template>
  <div class="Center">
      <div class="pers_top">
				<p class="imgs"><img src="/static/images/nav/cb6.png"></p>
				<p class="names">terry</p>
			</div>
			
			<section class="isptye">
				<p>我的订单</p>
				<img src="/static/images/nav/goright.png" class="more" />
				<ul>
					<li><p class="crice">11</p><p><img src="/static/images/nav/pendpay.png" class="pngb" /></p>待付款</li>
					<li><p class="crice">11</p><p><p><img src="/static/images/nav/send.png" class="pngb" /></p>待发货</li>
					<li><p class="crice">11</p><p><p><img src="/static/images/nav/receive.png" class="pngb" /></p>待收货</li>
					<li><p class="crice">11</p><p><p><img src="/static/images/nav/comment.png" class="pngb" /></p>待评价</li>
					<li><p><img src="/static/images/nav/aftersale.png" class="pngb" /></p>售后</li>
					</ul>
			</section>
			<section class="isptye">
				<p>核心服务</p>
				
				<ul>
					<li><p><img src="/static/images/nav/coupon.png" class="pngb" /></p>优惠卷</li>
					<li><p><img src="/static/images/nav/icon_collect.png" class="pngb" /></p>商品收藏</li>
					<li><p><img src="/static/images/nav/footprint.png" class="pngb" /></p>浏览足迹</li>
					<li><p><img src="/static/images/nav/group.png" class="pngb" /></p>我的拼团</li>
					<li><p><img src="/static/images/nav/address.png" class="pngb" /></p>地址管理</li>
					</ul>
			</section>
			
				<section class="isptye">
				<p>必备工具</p>
				<ul>
					<li><p><img src="/static/images/nav/mobile.png" class="pngb" /></p>邦定手机</li>
					<li><p><img src="/static/images/nav/ic_menu_topic_nor.png" class="pngb" /></p>帮助中心</li>
					<li><p><img src="/static/images/nav/feedback.png" class="pngb" /></p>意见反馈</li>
					<li><p><img src="/static/images/nav/customer.png" class="pngb" /></p>联系客服</li>
					<li><p><img src="/static/images/nav/about_us.png" class="pngb" /></p>关于我们</li>
					</ul>
			</section>
			
			
  </div>
</template>

<script>
	
export default {
  name: 'Center',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
	methods: {
	  
	},
	 created(){
	 
	},
	mounted: function () {
		 
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.Center{padding: 0 0 1rem 0;
	  .pers_top{ height: 1.2rem;padding:0.2rem ; background: #C0A36D;
		   .imgs{ float: left;
			 img{ width: 1.2rem; height: 1.2rem;-moz-border-radius: 50%; 
-webkit-border-radius:  50%; border-radius:  50%;}
			 }
			 .names{ padding: 0 0 0 1.5rem; line-height: 1.2rem; font-size: 0.3rem; color: #fff}
		}
		.isptye{ overflow: hidden; padding: 0.2rem; position: relative; border-bottom: solid 1px #E1E3DB;
			.more{ width:0.25rem; height: 0.25rem; position: absolute;top:0.17rem; right: 0.1rem}
			ul{ width: 100%; padding: 0.2rem 0;
			   li{ width: 20%; float: left; text-align: center; position: relative;
				 .crice{ width: 0.25rem; height: 0.25rem; line-height: 0.25rem; color: red; border: solid 1px red; position: absolute; top: -0.20rem; left: 59%;  font-size:5px;
				 -moz-border-radius:50%; -webkit-border-radius:50%; border-radius:50%;}
				   .pngb{ width: 0.3rem; height: 0.3rem;}
				 }
				
			}
		}
}
</style>
