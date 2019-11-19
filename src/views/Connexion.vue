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
    // Création du form a envoyer dans la page de connexion
    login (form) {
      this.$emit('login', form)
    },
    // Envoie du form login et le redirection
    onSubmit () {
      this.$emit('login', this.login)
      this.$router.push({ name: 'questionnaire', params: { form: this.form } })
    }
  }
}
</script>
