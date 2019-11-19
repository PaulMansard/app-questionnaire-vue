<template>
  <div>
    <!--Affichage de chacune des questions à l'aide de questionAffichage qui est généré dans le mounted-->
    <div :key='index' v-for="(question, index) in questionsAffichage">
      <div v-show="index === questionIndex">
        <h2>{{ question.title }}</h2>
        <b-form-radio-group>
          <!--Affichage de chacune des reponses de la question en appliquant la reponse correct dans la radio-->
          <b-form-radio :key="response.text" v-bind:value="response.correct" v-model="userResponses[index]" v-for="response in question.responses">{{response.text}}</b-form-radio>
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
      // Mise en place du tableau de reponse a false pour chacune des question puis modification lors d'un clique sur une bonne reponse
      userResponses: Array(Question.nbQuestion).fill(false),
      score: [],
      user: [],
      questionsAffichage: []
    }
  },
  methods: {
    // Permet de passer à la question suivante et d'ajouter le score dans local storage lorsque que le nombre de question depasse le nombre de question à afficher
    suivant: function () {
      this.questionIndex++
      if (this.questionIndex === this.questions.nbQuestion) {
        this.score.push({ user: this.user.nom + ' ' + this.user.prenom, score: this.userResponses.filter(function (val) { return val }).length })
        localStorage.setItem('score', JSON.stringify(this.score))
      }
    },
    // Permet de recuperer le score à afficher en calculant le nombre de reponse true dans le tableau
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
    // Permet de renvoyer les questions aléatoirement sur le nouveau tableau questionsAffichage qui sert d'affichage
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
