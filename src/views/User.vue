<template>
  <div class="User">
    <div class="centralComponent">
      <div class="Info">
        <div class="Data">
          <!--div class="titulo">{{ user.username }}</div-->
          <div class="titulo">{{ $route.params.username }}</div>
          <div><b>Preferencias</b></div>
          <br />
          <div class="preferences">
            <div
              v-for="pref in $route.params.gamePreferences"
              :key="pref.id"
              class="preference"
            >
              {{ pref }}
            </div>
          </div>
        </div>
      </div>
      <div class="reseñas">
        <div v-for="reseña in reseñas" :key="reseña.id" class="reseña">
          <b class="vg" @click="RedirectVG(reseña.videogame)">{{ reseña.videogame }}</b>
          {{ reseña.createdat }} <br />
          {{ reseña.content }}
          <div class="iconos">
            <img src="@/assets/agree.png" alt="Videojuego" /> 0
            <img src="@/assets/disagree.png" alt="Videojuego" /> 0
            <img src="@/assets/comment.png" alt="Videojuego" /> 0
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "User",
  data: () => ({
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
        videogame: "farcry2",
        createdat: "2022-06-04",
      },
      {
        reviewid: 3,
        content: "Valoro mucho el sonido del juego :D ",
        user: "xxGamerxx",
        videogame: "farcry3",
        createdat: "2022-06-04",
      },
      {
        reviewid: 4,
        content:
          "Meh, podría ser mejor, me gusta la capacidad que tiene la empresa para innovar, pero no es suficiente para destacar",
        user: "Playernator16",
        videogame: "farcry4",
        createdat: "2022-06-04",
      },
    ],
    fondos:["@/assets/GIFWPP1.gif","@/assets/GIFWPP2.gif","@/assets/GIFWPP3.gif","@/assets/GIFWPP4.gif","@/assets/GIFWPP5.gif"], //Para uso futuro, cambiar dinamicamente el fondo
  }),
  //Aquí debe haber un metodo que traiga las reseñas por ID del usuario con 
  //parametro "$route.params.id"
  methods:{
    RedirectVG: function(idVG){
      //Aqui se toma el ID del videojuego, con este se busca el videojuego y se trae
      //Luego se manda cada uno de sus atributos como parametro por la función
      //comentada a continuación, cambiando el "this.video..." por el videojuego que traemos
      /*
        this.$router
        .push({
          name: "videogame",
          params: {
            id: this.videojuegosSlider[this.index].id,
            title: this.videojuegosSlider[this.index].title,
            description: this.videojuegosSlider[this.index].description,
            idcategory: this.videojuegosSlider[this.index].idcategory,
            cover: this.videojuegosSlider[this.index].cover,
            screenshots: this.videojuegosSlider[this.index].screenshots,
            pubdate: this.videojuegosSlider[this.index].pubdate,
            score: this.videojuegosSlider[this.index].score,
          },
        })
        .catch((err) => {});
      */
    }
  }
};
</script>
<style scoped lang="scss">
html {
  scroll-behavior: smooth;
}
.User {
  width: 100%;
  //background-color: rgb(16, 83, 83);
  height: 89vh;
  margin-top: 20px;
}
.centralComponent {
  width: 70%;
  background-color: white;
  margin: 0 15%;
  //height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
}
.Info {
  background: linear-gradient(rgba(34, 34, 34, 0.5), rgba(10, 65, 75, 0.5)),
    url("@/assets/GIFWPP1.gif");
  background-repeat: no-repeat;
  background-size: cover;
  width: 95%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 2px;
  font-size: 2vh;
  font-family: Arial;
  color: white;
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
  height: 90%;
  margin: 10px;
  border: 2px solid white;
}
.titulo {
  font-size: 4vh;
  font-weight: 600;
  margin-bottom: 2%;
}
.preferences{
    display:flex;
    flex-wrap: wrap;
}
.preference {
  background: #3a3a3a;
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  display: inline;
  margin: 2px 20px;
  color: white;
  border: 2px solid white;
}
.reseñas {
  //background-color: blue;
  margin-top: 2vh;
  width: 90%;
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
}
.vg {
  color: #00ffb9;
  cursor:pointer;
}
.iconos {
  display: flex;
  justify-content: flex-end;
  margin: 0 5%;
  margin-top: 10px;
}
.iconos img {
  width: 24px;
  height: 24px;
  margin-left: 10px;
  margin-right: 2px;
}
@media screen and (max-width: 1200px) {
  .centralComponent {
    margin: 0 2vw;
    width: 92%;
  }
}
</style>
