<template>
  <div class="register">
    <div class="containerRegister">
      <h1 class="title">¡Regístrate Aquí!</h1>
      <form action="form" @submit.prevent="register" class="formulario">
        <div class="option">
          <label class="form-label" for="#username">Nombre de usuario:</label>
          <input
            v-model="username"
            class="form-input"
            type="text"
            id="username"
            required
            placeholder="Nombre de usuario"
          />
        </div>
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
        <div class="option">
          <label class="form-label" for="#password-repeat"
            >Repite la contraseña:</label
          >
          <input
            v-model="passwordRepeat"
            class="form-input"
            type="password"
            id="password-repeat"
            required
            placeholder="Contraseña"
          />
        </div>
        <p v-if="error" class="error">Email o contraseña erroneos.</p>
        <input class="Button" type="submit" value="Regístrate" />
      </form>
    </div>
    <div>
      <img src="../assets/GIF4.gif" class="backg" />
    </div>
  </div>
</template>

<script>
import auth from "../logic/auth";

export default {
  data: () => ({
    email: "",
    password: "",
    username: "",
    passwordRepeat: "",
    error: false,
  }),
  methods: {
    async register() {
      try {
        await auth.register(this.username, this.password, this.email);
        const user = {
          email: this.email,
        };
        console.log("Creado");
        auth.setUserLogged(user);
        this.$router.push("/");
      } catch (error) {
        console.log("No creado");
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.backg {
  height: 91vh;
}
.containerRegister {
  background-color: white;
  height: 70vh;
  border-radius: 10px;
  align-items: center;
  padding: 20px;
  width: 40%;
}
h1 {
  text-align: center;
  font-size: 25px;
  font-family: Arial;
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
</style>
