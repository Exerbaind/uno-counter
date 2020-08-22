<template>
  <div id="app">
    <Header class="header" />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "PTSans";
}
.header {
  position: relative;
  z-index: 5;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  background-color: white;
}
</style>
