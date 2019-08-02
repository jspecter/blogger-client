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
#navList {
  position: relative;
  width: calc(~"100% + 30px");
  padding-left: 30px;
  transform: translateX(-30px);
  background-color: fade(@main-color, 80%);
  &::before {
    content: "";
    position: absolute;
    display: block;
    left: -60px;
    top: 0;
    border-width: 30px;
    border-style: solid;
    border-color: transparent fade(@main-color, 80%) fade(@main-color, 80%)
      transparent;
  }
}
ul {
  .clear();
  li {
    float: left;
    width: 120px;
    height: 60px;
    padding-left: 20px;
    line-height: 60px;
    font-size: 20px;
    font-weight: 600;
    a {
      color: #fff;
    }
    cursor: pointer;
    &:hover {
      transform: translate(1px, 1px);
      background: fade(#000, 30%);
      transition: 0.1s transform ease-in-out;
    }
  }
}
</style>