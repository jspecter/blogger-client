<template>
  <div id="spark">
    <b-article type='spark'></b-article>
    <b-sidebar></b-sidebar>
  </div>
</template>

<script>
import bArticle from "../components/article";
import bSidebar from "../components/sidebar";
export default {
  name: "Spark",
  components: {
    bArticle,
    bSidebar
  }
};
</script> 
<style lang="less" scope="scoped">
</style>