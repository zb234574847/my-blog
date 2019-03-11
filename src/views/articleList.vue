<template>
  <!-- Start of resume -->
  <div id="resume" class="articleList">
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
      <div v-for="(item, index) in articleData" :key="index">
        <!-- <ListItem  :itemData="item" @click="handleClick(item)"/> -->
        <ul>
          <li @click="handleClick(item)">
            <h3>{{item.title}}</h3>
            <div>{{item.date}}</div>
            <p>{{item.info}}</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- containers -->
  </div>
  <!-- End of portfolio -->
</template>

<script>
import "../../public/css/style.css";
import ListItem from "./listItem.vue";
export default {
  components: {
    ListItem
  },
  props: ["articleData"],
  data() {
    return {};
  },
  methods: {
    lookMore() {
      this.$emit("showMore", true);
    },
    handleClick(item) {
      this.$router.push({ path: "/detail" });
    }
  }
};
</script>

<style lang="less" scope>
.articleList {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 2% 20%;
  text-align: left;
  color: #fff;
  h2,
  h3 {
    color: #fff;
  }
  ul li {
    cursor: pointer;
  }
  ul li:hover {
    color: #cf4a5c;
  }
  ul li:hover h3 {
    color: #cf4a5c;
  }
}
</style>
