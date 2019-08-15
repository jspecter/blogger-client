<template>
  <div id="sidebar">
    <div class="side_title me">
      <h3>我</h3>
      <p>
        <a href="#">Leslie</a>
      </p>
    </div>
    <div class="side_title archive">
      <h3>归档</h3>
      <p></p>
    </div>
    <div class="side_title tags">
      <h3>标签组</h3>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#sidebar {
  float: left;
  width: 30%;
  padding: 20px;
  .side_title {
    padding: 10px;
  }
}
</style>
