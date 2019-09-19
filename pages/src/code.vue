<template>
	<view class="titlenav">
		<view style="display: flex;margin-top: 40upx;height: 200upx;">
			<image src="../../static/img/touxiang.png" style="width: 160upx;height: 160upx;border-radius: 50%;background: white;margin-top: 20upx;margin-left: 40upx;"></image>
			<view style="margin-left: 40upx;height: 160upx;margin-top: 20upx;">
				<view  class="username">账号:{{message.phone}}</view>
				<view >
					<view  class="username" style="margin: 10upx 0;">用户ID:{{message.tid}}</view> 
				</view> 
				<view  class="username">昵称:{{message.name}}</view> 
			</view>
	 
		</view>
		<view style="margin-top: 40upx;">
			<view style="width: 100%;">
				<view style="width: 500upx;height: 400upx;margin: 0 auto;padding: 40upx 0;background: #fff;">
					<view  style="width: 400upx;height: 400upx;margin: 0 auto;">
						<image style="width: 400upx;height: 400upx;" :src="codeurl"></image>
					</view>
				</view>
				
				<view style="width: 90%;margin: 0 auto;color: #687c99;font-size: 36upx;text-align: center;margin-top: 50upx;">我的推荐码：{{message.yaoqing}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import message from '../../service/message.js'
	import QR from '../../utils/wxqrcode.js'
	import config from '../../utils/config.js'
	
	export default{
		data(){
			return{
				codeurl:'',
				message:null,
			}
		},
		onLoad() {
			this.get_message()
		},
		methods:{
			async get_message(){
				this.message = await message.get_message()
				console.log(this.message)
				console.log(config.substring(0,config.length-4))
				if(this.message !=null){
					this.codeurl = QR.createQrCodeImg(config.substring(0,config.length-4)+'CMP_register.php?code='+this.message.yaoqing, {  
						size: parseInt(300)//二维码大小  
					})
				}  
			}
		}
	}
</script>

<style>
	.titlenav{
		width: 80%;
		background: #091629;
		border-radius: 30upx;
		margin: 80upx auto; 
		padding: 40upx;
	}
	.float{
		width: 40%;
		margin: 13upx;
		padding: 20upx;
		position: relative;
	}
	.username{
		color: white;
		font-size: 28upx;
	}
	.textnav3{
		color: #687c99;
		font-size: 28upx;
		margin-top: 80upx;
		text-align: center;
	}
	.icon{
		width: 65upx;
		height: 60upx;
		position: absolute;
		left: 50%;
		margin-left: -32upx;
	}
</style>
