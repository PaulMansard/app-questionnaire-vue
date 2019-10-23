<template>
  <div class="connexion">
    <Connexion msg="Welcomze to Your Vue.js Appaaqaqqaezz"/>
    <b-form @submit="onSubmit">
      <b-form-group label-cols-sm="2" label-cols-lg="2" label-for="input-horizontal" id="groupNom" label="Nom : ">
        <b-form-input class="w-75" id="input-horizontal" placeholder="Entrez votre nom" type="text" v-model="nom"></b-form-input>
      </b-form-group>
      <b-form-group id="groupPrenom" label="Prénom : " label-cols-sm="2" label-cols-lg="2" label-for="input-2">
        <b-form-input class="w-75" id="inputPrenom" placeholder="Entez votre prénom" v-model="prenom"></b-form-input>
      </b-form-group>
      <b-form-group id="inputEntreprise" label="Entreprise : " label-cols-sm="2" label-cols-lg="2" label-for="input-2">
        <b-form-input class="w-75" id="inputEntrerise" placeholder="Entez votre entreprise" v-model="entreprise"></b-form-input>
      </b-form-group>
    </b-form>
    <b-button type="submit" variant="primary">Connexion</b-button>
  </div>
  <b-card class="mt-3" header="Form Data Result">
    <pre class="m-0">{{ form }}</pre>
  </b-card>
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
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>
