<template>
  <div class="create">
    <router-link class="previous_arrow" to="/"><img src="@/assets/img/back_arrow.png" alt="previous"></router-link>
    <h1>Créer une partie</h1>
    <input class="main_input" type="text" placeholder="Nom du joueur">
    <input class="main_input" type="text" placeholder="Thème de la partie">
    <input class="main_input" type="number" placeholder="Budget">
    <input class="main_input" type="text" placeholder="Contraintes">
    <span><strong>Pièces :</strong></span>
    <div class="checkbox_list">
        
        <div>
            <input type="checkbox" name="hoodie" checked>
            <label for="hoodie">Hoodie</label>
        </div>
        <div>
            <input type="checkbox" name="pantalons">
            <label for="pantalon">Pantalons</label>
        </div>
        <div>
            <input type="checkbox" name="Accessoires">
            <label for="pantalon">Accessoires</label>
        </div>
        <div>
            <input type="checkbox" name="tee">
            <label for="pantalon">Tee-shirt</label>
        </div>
        <div>
            <input type="checkbox" name="manteau">
            <label for="pantalon">Manteaux/Veste</label>
        </div>
        <div>
            <input type="checkbox" name="chaussures">
            <label for="pantalon">Chaussures</label>
        </div>
    </div>
    
    <button class="main_button">Suivant</button>
  </div>
</template>

<script>

export default {
  name: 'CreateView',
}
</script>

<style lang="scss" scopped>

@import "@/assets/style/_variables.scss";

.create{
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

  .checkbox_list{
    width: 55%;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
