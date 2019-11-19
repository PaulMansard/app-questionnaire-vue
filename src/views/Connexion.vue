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
    // Envoie de la form au parent
    login (form) {
      this.$emit('login', form)
    }
  }
}
</script>
