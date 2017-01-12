<template>
	<div class="no-find">
		<p>404</p>
		<p><slot></slot></p>
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
	.no-find{
		font-size: 40px;
		background-color: #ececec;
	}
</style>