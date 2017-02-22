<template>
	<div class='one'>
		<h1>这里是One</h1>
		<slot></slot>
	</div>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style scoped> 
	.one{
		background-color: #ffd4d4;
	}
</style>