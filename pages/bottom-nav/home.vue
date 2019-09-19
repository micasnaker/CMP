<template>
	<view style="padding: 20upx;">
		<swiper style="height: 350upx;"  :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item @tap="go(index)" v-for="(item,index) in arry">
				<image  class="bannner" :src="item"></image>
			</swiper-item> 
		</swiper> 

		<view @click="go_notice" style="display: flex;width: 90%;margin: 0 auto;height: 50upx;margin-top: 20upx;">
			<view>
				<image style="width: 30upx;height: 30upx;margin-top: 14upx;" src="../../static/img/horn.png"></image>
			</view>
			<view class="box" style="margin: 0 10upx;">
				<view  class="animate">{{res.data.title}}</view>
			</view> 
<!-- 			<view  style="color: #349cfe;font-size: 26upx;line-height: 50upx;width: 50upx;">更多</view> -->
			<view style="right: 40upx;position: absolute;">
				<image style="width: 36upx;height: 8upx;" src="../../static/img/more.png"></image>
			</view>
		</view>
		<view class="titlenav">			
			<view style="display: flex;justify-content: space-between;" @tap="go_quotation">
				<view v-for="item in quotation" class="float">
					<view class="textnav1">{{coin[item.coin]}}</view>
					<view class="texts">{{item.cost}}</view>
					<view class="texts">{{item.trend}}</view>
					<view class="datatex">{{market_cap}}</view> 
				</view>
			</view>
		</view>
		
		<view>
			<view @tap="go_income_details" style="position: relative;margin: 40upx 0 0 40upx;height: 40upx;">
				<image style="width: 60upx;height: 60upx;position: absolute;top: -50%;margin-top: 30upx;" src="../../static/img/quotations.png"></image>
				<text style="color: white;font-size: 48upx;position: absolute;margin-left: 80upx;">收益</text>
				<image src="../../static/img/more.png" style="width: 36upx;height: 8upx;float: right;margin-right: 50upx;margin-top: 30upx;"></image>		
			</view>	
			
			<view style="display: flex;justify-content: space-between;margin-top: 40upx;">
				<view class="sybox">
					<view style="color: aliceblue;font-size: 30upx;margin: 40upx 0 0 50upx;">总收益折合（USDT）：</view>
					<view style="width: 100%;">
						<view style="font-size: 48upx;color: #349cfe;margin: 0 auto;width: 40%;text-align: center;">{{message.z_shouyi==null?0:message.z_shouyi}}</view>
					</view>
				</view>
				<view @tap="go_conduct" class="bottomview" style="margin: 20upx 0;">
					<view class="textnav">理财包收益</view>
					<view class="textnav">{{message.licai_shouyi}}</view>
				</view>
			</view>
			
			<view style="display: flex;justify-content: space-between;">
				<view class="bottomview" @tap="go_yiyuan"><view class="textnav">一元购收益</view><view class="textnav">{{message.duobao_shouyi}}</view></view>
				<view class="bottomview" @tap="go_recommend"><view class="textnav">推荐收益</view><view class="textnav">{{message.tuijian_shouyi}}</view></view>
				<view class="bottomview" @tap="go_team"><view class="textnav">团队收益</view><view class="textnav">{{message.tuandui_shouyi}}</view></view>
			</view>
		</view>
	</view>
</template>

<script>
	import message from '../../service/message.js'
	import httpRequst from '../../utils/httpRequest.js'
	import { get_quotation} from '../../service/getquotation.js'
	
	export default{ 
		data(){
			return{
				message:null,
				res:null,
				quotation:null,
				coin:{
					'Bitcoin':'BTC',
					'Ethereum':'ETH',
					'XRP':'XRP',
					'Dash':'Dash',
					'NEM':'NEM',
					'Monero':'XMR',
					'Ethereum Classic':'ETC',
					'Tether':'USDT',
					'VeChain':'VEN ',
					'Qtum':'QTUM',
					'Binance Coin':'BNB',
					'Bytecoin':'BCN ',
					'Dogecoin':'DOGE',
					'Siacoin':'CWC' ,
					'NEO':'NEO',
					'Litecoin':'LTC'
				},
				arry: ['../../static/banner1.png', '../../static/banner2.png', '../../static/banner3.png'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		onShow() {
			this.get_message()
		},
		onLoad() {
			this.get_notice()
			this.getquotation()
		},
		methods:{
			go(index){
				if(index==1){
					uni.navigateTo({
						url: '../webview',
					});
				} 
			},
			async get_message(){
				this.message = await message.get_message()
				console.log(this.message)
			},
			go_notice(){
				uni.navigateTo({
					url: '../src/notice'
				})
			},
			async getquotation(){
				let quotation = await get_quotation()
				this.quotation = quotation.slice(0,3)
				//console.log(JSON.stringify(this.quotation))
			},
			
			go_quotation(){
				uni.navigateTo({
					url: '../src/quotation'
				})
			}, 
			go_yiyuan(){
				uni.navigateTo({
					url: '../src/profit/yiyuan'
				})
			}, 
			go_conduct(){
				uni.navigateTo({
					url: '../src/profit/conduct' 
				})
			},
			go_recommend(){
				uni.navigateTo({
					url: '../src/profit/recommend' 
				})
			},
			go_team(){
				uni.navigateTo({
					url: '../src/profit/team' 
				})
			},
			go_income_details(){
				uni.navigateTo({
					url: '../src/income'  
				})
			},
			async get_notice(){
				let data = JSON.parse(JSON.parse(plus.storage.getItem("storage")))
				const query = {
					id:data.id
				}
				this.res = await httpRequst.httpRequest('member/message',query)
			}
		}
	}
</script>

<style lang="scss">
	$font-color:#fff;
	
	.bannner{
		width: 100%;
		height: 350upx;
	}
	.titlenav{
		width: 98%;
		background: #091629;
		border-radius: 20upx;
		margin: 20upx auto; 
		position: relative;
	}
	.float{
		height: 28%;
		width: 46%;
		margin: 13upx;
		border-radius:20upx ;
		text-align: center;
	}
	.bottomview{
		width: 32%;
		height: 200upx;
		border-radius:15upx ;
		background: #091629;
	}
	.sybox{
		width: 66%;
		height: 200upx;
		border-radius:15upx ;
		background: #091629;
		margin: 20upx 0;
	}
	.textnav{
		color: $font-color;
		font-size: 30upx; 
		text-align: center;
		margin: 40upx 0;
	}
	.textnav1{
		color: white; 
		font-size: 30upx;
		margin: 20upx 10upx;
	}
	
	.texts{
		color: #349cfe;
		font-size: 28upx;
		margin-left: 10upx;
	}
	
	.datatex{
		color: #818286;
		font-size: 28upx;
		margin-left: 10upx;
	}
	.username{
		color: white;
		font-size: 28upx;
		float: left;
	}
	
	.box {
            width: 85%;
            overflow: hidden;
        }

	.animate {
		font-size: 18px;
		color: #687c99;
		display: inline-block;
		white-space: nowrap;
		animation: 12s wordsLoop linear infinite normal;
	}

	@keyframes wordsLoop {
		0% {
			transform: translateX(200px);
			-webkit-transform: translateX(200px);
		}
		100% {
			transform: translateX(-100%);
			-webkit-transform: translateX(-100%);
		}
	}

	@-webkit-keyframes wordsLoop {
		0% {
			transform: translateX(200px);
			-webkit-transform: translateX(200px);
		}
		100% {
			transform: translateX(-100%);
			-webkit-transform: translateX(-100%);
		}
	}
</style>
 