<template>
  <div>
    <!--Mise en place du formulaire de connexion -->
    <h3>Connexion</h3>
    <b-form @submit.prevent="onSubmit()">
      <b-form-group label-cols-sm="2" label-cols-lg="2" label-for="input-horizontal" id="groupNom" label="Nom : ">
        <b-form-input class="w-75" id="input-horizontal" placeholder="Entrez votre nom" type="text" v-model="form.nom" required />
      </b-form-group>
      <b-form-group id="groupPrenom" label="Prénom : " label-cols-sm="2" label-cols-lg="2" label-for="input-2">
        <b-form-input class="w-75" id="inputPrenom" placeholder="Entez votre prénom" v-model="form.prenom" required />
      </b-form-group>
      <b-form-group id="inputEntreprise" label="Entreprise : " label-cols-sm="2" label-cols-lg="2" label-for="input-2">
        <b-form-input class="w-75" id="inputEntrerise" placeholder="Entez votre entreprise" v-model="form.entreprise" required />
      </b-form-group>
      <b-button type="submit" variant="primary">Connexion</b-button>
    </b-form>
  </div>

</template>

<script>
export default {
  name: 'Connexion',
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
    // Set login pour envoie dans app.vue, Envoie de user dans le localstorage ainsi que de la redirection vers la page de questionnaire
    onSubmit () {
      this.$emit('login', this.form)
      localStorage.user = JSON.stringify(this.form)
      this.$router.push({ name: 'questionnaire', params: { form: this.form } })
    }
  }
}
</script>

<style>

</style>
