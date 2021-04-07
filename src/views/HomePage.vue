<template>
 <nav class="navbar home-nav shadow">
  <div class="container-fluid">
    <span class="navbar-brand "><img style="width:250px" src="../assets/motoToolLogo.png" ></span>
    
  <div class="d-flex">

    <button  class="btn me-4 float-end" ><i class="fas fa-cloud-download-alt"></i><span class="m-2"> Download </span> </button>
    <button  class="btn  me-4" @click="login" ><i class="fas fa-sign-in-alt me-2"></i><span class="me-1"> Login </span> </button>
  </div>
    
  </div>
</nav>
<div class="d-flex">


<div class="">

<div class="container text-wrap shadow-lg rounded-pill mt-3" >
  <h1 class="main-heading fst-italic">COMING SOON...</h1>
</div>
<div class="row">
  <div class=" col-md-6">
       <div class="card m-5">
  <div class="card-header fw-bolder">
    News
  </div>
  <div class="card-body">
    <h5 class="card-title ">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>

  <div class=" col-md-6 ">
 <div class="card m-5">
  <div class="card-header fw-bolder">
    Notice To All Customers
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>
</div>
</div>
</div>
 
</template>

<script>

export default{
  
  methods:{
    login(){
      
      this.$router.replace('/login');
    }
  }
   

}
</script>
<style scoped>
.main-heading{
  font-size: 8.2rem;
  color:rgb(4, 156, 167);
}
.home-nav{
  
 background-image: linear-gradient(to right, #cedad6, #f5faf8, #cedad6);
  background-size: 200%;
  font-size: 1.2rem;
  color: #fff;
  transition: 0.5s;
}
.container{
  background-color: #fff;

}
.card-header{
  background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f); 
  height: 50px;
  font-size: 1.2rem;
}
.card{
  height: 250px;
}
.btn {
  display: block;
  
  height: 50px;
  border-radius: 25px;
  outline: none;
  border: none;
  background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
  background-size: 200%;
  font-size: 1.2rem;
  color: #fff;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  margin: 1rem 0;
  cursor: pointer;
  transition: 0.5s;
}
.btn:hover {
  background-position: right;
}
.home-nav:hover {
  background-position: right;
}
@media (max-width: 1200px) {
  .main-heading{
    font-size: 4rem;
  }
}
@media (max-width: 545px) {
  .main-heading{
    font-size: 2rem;
  }
}
</style>