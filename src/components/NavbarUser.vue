<template>
  <nav
    class="navbar navbar-expand-lg"
    style="background-color: rgb(89, 184, 176)"
  >
    <div class="container-fluid">
      <a
        class="nav-link active"
        type="button"
        aria-current="page"
        v-on:click="goHome"
        >Vamos a casa</a
      >
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" type="button" v-on:click="login">Darse de alta</a>
        </li>
        <li class="nav-link">
          <a type="button" v-on:click="createUser">Crear usuario</a>
        </li>
        <li class="nav-link">
          <a type="button" v-on:click="getUser">Recuperar usuarios</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarUser",

  methods: {
    goHome() {
      this.$emit("changePage", "homePageToggle");
    },
    login() {
      this.$emit("changePage", "loginUserToggle");
    },
    createUser() {
      this.$emit("changePage", "createUserToggle");
    },
    getUser() {
      this.$emit("changePage", "getUserToggle");
    },
  },
};
</script>

<style scoped></style>
