<template>
  <div>
    <div :key='index' v-for="index in questions.nbQuestion">
      <div v-show="index-1 === questionIndex">
        <h2>{{ questions.questions[index-1].title }}</h2>
        <b-form-radio-group>
          <b-form-radio :key="response.text" v-bind:value="response.correct" v-model="userResponses[index]" v-for="response in questions.questions[index].responses">{{response.text}}</b-form-radio>
        </b-form-radio-group>
        <button v-on:click="suivant">
          Suivant
        </button>
      </div>
    </div>
    <div v-show="questionIndex === questions.nbQuestion">
      <h2>
        Le questionnaire est terminé
      </h2>
      <p>
        Score total: {{ score() }} / {{ questions.nbQuestion }}
      </p>
      <p>
        {{ userResponses }}
      </p>
    </div>
  </div>
</template>

<script>
import Question from '@/assets/questions.json'
export default {
  name: 'Questionnaire',
  props: {
    form: null
  },
  data () {
    return {
      questions: Question,
      questionIndex: 0,
      userResponses: Array(Question.questions.length).fill(false)
    }
  },
  methods: {
    suivant: function () {
      this.questionIndex++
    },
    score: function () {
      return this.userResponses.filter(function (val) { return val }).length
    }
  }
}
</script>

<style scoped>

</style>
