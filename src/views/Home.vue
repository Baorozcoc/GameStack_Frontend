<template>
  <div class="Home">
    <div class="centralComponent">
      <div class="Carrousel">
        <ul class="slider" @click="RedirectVG()">
          <!--li v-for="data in videogamesP" :key="data.id" :id="'slide' + data">
            <img :src="'../assets/' + data + '.jpg'" />
            {{data}}
            <img src="@/assets/GameStackMini.png" class="logo"/>
          </li-->
          <li id="slide1">
            <img src="@/assets/1_1.jpg" alt="Videojuego" class="bannerP" />
          </li>
          <li id="slide2">
            <img src="@/assets/2_2.jpg" alt="Videojuego" class="bannerP" />
          </li>
          <li id="slide3">
            <img src="@/assets/3_3.jpg" alt="Videojuego" class="bannerP" />
          </li>
          <li id="slide4">
            <img src="@/assets/4_4.jpg" alt="Videojuego" class="bannerP" />
          </li>
          <li id="slide5">
            <img src="@/assets/5_5.jpg" alt="Videojuego" class="bannerP" />
          </li>
          <li id="slide6">
            <img src="@/assets/6_6.jpg" alt="Videojuego" class="bannerP" />
          </li>
        </ul>
        <nav>
          <ul class="menu">
            <li>
              <a
                v-for="data in videogamesP"
                :key="data.id"
                :href="'#slide' + data"
                @click="ChangeDescr(data)"
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
        <!--div class="filter">
          Ordenar por <img src="../assets/dropdown.png" class="logo" />
        </div-->
        <select name="select" class="filter">
          <option value="value1">Más reciente</option>
          <option value="value2">Más antiguo</option>
          <option value="value3">Mejor votado</option>
          <option value="value4">Ultimos subidos</option>
        </select>
      </div>
      <div class="flexwrap">
        <RouterLink to="/videogame"
          ><img src="@/assets/4.jpg" alt="Videojuego" class="listP"
        /></RouterLink>
        <RouterLink to="/videogame"
          ><img src="@/assets/1.jpg" alt="Videojuego" class="listP"
        /></RouterLink>
        <RouterLink to="/videogame"
          ><img src="@/assets/2.jpg" alt="Videojuego" class="listP"
        /></RouterLink>
        <RouterLink to="/videogame"
          ><img src="@/assets/7.jpg" alt="Videojuego" class="listP"
        /></RouterLink>
        <RouterLink to="/videogame"
          ><img src="@/assets/6.jpg" alt="Videojuego" class="listP"
        /></RouterLink>
        <RouterLink to="/videogame"
          ><img src="@/assets/5.jpg" alt="Videojuego" class="listP"
        /></RouterLink>
        <RouterLink to="/videogame"
          ><img src="@/assets/3.jpg" alt="Videojuego" class="listP"
        /></RouterLink>
        <RouterLink to="/videogame"
          ><img src="@/assets/5.jpg" alt="Videojuego" class="listP"
        /></RouterLink>
        <RouterLink to="/videogame"
          ><img src="@/assets/1.jpg" alt="Videojuego" class="listP"
        /></RouterLink>
      </div>

      <!--h1>Home</h1>
      <img
        v-for="img in videogames"
        :key="img.id"
        :src="'../assets/' + img + '.jpg'"
      />
      -->
      <div v-if="userLogged">Bienvenido:{{ userLogged }}</div>
    </div>
  </div>
</template>

<script>
import auth from "../logic/auth";
export default {
  name: "Home",
  data: () => ({
    videogamesP: ["1", "2", "3", "4", "5", "6"],
    videogames: ["6", "3", "2", "7", "1", "5", "6", "2", "3"],
    title: "",
    description: "",
  }),
  components: {},
  computed: {
    userLogged() {
      return auth.getUserLogged();
    },
  },
  methods: {
    ChangeDescr: function (value) {
      switch (value) {
        case "1":
          this.title = "Far Cry 1";
          this.description =
            "Es un videojuego de disparos en primera persona (FPS) de la compañía de videojuegos Crytek y distribuido por Ubisoft, editado para PC, y después (pero con el nombre Far Cry Instincts) en Xbox, y por último, con el nombre Farcry Classic, en PlayStation 3 y Xbox 360 (jugable en Xbox One mediante la retrocompatibilidad). Dispone de un modo multijugador en línea y de una aventura en modo individual, aunque en su última versión son dos las campañas para un jugador. El videojuego fue presentado en el E3 2004, y cosechó muy buenas críticas en aspectos como el apartado gráfico o la inteligencia artificial.";
          break;
        case "2":
          this.title = "BioShock";
          this.description =
            "Es un videojuego de disparos en primera persona y terror, desarrollado por Irrational Games (anteriormente conocida como 2K Boston/2K Australia), publicado el 21 de agosto de 2007 en Norteamérica para el sistema operativo Windows y la consola Xbox 360, tres días después en algunos países de Europa y Australia. Una versión para la PlayStation 3, desarrollada por 2K Marin, fue posteriormente lanzada internacionalmente el 17 de octubre de 2008, el 20 en España y el 21 del mismo mes en Norteamérica. Así como una versión para Mac OS X, el 7 de octubre de 2009. Fue diseñado e ideado por Ken Levine. Una secuela, BioShock 2, fue lanzada el 9 de febrero de 2010 y una tercera parte, BioShock Infinite, fue lanzada el 26 de marzo de 2013 compatible con Linux gracias a Steam, ofreciendo así una experiencia de multiplataforma completa.";
          break;
        case "3":
          this.title = "Super Mario Odyssey";
          this.description =
            "Es un videojuego de plataformas en tres dimensiones para Nintendo Switch desarrollado y publicado por Nintendo que se lanzó el 27 de octubre de 2017. La entrega nos introduce a una nueva aventura con Mario y su nuevo aliado Cappy, un ser en forma de sobrero que le permite a Mario poseer diversos personajes y objetos, que en su vehículo aéreo la Odyssey se embarcan en una travesía visitando distintos reinos a lo largo del mundo para salvar a la Princesa Peach del matrimonio forzado que Bowser planea. Es el decimonoveno título de la serie Super Mario y el séptimo juego de plataformas en 3D de Mario Bros.";
          break;
        case "4":
          this.title = "The Legend of Zelda: Breath of the Wild";
          this.description =
            "Es un videojuego de acción-aventura de 2017 de la serie The Legend of Zelda, desarrollado por la filial Nintendo EPD en colaboración con Monolith Soft y publicado por Nintendo para las consolas Wii U y Nintendo Switch. Es la décimo octava entrega de la serie y la tercera en utilizar gráficos en alta definición. Se lanzó el 3 de marzo de 2017 para Wii U (siendo el último juego publicado por Nintendo en salir para dicha consola) y Nintendo Switch.";
          break;
        case "5":
          this.title = "Metroid Prime";
          this.description =
            "Es un videojuego de acción-aventura en primera persona con componentes de disparos y plataformas, desarrollado por Retro Studios y distribuido por Nintendo para la consola Nintendo GameCube entre los años 2002 y 2003. Es el primero de la serie Metroid en ser tridimensional y usar la vista en primera persona. El juego describe las aventuras de la cazarrecompensas Samus Aran en el planeta Tallon IV en su lucha contra los piratas espaciales y sus experimentos biológicos. En su aventura también tendrá acceso a los textos de la antigua civilización de los chozo, los antiguos habitantes del planeta, ahora extintos debido al impacto de un meteorito de phazon. A través de las cinco regiones que forman el planeta, Samus debe recuperar las partes perdidas de su equipo y los doce artefactos chozo necesarios para resolver el misterio que rodea al phazon, nexo común que une las tramas";
          break;
        case "6":
          this.title = "Super Smash Bros. Ultimate";
          this.description =
            "Es un videojuego de lucha desarrollado por Sora Ltd. y Bandai Namco Entertainment y distribuido por Nintendo para la consola Nintendo Switch. Fue lanzado a nivel mundial el 7 de diciembre de 2018 y se trata del quinto título de la serie Super Smash Bros. Igual que sus predecesores, se trata de un juego de lucha donde hay que debilitar a los rivales para expulsarles de los márgenes del escenario. El plantel está formado por personajes de otros videojuegos, tanto de Nintendo como de otras desarrolladoras independientes, e incluye a todos los combatientes de entregas anteriores. Además, puede ampliarse con la compra de contenido descargable. Los trofeos coleccionables han sido reemplazados por los «espíritus», un nuevo concepto inspirado también en personajes de videojuegos, que permiten mejorar las características del luchador antes de un combate.";
          break;
      }
    },
    RedirectVG: function (){
      this.$router.push({ name: "videogame" }).catch((err) => {});
    }
  },
};
</script>
<style lang="scss">
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
  //height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
}
.Carrousel {
  width: 65vw;
  height: 23vw;
  //background-color: blueviolet;
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
  .filter{
    font-size: 14px;
  }
  .centralComponent {
    margin: 0 2vw;
    width: 92%;
  }
  .flex2{
    font-size: 20px;
  }
  .description{
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
  //border: 2px solid red;
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
