<template>
  <div>
    <b-navbar class="no-pad" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">SupportMe</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/delegacias">Delegacias</b-nav-item>
          <b-nav-item to="/hospitais">Hospitais</b-nav-item>
          <b-nav-item to="/eventos">Eventos</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-nav-item to="/contato">Contato</b-nav-item> |
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Login</em>
            </template>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
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