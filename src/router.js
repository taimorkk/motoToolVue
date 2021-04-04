import {createRouter, createWebHistory} from 'vue-router';
import store from './store/index.js';

import TheUser from './views/admin/Userdata/TheUsers.vue'
import TheCharges from './views/admin/charges/TheCharges.vue'
import TheCredit from './views/admin/credit/TheCredits.vue'
import TheDevice from './views/admin/devices/TheDevices.vue'
import TheOperations from './views/admin/operations/TheOperations.vue'
import TheAdmin from './views/admin/admin.vue'
import TheUserView from './views/TheUserView.vue'
import TheLogin from './views/login.vue'

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isAuthenticated) {
      next()
      return
    }
    next('/')
  }

  const ifAuthenticated = (to, from, next) => {
    if (store.getters.isAuthenticated) {
      next()
      return
    }
    next('/login')
  }

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/login',  component:TheLogin, beforeEnter: ifNotAuthenticated,},
        {path:'/',  redirect:"/login"},
        {path:'/userview',  component:TheUserView, beforeEnter: ifAuthenticated,},

        {path:'/admin',  component:TheAdmin, beforeEnter: ifAuthenticated,children: [

            {path:'admin/users',  component:TheUser,props: true},
            
            {path:'/charges',  component:TheCharges},
            {path:'/operations',  component:TheOperations},
            {path:'admin/devices',  component:TheDevice},
            {path:'admin/credit',  component:TheCredit},
        ]},
        {path:'/:notFount(.*)', redirect:'/users'}
    ]
})




    

export default router;
