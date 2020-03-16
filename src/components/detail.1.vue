<template>
  <div class="detail">
   <!-- 详细页 -->
	 <div class="btn_footer">
		 <ul>
			 <li class="f"><img src="/static/images/nav/ic_menu_shoping_nor.png"><span class="inth_cart">{{carNum}}</span></li>
			 <li class="add" @click="addcar_btn(0)">加入购物车</li>
			 <li class="now" @click="addcar_btn(1)">立即购买</li>
			 <!-- <router-link :to="{ name: 'buyNow',}"><li class="now">立即购买</li></router-link> -->
			 </ul>
	 </div>
	 <div class="topn"><img src="/static/images/nav/rgh.png"><h2>商品详情</h2></div>
		<section class="change_img">
			<img src="/static/images/test22.jpg" />
		</section>
		<section class="informations">
			<p class="pro_name">2019夏新品很仙的法国小众女神连衣裙两件套</p>
			<div class="price"><p class="redbig l">¥225</p><p class="redsm l">¥666</p></div>
			<div class="ings"><p class="l">销量：22</p><p class="r">库存：33</p></div>
		</section>
		<section class="typebtn">
		  <div class="colors">
				<p class="btns" :class="{active:currt==i}" v-for="(item, i) in json_data[0].product" :key="i" @click="Get_tcurrt(i)">{{item.name}}</p>
			
				</div>
			<div class="show_earb" :class="{ishows:currt==i}" v-for="(item, i) in  json_data[0].product" :key="i">
				 <div class="items"  v-for="(list, index) in item.type" :key="index">
					 <p class="l size">规格:{{list.size}},¥{{list.price}}</p>
					 <div class="add_carts">
						 <p class="l m" @click="addproduct(i,index,list.num,0)">-</p>
						 <p class="inp l"><input v-model="list.num"></p>
						 <p class="as r" @click="addproduct(i,index,list.num,1)">+</p>
					 </div>
				 </div>
			
			</div>
			
		
		</section>
		
		<section class="pro_infor">
			<h2>商品描述</h2>
			<div class="imglist">
				<img src="/static/images/test33.jpg" />
				<img src="/static/images/test44.jpg" />
			</div>
			
		</section>
		
		
		
  </div>
</template>

<script>
	
  var jsons = [
      { 
				"goodsID":"13",
                "file_path":"https://img.gcy168.com/mall/Upload/uploads/2017-06/594cc701d387e.jpg",
				"goods_name":"2019夏新品很仙的法国小众女神连衣裙两件套--15",
				"goods_price": "5555",
				"line_price": "777.0",
				"product":[
					  {
					  	 "name": "red3",
					  	 "type": [ 
					  			 { goods_spec_id: "111", price: "13", size: "15cm",weight:10,stock_num:"4",num:0 },
					  			 { goods_spec_id: "222", price: "14", size: "16cm",weight:10,stock_num:"4",num:0 }
					  				 ]
					  },
						{
						  "name": "blue3",
						  "type": [
								    { goods_spec_id: "555", price: "23", size: "115cm",weight:10,stock_num:"4",num:0 }, 
								    { goods_spec_id: "666", price: "24", size: "116cm",weight:10,stock_num:"4",num:0  },
								    { goods_spec_id: "777", price: "25", size: "117cm",weight:10,stock_num:"4",num:0  }
								  ]
						}
						,
						{
						  "name": "yellow3",
						  "type": [
								    { goods_spec_id: "555", price: "23", size: "115cm",weight:10,stock_num:"4",num:0 }, 
								    { goods_spec_id: "666", price: "24", size: "116cm",weight:10,stock_num:"4",num:0  },
								    { goods_spec_id: "777", price: "25", size: "117cm",weight:10,stock_num:"4",num:0  },
									{ goods_spec_id: "777", price: "25", size: "117cm",weight:10,stock_num:"4",num:0  },
									{ goods_spec_id: "777", price: "25", size: "117cm",weight:10,stock_num:"4",num:0  }
								  ]
						},
											
						
					 
				 ]
       
      }
			
    ]          
import { Toast } from 'mint-ui';
export default {
  name: 'detail',
  data () {
    return {
			json_data:jsons,
			currt:0,
			carNum:0,//购物车图标数据初始为0
			
    }
  },
	
	methods: {
	   Get_tcurrt(index){   //切换菜单
			 this.currt=index
		 },
		 addproduct(i,index,x,type){//增加或减少按钮
		  //console.log(i+"--"+index+"--"+x+"---"+type)
			 if(type==0&&this.json_data[0].product[i].type[index].num>0){ //减少
			//	 console.log(this.json_data[i].type[index].num)
				 let n=this.json_data[0].product[i].type[index].num
				      n-=1
				this.json_data[0].product[i].type[index].num=n;
			 }else if(type==1){ //增加
				  let ad=this.json_data[0].product[i].type[index].num
				       ad+=1
				  this.json_data[0].product[i].type[index].num=ad;
			 }
			 // console.log(this.json_data);
		 },
		
		addcar_btn(s){//点击加入购物车和立即购买按钮
		    let iarr=this.json_data;
			let sss=0;
			 for(let ii of iarr[0].product){
				 for(let tt of ii.type){
					 if(tt.num!=0){
						 sss=1;
						 break
					 }
				 }
				 
			 }
			 if(sss==0){
				  Toast('请选择购买数量!');
				 //alert("请选择购买数量")
				 return false;
			 }
			//this.remove_repeat()
			//return false;
		 	let carjson=localStorage.getItem("carjson");
			 if(!carjson){
				// console.log("111")
				let d=JSON.stringify(this.json_data)
				localStorage.setItem("carjson", d );
			}else{
				// console.log("222")
			let ijsons=JSON.parse(carjson)
			   let arr=[];
			    for(let i of ijsons){ //如果数据存在id,就要删除原来的数据，不能重复。
					//arr.push(i)
					if(i.goodsID!=this.json_data[0].goodsID){
						arr.push(i)
					}
				}
				arr.push(this.json_data[0]);
				 console.log(arr)
			   localStorage.setItem("carjson", JSON.stringify(arr) );
			} 
			//统计购物车的产品个数 
			 this.getProNum()
			 if(s==1){
              this.$router.push({name:'buyNow'})
			 }
		},
		
		 getProNum(){//统计购物车的产品个数
			 let cNum=localStorage.getItem("carjson");
			 //console.log(JSON.parse(cNum).length)
			 if(cNum){
				 let len=JSON.parse(cNum).length;
				this.carNum=len; 
			 }
			
		},
		
		remove_repeat(){//去除重复数组，现在不用。
			let aa=this.json_data;
			for(let i of aa[0].product){
				let arr=[];
				for(let bc=0;bc<i.type.length;bc++){
					if(i.type[bc].num>0){
						arr.push(i.type[bc])
					}
				}
				i.type=arr;
				
			} 
			console.log(this.json_data)
			console.log(aa)
			
		}
		
	},
	 created(){
	 
	},
	mounted: function () {
		 this.getProNum()
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.detail{
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
	.topn{
		 position: relative;
		h2{ height: 0.45rem; line-height: 0.45rem;font-size: 0.20rem;  border-bottom: solid 2px #F3F3F9; text-align: center;}
	  img{ position: absolute; top: 7px; left: 1px; width: 0.3rem; height: 0.3rem;}
	}
	
	.change_img{
	  	width: 6.4rem; height: 6.4rem; margin: 0 auto; text-align: center;
			img{ max-width: 6.4rem; max-height: 6.4rem;}
		}
		.informations{ overflow: hidden; border-bottom: solid 2px #ccc;
		   .pro_name{ font-size: 0.22rem; padding: 0.10rem }
			 .price{padding: 0.05rem 0.10rem;  overflow: hidden;
			    .redbig{ color: red;font-size: 0.25rem;}
			    .redsm{ color: #999999;font-size: 0.2rem; padding:0.05rem 0 0 0.1rem; text-decoration: line-through;}
			 }
			 .ings{padding: 0.05rem 0.12rem;  overflow: hidden;    color: #999999;}
		}
		.typebtn{padding: 0.15rem; overflow: hidden;
		.colors{ overflow: hidden; padding-bottom: 0.2rem;
		.btns{ width: 0.63rem; height: 0.32rem; line-height:0.32rem; -moz-border-radius: 0.3em; -webkit-border-radius: 0.3em; border-radius: 0.3em;  float: left; text-align:center; background: #F3F3F9; margin-right: 5px;}
		.active{ background: #FF0000; color: #fff;}
		}
		 .show_earb{ display: none;
			 .items{  overflow: hidden; padding-bottom:0.15rem; 
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
}
</style>
