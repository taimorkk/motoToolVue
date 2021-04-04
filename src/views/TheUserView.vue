<template>
    <h2>
                WELCOME USER
    </h2>
    <button class="btn btn-outline-danger" @click="logout">Logout</button>
</template>
<script>
  
export default {
  data() {
    return {};
  },
  methods: {
    
    logout(){
      this.$store.dispatch('logout');
      this.$router.replace('/login');
    }
  },
};
</script>
