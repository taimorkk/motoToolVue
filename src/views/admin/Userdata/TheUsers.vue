<template>
    <div class="user-data">
       <div class="card">
  <h5 class="card-header text-white w-70  bg-primary">Users Data</h5>
  <div  class="card-body ">
      <button v-if="isAdmin" @click="loadData" class="btn btn-primary">Refresh Data</button>
<button v-if="isAdmin" class="btn  btn-info m-3 float-end"  data-bs-toggle="modal" data-bs-target="#userModal"><i class="fa fa-plus"></i> Users</button>
   
  <loader v-if="loader" ></loader>
    <table v-else id="user-table" class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th v-if="isAdmin">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in data" :key="user.id">
                    <td>{{user.id}}</td>
                    <td>{{user.firstName}} {{user.lastName}}</td>
                    <td>{{user.userName}}</td>
                    <td>{{user.email}}</td>
                    <td v-if="isAdmin"><button type="button" :id='user.id' class="m-2 btn btn-small btn-secondary"><i class="fa fa-eye"></i></button>
                        <button type="button" :id='user.id' class="btn m-2 btn-small btn-primary"><i class="fa fa-edit"></i></button>
                        <button type="button" :id='user.id' class="btn m-2 btn-small btn-danger"><i class="fa fa-trash"></i></button>
                    </td>
                    
                </tr>
            </tbody>
        </table>
  </div>
</div>

<Modal></Modal>
    </div>
</template>

<script>
import Loader from '../../../components/loader.vue'

import $ from 'jquery'


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "datatables.net-bs4/css/dataTables.bootstrap4.css"
import 'jquery/dist/jquery.min.js';

import "datatables.net/js/jquery.dataTables.min.js"

import "datatables.net/js/dataTables.bootstrap4.min.js"
export default{
components:{
    Loader
},
    
    data(){
return{
      loader:true,
      data:''
}    
},

computed:{
isAdmin(){
    return this.$store.getters.isAdmin;
}
},

methods:{
async loadData(){
    this.loader=true;
    const url = sessionStorage.getItem('base_server_url');
    this.axios.get(url+'Users').then((response) => {
  console.log(response.data)
  //console.log(this.baseServerUrl)
  this.data=response.data;
  this.loader=false;
  $('#user-table').DataTable();

})

//  const actionPayload= {
       
//         'reqType':'get',
//         'url':'Users'     
//     }


//     await this.$store.dispatch('auth',actionPayload);
//     this.data=this.$store.getters.data;
//     console.log(this.data)



}
},

provide(){
    return{
        users:this.data,
    }
},

mounted(){
    this.loadData();
  

    }
}
</script>
<style>
.card{
    height: 800px;
}
.user-data{
	width: 100%;
	padding: 20px;
	min-height: 100vh;
	transition: all 0.3s;
}
</style>