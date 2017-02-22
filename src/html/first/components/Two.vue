<template>
	<div class='one'>
		<h1>这里是Two</h1>
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