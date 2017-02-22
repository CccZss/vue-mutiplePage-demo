<template>
	<div>
		<ul class="options">
	      <router-link :to="Two" tag="li" exact @click.native="select(Two)">Two</router-link>
	      <router-link :to="Three" tag="li" exact  @click.native="select(Three)">Three</router-link>
	      <li><a href="./index.html">index</a></li>
	    </ul>
	</div>
</template>

<script>
import{ mapState,mapActions } from 'vuex'

export default {
	data(){
        return{
            Two:{
                name:'two',
                params: { 
                    userId: 123,
                },
            },
            Three:{
                name:"three",
                params: { 
                    oneId: 123 
                },
            },
        }
    },
	methods: {
		select(tag){
			this.addTag(tag)
		},
		...mapActions(['addTag'])
	}
}
</script>

<style scoped>
	.u-link--Active{
		background-color: #d7ffe8;;
	    border-bottom: 3px solid #e6e6fb;
	}
	ul{
		padding-left: 0;
	}
	li{
		padding: 15px;
	}
	a{
		text-decoration: none;
	}
</style>