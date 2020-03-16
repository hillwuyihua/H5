 <style>
	   
   </style>
<template>
  <div class="detail">
   <!-- 详细页 -->
  
	 <section class="totals">
		 <div class="tng_let"><p>统计：￥<span>{{total_price}}<!-- 1333.23 --></span></p><p>共{{this.totaldata.length}}种，运费：不包含邮费</p></div>
		 <div class="tng_rig" :class="{'active':isOK,'no-active':!isOK}" @click="goOrder">结算</div>
	 </section>
	 <div class="topn"><img src="/static/images/nav/rgh.png"><h2>购物车列表</h2></div>
	 <div class="one_items" v-for="(big,n) in json_data" :key="n">
		<section class="change_img">
			<img :src="big.file_path" />
			<!-- <img src="/static/images/test22.jpg" /> -->
		</section>
		<section class="informations">
			<p class="pro_name">{{big.goods_name}}</p>
			<div class="price">
				<p class="redbig l">¥{{big.goods_price}}<!-- ¥225 --></p>
				<p class="redsm l">¥{{big.line_price}}<!-- 666 --></p>
			<!-- <p class="redsm l">¥666</p> -->
			</div>
			<!-- <div class="ings"><p class="l">销量：22</p><p class="r">库存：33</p></div> -->
		</section>
		<section class="typebtn">
			<section class="abc" v-for="(item, i) in big.product" :key="i" >	 
			<div class="show_earb" >
				 <div class="items"  >
					 <span class="l check_tbn"><input type="checkbox" :value="item.goods_spec_id" v-model="chek_item[n]"></span>
					 <p class="l size">规格:{{item.size}},价格:¥{{item.price}},颜色:{{item.color}}</p>
					 <div class="add_carts">
						 <p class="l m" @click="addproduct(n,i,item.num,0)">-</p>
						 <p class="inp l"><input v-model="item.num" type="number" @input="totalData_info(chek_item)"></p>
						 <p class="as r" @click="addproduct(n,i,item.num,1)">+</p>
					 </div>
				 </div>
			
			</div>
			
			</section>
		<span class="l" style="padding:20px 0px 0px 6px"><input type="checkbox" v-model="isn[n]"  @click="toggle(n)"></span>	
		<!-- 
		{{isn}}</br>
		{{chek_item}}</br>
		{{check_item_id}} -->
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
			chek_item:[],//用于全选、反选
			check_item_id:[],//用于全选、反选对比
			isn:[],
			totaldata:[],//把勾选要结算的数据抽出来，进行结算
			total_price:0,//计算总价钱。
			
			
    }
  },
	
	methods: {
		goOrder(){
			if(this.total_price>0){
				this.$router.push({ name: 'order', params: { infomation: this.totaldata }})
				}
			
		},
		addproduct(b_index,index,x,type){//增加或减少按钮
		 //console.log(i+"--"+index+"--"+x+"---"+type)
					 if(type==0&&this.json_data[b_index].product[index].num>1){ //减少
					//	 console.log(this.json_data[i].type[index].num)
						 let n=this.json_data[b_index].product[index].num
						      n-=1
						this.json_data[b_index].product[index].num=n;
					 }else if(type==1){ //增加
						  let ad=this.json_data[b_index].product[index].num
						       ad+=1
						  this.json_data[b_index].product[index].num=ad;
						 
						  
					 }
				//	 console.log(this.json_data);
				
				 this.totalData_info(this.chek_item)//重新计算价钱
		},
		
		/* 删除产品 */
		deleprocuct(n){
			console.log(n)
			if(this.isn[n]==true){ //如果是全选，就删除整个选项
				this.json_data.splice(n,1)
			}else{
				for(let t of this.chek_item[n]){
					let arr=[];
					let product=this.json_data[n].product
					for(let i=0;i<product.length;i++){
						if(t!=product[i].goods_spec_id){
						   arr.push(product[i])
						}
					}
					this.json_data[n].product=arr
				}
				
				/* 对比后两个数组，去除 */
				 for(let i of this.chek_item[n]){
					let index= this.check_item_id[n].indexOf(i)
					 this.check_item_id[n].splice(index,1)
				}
				this.chek_item[n]=[] 
			}
			this.totalData_info(this.chek_item)//重新计算价钱
			//this.data_created(n)
			/* 点击删除按钮后，更新 localStorage数据*/
			let d=JSON.stringify(this.json_data)
			localStorage.setItem("carjson", d );
			
			// console.log(n);
			// console.log(this.json_data);
		},
		
		toggle(n){ //全选、反选
		//console.log(n)
		if(this.chek_item[n].length==this.check_item_id[n].length){
		 	this.chek_item[n]=[];
		}else{
			 this.chek_item[n]=this.check_item_id[n];
		}
			this.totalData_info(this.chek_item)//重新计算价钱
		},

		buying_tbn(){//点击下单按钮。

			
		},
	
	data_created(nn){ //初始化数据全选数组
	
		this.chek_item=[];
		this.isn=[];
		this.check_item_id=[];
			  for(let i of this.json_data){
					   this.chek_item.push([])//产生一个空的二维数组， this.chek_item和 this.check_item_id对比作为全选反选。
					   this.isn.push(false);//全选反选checkbox
					     let arr=[]
					   for(let t of i.product){
						   arr.push(t.goods_spec_id)
					   }
					    this.check_item_id.push(arr)
			  }  
		  console.log(this.json_data)
		//  this.buying_tbn()//执行统计多少个为0的funicton
		  
		  /* 过滤数量为0的产品*/
	},
	totalData_info(val){/* 把要结算选中的数据抽取出来 */	
	       
			let arr=[];
			let newarr=[];
			let all_price=0;
			//for(let obj of this.json_data){
			for(let abc=0;abc<this.json_data.length;abc++){
				let obj=this.json_data[abc]
				let o={};
				for(let ii in obj){
					if(ii=="product"){
						let arr01=[];
						for(let tt  of obj[ii]){
							for(let aa of val[abc]){
								if(tt.goods_spec_id==aa){
									arr01.push(tt)
									all_price+=tt.num*tt.price;//计算总价钱
								}
							}
							
						}
					  o[ii]=arr01
					}else{
						o[ii]=obj[ii]
					}
					
				}
				arr.push(o)
			}
			for(let tb of arr){
				if(tb.product.length>0){
					newarr.push(tb)
				}
			}
			this.totaldata=newarr //把选中的数据放入this.totaldata
            this.total_price=all_price; //把总价钱放入this.total_price
			//console.log(all_price)
			console.log(this.totaldata)
	}
	
	},
	 created(){
		 /* 从本地取数据*/
	   let carjson=localStorage.getItem("carjson");
		this.json_data=JSON.parse(carjson);
		this.data_created()//初始化数据
    
	},
	mounted: function () {
		
	},
	watch:{
	      chek_item: function( val ){ //监听chek_item数组变化
			  console.log(val)
			  /*监听是否全选反选*/
			  let newo=this.check_item_id
			  for(let i=0;i<newo.length;i++){
				 if(val[i].length==newo[i].length){
					 this.isn[i]=true;
				 }else{
					 this.isn[i]=false;
				 }  
			  }  
			/*监听是否全选反选*/	
			this.totalData_info(val)	//把选中的数据全抽出来
	      }
	  },
	  computed: {
              isOK: function () {//监听class的isOK变量变化
                // 登录按钮的可点击验证
                if(this.totaldata.length>0){
                    return true
                  }else{
                    return false
                }
              },
              
            },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	
.detail{
	.totals{
		 height: 0.7rem; border-top: solid 1px #D7D7E5; background: #fff; position: fixed; left:0; right: 0;bottom: 0; 
		 .tng_let{
			 width: 70%; height: 0.6rem; padding-top:0.1rem;  float: left; text-align: right;
			 p{ padding-right:8px;
			   span{ font-size: 0.2rem; color: #FF0000;}
			 }
			 }
		  .tng_rig{ width: 30%; height: 0.7rem; float: left; text-align:center; line-height: 0.7rem; background: #BEBDBA; color: #fff; font-size: 16px;}
	      .active{background:red}
	}
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
			   .check_tbn{ padding: 6px 2px 0 0;}
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
