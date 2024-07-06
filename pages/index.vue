<template>
   <NuxtLoadingIndicator />
    <div  class="w-full min-h-screen overflow-x-hidden overflow-hidden overflow-y-auto">
      <Buy/>
   
  <Navbar/>
   
   <LandingPage/>
<products/>
    </div>
  </template>

  <script >

import LandingPage from '~/components/LandingPage.vue';
import Navbar from '~/components/Navbar.vue';
import products from '../components/products.vue';
import Buy from '../components/Buy.vue';
// import lucia from '~/server/models/adapter'

// import { useCookie } from '@nuxt/app';

// const cookie = useCookie('auth_session')
// import {lucia} from 'lucia'

// console.log(cookie)
  export default{
    components:[LandingPage,Navbar,Buy],
    async setup() {
      // const sessions = await lucia.getUserSessions();
      // console.log(sessions)
      const cokkie = useCookie('auth_session')
      // cokkie.value= cokkie.value || 'hhghhh'
      console.log(cokkie)
      console.log(cokkie.value)
    const isAuthenticated = true
    return {
      isAuthenticated,
    };
  }
}
  </script>