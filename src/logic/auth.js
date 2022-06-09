import axios from "axios";
import Cookies from "js-cookie";

//API de prueba, reemplazar con el gateway cuando funcionen las peticiones
const ENDPOINT_PATH = "https://users-ms-image-fblpqjm3fq-uc.a.run.app/";
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.mmpC2AD3ORWf7D1YGfaNoCiAjIWabm8ET6rJpy1iTIU'
export default {
  setUserLogged(userLogged) {
    Cookies.set("userLogged", userLogged);
  },
  getUserLogged(userLogged) {
    return Cookies.get(userLogged);
  },
  register(username, password, email) {
    return axios.post(
      ENDPOINT_PATH,
      {
        query: `mutation Mutation($inputUser: userInput) {
                createUser(inputUser: $inputUser){
                    username
                    password
                    email
                    role
                    gamePreferences
                    _id
                }
            }`,
        variables: {
          inputUser: {
            username: username,
            password: password,
            email: email,
            role: "User",
            gamePreferences: [],
          },
        },
      },
      {
        //hay que agregar 
        headers: {
          "Content-Type": "application/json",
          "Authorization": token,
        },
      }
    );
  },
  existance(email, password) {
    //NO MODIFICAR, SOLO SE USA PARA VALIDAR EL LOGIN EN LA BD
    return axios.post(
      ENDPOINT_PATH,
      {
        query: `query Query($email: String!, $password: Int!){
                getExists(email: $email, password: $password)
              }`,
        variables: {
          email: email,
          password: password,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": token,
        },
      }
    );
  },
};
