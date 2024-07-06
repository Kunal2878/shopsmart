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
import lucia from '~/server/models/adapter'


// const cookie = useCookie('auth_session')


// console.log(cookie)
  export default{
    async setup() {
      const sessions = await lucia.getUserSessions();
      console.log(sessions)
    const isAuthenticated = true
    return {
      isAuthenticated,
    };
    components:[LandingPage,Navbar,Buy]
  }
}
  </script>