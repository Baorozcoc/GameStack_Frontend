<template>
  <div class="Search">
    <div class="centralComponent">
      <div class="Button" @click="RealizarPeticion()">Presiona aquí para realizar la petición</div>
      <div v-if="respuesta != ''">
        <h3>Los resultados de la petición son:</h3>
        <h6>{{ status }}</h6>
        
      </div>
      <h6>{{ respuesta }}</h6>
      <p id="Respuesta"></p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Request",
  data: () => ({
    status:0,
    respuesta: {},
  }),
  methods: {
    RealizarPeticion: function () {
      var url = "https://gamestack-soap-e3wbalmwuq-uc.a.run.app/REST/interdata";
      console.log("Entró a la petición");
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          console.log(xhr.status);
          //this.status=xhr.status;
          console.log(xhr.responseText);
          //this.respuesta=xhr.responseText;
          document.getElementById("Respuesta").innerHTML=xhr.responseText;
        }
      };

      xhr.send();
    },
    xmlToJson: function( xml ) {
        
        // Create the return object
        var obj = {};
        
        if ( xml.nodeType == 1 ) { // element
            // do attributes
            if ( xml.attributes.length > 0 ) {
            obj["@attributes"] = {};
            for ( var j = 0; j < xml.attributes.length; j++ ) {
                var attribute = xml.attributes.item( j );
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
            }
        } else if ( xml.nodeType == 3 ) { // text
            obj = xml.nodeValue;
        }
        
        // do children
        if ( xml.hasChildNodes() ) {
            for( var i = 0; i < xml.childNodes.length; i++ ) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if ( typeof(obj[nodeName] ) == "undefined" ) {
                obj[nodeName] =this.xmlToJson( item );
            } else {
                if ( typeof( obj[nodeName].push ) == "undefined" ) {
                var old = obj[nodeName];
                obj[nodeName] = [];
                obj[nodeName].push( old );
                }
                obj[nodeName].push(this.xmlToJson( item ) );
            }
            }
        }
        return obj;
    },
    }
  
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
