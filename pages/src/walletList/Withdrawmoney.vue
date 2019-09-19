<template>
	<view style="width: 100%;">
		<view class="cont">
			<view style="display: flex;justify-content: space-between;">
				<view class="box">
					<text>可用：</text>
					<view class="num">{{(message.num-message.dongjie).toFixed(2)}}</view>
				</view>
				<image style="width: 1upx;height: 280upx;" src="../../../static/img/vertical.png"></image>
				<view class="box">
					<text>冻结：</text>
					<view class="num">{{message.dongjie}}</view>
				</view>
			</view>
		</view>	
		
		<view  class="list">
			<text>提币地址:</text>
			<input v-model="tibi" placeholder="请输入提币地址">
		</view>
		
		<view class="list" style="margin-top: 10upx;">
			<text>提币数量:</text>
			<input type="number" v-model="num">
		</view>
		
		
		<view style="width: 80%;margin: 0 auto;margin-top: 40upx;">
			<image style="height: 60upx;width: 100%;" src="../../../static/img/transverse.png"></image>
		</view>
		<button @tap="get_conduct" class="landing" type="primary">保存并使用</button>
		
		<view @tap="go_notice" style="width: 70%;margin: 0 auto;text-align: center;color: #576984;margin-top: 40upx;text-decoration: underline;">关于CMP平台USDT提现规则的公告</view>
	</view>
</template>

<script>
	import service from '../../../utils/httpRequest.js'
	import message from '../../../service/message.js' 	
	export default{
		data(){
			return {
				res:[],
				num:null,
				message:null,
				upLoadClicktag:0,
				tibi:null
			}
		},
		onLoad() {
			this.get_message()
		},
		methods:{
			async get_conduct(){
				if(this.upLoadClicktag==0){
					this.upLoadClicktag = 1
				let data = JSON.parse(JSON.parse(plus.storage.getItem("storage")))
				const query = {
					id:data.id,
					num:this.num,
					qianbao:this.tibi
				}
				let res = await service.httpRequest('tixian',query)
				console.log(res)
				plus.nativeUI.toast(res.message)
				
				uni.navigateBack({
					delta: 1
				})
				setTimeout (()=>{
					this.upLoadClicktag = 0
						},3000)
				}else{
					plus.nativeUI.alert('请勿频繁操作！')
				}
			},
			async get_message(){
				this.message = await message.get_message()
				console.log(JSON.stringify(this.message))
			},
			go_notice(){
				uni.navigateTo({
					url: 'notice_withdrawal'
				});
			}
		}
	}
</script>

<style>
	.cont{
		padding: 20upx;
	}
	.box{
		width: 46%;
		height: 200upx;
		margin-top: 90upx;
	}
	.num{
		width: 90%;
		height: 100%;
		margin: 0 auto;
		color: #349cfe;
		text-align: center;
		font-size: 48upx;
		margin-top: 20upx;
	}
	text{
		color: #fff;
		font-size: 32upx;
		margin-left: 40upx;
	}
	.list{
		background: #070c20;
		height: 80upx;
		color: #fff;
		line-height: 80upx;
		font-size: 28upx;
	}
	.landing{ 
		height: 84upx;
		width: 80%;
		line-height: 84upx;
		border-radius: 10upx;
		font-size: 32upx;
		background: linear-gradient(left,#4286de, #5091e6);
		margin-top: 40upx;
	}
	input{
		float: right;
		width: 60%;
		height: 100%;
		margin-right: 80upx;
	}
</style>
