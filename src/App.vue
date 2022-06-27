<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="Page">
    <header class="head">
      <div class="wrapper">
        <RouterLink to="/"
          ><img src="./assets/GameStackMini.png" class="logo"/>
          <img src="./assets/GSMini.png" class="logo2"/>
        </RouterLink>
        <input
          type="text"
          placeholder="Busca un juego"
          class="search"
          v-model="Busqueda"
          @keyup.enter="Buscar()"
        />
        <img src="./assets/search.svg" class="searchButton" @click="Buscar()"/>
        <div v-if="$MyUserID == ''">
          <RouterLink to="/login"
            ><a class="Button">Inicia Sesión</a></RouterLink
          >
          <RouterLink to="/register"
            ><a class="Button">Registrate</a></RouterLink
          >
        </div>
        <div v-else class="username" @click="RedirectUser()">
          <div class="greenB"></div>
          {{ $MyUserName }}
          <img src="./assets/menu.png" class="menuButton" @click="Menu()"/>
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
  data: () => ({
    Busqueda: "",
  }),
  methods: {
    Buscar: function () {
      this.$router.push({ name: "search", params: { termino: this.Busqueda } });
      this.Busqueda = "";
    },
    RedirectUser: function () {
      //Aqui se hace una petición para traer al usuario en base a this.id
      //Lo que devuelve esta petición se envía como parametros en la siguiente
      //Función:
      /*this.$router
        .push({
          name: "user",
          params: {
            id: this.id,
            username: this.username,
            v: ...............,
            gamePreferences: .................,
          },
        })
        .catch((err) => {});*/
    },
    Menu: function(){
      this.$MyUserName= "baorozcoc";
    }
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
  width: 40vw;
  border-width: 0px;
  border-color: #cccccc;
  background-color: #3a3a3a;
  color: #fefefe;
  border-style: solid;
  border-radius: 14px;
}
.searchButton {
  position: absolute;
  left: 63%;
  background-color: #00ffb9;
  border-radius: 10px;
  width: 35px;
  cursor: pointer;
}
.menuButton {
  background-color: #00ffb9;
  border-radius: 10px;
  width: 35px;
  margin-left: 8px;
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
.logo2 {
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  height: 8vh1;
  display:none;
}
.logo2:hover {
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
  width: 22px;
  height: 22px;
  background-color: #00ffb9;
  border: 1px solid black;
  margin-right: 20px;
  border-radius: 20px;
  display: inline-block;
}
.username {
  font-size: 24px;
  font-family: Arial;
  font-weight: 600;
  display: flex;
  text-decoration: none;
  color: #000;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  max-width: 350px;
  cursor:pointer;
}
@media screen and (max-width: 1200px) {
  .searchButton{
    left:60%;
    //width:300px;
  }
}
@media screen and (max-width: 800px) {
  .username {
    font-size: 24px;
    min-width: 180px;
    margin-left: 10px;
  }
  .searchButton{
    left:50%;
  }
  .search{
    width:300px;
  }
  .greenB {
    display:none;
  }
  .logo{
    display:none;
  }
  .logo2{
    display:block;
  }
}
@media screen and (max-width: 660px) {
  .Button{
    font-size: 14px;
    margin:2px;
    padding: 4px 15px;
  }
  .username{
    font-size: 20px;
  }
}
</style>
