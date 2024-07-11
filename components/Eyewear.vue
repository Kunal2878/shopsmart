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
   @click="showAlert(); addToCart(slide)"
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
}


const slides =[
      

    {
         title: 'Rayban ultimate black eyewear',
          image: 'Rayban_ultimate_black.png',
          price: 66
        },
        {
         title: 'Rayban blue black eyewear',
          image: 'Rayban_blue_black.png',
          price: 66
        },
        {
         title: 'Rayban sun sports eyewear',
          image: 'Rayban_sun_sports.png',
          price: 66
        },
        {
         title: 'Rayban wayfarer red eyewear',
          image: 'rayban_wayfarer_red.png',
          price: 66
        },
        {
         title: 'Rayban wayfarer transparent eyewear',
          image: 'Rayban_wayfarer_transparent.png',
          price: 66
        },
        {
         title: 'Rayban under armour eyewear',
          image: 'Ray_ban_under_armour.png',
          price: 66
        },
        {
         title: 'Rayban black pro sports eyewear',
          i: 'Rayban_black_pro.png',
          price: 66
        },
        {
         title: 'Rayban black sporting eyewear',
          image: 'Rayban_black_sporting.png',
          price: 66
        },
        {
          t: 'blue_ocean_sunglass',
          image: 'blue_ocean_sunglass.png',
          price: 66
        },
        
       
    ];
   const slides2 =[

   {
          title: 'Juibo Purple Blue sunglasses ',
          
         image: 'juibo_sunglass-purple_blue.png' ,
         
          price: 559
        },
        {
          title: 'julliet Rayban sunglasses',
          image: 'julliet_rayban_sunglass.png',
          price: 609
        },
        {
          title: 'Sports Red ultimate eyewear',
          image: 'red_sunglass.png',
          price: 689
        },
        {
          title: 'Oakley blusish green sports sunglass',
          image: 'Oakley_blusish_green_sunglass.png',
          price: 66
        },
        {
          title: 'Oakley jawbeaker purple eyewear',
          image: 'Oakley_jawbeaker_purple.png',
          price: 559
        },
        {
          title: 'Oakley jawbeaker sunglass',
          image: 'oakley_jawbeaker_sunglass.png',
          price: 609
        },
        {
          title: 'Oakley white bluish bicycle eyewear ',
          image: 'Oakley_white_bluish_bicyce_eyewear.png',
          price: 689
        },
      
     
    
    ]



</script>