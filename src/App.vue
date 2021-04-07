<template>
  <router-view></router-view>
</template>

<script>

export default{

  computed:{
didAutoLogout(){
  return this.$store.getters.didAutoLogout;
}
  },
  created(){
    
    this.$store.dispatch('autoLogin');

  },
  watch:{

    didAutoLogout(curValue, oldValue){
      if(curValue && curValue !== oldValue){
        this.$router.replace('/login');
      }
    }
  }
}
</script>