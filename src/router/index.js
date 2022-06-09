import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home", 
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/user/:id",// ID del usuario como parametro
      name: "user",
      component: () => import("../views/User.vue"),
    },
    {
      path: "/videogame/:title",//Id del videojuego como parametro
      name: "videogame",
      component: () => import("../views/Videogame.vue"),
    },
    {
      path: "/gamelist",//Id del usuario como parametro
      name: "gamelist", 
      component: () => import("../views/Gamelist.vue"),
    },
    {
      path: "/search/:termino",//termino de busqueda como parametro
      name: "search",
      component: () => import("../views/Search.vue"),
    },
  ],
});

export default router;
