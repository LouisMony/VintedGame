<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/_variables.scss";

body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
#app {
  overflow: hidden;
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: $background;
  color: $main-blue;
  height: 100vh;

  h1{
    margin: 0;
    position: relative;
  }
}
</style>
