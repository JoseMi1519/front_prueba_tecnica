<template>
  <section class="container fluid">
    <article class="d-flex align-float-start justify-content-start">
      <img
        class="img-user d-flex img-fluid rounded-cicle"
        src="../assets/representaciones-experiencia-usuario-diseno-interfaz.jpg"
        alt="imagen usuario"
      />
    </article>
    <article
      class="form-container d-flex align-items-center justify-content-center"
    >
      <div class="col-md-6">
        <form class="row" @submit.prevent="createUser">
          <div class="mb-4">
            <u
              ><strong>{{ msg }}</strong></u
            >
          </div>
          <div class="col-md-12 mb-3">
            <label for="nameInput" class="form-label">Nombre</label>
            <input
              type="text"
              class="form-control"
              id="nameInput"
              v-model="user.name"
            />
          </div>
          <div class="col-md-12 mb-3">
            <label for="emailInput" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="emailInput"
              v-model="user.email"
            />
          </div>
          <div class="col-md-12 mb-3">
            <label for="phoneInput" class="form-label">Teléfono</label>
            <input
              type="text"
              class="form-control"
              id="phoneInput"
              v-model="user.phone"
            />
          </div>
          <div class="col-md-12 mb-3">
            <label for="passwordInput" class="form-label">Contraseña</label>
            <input
              type="password"
              class="form-control"
              id="passwordInput"
              v-model="user.password"
            />
          </div>
          <div class="col-12">
            <button type="submit" class="button-create btn btn-info">
              Crear
            </button>
          </div>
        </form>
      </div>
    </article>
  </section>
</template>

<script>
class User {
  constructor(name, email, phone, password) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }
}
export default {
  data() {
    return {
      user: new User(),
    };
  },

  methods: {
    createUser() {
      console.log(this.user);
      fetch("http://localhost:3001/user", {
        method: "POST",
        body: JSON.stringify(this.user),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    },

    creater() {
      this.$emit("chagePage", "Soy el creador!!");
    },
  },
  name: "CreateUser",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button-create {
  margin-top: 1rem;
  background-color: rgb(89, 184, 176);
  font-weight: 100;
}
.img-user {
  height: 60%;
  margin-left: 5rem;
  margin-top: 1rem;
  border-radius: 20px;
  opacity: 0.7;
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0rem;
  height: 500px;
  background-image: linear-gradient(pink, rgb(104, 104, 236) 60%);
}

.form-container {
  margin-top: 2rem;
  margin-bottom: 3rem;
  max-height: 55%;
  padding: 0rem;
  margin-right: 2rem;
}

.form-label {
  margin: 0rem;
  padding: 0rem;
  font-size: small;
}

.mb-4 {
  margin-bottom: 1rem;
  font-size: large;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.button-create {
  font-size: small;
  padding-inline: 2rem;
}
</style>
