<template>
  <div id="app">
    <header id="main-header">
      <nav-list></nav-list>
    </header>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navList from "./components/navList";
export default {
  name: "app",
  components: { navList },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
#app {
  width: 70%;
  max-width: 1200px;
  min-width: 900px;
  margin: 0 auto;
  background: #fff url("./assets/image/rect.png") repeat;
  box-shadow: 0 5px 5px fade(#000, 30%);
}

.main-content {
  .clear();
  padding: 20px;
}
</style>
