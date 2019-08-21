<template>
  <div id="tech">
    <b-article type="tech"></b-article>
    <b-sidebar></b-sidebar>
  </div>
</template>

<script>
import bArticle from "../components/article";
import bSidebar from "../components/sidebar";
export default {
  name: "Tech",
  components: {
    bArticle,
    bSidebar
  },
  data() {
    return {};
  }
};
</script> 
<style lang="less" scope="scoped">
</style>