<template>
  <div class="home">
    <img id="bonnet_image" src="@/assets/img/bonnet.png" alt="Bonnet">
    <img id="hoodie_image" src="@/assets/img/hoodie.png" alt="Hoodie">
    <h1>Bienvenue 👋</h1>
    <button id="button_top" class="main_button">Créer un partie</button>
    <button class="main_button">Rejoindre un partie</button>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>

<style lang="scss" scopped>

.home{
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px;

  #hoodie_image{
    position: absolute;
    left: -100px;
    bottom: -40px;
    animation: float 6s ease-in-out infinite;
  }

  #bonnet_image{
    position: absolute;
    right: 50px;
    top: 70px;
    animation: float 6s 1s ease-in-out infinite;
  }

  h1{
    font-weight: 700;
    font-size: 40px;
    padding-bottom: 50px;
  }

  #button_top{
    margin-bottom: 25px;
  }
}
</style>
