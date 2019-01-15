<template>
	<div>
		<!--  头部组件开始-->
		<header/>
		<!--  头部组件开始-->
		
		<!--  数量组件开始-->
		<count/>
		<!--  数量组件开始-->

		<!--  列表组件开始-->
		<list/>
		<!--  列表组件结束-->
	</div>
</template>

<script>
	import header from "@views/header.vue"
	import count from "@views/count.vue"
	import list from "@views/list.vue"
	export default {
		components:{
			header,
			count,
			list
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
