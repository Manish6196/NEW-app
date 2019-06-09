<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">myAPP.com</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="http://localhost:8080/">Home</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Products</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Orders</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0 mr-3" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item href="http://localhost:8080/user/login">Login</b-dropdown-item>
          <b-dropdown-item href="http://localhost:8080/user/signup">Sign Up</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
</style>
