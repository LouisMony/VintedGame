<template>
  <div class="join">
    <router-link class="previous_arrow" to="/"><img src="@/assets/img/back_arrow.png" alt="previous"></router-link>
    <h1>Rejoindre</h1>
    <input class="main_input" type="text" placeholder="Nom du joueur">
    <input class="main_input" type="text" placeholder="Code de la partie">
    <button class="main_button">Rejoindre</button>
  </div>
</template>

<script>

export default {
  name: 'JoinView',
}
</script>

<style lang="scss" scopped>

@import "@/assets/style/_variables.scss";

.join{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;

  h1{
    font-weight: 700;
    font-size: 40px;
    padding-bottom: 25px;
  }
}
</style>
