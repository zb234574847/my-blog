<template>
	<!-- Start of profile  内容部分的开始-->
	<div id="profile" class="content">
	  <div class="containers">
	    <div class="row">
	      <div class="col-lg-12">
		
	        <!-- Title 标题-->
	        <div class="title">
	          <h1>ZhuBing</h1>
	          <span class="h4 element"></span>
	        </div>
	        <!-- End of title -->
		
	        <!-- About me 关于我-->
	        <div class="space">
	          <h3>技能简介</h3>
	          <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit libero ac accumsan lobortis. Nam sem lacus, vulputate ut turpis vel, viverra porta ante. Pellentesque a ornare libero. Aenean sed ipsum a lectus volutpat dictum non non
	            neque. Nunc sit amet felis non velit consequat venenatis id eu dui.</p>
	          <p class="text-justify">In congue eu dui sit amet euismod. Ut vehicula tellus nec laoreet congue. Mauris id eros ultricies, vulputate metus ac, euismod lorem.</p>
	        </div>
	        <!-- End of about me -->
	      </div>
		
	      <!-- Avatar image 自己的照片-->
	      <div class="col-lg-6 col-md-12 col-sm-12 hidden-md animated">
	        <img src="img/avatar500x680.jpg" class="avatar" alt="Avatar">
	      </div>
	      <!-- End avatar image -->
		
	      <!-- Start skills / expertise 各种技能条-->
	      <div class="col-lg-6 col-md-12 col-sm-12">
	        <div class="space">
	          <h3>{{mySkills.mytitle}}</h3>
						<div v-for="(item, index) in mySkills.content" :key="index">
								<h5>{{item.name}}</h5>
								<div class="progress progress-striped active">
									<div class="progress-bar" :class="item.color" :style="item.mywidth"></div>
								</div>
						</div>
	        </div>
	      </div>
	      <!-- End of skills / expertise -->
	    </div>
	    <!-- end row -->
	  </div>
	  <!-- end containers -->
	</div>
	<!-- end profile -->
</template>

<script>
	import "../../public/css/style.css"
	export default {
		data() {
			return {
				mySkills:{
					mytitle: '我的技能',
					content:[
						{
							name: "HTML / CSS3",
							mywidth:"width:85%",
							color:"progress-bar-danger"
						},
						{
							name: "Javascript",
							mywidth:"width:85%",
							color:"progress-bar-success"
						},
						{
							name: "PHP",
							mywidth:"width:75%",
							color:"progress-bar-warning"
						},
						{
							name: "Vue.js",
							mywidth:"width:85%",
						},
						{
							name: "MySQL / MongoDB",
							mywidth:"width:55%",
							color:"progress-bar-default"
						},
						{
							name: "Node.js",
							mywidth:"width:65%",
							color:"progress-bar-success"
						}
					]
				}
			};
		}
	}
</script>

<style scope>
	
</style>
