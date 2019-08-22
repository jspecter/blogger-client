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
          v-html="item.content"
        ></p>
        <p class="pubdate">{{item.autor}} 于 {{item.pubdate | date}}</p>
      </div>

    </div>
    <div
      class="placeholder"
      v-if="Articles.length < 1"
    >
      <b>还没有文章发布哦！</b>
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
  props: {
    type: {
      type: String,
      required: true,
      default: ""
    }
  },
  methods: {
    getArticleList() {
      let url = "/articles/getAllArticles",
        params = {
          type: this.type
        };
      console.log(this.type);
      this.$http
        .get(url, { params })
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
  max-width: 900px;
  padding: 20px;
  border-right: 1px solid #eee;
  line-height: 26px;
  letter-spacing: 1px;
}

.article-item {
  &:not(:last-child) {
    border-bottom: 1px dashed #999;
  }
  .title {
    height: 30px;
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
      height: 30px;
      padding-top: 10px;
      text-align: right;
      color: #999;
    }
  }
}

@media screen and(max-width:600px) {
  #articles {
    width: 100%;
    padding: 0;
    border: none;
    .article-content {
      padding: 0;
    }
  }
}
</style>

