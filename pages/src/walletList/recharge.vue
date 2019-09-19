<template>
	<view style="padding: 40upx">
		<view class="titlebox" >
			<view class="typetext">充值类型：</view> 
				<picker @change="bindPickerChange" :value="index" :range="array"> 
					<input disabled ="disabled" :placeholder="rechargeType==null?'USDT':rechargeType" style="border: #212a3c 1upx solid;border-radius: 15upx;height: 80upx;margin-top: 15upx;font-size: 28upx;"/>
					<image style="width: 30upx;height: 30upx;float: right;margin-top: -50upx;margin-right: 20upx;" src="../../../static/img/triangle.png"></image>
				</picker>
		</view> 
		<view class="titlebox" >
			<view class="typetext">充值金额：</view> 
			<input type="number" v-model="num"  class="inputext" placeholder="请输入充值金额" />
		</view> 
		<view class="titlebox" >
			<view @tap="getcopy" class="typetext">订单流水号：</view> 
			<input v-model="TransactionID" class="inputext" placeholder="请输入订单流水号" />
		</view> 
		<view class="titlebox" >
			<view class="typetext">充值地址：</view> 
			
			<view >
				<input style="width: 80%;" disabled class="inputext" :placeholder="message.common_qianbao" /> 
				<view style="float: right;margin-top: -60upx;">
					<image @tap="copy" src="../../../static/img/jia.png" style="width: 40upx;height: 40upx;"></image>
				</view>
			</view>
			<view class="tis" style="color: red;">*为了您的资金安全，点击复制充值地址，请勿手动输入转账(充值)地址！</view>
		</view> 
		<button @tap="get_conduct" class="landing" type="primary">确认</button>
		<view @tap="go_announcement" style="width: 70%;margin: 0 auto;text-align: center;color: #576984;margin-top: 40upx;text-decoration: underline;">关于CMP平台USDT充值规则的公告</view>
	</view>
</template>

<script>
	import service from '../../../utils/httpRequest.js'
	import message from '../../../service/message.js'
	export default{
		data(){
			return{
				rechargeType: null,
				array: ['USDT'],
				res:[],
				number:1,
				num:null,
				TransactionID:null,
				message:null,
				upLoadClicktag:0
			}
		},
		onLoad() {
			this.get_message()
		},
		methods:{
			copy(){
				uni.setClipboardData({
					data: this.message.common_qianbao,
					success: function () {
						//plus.nativeUI.toast('复制成功！')
					}
				});
			},
			go_announcement(){
				uni.navigateTo({
					url: './recharge_announcement'
				});
			},
			async get_message(){
				this.message = await message.get_message()
				console.log(this.message)
			},
			bindPickerChange: function(e) {
				this.number = parseInt(e.target.value)+1
				this.rechargeType = this.array[e.target.value]
			},
			async get_conduct(){
				if(this.upLoadClicktag==0){
					this.upLoadClicktag = 1
					let data = JSON.parse(JSON.parse(plus.storage.getItem("storage")))
					const query = {
						id:data.id,
						type:this.number,
						num:this.num,
						trans_no:this.TransactionID,
						common_qianbao: this.message.common_qianbao
					}
					this.res = await service.httpRequest('chongzhi',query)
					console.log(JSON.stringify(this.res)+111111)
					plus.nativeUI.toast(this.res.message)
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
			getcopy(){
				uni.getClipboardData({
					success: function (res) {
						console.log(res.data);
					}
				})
			}
		}
	}
</script>

<style>
	.tis{
		font-size: 24upx;
		color: #4286de;
	}
	.typetext{
		color: #349cfe;
	}
	.titlebox{
		margin-top: 40upx;
	}
	.inputext{
		border: #212a3c 1upx solid;
		border-radius: 15upx;
		height: 80upx;
		margin-top: 15upx;
		font-size: 28upx;
		color: white;
	}
	.landing{ 
		height: 84upx;
		line-height: 84upx;
		border-radius: 10upx;
		font-size: 32upx;
		background: linear-gradient(left,#4286de, #5091e6);
		margin-top: 60upx;
	}
</style>
