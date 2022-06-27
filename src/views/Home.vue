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
      <div class="Button" @click="getAllGames()">"GetAG"</div>
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
    videojuegosSlider: [/*
      {
        id: "juego1",
        title: "Metal Gear Solid",
        description:
          "Metal Gear Solid (メタルギアソリッド Metaru Gia Soriddo, comúnmente abreviado MGS) es un videojuego de acción-aventura y sigilo de 1998 desarrollado por Konami Computer Entertainment Japan y publicado por Konami para la consola PlayStation. Fue lanzado el 3 de septiembre de 1998 en Japón, el 21 de octubre de 1998 en Norteamérica y el 24 de junio de 1999 en Europa.",
        idcategory: [1, 2],
        cover:
          "https://gamecloud.net.au/wp-content/uploads/2015/08/Metal-Gear-Solid-Banner.jpeg",
        screenshots: [
          "https://sm.ign.com/ign_es/screenshot/default/60225-metal-gear-solid-3-subsistence-playstation-2_umwf.jpg",
          "",
        ],
        pubdate: "03-08-1998",
        score: "5.0",
      },
      {
        id: "juego2",
        title: "Destiny",
        description:
          "Destiny es un videojuego de disparos en primera persona, en forma de multijugador masivo en línea en un mundo abierto de ficción especulativa.Fue desarrollado por Bungie y publicado por Activision como parte de un contrato de producción de diez años. Se lanzó a nivel mundial el 9 de septiembre de 2014 para PlayStation 3, PlayStation 4, Xbox 360 y Xbox One. La versión beta del videojuego fue lanzada en el verano de 2014, la cual estuvo disponible antes para PlayStation 3 y PlayStation 4. La primera vez que se mostró el videojuego, fue en la conferencia de Sony en el E3 de 2013",
        idcategory: [1, 2],
        cover:
          "https://d1fs8ljxwyzba6.cloudfront.net/assets/article/2017/08/28/Destiny-2-Clan-Banner-Creator-Guide_feature.jpg",
        screenshots: [
          "http://los40es00.epimg.net/los40/imagenes/2017/01/25/videojuegos/1485351716_274887_1485351763_sumario_normal.jpg",
          "",
        ],
        pubdate: "09-08-2014",
        score: "5.0",
      },
      {
        id: "juego3",
        title: "Halo Reach",
        description:
          "Halo Reach es un videojuego de disparos en primera persona desarrollado por Bungie y publicado por Microsoft Game Studios para la consola Xbox 360 y posteriormente retrocompatible con Xbox One (exclusivo de Microsoft para estas dos 2 consolas). Es el sexto videojuego de la saga Halo, así como su tercer videojuego Publicado. Fue anunciado por primera vez el 2009 en Spike Video Game Awards.",
        idcategory: [1, 2],
        cover:
          "https://www.diariotiempo.com.ar/wp-content/uploads/2022/01/Halo-Reach-Online-Multiplayer-todavia-se-puede-jugar-en-Xbox.jpg",
        screenshots: [
          "https://sm.ign.com/ign_es/screenshot/default/caja-reach-halo_u3my.png",
          "",
        ],
        pubdate: "14-08-2010",
        score: "4.5",
      },
      {
        id: "juego4",
        title: "FarCry 6",
        description:
          "Far Cry 6 es un videojuego de disparos en primera persona desarrollado por Ubisoft Toronto y publicado por Ubisoft. Es la sexta entrega principal de la serie Far Cry, fue lanzado el 7 de octubre del 2021 para las plataformas de Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S y Google Stadia",
        idcategory: [1, 2],
        cover:
          "https://elchapuzasinformatico.com/wp-content/uploads/2020/07/Far-Cry-6-1.jpg",
        screenshots: [
          "https://i11a.3djuegos.com/juegos/16215/xbox_scarlett/fotos/noticias/xbox_scarlett-5207432.jpg",
          "",
        ],
        pubdate: "08-10-2021",
        score: "4.8",
      },*/
    ],
    videojuegos: [/*
      {
        id: "juego1",
        title: "Metal Gear Solid",
        description:
          "Metal Gear Solid (メタルギアソリッド Metaru Gia Soriddo, comúnmente abreviado MGS) es un videojuego de acción-aventura y sigilo de 1998 desarrollado por Konami Computer Entertainment Japan y publicado por Konami para la consola PlayStation. Fue lanzado el 3 de septiembre de 1998 en Japón, el 21 de octubre de 1998 en Norteamérica y el 24 de junio de 1999 en Europa.",
        idcategory: [1, 2],
        cover:
          "https://gamecloud.net.au/wp-content/uploads/2015/08/Metal-Gear-Solid-Banner.jpeg",
        screenshots: [
          "https://sm.ign.com/ign_es/screenshot/default/60225-metal-gear-solid-3-subsistence-playstation-2_umwf.jpg",
          "",
        ],
        pubdate: "03-08-1998",
        score: "5.0",
      },
      {
        id: "juego2",
        title: "Destiny",
        description:
          "Destiny es un videojuego de disparos en primera persona, en forma de multijugador masivo en línea en un mundo abierto de ficción especulativa.Fue desarrollado por Bungie y publicado por Activision como parte de un contrato de producción de diez años. Se lanzó a nivel mundial el 9 de septiembre de 2014 para PlayStation 3, PlayStation 4, Xbox 360 y Xbox One. La versión beta del videojuego fue lanzada en el verano de 2014, la cual estuvo disponible antes para PlayStation 3 y PlayStation 4. La primera vez que se mostró el videojuego, fue en la conferencia de Sony en el E3 de 2013",
        idcategory: [1, 2],
        cover:
          "https://d1fs8ljxwyzba6.cloudfront.net/assets/article/2017/08/28/Destiny-2-Clan-Banner-Creator-Guide_feature.jpg",
        screenshots: [
          "http://los40es00.epimg.net/los40/imagenes/2017/01/25/videojuegos/1485351716_274887_1485351763_sumario_normal.jpg",
          "",
        ],
        pubdate: "09-08-2014",
        score: "5.0",
      },
      {
        id: "juego3",
        title: "Halo Reach",
        description:
          "Halo Reach es un videojuego de disparos en primera persona desarrollado por Bungie y publicado por Microsoft Game Studios para la consola Xbox 360 y posteriormente retrocompatible con Xbox One (exclusivo de Microsoft para estas dos 2 consolas). Es el sexto videojuego de la saga Halo, así como su tercer videojuego Publicado. Fue anunciado por primera vez el 2009 en Spike Video Game Awards.",
        idcategory: [1, 2],
        cover:
          "https://www.diariotiempo.com.ar/wp-content/uploads/2022/01/Halo-Reach-Online-Multiplayer-todavia-se-puede-jugar-en-Xbox.jpg",
        screenshots: [
          "https://sm.ign.com/ign_es/screenshot/default/caja-reach-halo_u3my.png",
          "",
        ],
        pubdate: "14-08-2010",
        score: "4.5",
      },
      {
        id: "juego4",
        title: "FarCry 6",
        description:
          "Far Cry 6 es un videojuego de disparos en primera persona desarrollado por Ubisoft Toronto y publicado por Ubisoft. Es la sexta entrega principal de la serie Far Cry, fue lanzado el 7 de octubre del 2021 para las plataformas de Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S y Google Stadia",
        idcategory: [1, 2],
        cover:
          "https://elchapuzasinformatico.com/wp-content/uploads/2020/07/Far-Cry-6-1.jpg",
        screenshots: [
          "https://i11a.3djuegos.com/juegos/16215/xbox_scarlett/fotos/noticias/xbox_scarlett-5207432.jpg",
          "",
        ],
        pubdate: "08-10-2021",
        score: "4.8",
      },
      {
        id: "juego5",
        title: "GTA Vice city",
        description:
          "Grand Theft Auto: Vice City (también conocido por su abreviatura GTA: VC o, simplemente, Vice City), es un videojuego de acción-aventura de mundo abierto en tercera persona. Es el quinto título de la serie Grand Theft Auto y el segundo en gráficos 3D.",
        idcategory: [1, 2],
        cover: "https://i.blogs.es/5b2aea/maxresdefault/1366_521.jpeg",
        screenshots: [
          "https://sm.ign.com/ign_es/screenshot/default/free-shipping-custom-poster-nice-bedroom-decor-fas_9w8p.jpg",
          "",
        ],
        pubdate: "12-02-2002",
        score: "4.2",
      },
      {
        id: "juego6",
        title: "God of War Ragnarok",
        description:
          "God of War: Ragnarök es un próximo juego de acción y aventuras en desarrollo por Santa Monica Studio y que será publicado por Sony Interactive Entertainment (SIE). Está previsto que se lance en 2022 para PlayStation 4 y PlayStation 5. Será la 9.ª entrega de la saga de God of War. El juego se desarrollará en la tierra mitológica nórdica y contará con el protagonista de la serie Kratos, el dios griego de la guerra y su hijo Atreus.",
        idcategory: [1, 2],
        cover: "https://images.alphacoders.com/117/1173124.jpg",
        screenshots: [
          "https://i.pinimg.com/236x/a1/4f/e5/a14fe5bce6f1458be3eee1b4b723d3f6.jpg",
          "",
        ],
        pubdate: "06-08-2022",
        score: "3.2",
      },*/
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
      console.log(r, "respuesta");
      this.videojuegos = r.data.data.getAllVideogames;
      this.videojuegosSlider = r.data.data.getAllVideogames;
      axios(config)
        .then(function (response) {
          console.log( response.data.data.getAllVideogames);
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
  width: 15%;
  height: 15vw;
  margin: 0.5vw;
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
}
@media screen and (max-width: 800px) {
  .listP {
    width: 40%;
    height: 45vw;
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
