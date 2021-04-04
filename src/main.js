import { createApp } from 'vue'
import router from './router.js';
//import libraries
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index.js';


import App from './App.vue'
import Navbar from './components/navbar.vue'
import Sidebar from './components/sidebar.vue'
import Modal from './components/modal.vue'
import Loader from './components/loader.vue'


const app=createApp(App);


app.component('navbar',Navbar)
app.component('modal',Modal)
app.component('loader',Loader)

app.component('sidebar',Sidebar)
app.use(VueAxios, axios)


sessionStorage.setItem("base_server_url", "http://droidom110-001-site1.ftempurl.com/api");
app.provide('baseServerUrl', sessionStorage.getItem("base_server_url"))

app.use(store);
app.use(router);

app.mount('#app')

