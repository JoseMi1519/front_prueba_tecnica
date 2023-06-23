<template>
  <div class="col-md-7">
    <h1>Estoy en get user</h1>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user of this.users" :key="user._id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.password }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import usersList from "../../getUsersResponse.json";

export default {
  data() {
    return {
      users: [],
    };
  },

  created() {
    this.getUsers();
    this.$emit("changePage", "Información usuario recibida");
  },

  methods: {
    getUsers() {
      this.users = usersList.users;
      console.log(usersList);
      // fetch("http://localhost:3001/user", {
      //   method: "GET",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-type": "application/json",
      //   },
      // })
      //   .then((res) => res.json())
      //   .then((data) => console.log(data));
    },
  },

  name: "GetUser",
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
