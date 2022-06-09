`
Obtener un juego mediante su titulo.
query Query($videogameTittle: String!) {
  getVideogameByTittle(videogameTittle: $videogameTittle) {
    Id
    title
    description
    idcategory
    cover
    screenshots
    pubdate
    score
  }
}
variables
{
  "videogameTittle": "William_esta_monda_aun_no_sirve"
}
`

//endpoint con proxy
//https://gamestack-proxy-e3wbalmwuq-uc.a.run.app/