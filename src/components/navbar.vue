<template>
  <div>
  <nav class="navbar  shadow fixed-top  navbar-expand-lg navbar-light bg-light" style="padding:0px;">
  <div class="container-fluid" style="padding-left:0px">
    <div class="navbar-brand position-relative " style="min-width: 250px; max-width: 250px; ">
      <img style="width:250px" src="../assets/motoToolLogo.png" >
      <button v-if="isLoggedIn"
          @click="toggle"
          type="button"
          id="sidebarCollapse"
          class="btn position-absolute top-50 start-100 translate-middle-y  btn-info float-end mx-2"
        >
          <i class="fas fa-align-left"></i>
          
        </button>
    </div>
    
        <button v-if="isLoggedIn" class="btn btn-danger " @click="logout">Logout</button>
        <button v-else class="btn btn-outline-success " @click="login" >Login</button>
     
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
    },
    login(){
      
      this.$router.replace('/login');
    }
  },
};
</script>
<style>
.btn-danger {
  display: block;
  
  height: 50px;
  border-radius: 25px;
  outline: none;
  border: none;
  background-image: linear-gradient(to right, #d12709, #e95e4c, #d12709);
  background-size: 200%;
  font-size: 1.2rem;
  color: #fff;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  margin: 1rem 0;
  cursor: pointer;
  transition: 0.5s;
}
.btn-danger:hover {
  background-position: right;
}
.navbar{
  
 background-image: linear-gradient(to right, #cedad6, #f5faf8, #cedad6);
  background-size: 200%;
  font-size: 1.2rem;
  color: #fff;
  transition: 0.5s;
}
.navbar:hover {
  background-position: right;
}
</style>