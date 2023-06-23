<template>
  <div id="app">
    <LoginUser
      v-if="currentView.loginUserToggle"
      v-on:changePage="changePage"
    />
    <GetUser v-if="currentView.getUserToggle" v-on:changePage="changePage" />
    <HomePage v-if="currentView.homePageToggle" v-on:changePage="changePage" />
    <CreateUser
      v-if="currentView.createUserToggle"
      v-on:changePage="changePage"
    />
  </div>
</template>

<script>
import CreateUser from "./components/CreateUser.vue";
import GetUser from "./components/GetUser.vue";
import LoginUser from "./components/LoginUser";
import HomePage from "./components/HomePage.vue";

export default {
  name: "App",

  data() {
    return {
      currentView: {
        loginUserToggle: true,
        getUserToggle: false,
        homePageToggle: false,
        createUserToggle: false,
      },
    };
  },
  methods: {
    changePage(page) {
      (this.currentView.loginUserToggle = false),
        (this.currentView.getUserToggle = false),
        (this.currentView.homePageToggle = false),
        (this.currentView.createUserToggle = false),
        (this.currentView["getUserToggle"] = true);
      console.log(this.currentView);
    },
  },

  components: {
    CreateUser,
    GetUser,
    LoginUser,
    HomePage,
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
