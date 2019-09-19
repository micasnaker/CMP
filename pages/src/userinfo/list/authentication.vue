<template>
	<view style="padding: 40upx">
		<view class="titlebox" >
			<view class="typetext">身份信息</view> 
			<view class="tis">请确保身份证信息真实有效，否则无法通过审核</view>
			<input v-model="name" class="inputext" placeholder='请输入您的真实姓名' />
		</view> 
		<view class="titlebox" >
			<input style="ime-mode: disabled;" v-model="idnumber" class="inputext" placeholder="请输入您的身份证号:" />
		</view> 
		
		<view class="titlebox" >
			<view class="typetext">身份证照片</view> 
			<view class="tis">请上传身份证正反面高清照片</view>
			<view class="tis" style="color: red;">*切勿重复提交，提交前请仔细审核内容。</view>
		</view> 

		<an-upload-img @func="getMsgFormSon"  @funcs="getMsgFormSons"></an-upload-img>

		<view>
			<button @tap="Submission" class="landing" type="primary">确认提交</button>
		</view>
	</view>
</template>

<script>
	import service from '../../../../utils/httpRequest.js'
	import message from '../../../../service/message.js'
	import anUploadImg from '@/components/an-uploadImg/an-uploadImg'
	
	export default{
		components:{ anUploadImg },
		data(){
			return {
				num:null,
				password:null,
				message:null,
				idnumber:null,
				name:null,
				msgFormSon:null,
				msgFormSons:null
			}
		},
		onLoad() {
			this.get_message()
		},
		methods:{
			async get_message(){
				this.message = await message.get_message()
				console.log(this.message)
			},
			async Submission(){
				if(this.name == null){
					plus.nativeUI.toast('请输入真实姓名！')
				}else if(this.idnumber == null){
					plus.nativeUI.toast('请输入真实身份证号码！')
				}else if(this.msgFormSon == null||this.msgFormSons==null){
					plus.nativeUI.toast('请上传身份证正反面照片！')
				}else{
					let data = JSON.parse(JSON.parse(plus.storage.getItem("storage")))
					const query = {
						id:data.id,
						id_name:this.name,
						id_card:this.idnumber,
						id_card_front:this.msgFormSon,
						id_card_back:this.msgFormSons
					}
					let res = await service.httpRequest('member/auth_set',query)
					plus.nativeUI.toast(res.message)
					console.log(JSON.stringify(res))
					if(res.error_code == 0){
						uni.navigateBack({
							delta: 1
						})
					}
				}
			},
			getMsgFormSon(data){
                this.msgFormSon = data
                console.log(this.msgFormSon)
            },
			getMsgFormSons(data){
			    this.msgFormSons = data
			    console.log(this.msgFormSons)
			}

		}
	}
</script>

<style>
	.tis{
		font-size: 24upx;
		color: #4286de;
	}
	.phonebox{
		width: 45%;
		height: 200upx;
		background: #13213d;
		margin:20upx;
		border: #4286de solid 2upx;
		border-radius: 15upx;
		text-align: center;
	}
	.typetext{
		color: #687c99;
		font-size: 30upx;
	}
	.titlebox{
		margin-top: 50upx;
	}
	.inputext{
		border: #212a3c 1upx solid;
		border-radius: 15upx;
		height: 80upx;
		margin-top: 20upx;
		font-size: 28upx;
		color: #fff;
	}
	.landing{ 
		height: 84upx;
		line-height: 84upx;
		border-radius: 10upx;
		font-size: 32upx;
		background: linear-gradient(left,#4286de, #5091e6);
	}
</style>
