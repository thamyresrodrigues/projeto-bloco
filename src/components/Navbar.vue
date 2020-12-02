<template>
  <div>
    <b-navbar class="no-pad" toggleable="lg" type="dark" variant="info">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">HOME</b-nav-item>
          <b-nav-item to="/delegacias">DELEGACIAS</b-nav-item>
          <b-nav-item to="/hospitais">HOSPITAIS</b-nav-item>
          <b-nav-item to="/eventos">EVENTOS</b-nav-item>
          <b-nav-item to="/contato">CONTATO</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/cadastro">CADASTRO</b-nav-item>
          <b-nav-item to="/login">LOGIN</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
};
</script>

<style>
</style>