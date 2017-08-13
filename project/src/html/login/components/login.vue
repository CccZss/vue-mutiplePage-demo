<template>
	<center>
		<div class="form" @keyup.enter="toLogin">
			<Mytip content="邮箱" :info="emailInfo">
				<Input class="input" type="text" v-model="email" placeholder="邮箱" icon="ios-email-outline"></Input>
			</Mytip>
			<Mytip content="密码" :info="passwordInfo">
				<Input class="input" type="password" v-model="password" placeholder="密码" icon="ios-locked-outline"></Input>
			</Mytip>
			<Row :gutter="10">
		        <Col span="12"><img src="" class="barcode"></Col>
		        <Col span="12">
		        	<Mytip content="验证码" :info="barcodeInfo">
		        		<Input class="input" type="text" v-model="barcode" ></Input>
		        	</Mytip>
		        </Col>
		    </Row>
			<Button class="login-bt" type="primary" long @click="toLogin" :loading="loadStatu">登陆</Button>
			<a href="#" class="forget-psw">忘记密码</a>
			<a href="#" class="register" @click="toRegister">前往注册</a>
			<Checkbox class="competence" v-model="admin">
				<Icon type="ios-person-outline"></Icon>
            	<span>教师端</span>
			</Checkbox>
		</div>
	</center>
</template>

<script>
	import Mytip from './Mytip.vue'
	import { mapState, mapActions } from 'vuex'  
	import user from '../store/types/user'
	export default {
		data () {
			return {
				email: '123@qq.com',
				password: '123456',
				loadStatu: false,
				barcode: '0',
				admin: true,

				emailInfo: '',
				passwordInfo: '',
				barcodeInfo: '',
			}
		},
		components: {
			Mytip
		},
		computed: {
		    ...mapState({
		    	'user': state => {
		    		return state.user
		    	}
		    }),
		},
		methods: {
			...mapActions(user.actions),
			toLogin: function () {
				if(!this.check()) return

				if(!this.admin) {
					this.loadStatu = true
					this.login({
						email: this.email,
						password: this.password,
						valcode: this.barcode
					}).then(data => {
						if(data.state){
							this.onSuccess(data.info)
						}else{
							this.onError(data.info)
						}
					}).catch(err => {
						this.onError(err)
					})
				}else {
					this.login({
						email: this.email,
						password: this.password,
						valcode: this.barcode
					}).then(data => {
						if(data.state && data.mark){
							this.onAdminSuccess(data.info)
						}else{
							this.onError(data.info)
						}
					}).catch(err => {
						this.onError(err)
					})
				}

			},
			onSuccess (info) {
				this.$Message.success(info);
				window.location.href="./home.html"
			},
			onAdminSuccess (info) {
				this.$Message.success(info);
				window.location.href="./admin.html"
			},
			onError (err) {
				this.loadStatu = false
				this.$Message.error(err);
			},
			toRegister () {
				this.$emit('to-register')
			},
			check () {
				if(this.email.trim()=="" || this.password.trim()=="" || this.barcode.trim()==""){
					this.$Message.error("请填写好所有的信息")
					return false
				}else{
					return true
				}
			}

		},
		watch: {
			barcode: function(val){
				if(val.length>0) this.barcodeInfo = ""
				else this.barcodeInfo = "请填写验证码";
			}
		}
	}
</script>

<style scoped>
	.form {
		position: relative;
	    top: 300px;
	    width: 25%;
	    min-width: 350px;
	    padding: 30px;
	    border-radius: 10px;
	    box-sizing: border-box;
	    background-color: #585858;
	    box-shadow: 0 0 8px 2px #585858;
	}
	.input, .login-bt {
		margin: 0 0 20px 0;
	}
	.forget-psw {
		padding-right: 10px;
		margin-right: 10px;
		border-right: 1px solid white;
		color: #a0a0a0;
	}
	.register {
		color: #a0a0a0;
	}
	.competence {
		position: absolute;
		left: 32px;
		bottom: 30px;
		color: white;
	}
	.barcode {
		width: 100%;
		height: 32px;
	}

	@media only screen and (max-width: 768px){
		.form {
			top: 120px;
		}
	}
</style>