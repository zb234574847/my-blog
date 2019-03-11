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
        <div class="col-md-12 animated">
          <h3>最新上传</h3>
        </div>
        <!-- end title-->
      </div>

      <!-- listItem组件 -->
      <div
        class="listItem"
        v-for="(item, index) in itemListData"
        :key="index"
        @click="handleClick(item)"
      >
        <ListItem :itemData="item"/>
      </div>
      <!-- 查看更多 -->
      <div class="row">
        <div class="col-md-12 animated text-center" @click="lookMore">
          <a href="javascript:;" class="btn btn-default btn-lg">
            <i class="fa fa-cloud-download"></i> 查看更多
          </a>
        </div>
      </div>
      <!-- row -->
    </div>
    <!-- containers -->
  </div>
  <!-- End of portfolio -->
</template>

<script>
/* eslint-disable */
import "../../public/css/style.css";
import ListItem from "./listItem.vue";
export default {
  components: {
    ListItem
  },
  data() {
    return {
      itemListData: [
        {
          title: 123,
          content:
            "在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感。跨平台的印象笔记将帮你永久保存所有信息,将想法转化为行动,做你的“第二大脑”",
          date: "2019年1月16日"
        },
        {
          title: 456,
          content:
            "在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感。跨平台的印象笔记将帮你永久保存所有信息,将想法转化为行动,做你的“第二大脑”",
          date: "2019年1月15日"
        },
        {
          title: 789,
          content:
            "在你的手机和电脑上,使用印象笔记来捕捉、培养和共享灵感。跨平台的印象笔记将帮你永久保存所有信息,将想法转化为行动,做你的“第二大脑”",
          date: "2019年1月14日"
        }
      ]
    };
  },
  methods: {
    lookMore() {
      this.$emit("showMore", true);
    },
    handleClick(item) {
      console.log(item);
      this.$emit("showMore", true);
      this.$router.push({ path: "/detail" });
    }
  }
};
</script>

<style>
.listItem {
  cursor: pointer;
}
</style>
