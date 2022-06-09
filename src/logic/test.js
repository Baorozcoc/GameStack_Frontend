//endpoint con proxy
//https://gamestack-proxy-e3wbalmwuq-uc.a.run.app/

import axios from "axios";
import Cookies from "js-cookie";

//Proxy
const ENDPOINT_PATH = "https://gamestack-proxy-e3wbalmwuq-uc.a.run.app/";
//token generado en pagina JWT con secret en archivo
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.mmpC2AD3ORWf7D1YGfaNoCiAjIWabm8ET6rJpy1iTIU'


export default {
getByTitle(title) {
    return axios.post(
      ENDPOINT_PATH,
      {
        query: `query Query($videogameTittle: String!) {
            getVideogameByTittle(videogameTittle: $videogameTittle){
                Id
                title
                description
                idcategory
                cover
                screenshots
                pubdate
                score
                }
            }`,//Parametros del objeto encontrado a devolver
        variables: {
            videogameTittle: title
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization":'token',
        },
      }
    );
  },
}