<template>
  <div id="app">
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-text v-if='user != null' class="user">{{ user.prenom }}{{ user.nom }}</b-nav-text>
        </b-navbar-nav>
      </b-navbar>
    <router-view @login='login'/>

  </div>
</template>

<script>
export default {
  data: function () {
    return {
      user: null
    }
  },
  methods: {
    login (form) {
      this.user = form
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

.nav-text user{
  display: block;
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
