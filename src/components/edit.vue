<template>
  <el-dialog
    title="文章编辑"
    width="80%"
    :visible.sync="isVisible"
  >
    <div id="editor">

    </div>
    <span
      slot="footer"
      class="dialog-footer"
    >
      <el-button @click="cancel">取消</el-button>
      <el-button @click="save">暂存</el-button>
      <el-button
        type="primary"
        @click="publish"
      >发布</el-button>
    </span>
  </el-dialog>

</template>

<script>
import { clearTimeout } from "timers";
const E = require("wangeditor");
export default {
  name: "editor",
  data() {
    return {
      isVisible: false,
      editor: null,
      article: {
        autor: "LeslieZhu",
        title: "钢铁是怎样炼成的",
        content: "",
        profile: "钢铁是怎样炼成的"
      }
    };
  },
  watch: {
    value(newVal) {
      this.isVisible = newVal;
    },
    isVisible(newVal) {
      this.$emit("input", newVal);
    }
  },
  props: {
    value: false
  },
  methods: {
    cancel() {
      this.isVisible = false;
    },
    save() {
      this.article.content = this.editor.txt.text();
      let params = this.article;
      this.$http
        .post("/articles/saveArticle", params)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      this.isVisible = false;
    },
    publish() {
      this.isVisible = false;
    }
  },
  mounted() {
    this.timer = setTimeout(() => {
      this.editor = new E("#editor");
      this.editor.customConfig.fontNames = [
        "宋体",
        "微软雅黑",
        "Arial",
        "Tahoma",
        "Verdana"
      ];
      this.editor.create();
    }, 0);
  },
  beforeDestroy() {
    console.log(this.timer);
    clearTimeout(this.timer);
  }
};
</script>

<style lang="less">
.ck-content {
  min-height: 500px;
}
#editor {
  max-width: 100%;
}
</style>
