<template>
  <div>
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="login">
      <label for="username">Nombre de usuario:</label>
      <input type="text" id="username" v-model="username" required />

      <label for="password">Contraseña:</label>
      <input type="password" id="password" v-model="password" required />

      <button type="submit">Iniciar sesión</button>
    </form>
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
