/* eslint-disable */
<template>
    <!-- Start wrapper as cross-portfolio 右上角的菜单图标 -->
    <div id="cross-portfolio" class="index cross-portfolio">
		<!-- Preloader 首页加载时的占位图 -->
		<div id="preloader">
		  <div id="loader">
		    <img src="img/cube.gif" alt="preload spinner">
		    <div class="pre-logo">
		      <h4>Cross.</h4>
		    </div>
		  </div>
		</div>
		<!-- End of preloader 站位图结束-->
		
	    <!-- Hamburger menu on scroll-->
	    <nav id="nav-icon">
	      <span></span>
	      <span></span>
	      <span></span>
	      <span></span>
	    </nav>
	    <!-- end of hamburger 图标结束-->
	
	    <!-- Overlay menu 所有文章分类菜单-->
	    <nav id="menu-overlay">
	      <ul id="menu" class="menu-click list-unstyled">
	        <li><a data-scroll href="#profile" class="smooth-scroll">TOP</a></li>
	        <li><a data-scroll href="#services" class="smooth-scroll">SERVICES</a></li>
	        <li><a data-scroll href="#portfolio" class="smooth-scroll">WORK</a></li>
	        <li><a data-scroll href="#resume" class="smooth-scroll">RESUME</a></li>
	        <li><a data-scroll href="#contact" class="smooth-scroll">CONTACT</a></li>
	      </ul>
	    </nav>
	    <!-- end of overlay menu  菜单结束-->
	
	    <!-- Start intro / background / big title 背景图片整个首页的背景-->
	    <div id="intro">
	
	      <!-- Background -->
	      <div class="bg">
	        <div class="bg-img">
	          <img src="img/bg1280x788.jpg" alt="Background Image" />
	        </div>
	      </div>
	      <!-- End of background  背景结束 -->
	
	      <!-- Top logo -顶部的cross图标-->
	      <div class="cross-top">
	        <a href="index.html" class="logo"><span>Cross.</span></a>
	      </div>
	      <!-- End of top logo -->
	
	      <!-- The middle big title  中间的姓名logo -->
	      <div class="big-title">
	        <div class="text-center">
	          <h1>朱  &nbsp;&nbsp;&nbsp;&nbsp; 冰</h1>
	          <p>I'm <span class="sub-title"></span></p>
	        </div>
	      </div>
	      <!-- End of big title -->
	
	      <!-- Chevron arrow down button  屏幕底部的向下的箭头-->
	      <button class="trigger hvr-hang"><i class="fa fa-chevron-down"></i></button>
	
	    </div>
	    <!-- End of intro -->
		
		<!--  头部组件-->
		<Head/>
		
		<!--  数量组件-->
		<Count/>
		
		<!--  列表组件-->
		<List/>

		<!-- 轮播图 -->
		<CarouselSlides/>

		<!-- 联系我 -->
		<Contect/>

		<!-- 底部footer组件 -->
		<Foot/>
		
	  <!-- Fullscreen Modal -->
		  <div class="modal fade fullscreen" id="projectModal" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog">
			  <div class="modal-content">
				<div class="modal-header">
					<!-- modal button close -->
					<a href="#" class="close" data-dismiss="modal"><i class="fa fa-times"></i></a>
				</div>
		
				<div class="modal-body">
				  <div class="row">
					<div class="col-md-8 col-md-offset-2">
						<!-- 组件 listItem 所有文章数据 -->
					  <ListItem/>
						<!-- 组件listItem结束  所有文章数据-->
					</div>
					<!-- col-md-8 -->
				  </div>
				  <!-- row -->
				</div>
				<!-- modal body -->
			  </div>
			  <!-- modal-content -->
			</div>
			<!-- modal-dialog -->
		  </div>
	</div>
</template>

<script>
	import "../../public/css/style.css"
	import Head from "./header.vue"
	import Count from "./count.vue"
	import List from "./list.vue";
	import ListItem from "./listItem.vue"
	import CarouselSlides from "./carouselSlides.vue"
	import Contect from "./contect.vue"
	import Foot from "./footer.vue"
	export default {
		components:{
			Head,
			Count,
			List,
			ListItem,
			CarouselSlides,
			Contect,
			Foot
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
