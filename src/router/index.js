import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/layouts/Home'
import Signin from '@/layouts/Signin'
import Signup from '@/layouts/Signup'
import Show from '@/layouts/Show'
import Edit from '@/layouts/Edit'
import Create from '@/layouts/Create'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/user/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/photo/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/photo/edit/:id',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/photo/:id',
      name: 'Show',
      component: Show
    },
  ]
})
