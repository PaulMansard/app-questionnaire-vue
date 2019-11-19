<template>
  <div>
    <!--Affichage de chacun des questions-->
    <div :key='index' v-for="index in questions.nbQuestion">
      <div v-show="index-1 === questionIndex">
        <h2>{{ questionsAffichage[index-1].title }}</h2>
        <b-form-radio-group>
          <b-form-radio :key="response.text" v-bind:value="response.correct" v-model="userResponses[index-1]" v-for="response in questionsAffichage[index-1].responses">{{response.text}}</b-form-radio>
        </b-form-radio-group>
        <button v-on:click="suivant">
          Suivant
        </button>
      </div>
    </div>
    <!--Affichage de la fin de partie -->
    <div v-show="questionIndex === questions.nbQuestion">
      <h2>
        Le questionnaire est terminé
      </h2>
      <p>
        Score total: {{ scorefind() }} / {{ questions.nbQuestion }}
      </p>
      <b-button to="/accueil">Accueil</b-button>
    </div>
  </div>
</template>

<script>
import Question from '@/assets/questions.json'
export default {
  name: 'Questionnaire',
  data () {
    // Déclaration de l'ensemble des variables nécessaire
    return {
      questions: Question,
      questionIndex: 0,
      userResponses: Array(Question.questions.length).fill(false),
      score: [],
      user: [],
      questionsAffichage: []
    }
  },
  methods: {
    // Permet de passer à la question suivante et d'ajouter le score dans local storage
    suivant: function () {
      this.questionIndex++
      if (this.questionIndex === this.questions.nbQuestion) {
        this.score.push({ user: this.user.nom + ' ' + this.user.prenom, score: this.userResponses.filter(function (val) { return val }).length })
        localStorage.setItem('score', JSON.stringify(this.score))
      }
    },
    // Permet de recuperer le score à afficher
    scorefind: function () {
      return this.userResponses.filter(function (val) { return val }).length
    }
  },
  mounted () {
    // Récuperation du tableau score dans le localstorage quand il existe
    if (localStorage.getItem('score')) {
      this.score = JSON.parse(localStorage.getItem('score'))
    }
    // Récuperation du user dans le localstorage
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'))
    }
    for (var i = 0; i < this.questions.nbQuestion; i++) {
      var nbAleatoire = Math.floor(Math.random() * Math.floor(this.questions.questions.length))
      if (this.questionsAffichage.indexOf(this.questions.questions[nbAleatoire]) === -1) {
        this.questionsAffichage.push(this.questions.questions[nbAleatoire])
      } else {
        i--
      }
    }
  }
}
</script>

<style scoped>

</style>
