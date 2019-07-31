<template>
  <div id="app">
    <b-header></b-header>
    <div class="middle-box">
      <nav-list></nav-list>
      <div class="edit-articles">
        <el-button
          type='primary'
          @click="editArticles"
        >写文章</el-button>
      </div>
    </div>

    <div class="main-content">
      <b-article></b-article>
      <b-sidebar></b-sidebar>
    </div>
    <editor v-model="isShow"></editor>
  </div>
</template>

<script>
import bHeader from "./views/header";
import navList from "./views/navList";
import bArticle from "./views/article";
import bSidebar from "./views/sidebar";
import editor from "./components/edit";
export default {
  name: "app",
  components: { bHeader, navList, bArticle, bSidebar, editor },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    editArticles() {
      this.isShow = true;
    }
  }
};
</script>

<style lang='less' scoped>
#app {
  width: 70%;
  max-width: 1200px;
  min-width: 900px;
  min-height: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  box-shadow: 0 5px 5px fade(#000, 30%);
}

.middle-box {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  .edit-articles {
    line-height: 60px;
  }
}

.main-content {
  .clear();
}
</style>
