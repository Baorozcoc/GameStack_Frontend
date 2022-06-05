import axios from "axios";
import Cookies from "js-cookie";

//API de prueba, reemplazar con el gateway cuando funcionen las peticiones
const ENDPOINT_PATH = "https://users-ms-image-fblpqjm3fq-uc.a.run.app/";

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
            password: parseInt(password, 10),
            email: email,
            role: "User",
            gamePreferences: [],
          },
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
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
          password: parseInt(password, 10),
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
};
