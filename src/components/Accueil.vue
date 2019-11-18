<template>
  <div>
    <!--Affichage des scores ainsi que la possibilité de refaire une partie -->
    <b-button to="/questionnaire">Nouvelle partie</b-button>
    <b-table striped hover :items="scores"></b-table>
  </div>
</template>
<!--recupération des scores puis affichage dans une table-->
<script>
export default {
  name: 'Accueil',
  data: function () {
    return {
      scores: JSON.parse(localStorage.getItem('score'))
    }
  }
}
</script>

<style scoped>

</style>
