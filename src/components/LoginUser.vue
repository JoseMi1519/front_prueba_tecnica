<template>
  <div>
    <br /><br /><br />
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="login">
      <label class="username" for="username">Nombre de usuario:</label>
      <input
        class="inputUsername"
        type="text"
        id="username"
        v-model="username"
        required
      />

      <label for="password">Contraseña:</label>
      <input type="password" id="password" v-model="password" required />
    </form>
    <button class="button" type="submit">Iniciar sesión</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$emit("changePage", "getUserToggle");
      console.log("Nombre de usuario:", this.username);
      console.log("Contraseña:", this.password);

      this.username = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
.username {
  margin-top: 5rem;
}
.button {
  margin-top: 5rem;
}
.inputUsername {
  margin-right: 3rem;
}
</style>
