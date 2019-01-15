<template>
		<!-- Start of resume -->
		<div id="resume" class="content">
		  <div class="containers">
		    <div class="row">
		      <!-- title -->
		      <div class="col-md-12 headline">
		        <h2>文章列表</h2>
		        <hr>
		      </div>
		      <!-- end title-->
		    </div>
			
		    <!-- listItem组件 -->
		    <ListItem/>
			
		    <!-- 查看更多 -->
		    <div class="row">
		      <div class="col-md-12 animated text-center">
		        <a href="#" class="btn btn-default btn-lg"><i class="fa fa-cloud-download"></i> 查看更多 CV</a>
		      </div>
		    </div>
		    <!-- row -->
		  </div>
		  <!-- containers -->
		</div>
		<!-- End of portfolio -->
</template>

<script>
	import "../../public/css/style.css"
	import ListItem from './listItem.vue'
	export default {
		components:{
			ListItem
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
