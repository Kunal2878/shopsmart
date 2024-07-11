<template >
  <NuxtLayout name="app">
    <template #header  >

   <NuxtLoadingIndicator />
    <div  class=" bg-blue-950 w-full min-h-screen overflow-x-hidden overflow-hidden overflow-y-auto">

<!-- <Buy/> -->

   <div v-if="isAlert === true" class= "w-full md:w-1/2 shadow-md shadow-black/50 absolute bottom-0 mb-6 bg-white text-green-500 border-2 border-b-green-500 rounded-md text-[18px] md:text-[16px]"> 

    Item added to the cart
  
  </div>
  <Navbar/>

<!-- <LandingPage/> -->

<products/>
    </div>

  </template>
  </NuxtLayout>
  </template>

  <script >

import LandingPage from '~/components/LandingPage.vue';
import Navbar from '~/components/Navbar.vue';
import products from '../components/products.vue';
import Buy from '../components/Buy.vue';

import { useBuyStore } from '@/stores/buyStore';


export default{

components:[LandingPage,Navbar,Buy],

async setup() { 

const buyStore = useBuyStore();
const isAlert = buyStore.isAlert

console.log("IsAlert",isAlert)


var isAuthenticated = false


var cokkie = useCookie('shopsmart')
 if(cokkie.value)
 {

  isAuthenticated = true

 }
    return {
      isAuthenticated,
      isAlert
    };
  }

}
  </script>