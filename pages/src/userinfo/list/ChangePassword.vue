<template>
	<view style="padding: 40upx">
		<view class="titlebox" >
			<input type="password" v-model="used"  class="inputext" placeholder="旧密码:" />
		</view> 
		<view class="titlebox" >
			<input type="password" v-model="news"  class="inputext" placeholder="新密码:" />
		</view> 
		<view class="titlebox" >
			<input type="password" v-model="confirm"  class="inputext" placeholder="确认新密码:" />
		</view> 
		<button @tap="get_changpassword" class="landing" type="primary">保存并使用</button>
	</view>
</template>

<script>
	import config from '../../../../utils/config.js'
	export default{
		data(){
			return{
				rechargeType: null,
				used:null,
				news:null,
				confirm:null
			}
		},
		methods:{
			get_changpassword(){
				if(this.used.length>=8&&this.news.length>=8&&this.confirm.length>=8&&this.used.length<=18&&this.news.length<=18&&this.confirm.length<=18){
					let data = JSON.parse(JSON.parse(plus.storage.getItem("storage")))
					uni.request({
						url:config + 'member/password_reset',
						data:{
							id:data.id,
							pass:this.used,
							pass_new:this.news,
							pass_new_again:this.confirm
						},
						header:{
							'token':data.token
						},
						method:'POST'
					})
					.then(data => {//data为一个数组，数组第一项为错误信息，第二项为返回数据
						var [error, res]  = data;
						if(res){
							console.log(res.data);
							plus.nativeUI.toast(res.data.message+'密码修改成功！')
							
							
							if(res.data.error_code == 0){
								let data = JSON.parse(JSON.parse(plus.storage.getItem("storage")))
								uni.reLaunch({
									url: '../../../login/login?phone='+data.phone,
								});
							}
						}else{
							console.log(error.data)
						}
					})
				}else if(this.news!=this.confirm){
					plus.nativeUI.alert('两次密码不一致！')
				}
				else{
					plus.nativeUI.alert('密码必须为8-18位字符！')
				}
			}
		}
	}
</script>

<style>
	.titlebox{
		margin-top: 40upx;
	}
	.inputext{
		border: #212a3c 1upx solid;
		border-radius: 15upx;
		height: 80upx;
		margin-top: 15upx;
		font-size: 28upx;
		color: #fff
	}
	.landing{ 
		height: 84upx;
		line-height: 84upx;
		border-radius: 10upx;
		font-size: 32upx;
		background: linear-gradient(left,#4286de, #5091e6);
		margin-top: 40upx;
	}
</style>
