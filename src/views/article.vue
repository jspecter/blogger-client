<template>
  <div id="articles">
    <div
      class="article-item"
      v-for="(item,index) in Articles"
      :key="item.artId"
    >
      <p class="title">
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-ding"></use>
        </svg>
        <a href="javascript:;">{{item.title}}</a></p>
      <div class="article-content">
        <p
          class="content"
          v-text="item.content"
        ></p>
        <p class="pubdate">{{item.autor}} 于 {{item.pubdate | date}}</p>
      </div>

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
  line-height: 26px;
  letter-spacing: 1px;
}

.article-item {
  &:not(:last-child) {
    border-bottom: 1px dashed #999;
  }
  .title {
    height: 60px;
    padding-top: 30px;
    font-size: 15px;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
  .article-content {
    padding: 10px 24px;
    .content {
      text-indent: 24px;
    }
    .pubdate {
      text-align: right;
      color: #999;
    }
  }
}
</style>

