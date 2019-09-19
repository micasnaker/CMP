<template>
	<view>
		<view class="titlenav">
			<view style="display: flex;margin-top: 40upx;height: 200upx;">
				<image src="../../static/img/touxiang.png" style="width: 160upx;height: 160upx;border-radius: 50%;background: white;margin-top: 20upx;margin-left: 40upx;"></image>
				<view style="margin-left: 40upx;height: 160upx;margin-top: 20upx;">
					<view class="username">账号:{{ message.phone }}</view>
					<view>
						<view class="username" style="margin: 10upx 0;">用户ID:{{ message.tid }}</view>
						<view @tap="go_authentication" class="Real_name" :class="{ active: message.is_auth == 2 }" style="position: absolute;margin-top: -60upx;">
							{{ message.is_auth == 2 ? '已认证' : '未认证' }}
						</view>
					</view>
					<view class="username">昵称:{{ message.name }}</view>
				</view>
				<view @tap="go_notafication" style="float: right;margin-left: 160upx;margin-top: 20upx;">
					<image style="width: 35upx;height: 42upx;" src="../../static/icon/xiaoxi.png"></image>
					<view v-if="state" style="width: 15upx;height: 15upx;background: red;border-radius: 15upx;float: right;"></view>
				</view>
			</view>
			<view style="display: flex;margin-top: 40upx;">
				<!-- <view @click="scan" class="float">
					<image src="../../static/icon/icon_qr.png" class="icon"></image>
					<view class="textnav3">扫一扫</view>
				</view> -->
				<view @tap="go_code" class="float">
					<image src="../../static/icon/icon_code.png" class="icon"></image>
					<view class="textnav3">好友注册</view>
				</view>
				<view @tap="go_code" class="float">
					<image src="../../static/icon/icon_code.png" class="icon"></image>
					<view class="textnav3">留言反馈</view>
				</view>
				<view @tap="go_wallet" class="float">
					<image src="../../static/icon/icon_conduct.png" class="icon"></image>
					<view class="textnav3">常见问题</view>
				</view>
			</view>
		</view>

		<view style="margin-top: 50upx;">
			<view @tap="go_myfinancial" class="listnav" style="margin-top: 40upx;">
				<text class="textnav">我的理财包</text>
				<image src="../../static/img/rights.png" style="float: right;margin-top: 8upx;width: 30upx;height: 30upx;"></image>
			</view>
			<view @tap="go_userinfo" class="listnav">
				<text class="textnav">个人信息</text>
				<image src="../../static/img/rights.png" style="float: right;margin-top: 8upx;width: 30upx;height: 30upx;"></image>
			</view>
			<view @tap="go_accounts" class="listnav">
				<text class="textnav">内部互转</text>
				<image src="../../static/img/rights.png" style="float: right;margin-top: 8upx;width: 30upx;height: 30upx;"></image>
			</view>
			<view @tap="openCode" class="listnav">
				<text class="textnav">C2C</text>
				<image src="../../static/img/rights.png" style="float: right;margin-top: 8upx;width: 30upx;height: 30upx;"></image>
			</view>
			<view @tap="go_mysubordinate" class="listnav" style="border-bottom: #1f2a3e solid 0.5upx;">
				<text class="textnav">我的直推</text>
				<image src="../../static/img/rights.png" style="float: right;margin-top: 8upx;width: 30upx;height: 30upx;"></image>
			</view>

			<view class="login-btn"><button class="landing" type="primary" @tap="go_login">退出登录</button></view>
		</view>
	</view>
</template>

<script>
import message from '../../service/message.js';
import modalView from '../../components/x-modal/x-modal.vue';
import QR from '../../utils/wxqrcode.js';
import service from '../../utils/httpRequest.js';

export default {
	components: { modalView },
	data() {
		return {
			message: null,
			codeurl: '',
			state: false
		};
	},
	onShow() {
		this.get_message();
		this.isread();
	},
	methods: {
		go_notafication() {
			uni.navigateTo({
				url: '../src/notification'
			});
		},
		async isread() {
			let data = JSON.parse(JSON.parse(plus.storage.getItem('storage')));

			const query = {
				id: data.id
			};
			let res = await service.httpRequest('have_new_notices', query);
			if (res.data.status == 1) {
				this.state = true;
			} else {
				this.state = false;
			}
		},
		async get_message() {
			this.message = await message.get_message();
			console.log(this.message);
		},
		go_authentication() {
			if (this.message.is_auth == 2) {
				plus.nativeUI.alert('您已认证！');
			} else {
				uni.navigateTo({
					url: '../src/userinfo/list/authentication'
				});
			}
		},
		islogo() {
			let data = JSON.parse(JSON.parse(plus.storage.getItem('storage')));
			if (data == null || data == '' || data == 'undefined') {
				uni.reLaunch({
					url: '../verification-login'
				});
			}
		},
		go_wallet() {
			uni.navigateTo({
				url: '../src/wallet'
			});
		},
		go_mysubordinate() {
			uni.navigateTo({
				url: '../src/userinfo/list/my_subordinate'
			});
		},
		go_myteam() {
			uni.navigateTo({
				url: '../src/userinfo/list/my_team'
			});
		},
		go_userinfo() {
			uni.navigateTo({
				url: '../src/userinfo/userinfo'
			});
		},
		go_accounts() {
			if (this.message.is_auth == 2) {
				uni.navigateTo({
					url: '../src/walletList/accounts'
				});
			} else {
				plus.nativeUI.alert('请先完成实名认证！');
			}
		},
		getcodeurl() {
			this.codeurl = QR.createQrCodeImg(this.message.yaoqing, {
				size: parseInt(300) //二维码大小
			});
		},
		openCode() {
			plus.nativeUI.alert('此功能暂未开放！');
		},
		go_myfinancial() {
			uni.navigateTo({
				url: '../src/myfinancial'
			});
		},
		go_islogin() {
			uni.navigateTo({
				url: '../verification-login'
			});
		},
		go_login() {
			uni.showModal({
				title: '提示',
				content: '确定退出登录？',
				success: showResult => {
					if (showResult.confirm) {
						try {
							uni.clearStorageSync('storage');
							uni.reLaunch({
								url: '../verification-login'
							});
						} catch (e) {
							//plus.nativeUI.toast('本地存储删除失败！')
						}
					}
				}
			});
		},
		go_code() {
			uni.navigateTo({
				url: '../src/code'
			});
		},
		scan() {
			uni.scanCode({
				onlyFromCamera: true,
				success: function(res) {
					//plus.nativeUI.alert('条码类型：' + res.scanType+'---条码内容：' + res.result);
					console.log(res.result);
					if (res.result.length > 8) {
						uni.navigateTo({
							url: '../src/walletList/account?codeurl=' + res.result
						});
					}
				}
			});
		}
	}
};
</script>

<style>
.Real_name {
	height: 46upx;
	border: #687c99 solid 3upx;
	margin-left: 250upx;
	border-radius: 25upx;
	line-height: 46upx;
	color: #687c99;
	padding: 0 15upx;
	font-size: 28upx;
}

.active {
	border: #7ce2f5 solid 3upx;
	color: #7ce2f5;
}
.titlenav {
	width: 94%;
	background: #091629;
	border-radius: 30upx;
	margin: 0 auto;
}
.float {
	width: 40%;
	margin: 13upx;
	padding: 20upx;
	position: relative;
}
.textnav {
	color: #687c99;
	font-size: 30upx;
}
.textnav3 {
	color: #687c99;
	font-size: 28upx;
	margin-top: 80upx;
	text-align: center;
}
.username {
	color: white;
	font-size: 28upx;
}
.listnav {
	margin: 0 auto;
	width: 88%;
	height: 40upx;
	border-top: #1f2a3e solid 0.5upx;
	line-height: 40upx;
	border-left: none;
	border-right: none;
	padding: 20upx;
}
.icon {
	width: 65upx;
	height: 60upx;
	position: absolute;
	left: 50%;
	margin-left: -32upx;
}
.login-btn {
	padding: 10upx 20upx;
	margin-top: 50upx;
}
.landing {
	width: 50%;
	height: 84upx;
	line-height: 84upx;
	border-radius: 10upx;
	font-size: 32upx;
	background: linear-gradient(left, #4286de, #5091e6);
}
</style>
