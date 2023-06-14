<template>
  <div id="app">
    <CreateUser msg="new user" />
  </div>
</template>

<script>
import CreateUser from "./components/CreateUser.vue";

export default {
  name: "App",
  components: {
    CreateUser,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
