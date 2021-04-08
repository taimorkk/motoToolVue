import {createRouter, createWebHistory} from 'vue-router';
//import {defineAsyncComponent} from 'vue';
import store from './store/index.js';

import TheHomePage from './views/HomePage.vue'
import TheLogin from './views/login.vue'
import TheAdmin from './views/admin/admin.vue'
import TheUserView from './views/TheUserView.vue'

import TheUser from './views/admin/Userdata/TheUsers.vue'
import TheCharges from './views/admin/charges/TheCharges.vue'
import TheCredit from './views/admin/credit/TheCredits.vue'
import TheDevice from './views/admin/devices/TheDevices.vue'
import TheOperations from './views/admin/operations/TheOperations.vue'
import TheConfiguration from './views/admin/configuration/configuration.vue'

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isAuthenticated) {
      next()
      return
    }
    next('/')
  }

  const ifAuthenticatedAdmin = (to, from, next) => {
    if (store.getters.isAuthenticated & store.getters.isAdmin) {
      
      next()
      return
    }
    next('/login')
  }
  const ifAuthenticatedUser = (to, from, next) => {
    if (store.getters.isAuthenticated & store.getters.isUser) {
      next()
      return
    }
    next('/login')
  }

  // const UserDetail = defineAsyncComponent(() => import('./views/admin/Userdata/TheUsers.vue'))
  // const ChargesDetail = defineAsyncComponent(() => import  ('./views/admin/charges/TheCharges.vue'))
  // const DeviceDetail = defineAsyncComponent(() => import   ('./views/admin/devices/TheDevices.vue'))
  // const CreditDetail = defineAsyncComponent(() => import   ('./views/admin/credit/TheCredits.vue'))
  // const OperationDetail = defineAsyncComponent(() => import('./views/admin/operations/TheOperations.vue'))

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',  component:TheHomePage },
          {path:'/login',  component:TheLogin, beforeEnter: ifNotAuthenticated},
        
        
        {path:'/userview',  component:TheUserView, beforeEnter: ifAuthenticatedUser,children: [

          {path:'operations',  component:TheOperations,props: true},
          
          {path:'charges',  component:TheCharges},
          
      ]},

        {path:'/admin/',  component:TheAdmin, beforeEnter: ifAuthenticatedAdmin,children: [

            {path:'users',  component:TheUser,props: true},
            
            {path:'charges',  component:TheCharges},
            {path:'operations',  component:TheOperations},
            {path:'devices',  component:TheDevice},
            {path:'credit',  component:TheCredit},
            {path:'configuration',  component:TheConfiguration},
        ]},
        {path:'/:notFount(.*)', redirect:'/'}
    ]
})




    

export default router;
