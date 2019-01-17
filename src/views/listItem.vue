<template>
	<!-- start resume item -->
	<div class="row">
	  <!-- education 1 -->
	  <div class="col-sm-8 col-md-8 col-md-push-4 animated">
	    <h4>{{itemData.title}}</h4>
	    <p>{{itemData.content}}</p>
	    <hr class="hidden-xs">
	  </div>
	
	  <div class="col-sm-4 col-md-4 col-md-pull-8 animated">
	    <div class="icon-list">
	      <div class="icon-list-icon">
	        <i class="fa fa-graduation-cap"></i>
	      </div>
	      <div class="icon-list-content">
	        <!-- <div class="icon-list-title">Princeton University</div> -->
	        <div class="icon-list-info">
	          <span>{{itemData.date}}</span>
	        </div>
	      </div>
	    </div>
	    <hr class="visible-xs">
	  </div>
	</div>
	<!-- .row -->
</template>

<script>
	import "../../public/css/style.css"
	export default {
		props:["itemData"],
		data() {
			return {
				
			};
		},
		created() {

		}
	}
</script>

<style>

</style>
