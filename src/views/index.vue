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
	    <nav id="nav-icon" :class="{'open':showMore == true}" @click="navIconClick">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
	    </nav>
	    <!-- end of hamburger 图标结束-->
	
	    <!-- Overlay menu 所有文章分类菜单-->
	    <nav id="menu-overlay"  v-if="showMore"  :class="{'menu-show':showMore == true}">
			<nav id="close-icon" :class="{'changeColor':$route.path == '/detail'}" @click="navIconClick">
				<span></span>
				<span></span>
			</nav>
			<span class="backArrow" v-if="$route.path != '/classify'" @click="backRoute">返回</span>
			<transition mode="out-in" name="fade"> 
				<router-view class="blog-router" :allKinds="allKinds" :articleData="articleData" :detailData="detailData" @showMore="getShow" @getDetailData="getComment"></router-view>
			</transition>
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
					<h1>ZhuBing</h1>
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
		<List @showMore="listShow"/>

		<!-- 轮播图 -->
		<CarouselSlides/>

		<!-- 联系我 -->
		<Contect/>

		<!-- 底部footer组件 -->
		<Foot/>
		
	</div>
</template>

<script>
	import "../../public/css/style.css"
	import "../../public/css/animate.css"
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
				showMore: false,
				allKinds:['HTML / CSS3','Javascript','PHP','Vue.js','MySQL / MongoDB','Node.js'],
				articleData:[
					{
						title: 123,
						content: "在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感。跨平台的印象笔记将帮你永久保存所有信息,将想法转化为行动,做你的“第二大脑”",
						date: '2019年1月16日',
						info: "在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感"
					},
					{
						title: 456,
						content: "在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感。跨平台的印象笔记将帮你永久保存所有信息,将想法转化为行动,做你的“第二大脑”",
						date: '2019年1月15日',
						info: "在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感"
					},
					{
						title: 789,
						content: "在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感。跨平台的印象笔记将帮你永久保存所有信息,将想法转化为行动,做你的“第二大脑”",
						date: '2019年1月14日',
						info: "在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感"
					}
				],
				detailData:{
					content:"在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感。跨平台的印象笔记将帮你永久保存所有信息在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感。跨平台的印象笔记将帮你永久保存所有信息在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感。跨平台的印象笔记将帮你永久保存所有信息在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感。跨平台的印象笔记将帮你永久保存所有信息在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感。跨平台的印象笔记将帮你永久保存所有信息在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感。跨平台的印象笔记将帮你永久保存所有信息在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感。跨平台的印象笔记将帮你永久保存所有信息在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感。跨平台的印象笔记将帮你永久保存所有信息在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感。跨平台的印象笔记将帮你永久保存所有信息在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感。跨平台的印象笔记将帮你永久保存所有信息在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感。跨平台的印象笔记将帮你永久保存所有信息在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感。跨平台的印象笔记将帮你永久保存所有信息在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感。跨平台的印象笔记将帮你永久保存所有信息在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感。跨平台的印象笔记将帮你永久保存所有信息在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感。跨平台的印象笔记将帮你永久保存所有信息在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感。跨平台的印象笔记将帮你永久保存所有信息在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感。跨平台的印象笔记将帮你永久保存所有信息",
					commentsData:[
						{
							name: "张三",
							content:"6666666666666666666666",
							time: "2019年6月4日",
							email:''
						},
						{
							name: "李四",
							content:"2333333333333333333333",
							time: "2019年6月4日",
							email:''
						}
					]
				},
				transitionName: 'slide-right' 
			};
		},
		methods : {
			listShow(bool){
				this.showMore = bool;
				this.$router.push({path: '/classify'})
			},
			navIconClick(){
				if(this.$route.path == '/' || this.$route.path == '/home'){
					this.$router.push({path: '/classify'})
				}else{
					this.$router.push({path: '/'})
				}
				this.showMore = !this.showMore;
			},
			kindsHandleClick(){
				//this.showMore = false;
			},
			getShow(item,bool) {
				this.showMore = bool;
				this.shothis.$router.push({path: '/detail'});
				
			},
			getComment(obj){
				this.detailData.commentsData.unshift(obj)
			},
			backRoute(){
				if(this.$route.path == '/detail'){
					this.$router.push({path: '/articleList'})
				}else if(this.$route.path == '/articleList'){
					this.$router.push({path: '/classify'})
				}else{
					return
				}
			}
		}
	}
</script>

<style>
	.backArrow{
		position: absolute;
		top: 20px;
		left: 20px;
	}
	#close-icon.changeColor span{
		background-color: #444;
	}
	.fade-enter-active{
		animation: bounceInLeft .2s;
	}
	.fade-leave-active{
		animation: bounceInOutRight .2s;
	}
</style>
