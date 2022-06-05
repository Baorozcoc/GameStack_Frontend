<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="Page">
    <header class="head">
      <div class="wrapper">
        <RouterLink to="/"
          ><img src="./assets/GameStackMini.png" class="logo"
        /></RouterLink>
        <input
          type="text"
          placeholder="Busca un juego"
          class="search"
          v-model="Busqueda"
        />
        <img src="./assets/search.svg" class="searchButton" @click="Buscar()" />
        <div v-if="UserID == 'nothing'">
          <RouterLink to="/login"
            ><a class="Button">Inicia Sesión</a></RouterLink
          >
          <RouterLink to="/register"
            ><a class="Button">Registrate</a></RouterLink
          >
        </div>
        <div v-else>
          <RouterLink to="/user" class="username">
            <div class="greenB"></div>
            {{ UserID }}</RouterLink
          >
        </div>
      </div>
    </header>
    <div class="Content">
      <RouterView />
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({ UserID: "KudKun", Busqueda: "" }),
  methods: {
    Buscar: function () {},
  },
};
</script>

<style lang="scss">
body,
html {
  margin: 0px !important;
  padding: 0px !important;
  background-color: #3a3a3a;
  background-size: cover;
  height: 100%;
}
.head {
  position: sticky;
  top: 0px;
  z-index: 5;
}
.wrapper {
  background-color: white;
  height: 8vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
.Content {
  width: 100%;
  height: 89vh;
}
.search {
  padding: 6px;
  font-size: 16px;
  height: 65%;
  width: 22%;
  border-width: 0px;
  border-color: #cccccc;
  background-color: #3a3a3a;
  color: #fefefe;
  border-style: solid;
  border-radius: 14px;
}
.searchButton {
  position: absolute;
  left: 59%;
  background-color: #00ffb9;
  border-radius: 10px;
  width: 35px;
  cursor: pointer;
}
.logo {
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  height: 8vh1;
}
.logo:hover {
  transform: scale(0.9);
}
.Button {
  background-color: #00ffb9;
  border-radius: 10px;
  border: 2px solid #000000;
  display: inline-block;
  cursor: pointer;
  color: #000;
  font-family: Arial;
  font-size: 16px;
  padding: 10px 15px;
  text-decoration: none;
  font-weight: bold;
  height: 50%;
  margin: 5px;
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
}
.Button:hover {
  background-color: #009c73;
}
.Button:active {
  position: relative;
  top: 1px;
}
.greenB {
  width: 28px;
  height: 28px;
  background-color: #00ffb9;
  border: 1px solid black;
  margin-right: 20px;
  border-radius: 20px;
  display: inline-block;
}
.username {
  font-size: 28px;
  font-family: Arial;
  font-weight: 600;
  display: flex;
  text-decoration: none;
  color: #000;
}
@media screen and (max-width: 800px) {
  .username {
    font-size: 24px;
  }
  .greenB {
    width: 24px;
    height: 24px;
  }
}
</style>
