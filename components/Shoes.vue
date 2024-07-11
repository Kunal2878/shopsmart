<template>
  <div class='w-full flex flex-col justify-center items-center text-white font-semibold'>
      <div class="   w-full grid md:grid-cols-3 grid-cols-2 gap-2 md:gap-2  overflow-hidden " >  
<div class=" w-40 md:w-60 h-120 md:text-[12px] text-[8px]    shadow-black flex flex-col items-center  justify-center overflow-hidden p-4 md:p-2" v-for="(slide, index) in slides" :key="index">

  <img
 

  class="w-40 md:w-60 h-40 md:h-60  flex flex-row justify-center items-center drop-shadow-md shadow-black"    :src="slide.image" />
  <span class="w-full flex flex-row justify-center items-center mt-2">{{slide.title}}</span>
 <div class="w-full flex flex-row justify-between md:p-2 p-1">
  <span>⭐⭐⭐</span>     <span class="text-gray-400">{{slide.price}}</span>
 </div>
 <div class="w-full flex flex-row justify-between p-2">
  <div class='size-10 flex flex-row justify-center items-center rounded-full border-2 hover:bg-white/55 border-green-500 hover:border-cyan-500'>
    <img
   
    class="cursor-pointer size-5 flex flex-row justify-center items-center drop-shadow-md shadow-black"
    src="../assets/buy.svg" />

  </div>
  <div class='size-10 flex flex-row justify-center items-center rounded-full border-2 hover:bg-white/55 border-green-500 hover:border-cyan-500'>
  
    <img
   @click="showAlert();addToCart(slide)"
    class=" cursor-pointer size-5  flex flex-row justify-center items-center drop-shadow-md shadow-black"
    src="../assets/cart.svg" />

  </div>
 </div>


</div>
</div>
<div class="w-full flex flex-row justify-start">
<span class="w-30 flex flex-row justify-start m-4 text-[14px] md:text-[18px] p-4 border-0 border-b-2 border-b-green-500">Top deals</span>

</div>

<div class="  w-full grid md:grid-cols-3 grid-cols-2 gap-2 md:gap-2  overflow-hidden" >  
<div class="w-40 md:w-60 h-120 md:text-[12px] text-[8px]      shadow-black flex flex-col items-center  justify-center overflow-hidden p-4 md:p-2" v-for="(slide, index) in slides2" :key="index">

  <img
 

  class="w-40 md:w-60 h-40 md:h-60  flex flex-row justify-center items-center drop-shadow-md shadow-black"    :src="slide.image" />
  <span class="w-full flex flex-row justify-center items-center mt-2">{{slide.title}}</span>
 <div class="w-full flex flex-row justify-between md:p-2 p-1">
  <span>⭐⭐⭐</span>     <span class="text-gray-400">{{slide.price}}</span>
 </div>
 <div class="w-full flex flex-row justify-between p-2">
  <div class='size-10 flex flex-row justify-center items-center rounded-full border-2 hover:bg-white/55 border-green-500 hover:border-cyan-500'>
    <img
   
    class="cursor-pointer size-5 flex flex-row justify-center items-center drop-shadow-md shadow-black"
    src="../assets/buy.svg" />

  </div>
  <div class='size-10 flex flex-row justify-center items-center rounded-full border-2 hover:bg-white/55 border-green-500 hover:border-cyan-500'>
  
    <img
   @click="showAlert();addToCart(slide)"
    class=" cursor-pointer size-5  flex flex-row justify-center items-center drop-shadow-md shadow-black"
    src="../assets/cart.svg" />

  </div>
 </div>


</div>
</div>
  </div>
</template>
<script setup>

import { useCartStore } from '@/stores/cartStore';
import { useBuyStore } from '@/stores/buyStore';
const buyStore = useBuyStore();
const  showAlert =  () => 
{

  buyStore.isAlert=true

}
const cartStore = useCartStore();
const addToCart = (product) => {
cartStore.addItem(product);

};
const slides =[
      
{
          title: 'Nike Golden Magic White Sneaker',
          
         image: 'nike_magic_1.png' ,
         
          price: 559
        },
        {
          title: 'Nike White_black Skateboarding shoes',
          image: 'nike_skate_boardng.png',
          price: 609
        },
        {
          title: 'Nike Air_max Red-White sneakers',
          image: 'nike_air_max_red_w.png',
          price: 689
        },
        {
          title: 'Nike fly_Wear altimate sneakers',
          image: 'nike_fly_wear.png',
          price: 166
        },
        {
          title: 'Nike Full Blue sneakers',
          image: 'nike_bluesneakers.png',
          price: 559
        },
        {
          title: 'Nike Airmax  outdoor Shoes',
          image: 'nike_airmax_outdoor.png',
          price: 609
        },
        {
          title: 'Nike Air force red shoes ',
          image: 'nike_air_force_red.png',
          price: 689
        },
        {
          title: 'Nike White Orange blend sneakers',
          image: 'nike_white_ora.png',
          price: 266
        },
        {
          title: 'Nike Air Max red shoes',
          image: 'nike_air_max_red.png',
          price: 66
        },
        {
          title: 'Nike Black Modern Sneakers ',
          image: 'nike_black.png',
          price: 66
        },
        {
          title: 'Nike Air force red black shoes',
          image: 'nike_air_f.png',
          price: 66
        },
        
        {
          title: 'Nike Black Basketball sneakers',
          image: 'nike_snea_basket.png',
          price: 66
        },
        {
       title: 'Reebok Green Black shoes',
       image: 'Reebok_greeen_black.png',
       price: 696
      },
      {
       title: 'Reebok Ultimate black shoes',
       image: 'reebok_ultimate_black.png',
       price: 66
      },
      {
       title: 'Reebok Blue yellow shoes ',
       image: 'reebok_blue_yellow.png',
       price: 686
      },
      {
       title: 'Reebok Black Dark pink shoes',
       image: 'Reebok_black_pink.png',
       price: 646
      },
      {
       title: 'Reebok black white blend sports_wear',
       image: 'reebok_sports_wear.png',
       price: 166
      },
      {
       title: 'Reebok unpaired black sshoes',
       image: 'unpaired_black.png',
       price: 266
      },
    ];
   const slides2 =[

      
   {
         title: 'Adidas Green grass sports footwear',
         image: 'green_grass_adidas_football.png',
         price: 636
        },
        {
         title: 'Adidas cleat light green sports shoes',
         image: 'adidas_cleat_light-green.png',
         price: 166
        },
        {
         title: 'Adidas predator red spots shoes',
         image: 'adidas_predator_red.png',
         price: 666
        },
        {
         title: 'Adidas Lime Claeat classic footwear',
         image: 'adidas_lime_cleat.png',
         price: 266
        },
        {
         title: 'Adidas Cleat ultimate gold footwear',
         image: 'adidas_cleat_football_gold.png',
         price: 666
        },
        {
         title: 'Adidas Sky sports shoes',
         image: 'adidas_sky.png',
         price: 366
        },
        {
         title: 'Adidas Air Red Black sports shoes ',
         image: 'adidas_air_ound.png',
         price: 166
        },
        {
         title: 'Adidas Yellow fifa sportwear',
         image: 'adidas_fifa.png',
         price: 466
        },
        {
         title: 'Adidas Cleat Blue white shoes',
         image: 'adidas_cleat_football.png',
         price: 266
        },
        {
         title: 'Adidas Predator black gold sportswear',
         image: 'adidas_predator.png',
         price: 366
        },
        {
         title: 'Adidas Hello sports shoes ',
         image: 'adidas_hello_sports.png',
         price: 466
        },
     
    
    ]



</script>