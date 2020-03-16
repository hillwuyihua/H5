<template>
  <div class="detail">
   <!-- 详细页 -->
	 
	 <div class="topn"><img src="/static/images/nav/rgh.png"><h2>购物车列表</h2></div>
	 <div class="one_items" v-for="(big,n) in json_data" :key="n">
		<section class="change_img">
			<img :src="big.file_path" />
			<!-- <img src="/static/images/test22.jpg" /> -->
		</section>
		<section class="informations">
			<p class="pro_name">{{big.goods_name}}</p>
			<div class="price"><p class="redbig l">{{big.goods_price}}<!-- ¥225 --></p>
			<!-- <p class="redsm l">¥666</p> -->
			</div>
			<!-- <div class="ings"><p class="l">销量：22</p><p class="r">库存：33</p></div> -->
		</section>
		<section class="typebtn">
		  <div class="colors">
				</div>
			<section class="abc" v-for="(item, i) in big.product" :key="i" v-if="item.type.length>0">	
			<div class="tops_title"><p  class="btns" :class="{active:currt[n]==i}">{{item.name}}</p></div>
			 
			<div class="show_earb" >
				 <div class="items"  v-for="(list, index) in item.type" :key="index">
					 <p class="l size">规格:{{list.size}},¥{{list.price}}</p>
					 <div class="add_carts">
						 <p class="l m" @click="addproduct(n,i,index,list.num,0)">-</p>
						 <p class="inp l"><input v-model="list.num"></p>
						 <p class="as r" @click="addproduct(n,i,index,list.num,1)">+</p>
					 </div>
				 </div>
			
			</div>
			
			</section>
		<p class="dele_pro" @click="deleprocuct(n)">删除产品</p>
		</section>
	</div>	
		
		
		<p class="buying" @click="buying_tbn">下单</p>
		
  </div>
</template>

<script>
	
       

export default {
  name: 'detail',
  data () {
    return {
			json_data:[],
			currt:[],
			count_list:1,
			
			
    }
  },
	
	methods: {
		addproduct(b_index,i,index,x,type){//增加或减少按钮
		 //console.log(i+"--"+index+"--"+x+"---"+type)
					 if(type==0&&this.json_data[b_index].product[i].type[index].num>0){ //减少
					//	 console.log(this.json_data[i].type[index].num)
						 let n=this.json_data[b_index].product[i].type[index].num
						      n-=1
						this.json_data[b_index].product[i].type[index].num=n;
					 }else if(type==1){ //增加
						  let ad=this.json_data[b_index].product[i].type[index].num
						       ad+=1
						  this.json_data[b_index].product[i].type[index].num=ad;
					 }
				//	 console.log(this.json_data);
		},
		
		/* 删除产品 */
		deleprocuct(n){
			this.json_data.splice(n,1)
			/* 点击删除按钮后，更新 localStorage数据*/
			let d=JSON.stringify(this.json_data)
			localStorage.setItem("carjson", d );
			// console.log(n);
			// console.log(this.json_data);
		},
		buying_tbn(){//点击下单按钮。
		/* 去除重复数据需要执行5次 */
		   for(let i=0;i<30;i++){
			   this.remove_rept()
		   }
			
		
			
			
		},
	
		remove_rept(){//去除购物车里数据为0的数据
		 let ds=this.json_data;  
		   for(let t=0;t<ds.length;t++){
		  	 if(ds[t].product.length==0){
		  		 ds.splice(t,1)
		  	 }else{ 
		  	 for(let g=0;g<ds[t].product.length;g++){
		  		 if(ds[t].product[g].type.length==0){
		  			  ds[t].product.splice(g,1)
		  		 }else{
		  			  for(let h=0;h<ds[t].product[g].type.length;h++){
		  			 		 if(ds[t].product[g].type[h].num==0){
		  						
		  						 // console.log(h)
		  			 		   ds[t].product[g].type.splice(h,1)
		  			 		 }
		  			 }
		  		 }
		  		
		  	   }
		  	 } 
		   } 
		  	
		  console.log(this.json_data);
				
}
	},
	 created(){
		 /* 从本地取数据*/
	   let carjson=localStorage.getItem("carjson");
	   this.json_data=JSON.parse(carjson);
       this.buying_tbn()//执行统计多少个为0的funicton
	   
	   /* 过滤数量为0的产品*/

	},
	mounted: function () {
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	
.detail{
	.one_items{ margin: 0.15rem auto; max-width: 640px; border: solid 1px #E2E1E1;-moz-border-radius:10px; -webkit-border-radius: 10px; border-radius:10px; width: 98%;}
	.btn_footer{ height:0.5rem; position: fixed; bottom: 0; left: 0; right: 0; 
	ul{ overflow: hidden;
	  li{ height: 0.5rem; line-height: 0.5rem; text-align: center; float: left;color: #fff; background: #fff;}
		li.add{ background: #F5A312;width: 40%; }
		li.now{ background: #FF485E;width: 40%; }
		li.f{ width: 20%; position: relative;
		    span{width: 0.2rem; height: 0.2rem;line-height:0.2rem; font-size: 0.1rem; color: red; -moz-border-radius:50%; -webkit-border-radius: 50%; border-radius: 50%;  position: absolute;top:8%; left: 68%; border: solid 1px red; }
			img{ width: 0.3rem; height: 0.3rem; padding-top: 0.1rem;}
		}
	}
	}
	.dele_pro{  margin: 15px 0 0 15px;   
    width: 0.73rem; height: 0.32rem; line-height: 0.32rem;border-radius: 0.3em; float: left;text-align: center; color: #fff;
    margin-right: 5px; background: #006CFE;}

	.topn{
		 position: relative;
		h2{ height: 0.45rem; line-height: 0.45rem;font-size: 0.20rem;  border-bottom: solid 2px #F3F3F9; text-align: center;}
	  img{ position: absolute; top: 7px; left: 1px; width: 0.3rem; height: 0.3rem;}
	}
	
	.change_img{
	  	width: 1.4rem; height: 1.4rem; margin: 0 auto; text-align: center;
			img{ max-width: 1.4rem; max-height: 1.4rem;}
		}
		.informations{ overflow: hidden; border-bottom:  dashed 1px #ccc;
		   .pro_name{ font-size: 0.22rem; padding: 0.10rem }
			 .price{padding: 0.05rem 0.10rem;  overflow: hidden;
			    .redbig{ color: red;font-size: 0.25rem;}
			    .redsm{ color: #999999;font-size: 0.2rem; padding:0.05rem 0 0 0.1rem; text-decoration: line-through;}
			 }
			 .ings{padding: 0.05rem 0.12rem;  overflow: hidden;    color: #999999;}
		}
		.typebtn{padding: 0.15rem 0; overflow: hidden;
		.colors{ overflow: hidden; padding-bottom: 0.2rem;
		.btns{ width: 0.63rem; height: 0.32rem; line-height:0.32rem; -moz-border-radius: 0.3em; -webkit-border-radius: 0.3em; border-radius: 0.3em;  float: left; text-align:center; background: #F3F3F9; margin-right: 5px;}
		.active{ background: #FF0000; color: #fff;}
		}
		.abc{ padding: 0.15rem 0 0 0; border-bottom: solid 1px #D7D7E5; overflow: hidden}
		.tops_title{ overflow: hidden;
		.btns{ background: #9C9C9C; color: #fff;  margin-bottom: 15px; height: 0.32rem; line-height:0.32rem;   text-align:center; }
		}
		
		 .show_earb{ padding:0 0.15rem;
			 
			 .items{  overflow: hidden; padding-bottom:0.15rem; /* border-bottom:dashed  1px #D7D7E5; */
			   .size{ height: 0.33rem;  line-height: 0.33rem }
				 .add_carts{ width: 1.5rem; height: 0.33rem; float: right; border:solid 1px #D7D7E5;-moz-border-radius: 0.3em; -webkit-border-radius: 0.3em; border-radius: 0.3em;
				  .m{ width: 0.33rem;height: 0.33rem;line-height: 0.33rem; text-align:center;}
					.as{ width: 0.33rem;height: 0.33rem;line-height: 0.33rem; text-align:center;}
					.inp{
						width: 0.8rem;height: 0.33rem;line-height: 0.33rem; text-align:center; border-right:solid 1px #D7D7E5;border-left:solid 1px #D7D7E5;
						input{width: 0.8rem;height: 0.30rem; border: none; text-align: center}
						}
				 }
			 }
			 
			 
		 }
		.ishows{display: block; }
		}
		.pro_infor{ overflow: hidden;max-width: 640px;margin: 0 auto;
		 h2{ padding: 0.15rem; border-bottom: solid 2px #ccc;}
			.imglist{ max-width: 640px; padding-bottom: 0.5rem;
				img{ width: 100%;}
			}
		}
		.buying{
			background: red;width: 0.63rem; height: 0.32rem;
			line-height: 0.32rem;border-radius: 0.3em; margin: 20px auto; text-align: center; color: #fff; }
}
</style>
