<template>
    
   
    <div class="modal " name='usermodal' id="userModal" tabindex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="userModalLabel">Add User Info</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
           
            <!--form-->

<form class="row g-3" @submit.prevent="submit">
  <div class="col-md-6">
       <label for="firstName"  class="form-label">First Name</label>
    <input type="text" v-model="firstName" class="form-control" id="firstName"  required>
   
  </div>
  <div class="col-md-6">
   <label for="lastName" class="form-label">Last Name</label>
    <input type="text" v-model="lastName" class="form-control" id="lastName" required>
  </div>
  <div class="col-6">
    <label for="email" class="form-label">Email</label>
    <input type="email" v-model="email" class="form-control" id="email" required>
  </div>
  <div class="col-6">
       <label for="userName" class="form-label">User Name</label>
    <input type="text" v-model="userName" class="form-control" id="userName" required>
    
  </div>
  <div class="col-md-6">
    <label for="phone" class="form-label">Phone</label>
    <input type="tel" v-model="phone" class="form-control" id="phone" required>
  </div>
  <div class="col-md-6">
    <label for="hardwareKey" class="form-label">Hardware Key</label>
    <input type="text" v-model="hardwareKey" class="form-control" id="hardwareKey" required>
  </div>


                 <button class="btn btn-primary">Submit</button>
</form>
                      
            </div>
            <div class="modal-footer">
              <button type="button" id="modalClose" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              
            </div>
          </div>
        </div>
      </div>
</template>

<script>
//import $ from 'jquery'
import axios from 'axios'
export default {
    data() {
        return{
            firstName:'',
            lastName:'',
            email:'',
            userName:'',
            phone:'',
            hardwareKey:'',
            
        }
    },

  methods: {
   
    submit: function () {
      
axios.post('http://droidom110-001-site1.ftempurl.com/api/Users', {
            firstName:this.firstName,
            lastName:this.lastName,
            email:this.email,
            userName:this.userName,
            phone:this.phone,
            hardwareKey:this.hardwareKey,
            roleId:'1'
})
.then((response) => {
  console.log(response)
  alert(response.message);
  if(!response.data.isError){
   alert('user added')
    //$('form').trigger('reset');
    location.reload();
  }
  
}, (error) => {
  alert(error);
});
    }
  }
}
</script>
