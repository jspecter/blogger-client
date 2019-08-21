<template>
  <div id="novel">
    <b-article type="novel"></b-article>
    <b-sidebar></b-sidebar>
  </div>
</template>

<script>
import bArticle from "../components/article";
import bSidebar from "../components/sidebar";
export default {
  name: "Novel",
  components: {
    bArticle,
    bSidebar
  }
};
</script>
<style lang="less" scope="scoped"></style>
