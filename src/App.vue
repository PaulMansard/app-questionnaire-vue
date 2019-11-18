<template>
  <div id="app">
      <!--Affichage de l'ensemble du menu en haut qui reste fixe selon les elements-->
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item disabled>App Questionnaire</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="user != null">
            <template v-slot:button-content>
              {{ user.nom }} {{ user.prenom }}
            </template>
            <b-dropdown-item @click="removeUser()" href="/">Deconnexion</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    <router-view @login='login'/>

  </div>
</template>

<script>
export default {
  data: function () {
    return {
      user: JSON.parse(localStorage.getItem('user'))
    }
  },
  methods: {
    login (form) {
      this.user = form
    },
    // Lors du clic sur deconnexion on supprime les scores et le user
    removeUser () {
      localStorage.removeItem('user')
      localStorage.removeItem('score')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
