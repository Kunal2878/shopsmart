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
      @click="showAlert(); addToCart(slide)"
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

const cartStore = useCartStore();
const addToCart = (product) => 
{

cartStore.addItem(product);

}

const  showAlert =  () => 
{
  console.log( buyStore.isAlert)
  buyStore.isAlert=true
  console.log( buyStore.isAlert)

  setTimeout(()=>(
    buyStore.isAlert=false
    // console.log(buyStore.isAlert)
    
  ),3000);
  console.log( buyStore.isAlert)
  
}


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
<style>
.BG{
  background-image: url("../assets/nike_logo.png");
  background-size:cover;
  background-position:center;
}


</style>