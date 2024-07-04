<template>
    <div class="w-screen min-h-screen overflow-x-hidden">
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

  export default{
    components:[LandingPage,Navbar,Buy]
  }
  
  </script>