<template>
	<view style="margin-top: 40upx;"> 
		<navTab ref="navTab" :tabBars="tabBars"></navTab>
		<swiper style="min-height: 100vh;" :duration="400" :current="currentTab" @change="swiperTab" >
			<swiper-item > 
				<scroll-view style="background: #070d25;margin-top: 120upx" >
						<view style="display: flex;justify-left: space-between;">
							<view  class="box">理财包</view>
							<view class="box">{{res.lun?res.lun:'爆款'}}</view>
							<view class="box">一触即发</view>
						</view>
						<view style="width: 100%;"> 
							<image src="../../static/img/line.png" style="height: 1upx;width: 100%;margin: 20upx auto;"></image> 
						</view>
						<view style="display: flex;justify-content: space-between;padding: 20upx 40upx;">
							<view class="textnav">参与币种</view>
							<view class="textnav">结束时间</view>
							<view class="textnav">目标金额</view>
						</view>
						<view style="display: flex;justify-content: space-between;padding: 20upx 40upx;">
							<view class="textnav1" >{{res.coin}}</view>
							<view class="textnav1" >{{res.begin_at?res.begin_at:res.end_at}}</view>
							<view class="textnav1" >{{res.num}}</view>
						</view>
						<view style="width: 100%;" v-if="show">
							<view  style="width: 55%;height: 80upx;display: flex;justify-content: space-between;margin: 0 auto;margin-top: 40upx;">
								<image @click="reduce" style="width: 50upx;margin-top: 20upx;height: 50upx;" src="../../static/img/reduce.png"></image>
								<input class="textadd" v-model="number" ></input>
								<image @click="add" style="width: 50upx;height: 50upx;margin-top: 20upx;" src="../../static/img/add.png"></image>
							</view>
							
							<view  style="display: flex;justify-content: space-between;padding: 40upx;margin-top: 40upx;">
								<view class="listbox" :class="{ active:index==isActive }" v-for="(item,index) in data" @tap="getchang(index,item.periods)" >{{item.periods}}期（{{item.rate}}）</view>
							</view>
							
							<view style="width: 100%;">
								<image src="../../static/img/line.png" style="height: 1upx;width: 100%;margin: 20upx auto;"></image> 
							</view>
							
							<view style="position: relative;margin: 40upx 0 0 40upx;height: 40upx;">
								<image style="width: 60upx;height: 60upx;position: absolute;top: -50%;margin-top: 15upx;" src="../../static/img/balance.png"></image>
								<text style="color: #8e8e8e;position: absolute;margin-left: 80upx;top: 0upx">账户余额：</text>	
							</view>	
							
							<view style="margin:20upx;">
								<view class="tex">{{message==null?0:(message.num-message.dongjie).toFixed(2)}}</view>
								<button @tap="get_Recognitioninvestment" class="btn">确认投资</button>
							</view>
						</view>
				</scroll-view>
			</swiper-item>  
			
			<swiper-item >
				<scroll-view style="background: #070d25;margin-top: 120upx;" >

<!-- 					<view style="width: 100%;">
						<image src="../../static/img/line.png" style="height: 1upx;width: 100%;margin: 20upx auto;"></image> 
					</view> -->
					<view style="display: flex;justify-content: space-between;padding: 20upx 40upx;">
						<view class="textnav">参与币种</view>
						<view class="textnav">已认购</view>
						<view class="textnav">奖池金额</view>
					</view> 
					<view style="display: flex;justify-content: space-between;padding: 20upx 40upx;">
						<view class="textnav1" >{{ress.data==''?'':'USDT'}}</view>
						<view class="textnav1" >{{ress.data.num}}</view>
						<view class="textnav1" >{{ress.data.max_num}}</view>
					</view>
					<view v-if="!shows" style="width: 100%;">
						<view style="width: 50%;margin: 100upx auto;color: #888888;text-align: center;">请一分钟后重试!</view>
					</view>
					<view style="width: 100%;" v-if="shows">
						<view style="position: relative;margin: 40upx 0 0 40upx;height: 40upx;">
							<image style="width: 60upx;height: 60upx;position: absolute;top: -50%;margin-top: 20upx;" src="../../static/img/balance.png"></image>
							<text style="color: #fff;font-size: 32upx;position: absolute;margin-left: 80upx;top: 0upx">账户余额：</text>	
						</view>	
						
						<view class="tex" style="margin-top: 40upx;font-size: 36upx;">{{message==null?0:(message.num-message.dongjie).toFixed(2)}}</view>
						
						<view style="width: 100%;">
							<image src="../../static/img/line.png" style="height: 1upx;width: 100%;margin: 20upx auto;"></image> 
						</view>
						
						<view style="position: relative;margin: 40upx 0 0 40upx;height: 40upx;">
							<image style="width: 60upx;height: 60upx;position: absolute;top: -50%;margin-top: 20upx;" src="../../static/img/balance.png"></image>
							<text style="color: #fff;position: absolute;margin-left: 80upx;font-size: 32upx;top: 0upx">我的认购：{{ress.data.me_buy}}</text>	
						</view>	
						
						<view style="margin-top: 100upx;">
							<view  style="width: 55%;height: 80upx;display: flex;justify-content: space-between;margin: 0 auto;margin-top: 40upx;">
								<input  @input="fun"  class="textadd" type="number" style="width: 100%;border-radius: 10upx;" v-model="yiyuan"></input>
							</view> 
							
							<view style="margin: 60upx;">
								<button @tap="get_buy" class="btn">确认购买</button>
							</view>
						</view>
					</view>
				</scroll-view> 
			</swiper-item> 
		</swiper>
		
	</view>
</template>

<script>
	import service from '../../utils/httpRequest.js'
	import message from '../../service/message.js'
	import config from '../../utils/config.js'
	import navTab from '../../components/navTab/navTab.vue'
	
	export default{
		components: {
			navTab,
		},
		data(){
			return {
				res:null,
				ress:null,
				message:null,
				number:0,
				yiyuan:1,
				stage:1,
				shows:false,
				show:false,
				isActive:false,
				data:[{periods:1,rate:'5%'},{periods:15,rate:'7%'},{periods:30,rate:'10%'}],
				upLoadClicktag:0,
				currentTab: 0, //sweiper所在页
				tabBars: [{
					name: '理财包',
					id: 'guanzhu'
				}, {
					name: '一元购',
					id: 'tuijian'
				}]
			}
		},
		onShow(){ 
			this.get_details()
			this.get_message()
			this.get_jiangchi()
			this.getlicai()
		},
		methods:{
			fun(event){
				
				if(event.detail.value==''){

				}else if(!/^(-)?\d+$/.test(event.detail.value)){
				 plus.nativeUI.alert("请输入整数");
				 this.yiyuan=parseInt(event.detail.value)
				 }
				},
			add(){
				this.number+=this.res.game_set.bei
				if(this.number>this.res.game_set.max){
					this.number = this.res.game_set.max
				}
			},
			reduce(){
				if(this.number>this.res.game_set.min){
					this.number-=this.res.game_set.bei
					this.number = this.res.game_set.min
				}
			}, 
			getchang(index,num){
				this.stage = num
				this.isActive = index;	
			},
			async get_Recognitioninvestment(){
				
				let data = JSON.parse(JSON.parse(plus.storage.getItem("storage")))
				if(this.number>this.res.game_set.max||this.number<this.res.game_set.min){
					plus.nativeUI.alert('请输入正确的投资范围！')
					return false
				}else if(this.number%this.res.game_set.bei!=0){
					
					plus.nativeUI.alert('请输入正确的投资倍数范围！')
					return false
				}else{
					if(this.upLoadClicktag==0){
						this.upLoadClicktag = 1
					uni.request({
						url:config + 'touzi',
						data:{
							id:data.id,
							num:this.number,
							chang:this.stage
						},
						header:{
							'token':data.token
						},
						method:'POST'
					}).then(data => { 
						var [error, res]  = data;
						if(res){
							//console.log(res.data);
							plus.nativeUI.toast(res.data.message)
							//this.num =  this.message.num - this.message.dongjie  - this.number
							
							//console.log(this.num)
							uni.reLaunch({
								url:'./financial'
							})
						}else{
							console.log(error.data)
						}
					})
										setTimeout (()=>{
							this.upLoadClicktag = 0
						},3000)
					}else{
						plus.nativeUI.alert('请勿频繁操作！')
					}
				}

			},
			async get_details(){
				
				let data = JSON.parse(JSON.parse(plus.storage.getItem("storage")))
				 
				const query = {
					id:data.id
				}
				let res = await service.httpRequest('licai_index',query)
				this.res = res.data
				plus.nativeUI.toast(this.res.message)
				this.number =  res.data.game_set.min
				//console.log(JSON.stringify(this.res))
			},
			async get_jiangchi(){
				
				let data = JSON.parse(JSON.parse(plus.storage.getItem("storage")))
				 
				const query = {
					id:data.id
				}
				this.ress = await service.httpRequest('duobao/jiangchi',query)
				console.log(this.ress)
				if(this.ress.data!=""){
					this.shows = true			
				}
			},
			async get_buy(){
				if(this.upLoadClicktag==0){
					this.upLoadClicktag = 1
				if(this.yiyuan>this.ress.data.max_num){
									plus.nativeUI.alert("不能超过奖池金额！"); 
				}else{
					
				
				let data = JSON.parse(JSON.parse(plus.storage.getItem("storage")))
				const query = {
					id:data.id,
					jiangchi_id:this.ress.data.id,
					num:this.yiyuan
				}
				let res = await service.httpRequest('duobao/buy',query)
				
				if(res.error_code==0){
					plus.nativeUI.toast(res.message)
					uni.reLaunch({
						url:'./financial'
					})
				}else{
					plus.nativeUI.alert(res.message)
				}
				}
				setTimeout (()=>{
						this.upLoadClicktag = 0
					},2000)
				}else{
					plus.nativeUI.alert('请勿频繁操作！')
				}
			},
			async get_message(){
				this.message = await message.get_message()
			},
			// swiper 滑动
			swiperTab: function(e) {
				var index = e.detail.current //获取索引
				this.$refs.navTab.navClick(index)
			},
			getlicai(){
				let data = JSON.parse(JSON.parse(plus.storage.getItem("storage")))
				uni.request({
					url:config+'licai_index',
					data:{
						id:data.id
					},
					header:{
						'token':data.token
					},
					method:'POST', 
					success: (res) => {
						console.log(res.data);
						//plus.nativeUI.alert(res.data.message);
						//this.data = res.data.data
						if(res.data.data.status == 1){
							this.show = true 
						}
					},
					fail: (error) => { 
						console.log(error.data);
					}
				})
			}
		}
	}
</script>

<style>
	.textnav{
		color: white;
		font-size: 32upx;
		text-align: center;
	}
	.textnav1{
		color: #349cfe; 
		font-size: 28upx;
		text-align: center;
	}
	.box{
		height: 60upx;
		width: 20%;
		background: #091629;
		color: #349cfe;
		font-size: 24upx;
		text-align: center;
		border-radius: 50upx;
		line-height: 60upx;
		margin: 20upx;
	}
	.listbox{
		width: 25%;
		height: 60upx;
		background: #091629;
		color: #fff;
		text-align: center;
		line-height: 60upx;
		font-size: 24upx;
	}
	.active{
		border: #349cfe 1upx solid;
		color: #349cfe;
	}
	.btn{
		height: 80upx;
		width: 50%;
		border-radius: 40upx;
		background: linear-gradient(left,#4286de, #5091e6);
		margin: 0 auto;
		margin-top: 60upx;
		color: white;
		line-height: 80upx;
	}
	.tex{
		margin: 0 auto;
		width: 500upx;
		text-align: center;
		font-size: 48upx;
		color: #349cfe;
	}
	.textadd{
		height: 80upx;
		width: 60%;
		border-radius: 40upx;
		background: #091629;
		margin: 0 auto;
		color: white;
		text-align: center;
		line-height: 80upx;
	}
</style>
