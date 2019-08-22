<template>
  <div id="navList">
    <ul>
      <router-link
        to="/tech"
        tag="li"
        replace
      >
        Tech
      </router-link>
      <router-link
        to="/music"
        tag="li"
        replace
      >
        Music
      </router-link>
      <router-link
        to="/novel"
        tag="li"
        replace
      >
        Novel
      </router-link>
      <router-link
        to="/spark"
        tag="li"
        replace
      >
        Spark
      </router-link>
      <li class="writing-box">
        <svg
          class="btn-writing"
          aria-hidden="true"
        >
          <use xlink:href="#icon-write-shenghuohao"></use>
        </svg>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "NavList",
  methods: {}
};
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
    width: 25%;
    max-width: 120px;
    height: 60px;
    padding-left: 20px;
    line-height: 60px;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    &:not(:last-child):hover {
      transform: translate(1px, 1px);
      background: fade(#000, 30%);
      transition: 0.1s transform ease-in-out;
    }

    &.writing-box {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      float: right;
      cursor: default;
      .btn-writing {
        width: 60%;
        height: 60%;
        cursor: pointer;
        &:active {
          transform: translate(1px, 1px);
        }
      }
    }
    @media screen and (max-width: 600px) {
      &.writing-box {
        display: none;
      }
    }
  }
}
</style>