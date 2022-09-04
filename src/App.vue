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
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: $black;
  color: White;
}
</style>
