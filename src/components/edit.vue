<template>
  <div
    id="editor"
    v-show="false"
  >
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "editor",
  data() {
    return {
      editor: ClassicEditor,
      editorData: "编辑你的文章...",
      editorConfig: {
        // The configuration of the editor.
      }
    };
  }
};
</script>

<style lang="less" scoped>
#editor {
  max-width: 100%;
}
</style>
