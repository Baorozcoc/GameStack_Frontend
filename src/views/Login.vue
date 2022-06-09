<template>
  <div class="login">
    <div>
      <img src="../assets/GIF3.gif" class="backg" />
    </div>
    <div class="containerLogin">
      <h1 class="title">¡Ingresa a tu cuenta!</h1>
      <form action="form" @submit.prevent="login" class="formulario">
        <div class="option">
          <label class="form-label" for="#email">Email:</label>
          <input
            v-model="email"
            class="form-input"
            type="email"
            id="email"
            required
            placeholder="Email"
          />
        </div>
        <div class="option">
          <label class="form-label" for="#password">Contraseña:</label>
          <input
            v-model="password"
            class="form-input"
            type="password"
            id="password"
            placeholder="Contraseña"
          />
        </div>
        <p v-if="error" class="error">Email o contraseña erroneos.</p>
        <input class="Button" type="submit" value="¡Adelante!" />
      </form>

      <p class="msg">
        ¿No tienes cuenta?
        <router-link to="/register">Regístrate</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import auth from "../logic/auth";

export default {
  data: () => ({
    email: "",
    password: "",
    error: false,
  }),
  methods: {
    async login() {
      try {
        await auth.existance(this.email, this.password);
        const user = {
          email: this.email,
        };
        auth.setUserLogged(user);
        this.$router.push("/");
        //Aqui se debe guardar el usuario en LocalStorage para cargarlo en la barra de navegación
        this.error=false;
      } catch (error) {
        console.log(error);
        this.error=true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-family: Arial;
}
.containerLogin {
  background-color: white;
  //height: 50vh;
  border-radius: 10px;
  align-items: center;
  padding: 20px;
  width: 40%;
}
.msg {
  font-size: 16px;
  font-family: Arial;
  font-weight: 400;
  margin-bottom: 20px;
  text-align: center;
  text-decoration: none;
}
h1 {
  text-align: center;
  font-size: 25px;
  
}
.formulario {
  display: flex;
  flex-direction: column;
  background-color: #3a3a3a;
  padding: 50px;
  margin-top: 40px;
}
.option {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-family: Arial;
  font-weight: 400;
  margin-bottom: 20px;
  color: #00ffb9;
}
.option input {
  padding: 6px;
  font-size: 14px;
  border-width: 1px;
  border-color: #ffffff;
  background-color: #3a3a3a;
  color: #ffffff;
  border-style: solid;
  border-radius: 2px;
  margin-top: 10px;
}
.backg {
  height: 91vh;
}
@media screen and (max-width: 1200px) {
  .containerLogin{
    position: absolute;
    min-width: 400px;
    background-color: rgba(255, 255, 255, 0.7);
  }
  .backg{
    width:100vw;
    max-width:700px;
  }
}
.error{
  background-color: rgb(173, 0, 0);
  padding:4px;
  color:white;
  text-align: center;
}
</style>
