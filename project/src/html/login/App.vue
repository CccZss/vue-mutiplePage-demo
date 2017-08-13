<template>
  	<div id="app">
		<img class="logo" src="~assets/images/logo.png">
    	<Login v-if="login" v-on:to-register="toggle"/>
    	<Register v-else v-on:to-login="toggle"/>
  	</div>
</template>

<script>
import Login from './components/login'
import Register from './components/register'
export default {
	name: 'app',
	data (){
		return {
			login: true
		}
	},
	components: {
		Login,
		Register
	},
	methods: {
		toggle (){
			this.login = !this.login
		}
	}
}
</script>

<style scoped>
	#app{
		padding: 0.1px;
   	 	height: 100%;
   	 	background-color: #272727;
	}
	.logo {
		position: absolute;
		left: 20px;
		top: 20px;
	}

	@media only screen and (max-width: 768px){
		.logo {
			width: 80px;
		}
	}
</style>
