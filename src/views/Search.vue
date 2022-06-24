<template>
  <div class="Search">
    <div class="centralComponent">
      <div class="message">
        Los resultados de busqueda para el termino: "{{
          $route.params.termino
        }}" son:
      </div>
      <div class="videojuegos">
        <div
          v-for="videojuego in videojuegos"
          :key="videojuego.id"
          class="videojuego"
          @click="RedirectVG(videojuego)"
        >
          <b class="vg"> {{ videojuego.title }}</b>
          {{ videojuego.pubdate }} <br />
          <div class="preferences">
            <div
              v-for="(categoria, index) in videojuego.idcategory"
              :key="index"
              class="preference"
            >
              {{ categorias[categoria] }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Search",
  data: () => ({
    videojuegos: [
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
      },
    ],
    categorias: ["Accion", "Shooter", "Guerra"],
  }),
  methods: {
    RedirectVG: function (VG) {
      this.$router
        .push({
          name: "videogame",
          params: {
            id: VG.id,
            title: VG.title,
            description: VG.description,
            idcategory: VG.idcategory,
            cover: VG.cover,
            screenshots: VG.screenshots,
            pubdate: VG.pubdate,
            score: VG.score,
          },
        })
        .catch((err) => {});
    },
  },
  //En Mounted se hace un metodo que traiga los videojuegos por
  //termino de busqueda, el cual se toma de $route.params.termino
  //Y los guarda en this.videojuegos
};
</script>
<style scoped lang="scss">
html {
  scroll-behavior: smooth;
}
.Home {
  width: 100%;
  //background-color: rgb(16, 83, 83);
  height: 89vh;
  margin-top: 20px;
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
  margin-top: 20px;
}
.message {
  width: 90%;
  display: flex;
  align-items: start;
  font-size: 16px;
  font-weight: 550;
  font-family: Arial;
  line-height: 1.5em;
  margin-top: 10px;
}
.videojuegos {
  //background-color: blue;
  margin-top: 2vh;
  width: 90%;
  font-size: 16px;
  font-weight: 550;
  font-family: Arial;
  line-height: 1.5em;
}


.videojuego {
  background-color: #3a3a3a;
  border-radius: 10px;
  color: white;
  padding: 10px;
  margin: 5px;
  padding-left: 20px;
  cursor: pointer;
}
.videojuego:hover{
  background-color: #34725f;
}
.vg {
  color: #00ffb9;
}
.preferences{
  display:flex;
  flex-wrap: wrap;
}
.preference {
  background: #3a3a3a;
  border-radius: 10px;
  padding: 2px 22px;
  text-align: center;
  display: inline;
  margin: 2px;
  color: white;
  border: 2px solid white;
}
@media screen and (max-width: 1200px) {
  .centralComponent {
    margin: 0 2vw;
    width: 92%;
    margin-top: 10px;
  }
}
</style>
