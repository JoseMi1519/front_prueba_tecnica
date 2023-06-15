<template>
  <div class="hello">
    <form @submit.prevent="createUser">
      <h1>{{ msg }}</h1>
      <h3>Name:</h3>
      <input v-model="user.name" />
      <h3>Email:</h3>
      <input v-model="user.email" />
      <h3>Phone:</h3>
      <input v-model="user.phone" />
      <h3>Password:</h3>
      <input v-model="user.password" /><br />
      <button>Create</button>
    </form>
  </div>
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
  },
  name: "CreateUser",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
