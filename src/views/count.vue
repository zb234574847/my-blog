<template>
	<!-- Start countTo 各种统计的数据，代码行数，浏览的人数，作品数量-->
	<div id="count" class="content">
	  <div class="containers">
	    <div class="row">
	      <div class="col-md-12">
		
	        <!-- CountTo 开始计数-->
	        <div class="animated text-center">
	          <div class="col-md-4">
	            <p class="h2"><i class="fa fa-child"></i> <span class="count" data-from="0" data-to="27" data-speed="5000" data-refresh-interval="50"></span></p>
	            <h5 class="text-weight">访客</h5>
	          </div>
	          <div class="col-md-4">
	            <p class="h2"><i class="fa fa-laptop"></i> <span class="count" data-from="0" data-to="56" data-speed="5000" data-refresh-interval="50"></span></p>
	            <h5 class="text-weight">已完成Web作品</h5>
	          </div>
	          <div class="col-md-4">
	            <p class="h2"><i class="fa fa-code"></i> <span class="count" data-from="0" data-to="135923" data-speed="5000" data-refresh-interval="50"></span></p>
	            <h5 class="text-weight">在线代码行数</h5>
	          </div>
	        </div>
	        <!-- End countTo 计数模块结束-->
			
	      </div>
	      <!-- end col-md-12 -->
	    </div>
	    <!-- end row -->
	  </div>
	  <!-- end containers -->
	</div>
	<!-- End of countTo -->
</template>

<script>
	import "../../public/css/style.css"
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
