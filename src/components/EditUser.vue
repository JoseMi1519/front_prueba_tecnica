<template>
  <div>
    <h1>Editar usuario</h1>
    <form @submit="editUser">
      <input type="text" v-model="user.name" placeholder="Nuevo nombre" />
      <input
        type="email"
        v-model="user.email"
        placeholder="Nuevo correo electrónico"
      />
      <input type="text" v-model="user.phone" placeholder="Nuevo teléfono" />
      <input
        type="password"
        v-model="user.password"
        placeholder="Nueva contraseña"
      />
      <button type="submit">Guardar cambios</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
      },
    };
  },

  methods: {
    async getUser() {
      fetch("http://localhost:3001/user", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.users = data.user;
        });
    },

    async editUser() {
      try {
        const response = await fetch(`/api/users/:id`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.user),
        });

        if (response.ok) {
          console.log("Edición bien realizada");
        } else {
          console.log("Error en la edición");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
