<template>
  <div class="index_item">
     <div class="Search">
			 <input class="serch_input" placeholder="搜索">
			 <img src="/static/images/search.png" />
		 </div>
		 <section class="banner"> <img src="/static/images/banner1.jpg" /></section>
		 <section class="types">
			 <ul>
				 <li><router-link :to="{ path: 'abc',}"><img src="/static/images/t1.png"><p>家居</p></router-link></li>
				 <li><img src="/static/images/t2.png"><p>餐厨</p></li>
				 <li><img src="/static/images/t3.png"><p>饮食</p></li>
				 <li><img src="/static/images/t4.png"><p>配件</p></li>
				 <li><img src="/static/images/t5.png"><p>服装</p></li>
				 <li><img src="/static/images/t6.png"><p>婴儿</p></li>
				 <li><img src="/static/images/t7.png"><p>杂货</p></li>
				 <li><img src="/static/images/t8.png"><p>洗护</p></li>
				 <li><img src="/static/images/t9.png"><p>直通</p></li>
				 </ul>
		 </section>
		 
		 <section class="pro_tyle">
			 <h2>优惠券</h2>
			 <div class="img_yhg"><img src="/static/images/test2.png"></div>
			  <div class="img_yhg"><img src="/static/images/test2.png"></div>
		 </section>
		 
		 <section class="pro_tyle">
			 <h2>团购专区</h2>
			 <ul>
				 <li>
					 <img src="/static/images/test1.png" class="img_item">
					  <section class="imfomations">
							<p class="Name">云端沙发组合</p>
							<p  class="maker">MUJF供应商打造</p>
							<div class="price"><p>原价:$234</p><p>现价:$122</p></div>
							</section>
					 </li>
					  <li>
					 					 <img src="/static/images/test1.png" class="img_item">
					 					  <section class="imfomations">
					 							<p class="Name">云端沙发组合</p>
					 							<p  class="maker">MUJF供应商打造</p>
					 							<div class="price"><p>原价:$234</p><p>现价:$122</p></div>
					 							</section>
					 	</li>
						 <li>
										 <img src="/static/images/test1.png" class="img_item">
										  <section class="imfomations">
												<p class="Name">云端沙发组合</p>
												<p  class="maker">MUJF供应商打造</p>
												<div class="price"><p>原价:$234</p><p>现价:$122</p></div>
												</section>
						</li>
			 </ul>
			 
		 </section>
		 
		 
		  <section class="pro_tyle02">
		 			 <h2>品牌制造商直供</h2>
		 			 <ul>
		 				  <li><div class="lines"><img src="/static/images/test4.png"></div></li>
		 				 <li><div class="lines"><img src="/static/images/test4.png"></div></li>
					   <li><div class="lines"><img src="/static/images/test4.png"></div></li>
						 <li><div class="lines"><img src="/static/images/test4.png"></div></li>
		 			 </ul>
		 			 
		 </section>
		 
		 
		 <section class="pro_tyle03">
		 			 <h2>新品首发</h2>
		 			 <ul>
		 				  <li>
							  <router-link :to="{ name: 'detail',}">
							  <div class="box_item">
							  <p><img src="/static/images/test3.png"></p>
							  <p class="title_">【520新品买1送1】珀莱雅PROYA化妆品专场</p>
							  <p class="ipr">$862</p>
							  </div>
							  </router-link>
						   </li>
		 				  <li>
							  <router-link :to="{ name: 'detail',}">
							  <div class="box_item">
							  <p><img src="/static/images/test3.png"></p>
							  <p class="title_">【520新品买1送1】珀莱雅PROYA化妆品专场</p>
							  <p class="ipr">$862</p>
							  </div>
							  </router-link>
						   </li>
		 				  <li>
							  <router-link :to="{ name: 'detail',}">
							  <div class="box_item">
							  <p><img src="/static/images/test3.png"></p>
							  <p class="title_">【520新品买1送1】珀莱雅PROYA化妆品专场</p>
							  <p class="ipr">$862</p>
							  </div>
							  </router-link>
						   </li>
		 				  <li>
							  <router-link :to="{ name: 'detail',}">
							  <div class="box_item">
							  <p><img src="/static/images/test3.png"></p>
							  <p class="title_">【520新品买1送1】珀莱雅PROYA化妆品专场</p>
							  <p class="ipr">$862</p>
							  </div>
							  </router-link>
						   </li>
		 			 </ul>
		 			 
		 </section>
		 
		 
		 
  </div>
</template>

<script>
	import { Toast } from 'mint-ui';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
			
    }
  },
	 created(){
    //Toast('提示信息');
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.index_item{
	max-width:640px; margin: 0 auto;
	.Search{
		 overflow: hidden; position: relative;
		 img{ position: absolute; top: 0.1rem; width: 0.18rem;height: 0.18rem; right: 5px;}
		.serch_input{ padding: 0.04rem; height: 0.35rem; width: 100%; border: none; background: #EDEDED; text-align:center}
	}
	.banner{ height:4.17rem;
	         img{ height:4.17rem; width: 100%;}
	        }
	.types{ padding: 0.25rem; overflow: hidden;/* border-bottom: solid 2px #EDEBE7; */
	   ul li{ width:20%; height: 0.9rem; text-align: center; float: left;
		     img{ width: 0.46rem; height: 0.43rem}
		 }
	}
	
	.pro_tyle { 
		h2{padding: 0.12rem ; text-align: center; color: #323232; background: #F5F5F5; font-size: 0.18rem;border-bottom: solid 1px #EDEBE7;}
		.img_yhg{ padding: 0 0 1px 0;
	        	img{ width: 6.4rem; height: 1.38rem;}
		       }
		li{ overflow:hidden; padding:0  0.2rem; border-bottom: dashed 1px #ddd ;
    .img_item{ width: 1.355rem; height: 1.355rem; float: left;}
		.imfomations{ padding:0.2rem 0 0 1.5rem;
							.maker{ color: #9999B4;padding-bottom: .1rem ;}
							.price p{  width: 30%; float: left;}
							.price p:nth-child(1){ color: #9999B4; text-decoration: line-through; }    
							.price p:nth-child(2){ color: #A88944; } 
							.Name{ font-size: 0.2rem; padding: .1rem 0;}
		 }
	}
	}
.pro_tyle02 {  overflow: hidden;
		h2{padding: 0.12rem ; text-align: center; color: #323232; background: #F5F5F5; font-size: 0.18rem;border-bottom: solid 1px #EDEBE7;}	
    ul li{ width: 50%;  float: left; overflow: hidden; 
		  .lines{width: 100%; height: 2.13rem;padding-bottom: 1px;border-right: solid 1px #fff; box-sizing: border-box;}
			img{ width: 100%; height: 2.12rem;}
		}
}

.pro_tyle03 { overflow: hidden; 
		h2{padding: 0.12rem ; text-align: center; color: #323232; background: #F5F5F5; font-size: 0.18rem;border-bottom: solid 1px #EDEBE7;}	
    ul {overflow: hidden; background: #9999B4;
			li{ width: 50%;  float: left; overflow: hidden; background: #fff; border-bottom: solid 1px #DDDDDD;
		  .box_item{ 
				text-align: center;width: 100%; height:3.61rem;padding-bottom: 1px;border-right: solid 1px #DDDDDD; box-sizing: border-box;
				.title_{ height: 0.25rem;
  overflow:hidden; text-overflow:ellipsis;-o-text-overflow:ellipsis;-webkit-text-overflow:ellipsis;-moz-text-overflow:ellipsis;
  white-space:nowrap;}
	     .ipr{ color: #E2B246; font-weight: bold;}
				}
			img{ width: 3rem; height: 3rem;}
		}
		}
}




}

</style>
