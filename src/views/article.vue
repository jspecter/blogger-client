<template>
  <div id="articles">
    <p
      v-for="item in Articles"
      :key="item.artId"
    ><a href="javascript:;">{{item.desc}}</a></p>
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
      let url = "/articles";
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
  width: 760px;
  padding: 20px;
  background-color: fade(#000, 10%);
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 1px;
}
</style>

