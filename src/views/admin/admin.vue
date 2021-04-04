<template>
<navbar></navbar>
<div class="wrapper">
  
<sidebar></sidebar>
  
  <router-view  ></router-view>
</div>
<modal></modal>
</template>

<script>


export default{
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