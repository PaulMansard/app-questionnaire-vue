<template>
  <div>
    <h3>Connexion</h3>
    <b-form @submit="onSubmit">
      <b-form-group label-cols-sm="2" label-cols-lg="2" label-for="input-horizontal" id="groupNom" label="Nom : ">
        <b-form-input class="w-75" id="input-horizontal" placeholder="Entrez votre nom" type="text" v-model="form.nom"></b-form-input>
      </b-form-group>
      <b-form-group id="groupPrenom" label="Prénom : " label-cols-sm="2" label-cols-lg="2" label-for="input-2">
        <b-form-input class="w-75" id="inputPrenom" placeholder="Entez votre prénom" v-model="form.prenom"></b-form-input>
      </b-form-group>
      <b-form-group id="inputEntreprise" label="Entreprise : " label-cols-sm="2" label-cols-lg="2" label-for="input-2">
        <b-form-input class="w-75" id="inputEntrerise" placeholder="Entez votre entreprise" v-model="form.entreprise"></b-form-input>
      </b-form-group>
      <b-button @click="onSubmit()" type="submit" variant="primary">Connexion</b-button>
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
    onSubmit () {
      this.$emit('login', this.form)
      this.$router.push({ name: 'questionnaire', params: { form: this.form } })
    }
  }
}
</script>

<style>

</style>
