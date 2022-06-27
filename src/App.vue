<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="Page">
    <header class="head">
      <div class="wrapper">
        <RouterLink to="/"
          ><img src="./assets/GameStackMini.png" class="logo" />
          <img src="./assets/GSMini.png" class="logo2" />
        </RouterLink>
        <div class="searchdiv">
          <input
            type="text"
            placeholder="Busca un juego"
            class="search"
            v-model="Busqueda"
            @keyup.enter="Buscar()"
          />
          <div class="searchButtonExt">
            <img
              src="./assets/search.svg"
              class="searchButton"
              @click="Buscar()"
            />
          </div>
        </div>
        <div v-if="$MyUserID == ''" class="buttons">
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
          <img src="./assets/menu.png" class="menuButton" @click="Menu()" />
        </div>
      </div>
      <div id="menu">
        <div class="option">Configuración</div>
        <div class="option" @click="SignOut()">Cerrar Sesión</div>
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
      //Aqui se hace una petición para traer al usuario en base a this.$MyUserID
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
    Menu: function () {
      if (document.getElementById("menu").style.visibility == "hidden") {
        document.getElementById("menu").style.visibility = "visible";
      } else {
        document.getElementById("menu").style.visibility = "hidden";
      }
    },
    SignOut: function(){
      this.$MyUserID= '';
      this.$MyUserName= '';
      document.getElementById("menu").style.visibility = "hidden";
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
.searchdiv {
  width: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search {
  padding: 6px;
  font-size: 16px;
  height: 5vh;
  width: 85%;
  border-width: 0px;
  background-color: #3a3a3a;
  color: #fefefe;
  border-radius: 14px 0px 0px 14px;
  display: inline;
}
.searchButton {
  background-color: #00ffb9;
  border-radius: 10px;
  width: 35px;
  cursor: pointer;
}
.searchButtonExt {
  height: 5vh;
  background-color: #3a3a3a;
  border-radius: 0px 14px 14px 0px;
  padding: 6px;
  width: 15%;
  display: inline-flex;
  justify-content: end;
  align-items: center;
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
  display: none;
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
  font-weight:500;
  display: flex;
  text-decoration: none;
  color: #000;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  max-width: 350px;
  cursor: pointer;
}
#menu {
  width: 30vw;
  min-width: 250px;
  background-color: white;
  height: 120px;
  position: absolute;
  right: 0px;
  visibility: hidden;
  border-left: 10px solid #3a3a3a;
  border-bottom: 10px solid #3a3a3a;
  padding-top: 10px;
}
.option {
  font-size: 22px;
  font-family: Arial;
  font-weight: 500;
  text-align: center;
  padding: 6px 0px;
}
.option:hover {
  background-color: #00ffb9;
  cursor: pointer;
}
@media screen and (max-width: 800px) {
  .username {
    font-size: 24px;
    min-width: 180px;
    margin-left: 10px;
  }
  .search {
    width: 300px;
  }
  .greenB {
    display: none;
  }
  .logo {
    display: none;
  }
  .logo2 {
    display: block;
  }
}
@media screen and (max-width: 660px) {
  .Button {
    font-size: 14px;
    margin: 2px;
    padding: 4px 15px;
  }
  .username {
    max-width: 120px;
    min-width: 20px;
    font-size: 16px;
    text-align: end;
    text-overflow: ellipsis;
  }
  .buttons {
    display: flex;
    flex-direction: column;
  }
  .option{
    font-size: 18px;
  }
}
</style>
