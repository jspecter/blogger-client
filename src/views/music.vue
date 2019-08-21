<template>
  <div id="music">
    <b-article type="music"></b-article>
    <b-sidebar></b-sidebar>
  </div>
</template>

<script>
import bArticle from "../components/article";
import bSidebar from "../components/sidebar";
export default {
  name: "Music",
  components: {
    bArticle,
    bSidebar
  }
};
</script> 
<style lang="less" scope="scoped">
</style>