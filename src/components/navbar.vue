<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="padding:0px;">
  <div class="container-fluid" style="padding-left:0px">
    <div class="navbar-brand  bg-primary" style="min-width: 250px; max-width: 250px; " href="#">Navbar
      <button
          @click="toggle"
          type="button"
          id="sidebarCollapse"
          class="btn  btn-info float-end mx-2"
        >
          <i class="fas fa-align-left"></i>
          
        </button>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
       
        
       
      </ul>
      <form v-if="isLoggedIn" class="d-flex">
      
        <button class="btn btn-outline-danger" @click="logout">Logout</button>
      </form>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
  import $ from 'jquery'
export default {
  data() {
    return {};
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    toggle: function ()  {
      $('#sidebar').toggleClass("active");
    },
    logout(){
      this.$store.dispatch('logout');
      this.$router.replace('/login');
    }
  },
};
</script>
