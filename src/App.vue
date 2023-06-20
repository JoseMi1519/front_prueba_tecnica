<template>
  <div id="app">
    <CreateUser v-if="true" msg="Nuevo usuario" />
    <GetUser v-if="false" msg="dftynft" />
  </div>
</template>

<script>
import CreateUser from "./components/CreateUser.vue";
import GetUser from "./components/GetUser.vue";

export default {
  name: "App",
  components: {
    CreateUser,
    GetUser,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 700px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-top: 0;
}
</style>
