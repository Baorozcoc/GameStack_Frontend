<template>
  <div class="Search">
    <div class="centralComponent">
      <div class="Button" @click="RealizarPeticion()">
        Presiona aquí para realizar la petición
      </div>
      <h3>Los resultados de la petición son:</h3>
      <!--div v-for="(resp,index) in respuesta" :key="index">
            {{resp}}
      </div-->
      <div>{{respuesta}}</div>
      <p id="Respuesta"></p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Request",
  data: () => ({
    respuesta:"",
  }),
  methods: {
    RealizarPeticion: function () {
      var url = "https://gamestack-soap-e3wbalmwuq-uc.a.run.app/REST/interdata";
      //console.log("Entró a la petición");
      var xhr = new XMLHttpRequest();
      //xhr.responseType = 'json';
      xhr.open("GET", url, true);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          //console.log(xhr.status);
          //this.status=xhr.status;
          //console.log(xhr.responseText);
          var archivo=JSON.parse(xhr.responseText);
          //console.log(archivo);
          this.respuesta={...archivo.value};
          //console.log(this.respuesta);
          //console.log(this.respuesta[0]);
          document.getElementById("Respuesta").innerHTML = xhr.responseText;
        }
      };

      xhr.send();
      console.log(this.respuesta);
    },
  },
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
  //height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
}
</style>
