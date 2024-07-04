<template>
    <div class='w-full flex flex-col justify-center items-center text-gray-700 font-semibold'>
        <div class="  w-full grid md:grid-cols-3 grid-cols-2 gap-2 md:gap-2  overflow-hidden" >  
  <div class="w-40 md:w-60 h-120 md:text-[12px] text-[8px]   text-gray-800  shadow-black flex flex-col items-center  justify-center overflow-hidden p-4 md:p-2" v-for="(slide, index) in slides" :key="index">

    <img
   

    class="w-40 md:w-60 h-40 md:h-60  flex flex-row justify-center items-center drop-shadow-md shadow-black"    :src="slide.image" />
    <span class="w-full flex flex-row justify-center items-center mt-2">{{slide.title}}</span>
   <div class="w-full flex flex-row justify-between md:p-2 p-1">
    <span>⭐⭐⭐</span>     <span class="text-gray-400">{{slide.price}}</span>
   </div>
   <div class="w-full flex flex-row justify-between p-2">
    <img
   
    class="cursor-pointer size-6 flex flex-row justify-center items-center drop-shadow-md shadow-black"
    src="../assets/buy.svg" />
    <img
   @click="addToCart(slide)"
    class=" cursor-pointer size-6  flex flex-row justify-center items-center drop-shadow-md shadow-black"
    src="../assets/cart.svg" />
   </div>


  </div>
  </div>

<span class="w-full flex flex-row justify-start m-4">Top deals</span>

<div class="  w-full grid md:grid-cols-3 grid-cols-2 gap-2 md:gap-2  overflow-hidden" >  
  <div class="w-40 md:w-60 h-120 md:text-[12px] text-[8px]     text-gray-800  shadow-black flex flex-col items-center  justify-center overflow-hidden p-4 md:p-2" v-for="(slide, index) in slides2" :key="index">

    <img
   

    class="w-40 md:w-60 h-40 md:h-60  flex flex-row justify-center items-center drop-shadow-md shadow-black"    :src="slide.image" />
    <span class="w-full flex flex-row justify-center items-center mt-2">{{slide.title}}</span>
   <div class="w-full flex flex-row justify-between md:p-2 p-1">
    <span>⭐⭐⭐</span>     <span class="text-gray-400">{{slide.price}}</span>
   </div>
   <div class="w-full flex flex-row justify-between p-2">
    <img
   
    class="size-6 flex flex-row justify-center items-center drop-shadow-md shadow-black"
    src="../assets/buy.svg" />
    <img
    @click="addToCart(slide)"
    class="size-6  flex flex-row justify-center items-center drop-shadow-md shadow-black"
    src="../assets/cart.svg" />
   </div>


  </div>
  </div>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore';
const cartStore = useCartStore();
const addToCart = (product) => {
cartStore.addItem(product);
console.log("cart is here",cartStore.items)

};
const slides =[
      {
        title: 'TERRA PC-BUSINESS 5050S',
        
       image: 'bz_2018.png' ,
       
        price: 559
      },
      {
        title: 'TERRA PC-BUSINESS 5000',
        image: 'Argentina_2018.png',
        price: 609
      },
      {
        title: 'TERRA PC-Micro 6000SE SILENT GREENLINE ',
        image: 'f_m_2018.png',
        price: 689
      },
      {
        title: 'HP ENVY 5030 multifunction printer',
        image: 'mexico_2018.png',
        price: 66
      },
      {
        title: 'TERRA PC-BUSINESS 5050S',
        image: 'russia_2018.png',
        price: 559
      },
      {
       title: 'HP ENVY 5030 multifunction printer',
       image: 'crotia_2018.png',
       price: 66
      },
      {
        title: 'TERRA PC-BUSINESS 5000',
        image: 'germany_fc.png',
        price: 609
      },
      {
        title: 'TERRA PC-Micro 6000SE SILENT GREENLINE ',
        image: 'peru_2018.png',
        price: 689
      },
      {
        title: 'HP ENVY 5030 multifunction printer',
        image: 'Netherland_fc.png',
        price: 66
      },
      {
        title: 'HP ENVY 5030 multifunction printer',
        image: 'crotia_2018.png',
        price: 66
      },

    ];
   const slides2 =[

      
      {
       title: 'HP ENVY 5030 multifunction printer',
       image: 'sports_wear.png',
       price: 66
      },
      {
       title: 'HP ENVY 5030 multifunction printer',
       image: 'real_madrid.png',
       price: 66
      },
      {
       title: 'HP ENVY 5030 multifunction printer',
       image: 'paris_saint_fc.png',
       price: 66
      },
      {
       title: 'HP ENVY 5030 multifunction printer',
       image: 'cyclic_sport.png',
       price: 66
      },
      {
       title: 'HP ENVY 5030 multifunction printer',
       image: 'fc_bayan_munich.png',
       price: 66
      },
      {
       title: 'HP ENVY 5030 multifunction printer',
       image: 'paris_saint_fc.png',
       price: 66
      },
      {
       title: 'HP ENVY 5030 multifunction printer',
       image: 'fc_bayan_munich.png',
       price: 66
      },
      {
       title: 'HP ENVY 5030 multifunction printer',
       image: 'fc_barcelona.png',
       price: 66
      },
      {
       title: 'HP ENVY 5030 multifunction printer',
       image: 'australia_e_sports.png',
       price: 66
      },
      {
       title: 'HP ENVY 5030 multifunction printer',
       image: 'crotia_2018.png',
       price: 66
      },
      
     
    
    ]



</script>