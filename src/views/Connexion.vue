<template>
  <div>
    <Connexion @login='login'/>
  </div>
</template>

<script>
// @ is an alias to /src
import Connexion from '@/components/Connexion.vue'

export default {
  name: 'connexion',
  components: {
    Connexion
  },
  data () {
    return {
      form: {
        nom: '',
        prenom: '',
        entreprise: ''
      }
    }
  },
  methods: {
    login (form) {
      this.$emit('login', form)
    },
    onSubmit () {
      this.$emit('login', this.login)
      this.$router.push({ name: 'questionnaire', params: { form: this.form } })
    }
  }
}
</script>
