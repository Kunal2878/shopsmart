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
console.log("cart is here",cartStore.items)

};
const slides =[

      

        {
          title: 'Apple silver smart watch',
          image: 'Apple_silver_smart.png',
          price: 66
        },
        {
          title: 'Apple ultimate black S4 smart watch',
          image: 'Apple_ultimet_black_s4.png',
          price: 66
        },
        {
        title: 'Sony green yellow smart watch',
        image: 'Sony_green_smart.png',
        price: 66
        },
        {
        title: 'Sony black smart watch',
        image: 'Sony_black_smart_watch.png',
        price: 66
        },
        {
        title: 'Sony gear2 android smart watch',
        image: 'Sony_gear2_android.png',
        price: 66
        },
     
        {
        title: 'Sony gray smart watch',
        image: 'Sony_gray_smart.png',
        price: 66
        },
        {
        title: 'Sonyr ound blutooth smart watch',
        image: 'Sony_round_bluthooth.png',
        price: 66
        },
        {
        title: 'Sony smart android watch',
        image: 'Sony_smart_android_watch.png',
        price: 66
        },
        {
        title: 'Sony Xperia smart watch',
        image: 'Sony_Xperia _smart.png',
        price: 66
        },
        {
        title: 'Diving chronogrph sports watch',
        image: 'Diving_chronogrph_sports_watch.png',
        price: 66
        },
    ];
   const slides2 =[

   {
          title: 'Apple gold S2 smart watch',
          
         image: 'Apple_gold_smart.png' ,
         
          price: 559
        },
        {
          title: 'Apple blue S3 smart watch',
          image: 'Apple_blue.png',
          price: 609
        },
        {
          title: 'Apple 6s smart watch',
          image: 'Apple_6s_smart.png',
          price: 689
        },
        {
          title: 'Apple black white saart watch',
          image: 'Apple_black_white_saart.png',
          price: 66
        },
        {
          title: 'Apple cream S2 smart watch',
          image: 'Apple_cream_s2.png',
          price: 559
        },
        {
          title: 'Apple lime black smart watch',
          image: 'Apple_lime_black_smart.png',
          price: 609
        },
        {
          title: 'Apple lime sporty watch',
          image: 'Apple_lime_sporty_watch.png',
          price: 689
        },
        {
          title: 'Apple orange sports watch S2',
          image: 'Apple_orange_sports_watch_s2.png',
          price: 66
        },
        {
          title: 'Apple purple S2 smart watch',
          image: 'Apple_purple_s2.png',
          price: 66
        },
   {
      title: 'Venso activity tracker smart watch',
      image: 'venso_activity_.png',
      price: 66
      },
      {
      title: 'Wearable technology activity tracker',
      image: 'wearable_tech_activity.png',
      price: 66
      },
      {
      title: 'Xiaomi band2 activity tracker',
      image: 'Xiaomi_band2_activity.png',
      price: 66
      },
      {
      title: 'Xiaomi Mi band activity tracker',
      image: 'Xiaomi_Mi_band_activity.png',
      price: 66
      },
      {
      title: 'Xiaomi amazfit activity tracker',
      image: 'xiaomi_amazfit_activity.png',
      price: 66
      },
      {
      title: 'starp clock sport watch',
      image: 'starp_clock_sport_watch.png',
      price: 66
      },
   
      {
      title: 'spartan blue sport smart watch',
      image: 'spartan_blue_sport.png',
      price: 66
      },
      {
      title: 'Spartan heart wrist watch',
      image: 'Spartan_heart_wrist.png',
      price: 66
      },
      {
      title: 'fitbit activity tracker smart watch',
        i: 'fitbit_activity.png',
      price: 66
      },
      {
      title: 'fitbit activity fitness tracker smart watch',
      image: 'fitbit_activity_fitness.png',
      price: 66
      },
      
    
    ]
    
    </script>


<!-- <img


 <!-- <div className=' flex absolute top-1/2 justify-between w-full '>
        <button
          type="button"
          class=" ml-4 p-2 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full"
        
        >
          <svg
            class="h-6 w-6 text-indigo-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 18l-6-6l6-6" />
          </svg>
        </button>
        <button
          type="button"
          class="p-2 mr-4 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full"
  
        >
          <svg
            class="h-6 w-6 text-indigo-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 18l6-6l-6-6" />
          </svg>
        </button>
      </div> -->
            <!-- <img
            
            
             <!-- <div className=' flex absolute top-1/2 justify-between w-full '>
                    <button
                      type="button"
                      class=" ml-4 p-2 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full"
                    
                    >
                      <svg
                        class="h-6 w-6 text-indigo-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 18l-6-6l6-6" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      class="p-2 mr-4 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full"
              
                    >
                      <svg
                        class="h-6 w-6 text-indigo-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 18l6-6l-6-6" />
                      </svg>
                    </button>
                  </div> -->