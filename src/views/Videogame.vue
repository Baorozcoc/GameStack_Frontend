<template>
  <div class="Videogame">
    <div class="centralComponent">
      <img :src="$route.params.cover" alt="Videojuego" class="bannerP" />
      <div class="Info">
        <img
          :src="$route.params.screenshots[0]"
          alt="Videojuego"
          class="Portada"
        />
        <div class="Data">
          <!--div class="titulo">{{ titulo }}</div-->
          <div class="titulo">{{ $route.params.title }}</div>
          <b>{{ $route.params.pubdate }}</b>
          <div v-if="$route.params.description.length < 550">
            {{ $route.params.description }}
          </div>
          <div v-else>
            {{
              $route.params.description
                .slice(0, 550)
                .substring(
                  0,
                  $route.params.description.slice(0, 550).lastIndexOf(".") + 1
                )
            }}
          </div>
        </div>
        <div>
          <div class="Puntuacion">{{ $route.params.score }}</div>
          <div>
            <b>Categorías: </b>
            <div
              v-for="(categoria, index) in $route.params.idcategory"
              :key="index"
              class="preference"
            >
              {{ categorias[categoria] }}
            </div>
          </div>
        </div>
      </div>
      <div class="reseñas">
        <div v-if="username != ''" class="reseña">
          <b v-if="crearReseña == false" class="user" @click="nuevaReseña()"
            >Deja tu reseña aquí</b
          >
          <form action="form" @submit.prevent="login" v-else>
            <label>Ingresa tu reseña!</label> <br />
            <input
              v-model="reseñaUsuario"
              class="inputReseña"
              type="text"
              required
              placeholder="Reseña"
            />
            <div class="iconos">
              <input
                class="Button"
                type="submit"
                value="Publicar"
                @click="CrearReseña()"
              />
              <button class="Button" @click="nuevaReseña()">Cancelar</button>
            </div>
          </form>
        </div>
        <div v-for="reseña in reseñas" :key="reseña.id" class="reseña">
          <b class="user" @click="RedirectUser(reseña.user)">{{
            reseña.user
          }}</b>
          {{ reseña.createdat }} <br />
          {{ reseña.content }}
          <!--div class="iconos">
            <img src="@/assets/agree.png" alt="Videojuego" /> 
            <img src="@/assets/disagree.png" alt="Videojuego" /> 
            <img src="@/assets/comment.png" alt="Videojuego" /> 
          </div-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/*{
            cover: this.videojuegosSlider[index].cover,
            screenshots: this.videojuegosSlider[index].screenshots,
            pubdate: this.videojuegosSlider[index].pubdate,
            score: this.videojuegosSlider[index].score,
          }*/
export default {
  name: "Videogame",
  data: () => ({
    categorias: [
      "RPG",
      "Mazmorras",
      "Shooter",
      "Estrategia",
      "Acción",
      "Sci-Fi",
    ],
    crearReseña: false,
    reseñaUsuario: "",
    username: "KudKun",
    reseñas: [
      {
        reviewid: 1,
        content: "Buen juego",
        user: "Alfa",
        videogame: "farcry1",
        createdat: "2022-06-04",
      },
      {
        reviewid: 2,
        content: "El mejor juego que haya jugado nunca",
        user: "RetroGamer",
        videogame: "farcry1",
        createdat: "2022-06-04",
      },
      {
        reviewid: 3,
        content: "Valoro mucho el sonido del juego :D ",
        user: "xxGamerxx",
        videogame: "farcry1",
        createdat: "2022-06-04",
      },
      {
        reviewid: 4,
        content:
          "Meh, podría ser mejor, me gusta la capacidad que tiene la empresa para innovar, pero no es suficiente para destacar",
        user: "Playernator16",
        videogame: "farcry1",
        createdat: "2022-06-04",
      },
    ],
  }),
  methods: {
    nuevaReseña: function () {
      this.crearReseña = !this.crearReseña;
      this.reseñaUsuario = "";
    },
    CrearReseña: function () {
      //Aqui se manda la petición de nueva reseña con
      //this.reseñaUsuario, this.UserID(global) y this.titulo
      this.crearReseña = !this.crearReseña;
      this.reseñaUsuario = "";
    },
    RedirectUser: function (UserID) {
      //Esta función captura el ID del usuario, debe hacer la petición de traer al usuario
      //Con ese nombre, y luego se hace el router.push con la información traida de la
      //peticion
      this.$router
        .push({
          name: "user",
          params: {
            id: UserID,
            username: UserID,
            v: 0,
            gamePreferences: ["Acción", "Peleas"],
          },
        })
        .catch((err) => {});
    },
  },
};
</script>
<style scoped lang="scss">
html {
  scroll-behavior: smooth;
}
.Videogame {
  width: 100%;
  //background-color: rgb(16, 83, 83);
  height: 89vh;
  margin-top: 20px;
}
.centralComponent {
  width: 70%;
  background-color: white;
  margin: 0 15vw;
  //height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  //min-width: 480px;
}

.bannerP {
  width: 100%;
  height: 40vh;
}
.Info {
  background-color: rgba(68, 68, 68, 0.6);
  backdrop-filter: blur(5px);
  width: 69%;
  height: 30vh;
  top: 25%;
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding: 2px;
  color: white;
  font-size: 1.6vh;
  font-family: Arial;
}

.Data {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 70%;
  margin: 10px;
}
.Portada {
  height: 18vw;
  margin: 10px;
}
.titulo {
  font-size: 4vh;
  font-weight: 600;
  margin-bottom: 2%;
}
.Puntuacion {
  background-image: url("@/assets/star.png");
  //background-color: red;
  background-repeat: no-repeat;
  background-size: cover;
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 700;
  font-family: Arial;
  color: black;
}
.preference {
  background: #3a3a3a;
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  display: block;
  //margin: 2px 20px;
  color: white;
  border: 2px solid white;
}
.reseñas {
  //background-color: blue;
  margin-top: 15vh;
  width: 100%;
  font-size: 16px;
  font-weight: 550;
  font-family: Arial;
  line-height: 1.5em;
}

.reseña {
  background-color: #3a3a3a;
  border-radius: 10px;
  color: white;
  padding: 10px;
  margin: 5px;
  padding-left: 20px;
  cursor: pointer;
}
.user {
  color: #00ffb9;
  cursor: pointer;
}
.iconos {
  display: flex;
  justify-content: flex-end;
  margin: 0 5%;
  margin-top: 10px;
}
.reseña:hover {
  background-color: #34725f;
}
.iconos img {
  width: 24px;
  height: 24px;
  margin-left: 10px;
  margin-right: 2px;
}
.inputReseña {
  background-color: #3a3a3a;
  margin-top: 10px;
  width: 90%;
  padding: 6px;
  //border-radius: 5px;
  border: 1px solid white;
  color: white;
}

@media screen and (max-width: 1200px) {
  .centralComponent {
    margin: 0 2vw;
    width: 92%;
  }
  .Portada {
    height: 30vw;
  }
  .Info {
    width: 92%;
    font-size: 1.4vw;
    height: 32vh;
  }
  .titulo {
    font-size: 3vw;
  }
  .reseñas {
    //background-color: blue;
    font-size: 14px;
    font-weight: 500;
  }
}
@media screen and (max-width: 800px) {
  .Info {
    font-size: 16px;
    height: 35vh;
  }
  .titulo {
    font-size: 28px;
  }
  .reseñas {
    //background-color: blue;
    font-size: 12px;
    font-weight: 500;
    margin-top: 18vh;
  }
  .Portada {
    display: none;
  }
}
</style>
