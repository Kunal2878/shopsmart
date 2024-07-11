<template >
  <NuxtLayout name="app">
    <template #header  >

   <NuxtLoadingIndicator />
    <div  class=" bg-blue-950 w-full min-h-screen overflow-x-hidden overflow-hidden overflow-y-auto">

<!-- <Buy/> -->

   <div v-if="buyStore.isAlert" class= "fixed z-40 w-full  flex flex-row justify-center items-center md:w-1/4 shadow-md shadow-black/50  top-0 left-1/4 mb-6 bg-white text-green-500 border-2 border-b-green-500 rounded-md text-[18px] md:text-[16px]"> 

    Item added to the cart
  
  </div>
  <Navbar/>

<!-- <LandingPage/> -->

<products/>
    </div>

  </template>
  </NuxtLayout>
  </template>

  <script setup>

components:[LandingPage,Navbar,Buy];
import LandingPage from '~/components/LandingPage.vue';
import Navbar from '~/components/Navbar.vue';
import products from '../components/products.vue';
import Buy from '../components/Buy.vue';

import { useBuyStore } from '@/stores/buyStore';
import { watch } from 'vue';






const buyStore = useBuyStore();



watch(() => buyStore.isAlert, () => {
  if (buyStore.isAlert) {
    setTimeout(() => {
      buyStore.isAlert = false;
    }, 2000);
  }
}, { immediate: true });
  </script>