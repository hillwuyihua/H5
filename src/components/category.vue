<template>
  <div class="category">
      <section class="left">
				 <ul>
					 <li :class="{'active':currt==0}" @click="Get_typeID(0,1069)">女装</li>
					 <li :class="{'active':currt==1}" @click="Get_typeID(1,1069)">男装</li>
					 <li :class="{'active':currt==2}" @click="Get_typeID(2,1069)">男女内衣</li>
					 <li :class="{'active':currt==3}" @click="Get_typeID(3,1069)">箱包皮具</li>
					 <li :class="{'active':currt==4}" @click="Get_typeID(4,1069)">女装</li>
					 <li :class="{'active':currt==5}" @click="Get_typeID(5,1069)">男装</li>
					 <li>男女内衣</li>
					 <li>箱包皮具</li>
					 <li>女装</li>
					 <li>男装</li>
					 <li>男女内衣</li>
					 <li>箱包皮具</li>
				 </ul>
			</section>
			<section class="right">
				 <p class="top_img"><img src="/static/images/test5.png"></p>
				 
				 <section class="item_list">
					 <ul>
						 <li> <p><img src="/static/images/test1.png"></p> <p>连衣裙</p> </li>
						 <li> <p><img src="/static/images/test1.png"></p> <p>连衣裙</p> </li>
						 <li> <p><img src="/static/images/test1.png"></p> <p>连衣裙</p> </li>
						 <li> <p><img src="/static/images/test1.png"></p> <p>连衣裙</p> </li>
						 <li> <p><img src="/static/images/test1.png"></p> <p>连衣裙</p> </li>
						 <li> <p><img src="/static/images/test1.png"></p> <p>连衣裙</p> </li>
						 <li> <p><img src="/static/images/test1.png"></p> <p>连衣裙</p> </li>
						 <li> <p><img src="/static/images/test1.png"></p> <p>连衣裙</p> </li>
						 <li> <p><img src="/static/images/test1.png"></p> <p>连衣裙</p> </li>
						 <li> <p><img src="/static/images/test1.png"></p> <p>连衣裙</p> </li>
						 <li> <p><img src="/static/images/test1.png"></p> <p>连衣裙</p> </li>
						 <li> <p><img src="/static/images/test1.png"></p> <p>连衣裙</p> </li>
					 </ul>
					 
				 </section>
			</section>
  </div>
</template>

<script>
	
export default {
  name: 'category',
  data () {
    return {
      currt: 0,
    }
  },
	methods: {
	   Get_typeID(index,id){  
			 this.currt=index
			 
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
.category{ padding: 0 0 1rem 0;
	
	.left{
		    position:fixed;width: 1.5rem;height: 100%; overflow:auto; background: #EDEDED;
				ul{padding: 0 0 1rem 0;
						li{
						height: .8rem;line-height: .8rem; text-align:center; font-size: 0.18rem;
						overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
						}
					  li.active{ background: #fff}
					}
				 
	}
	.right{ padding: 0 0 0 1.7rem;
	   .top_img{
			    height: 1.52rem; width: 100%;
					img{ height: 1.52rem; width: 100%;}
			 }
		.item_list{ 
			overflow: auto;
			ul li{ width: 1.49rem; height: 1.49rem; float: left; color: #000; text-align: center;
			 img{ width: 1.2rem; height: 1.2rem;}
			}
			}
	}
}
</style>
