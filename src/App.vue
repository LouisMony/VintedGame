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
  background: $background;
  color: $main-blue;
  height: 100vh;

  h1{
    margin: 0;
    position: relative;

    &::before{
      content: '';
      position: absolute;
      width: 80%;
      height: 1px;
      bottom: 50px;
      left: 10%;
      background: $second-blue;
    }
  }
  .main_button{
    font-family: Poppins, sans-serif;
    cursor: pointer;
    background: $main-blue;
    text-align: center;
    color: white;
    border: none;
    padding: 15px 0;
    width: 55%;
    min-width: 231px;
    font-weight: 600;
    font-size: 16px;
    box-shadow: 0px 20px 30px rgba(10, 177, 187, 0.26);
    border-radius: 10px;
    transition: all 200ms linear;

    &:hover{
      background: #07858b;
    }
  }
}
</style>
