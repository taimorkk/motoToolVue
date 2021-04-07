<template>
<navbar></navbar>
<div class="wrapper">
  
<UserSidebar></UserSidebar>
  <div class="container  mt-5">

  <router-view  ></router-view>
  </div>
</div>

</template>

<script>
import Navbar from '../components/navbar.vue';
import UserSidebar from '../components/userSideBar'




export default{
  components:{
Navbar,
UserSidebar

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
  margin-top: 20px;
}
</style>