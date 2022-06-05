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
      path: "/user",
      name: "user",
      component: () => import("../views/User.vue"),
    },
    {
      path: "/videogame",
      name: "videogame",
      component: () => import("../views/Videogame.vue"),
    },
    {
      path: "/gamelist",
      name: "gamelist",
      component: () => import("../views/Gamelist.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/Search.vue"),
    },
  ],
});

export default router;
