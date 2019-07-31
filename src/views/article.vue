<template>
  <div id="articles">
    <div
      class="article-item"
      v-for="(item,index) in Articles"
      :key="item.artId"
    >
      <p class="title"><a href="javascript:;">{{item.title}}</a></p>
      <p class="content">{{item.content}}</p>
      <p class="profile">{{item.profile}}...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "articles",
  data() {
    return {
      Articles: []
    };
  },
  props: {},
  methods: {
    getArticleList() {
      let url = "/articles/getAllArticles";
      this.$http
        .get(url)
        .then(res => {
          const { data } = res;
          this.Articles = data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getArticleList();
  }
};
</script>

<style lang="less" scoped>
#articles {
  float: left;
  width: 70%;
  min-width: 600px;
  padding: 20px;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 1px;
}

.article-item {
}
</style>

