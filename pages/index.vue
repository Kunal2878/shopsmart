<template>
   <NuxtLoadingIndicator />
    <div  class="w-screen min-h-screen overflow-x-hidden overflow-hidden overflow-y-auto">
      <Buy v-if='isAuthenticated'/>
      <ClientOnly>
  <Navbar/>
      </ClientOnly>
   <LandingPage/>
<products/>
    </div>
  </template>

  <script >

import LandingPage from '~/components/LandingPage.vue';
import Navbar from '~/components/Navbar.vue';
import products from '../components/products.vue';
import Buy from '../components/Buy.vue';



  export default{
    setup() {
 
    const isAuthenticated = true

    return {
      isAuthenticated,
    };
    components:[LandingPage,Navbar,Buy]
  }
}
  </script>