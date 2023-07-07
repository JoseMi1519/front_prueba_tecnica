<template>
  <div id="app">
    <NavbarUser v-on:changePage="changePage" />
    <div v-if="showErrorMessage" class="alert alert-success" role="alert">
      {{ alertErrorMessage }}
    </div>
    <LoginUser
      v-if="currentView.loginUserToggle"
      v-on:changePage="changePage"
    />
    <GetUser v-if="currentView.getUserToggle" v-on:changePage="changePage" />
    <HomePage v-if="currentView.homePageToggle" v-on:changePage="changePage" />
    <CreateUser
      v-if="currentView.createUserToggle"
      v-on:changePage="changePage"
      v-on:errorMessage="errorMessage"
    />
    <EditUser
      v-if="currentView.EditUserToggle"
      v-on:changePage="changePage"
      v-on:errorMessage="errorMessage"
    />
  </div>
</template>

<script>
import CreateUser from "./components/CreateUser.vue";
import GetUser from "./components/GetUser.vue";
import LoginUser from "./components/LoginUser";
import HomePage from "./components/HomePage.vue";
import NavbarUser from "./components/NavbarUser.vue";
import EditUser from "./components/EditUser.vue";

export default {
  name: "App",

  data() {
    return {
      currentView: {
        loginUserToggle: false,
        getUserToggle: false,
        homePageToggle: false,
        createUserToggle: false,
        EditUserToggle: true,
      },
      showErrorMessage: false,
      alertErrorMessage: this.showErrorMessage,
    };
  },
  methods: {
    changePage(page) {
      console.log(page);
      (this.currentView.loginUserToggle = false),
        (this.currentView.getUserToggle = false),
        (this.currentView.homePageToggle = false),
        (this.currentView.createUserToggle = false),
        (this.currentView.EditUserToggle = false),
        (this.currentView[page] = true);
    },
    errorMessage(error) {
      console.log(error);
      this.showErrorMessage = true;
      this.alertErrorMessage = error;
    },
  },

  components: {
    CreateUser,
    GetUser,
    LoginUser,
    HomePage,
    NavbarUser,
    EditUser,
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
  margin-top: 0rem;
  margin-bottom: 0rem;
  padding-top: 0;
  background-image: linear-gradient(pink, rgb(104, 104, 236) 60%);
}
</style>
