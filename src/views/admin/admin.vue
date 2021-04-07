<template>
<navbar></navbar>
<div class="wrapper">
  
<sidebar></sidebar>
    <div class="container  mt-5">

  <router-view  ></router-view>
  </div>
</div>
<modal></modal>
</template>

<script>
import Navbar from '../../components/navbar.vue'
import Sidebar from '../../components/sidebar.vue'
import Modal from '../../components/modal.vue'



export default{
  components:{
Navbar,
Sidebar,
Modal

  },

  inject: ['baseServerUrl'],
 

  data(){
    return{
  
    }
  },
  created(){
   
  }
}
</script>

<style>
.wrapper{
  display: flex;
  text-decoration: none;
	transition: all 0.3s;
}
</style>