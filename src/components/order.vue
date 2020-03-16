<template>
  <div class="order">
	<!-- {{this.$route.params.infomation}} -->
	 <section class="totals">
			 <div class="tng_let"><p>应付总额：<span>￥222(不含费用)</span></p></div>
			 <div class="tng_rig active"  >提交订单</div>
	</section>
	
	
	
	 <section  class="adddress">
		 <span class="in_dre">填写收货地</span>
		 <div class="show_info">
			 <p>收货人:陈扁扁 13544587656</p>
			 <p>收货地址:深圳市龙岗区坂田杨美9巷7号701   ></p>
		 </div>
	 </section>
	 <section class="list_item">
		 <div class="ch_list" v-for="(item, i) in data_info" :key="i" >
			 <section class="big_list">
				 <p class="shimg"><img :src=item.file_path></p>
				  <div class="text_info">
				   <h2> {{item.goods_name}}</h2>
				  </div>	
			 </section>
			 <section class="prolist" v-for="(d, index) in item.product" :key="index">
				 <div class="ghb">
					 <p><span>颜色：</span>{{d.color}}</p>
					 <p><span>单价：¥</span>{{d.price}}</p>
					 <p><span>规格：</span>{{d.size}}</p>
					 <p class="r" style="float: right;">X{{d.num}}件</p>
				 </div>
			 </section>
		 </div>
		 
	 </section>
	 <section class="message">
		 <p class="l">留言：</p>
		 <p class="sent_mess">
			<input class="sbgy"  placeholder="请输入留言"/>
		 </p>
	 </section>
	 <section class="yhjitem">
		 <p class="l">优惠卷：</p>
		 <div class="yhj l"><p>全场红包5元</p><p>全场红包15元</p></div>
	 </section>
	 <section class="alllist">
		<div style="overflow: hidden; padding: 5px 0 0 0;">
			<p  class="l"><span>订单总计：</span>11元</p>
			<p class="r"><span>红包抵扣：</span>11元</p>
		</div> 
		<div  style="overflow: hidden; padding: 5px 0 0 0;">
			<p class="l"><span>运费总计：</span>11元</p>
			<p class="r"><span>订单总额：</span>11元</p>
		</div> 
		
	 </section>
	 
 	 
  </div>
</template>

<script>

export default {
  name: 'order',
  data () {
    return {
	   data_info:this.$route.params.infomation,
    }
  },
   components:{
      
    },
 methods: {
			

	},
	 created(){
          console.log(this.$route.params.infomation)
	},
	mounted: function () {
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.order{
		
		.totals{
			 height: 0.7rem; border-top: solid 1px #D7D7E5; background: #fff; position: fixed; left:0; right: 0;bottom: 0; 
			 .tng_let{
				 width: 70%; height: 0.6rem; padding-top:0.23rem;  float: left; text-align: right;
				 p{ padding-right:8px;
				   span{ font-size: 0.2rem; color: #FF0000;}
				 }
				 }
			  .tng_rig{ width: 30%; height: 0.7rem; float: left; text-align:center; line-height: 0.7rem; background: #BEBDBA; color: #fff; font-size: 16px;}
		      .active{background:red}
		}
		
		.adddress{ position: relative; height:1.4rem; border-bottom: solid 5px #DADADA; background: url(/static/images/address.jpg);background-size:contain; 
		.in_dre{ padding: 5px; background: red; position: absolute; top:0.9rem; left: 0.4rem; color: #fff; cursor: pointer} 
		.show_info{ padding: 0.3rem 0 0 0.2rem}
		}
		.list_item{ overflow: hidden;  
		.big_list{ overflow: hidden}
		.prolist{padding: 0.1rem 0 0 0;
		.ghb{ overflow: hidden}
		p{  float: left; padding-right: 0.1rem;}
		         span{ color: #AEAEAE;}
		        }
		   .ch_list{ background: #fff; overflow: hidden; padding: 0.15rem; border-bottom: dashed 1px #DADADA;
			   .shimg{ width: 1rem; height: 1rem; float: left; border: 1px solid #DADADA;
			          img{ width: 1rem; height: 1rem;}
			   }
			   .text_info{ margin-left:1.2rem; }
		   }
		 }
		 
	.message{padding: 0.15rem  0.15rem 0 0.15rem;	
	  .sbgy{ width: 5.57rem; height: 0.22rem; border: none;}
	}	 
	.yhjitem{padding: 0.15rem;	overflow: hidden
	} 
	.alllist{padding: 0.15rem  0.15rem 1rem  0.15rem; overflow: hidden} 
	 
	 
	 
	}

</style>
