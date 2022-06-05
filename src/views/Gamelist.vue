<template>
  <div class="Gamelist">
    <div class="centralComponent">
      <h1>GAMELIST</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "Gamelist",
  data: () => ({
    videogamesP: ["1", "2", "3", "4", "5", "6"],
  }),
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
