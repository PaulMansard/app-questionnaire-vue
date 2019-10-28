<template>
  <div id="app">
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="/">App Questionnaire</b-nav-item>
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
    removeUser () {
      localStorage.removeItem('user')
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
