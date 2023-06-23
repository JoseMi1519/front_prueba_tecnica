import { createRouter, createWebHistory } from "vue-router";
import homePage from "../src/components/homePage";
import loginUser from "../src/components/loginUser";
import createUser from "..src/components/createUser";

// const createRouter = require("vue-router");
// const createWebHistory = require("vue-router");
// const homePage = require("./homePage");
// const loginUser = require("./loginUser");
// const createUser = require("./createUser");

const routes = [
  {
    name: "Home",
    component: homePage,
    path: "/",
  },
  {
    name: "LoginUser",
    component: loginUser,
    path: "/loginUser",
  },
  {
    name: "CreateUser",
    component: createUser,
    path: "/createUser",
  },
];

const routersPages = createRouter({
  history: createWebHistory(),
  routes,
});

// module.exports = router;
export default routersPages;
