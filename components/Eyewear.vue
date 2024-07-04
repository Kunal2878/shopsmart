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
 
  class="size-6 flex flex-row justify-center items-center drop-shadow-md shadow-black"
  src="../assets/buy.svg" />
  <img
 
  class="size-6  flex flex-row justify-center items-center drop-shadow-md shadow-black"
  src="../assets/cart.svg" />
 </div>
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

</div>
</div>

<span class="w-full flex flex-row justify-start m-4">Top deals</span>

<diiv class="  w-full grid md:grid-cols-3 grid-cols-2 gap-2 md:gap-2  overflow-hidden" >  
<div class="w-40 md:w-60 h-120 md:text-[12px] text-[8px]    text-gray-800  shadow-black flex flex-col items-center  justify-center overflow-hidden p-4 md:p-2" v-for="(slide, index) in slides2" :key="index">

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
 
  class="size-6  flex flex-row justify-center items-center drop-shadow-md shadow-black"
  src="../assets/cart.svg" />
 </div>
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

</div>
</diiv>
  </div>
</template>

<script setup>
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