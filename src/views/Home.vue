<template>
  <div class="Home">
    <div class="centralComponent">
      <div class="Carrousel">
        <ul class="slider" @click="RedirectVG()">
          <li
            v-for="(juego, index) in videojuegosSlider"
            :key="index"
            :id="juego.title"
          >
            <img :src="GetBanner(index)" alt="Juego" class="bannerP" />
            {{ data }}
          </li>
        </ul>
        <nav>
          <ul class="menu">
            <li>
              <a
                v-for="(juego, index) in videojuegosSlider"
                :key="index"
                :href="'#' + juego.title"
                @click="ChangeDescr(juego.title, juego.description, index)"
                ><div class="miniB"></div
              ></a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="description">
        <b>{{ title }}</b
        ><br />
        {{ description }}
      </div>
      <div class="bar"></div>
      <div class="flex2">
        <div>Videojuegos Subidos</div>
        <select name="select" class="filter">
          <option value="value1">Más reciente</option>
          <option value="value2">Más antiguo</option>
          <option value="value3">Mejor votado</option>
          <option value="value4">Ultimos subidos</option>
        </select>
      </div>
      <div class="flexwrap">
        <RouterLink
          v-for="(juego, index) in videojuegos"
          :key="index"
          :to="{
            name: 'videogame',
            params: {
              id: juego.id,
              title: juego.title,
              description: juego.description,
              idcategory: juego.idcategory,
              cover: juego.cover,
              screenshots: juego.screenshots,
              pubdate: juego.pubdate,
              score: juego.score,
            },
          }"
          ><img :src="GetImage(index)" alt="Juego" class="listP" />
        </RouterLink>
      </div>
    </div>
    <!--RouterLink to="/request"
      ><button class="Button2">Vista Especial</button></RouterLink
    -->
  </div>
</template>

<script>
import auth from "../logic/auth";
import axios from "axios";
const ENDPOINT_PATH = "https://gamestack-proxy-e3wbalmwuq-uc.a.run.app/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.mmpC2AD3ORWf7D1YGfaNoCiAjIWabm8ET6rJpy1iTIU";
export default {
  name: "Home",
  data: () => ({
    videojuegosSlider: [
    ],
    videojuegos: [
    ],
    title: "",
    description: "",
    index: 0,
  }),
  components: {},
  computed: {
    userLogged() {
      return auth.getUserLogged();
    },
  },
  methods: {
    ChangeDescr: function (title, descr, index) {
      this.description = descr;
      this.title = title;
      this.index = index;
    },
    RedirectVG: function () {
      //Función que redigire al juego en el Slider
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
    },
    GetImage: function (value) {
      //Muestra imgs de portada
      return this.videojuegos[value].screenshots[0];
    },
    GetBanner: function (value) {
      //Muestra imgs de banner
      return this.videojuegosSlider[value].cover;
    },
    async getAllGames() {
      var data = JSON.stringify({
        query: `query GetAllVideogames {
                  getAllVideogames {
                    Id
                    title
                    description
                    idcategory
                    cover
                    screenshots
                    pubdate
                    score
                  }
                }`,
        variables: {},
      });
      var config = {
        method: "post",
        url: "https://gamestack-proxy-e3wbalmwuq-uc.a.run.app/",
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.mmpC2AD3ORWf7D1YGfaNoCiAjIWabm8ET6rJpy1iTIU",
          "Content-Type": "application/json",
        },
        data: data,
      };
      const r = await axios(config);
      //console.log(r, "respuesta");
      this.videojuegos = r.data.data.getAllVideogames;
      this.videojuegosSlider = r.data.data.getAllVideogames;
      axios(config)
        .then(function (response) {
          //console.log( response.data.data.getAllVideogames);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getAllGames();
  },
};
</script>
<style lang="scss">
html {
  scroll-behavior: smooth;
}
.Home {
  width: 100%;
  height: 89vh;
  margin-top: 20px;
}
.Button2 {
  background-color: #00ffb9;
  position: absolute;
  top: 80px;
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
  height: 80px;
  margin: 5px;
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
}
.Button2:hover {
  background-color: #009c73;
}
.centralComponent {
  width: 70%;
  background-color: white;
  margin: 0 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
}
.Carrousel {
  width: 65vw;
  height: 23vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.description {
  margin-top: 1vw;
  padding: 20px;
  text-align: center;
  font-size: 1.3vw;
  font-family: Arial;
  margin-bottom: 1vw;
}
.bar {
  width: 100%;
  background-color: #3a3a3a;
  height: 10px;
}
.flex2 {
  margin-top: 1vw;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  font-size: 2vw;
  font-weight: bold;
  font-family: Arial;
}
.filter {
  font-size: 1.4vw;
  font-weight: 300;
  background-color: #3a3a3a;
  width: 18vw;
  min-width: 150px;
  padding: 5px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.flexwrap {
  margin-left: 6vw;
  margin-right: 6vw;
  margin-top: 2vw;
  width: 100%;
  top: -10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.listP {
  border: 4px solid #ffffff;
  width: 30%;
  //height: 15vw;
  margin: 0.5vw;
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
}
@media screen and (max-width: 800px) {
  .listP {
    width: 45%;
    //height: 45vw;
  }
  .filter {
    font-size: 14px;
  }
  .centralComponent {
    margin: 0 2vw;
    width: 92%;
  }
  .flex2 {
    font-size: 20px;
  }
  .description {
    font-size: 14px;
  }
}
.listP:hover {
  border: 4px solid #00ffb9;
  cursor: pointer;
}
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none inside;
}

ul.slider {
  position: relative;
}

ul.slider li {
  opacity: 0;
  transition: opacity 0.5s;
  position: absolute;
  width: 65vw;
  height: 20vw;
  left: -33vw;
  background: #fff;
  overflow: hidden;
}
ul.slider:hover {
  cursor: pointer;
}
ul.slider li:first-child {
  opacity: 1;
}

ul.slider li:target {
  opacity: 1;
}

nav {
  position: relative;
}
.miniB {
  width: 16px;
  height: 16px;
  background-color: #00ffb9;
  border: 1px solid black;
  margin-right: 25px;
  border-radius: 20px;
  display: inline-block;
}
.bannerP {
  width: 100%;
  display: block;
}
</style>
