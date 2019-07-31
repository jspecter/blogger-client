<template>
  <div id="navList">
    <ul>
      <li>
        <a href="#">Tech</a>
      </li>
      <li>
        <a href="#">Music</a>
      </li>
      <li>
        <a href="#">Novel</a>
      </li>
      <li>
        <a href="#">Spark</a>
      </li>
    </ul>

  </div>
</template>

<script>
export default {};
</script> 
<style lang="less" scope="scoped">
ul {
  margin-top: 4px;
  .clear();
  li {
    float: left;
    width: 100px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: fade(@main-color, 80%);
    cursor: pointer;
    &:hover {
      font-size: 16px;
      font-weight: 600;
      transform: scaleX(1.1);
      color: @main-color;
      background: fade(@main-color, 30%);
      transition: 0.3s transform ease-in-out;
    }
  }
}
</style>