<template>
	<ul>
		<div class="tag" v-for="(tag,index) in tags" >
			<router-link :to="tag" tag="li" exact>{{tag.name}}</router-link>
			<i @click="deleteTag(index)">X</i>
		</div>
	</ul>
</template>

<script>
import{ mapMutations } from 'vuex'

export default{
	data(){
		return{
			tags: this.$store.state.tag.tags
		}
	},
	methods: {
		deleteTag: function(index){
			this.$store.commit('DELETE_TAG',index);
		},
		...mapMutations(['DELETE_TAG'])

	}

}
</script>

<style scoped>
	.u-link--Active{
		background-color: blue;
	}
	ul{
		text-align: left;
	}
	.tag{
		width: 10%;
		display: inline-block;
		border: 1px solid black;
	}
	li{
		display: inline-block;
		text-align: left;
		padding-left: 10px;
		padding-right: 50%;
	}
	i{
		display: inline-block;
	    float: right;
    	margin-right: 10px;
		cursor: pointer;
	}
</style>