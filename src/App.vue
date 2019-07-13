<template>
  <div id="app">
    <b-header></b-header>
    <nav-list></nav-list>
    <div class="main-content">
      <b-article></b-article>
      <b-sidebar></b-sidebar>
    </div>
  </div>
</template>

<script>
import bHeader from "./views/header";
import navList from "./views/navList";
import bArticle from "./views/article";
import bSidebar from "./views/sidebar";
export default {
  name: "app",
  components: { bHeader, navList, bArticle, bSidebar }
};
</script>

<style lang='less' scoped>
#app {
  width: 1200px;
  min-height: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
}

.main-content {
  .clear();
}
</style>
