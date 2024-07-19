<template>
    <div class='w-full flex flex-col justify-center items-center text-white font-semibold'>
      <div v-if='isConfirm' class="z-50 absolute bg-white/60 top-1/4 w-full md:w-1/2 flex flex-col justify-center items-center align-center text-white font-semibold p-6">
<div class="size-40 flex flex-row justify-center items-center rounded-full border-2 bg-yellow-400 p-2">
  <img src="../assets/confirm.svg" class="size-32 flex flex-row justify-center items-center " />

</div>
<h2 class="w-full flex flex-row justify-center items-center text-[20px]">Order Placed successfully</h2>
<h2 class="w-full flex flex-row justify-center items-center text-[14px] text-gray-400">Shipping address: {{ address }} </h2>

</div>

      <div v-if="isOrder"  class=" w-full md:w-3/4 bg-white/40 p-4 rounded-md ">
        <div class="w-full  flex flex-row justify-between ">
      <h1 class="text-2xl font-semibold mb-4">Order Confirmation</h1>
      <div class=" cursor-pointer size-8 md:size-8 border-2 border-red-500 hover:bg-stone-300 rounded-full flex flex-row justify-center items-center bg-slate-500 text-gray-100" @click="isOrder=false; showItem=true;">X</div>

    </div>
      <ul class="list-none flex-col space-y-4">
        <li v-for="item in orderDetails" :key="item.title">
          <div class="flex items-center">
            <img :src="item.image" alt="" class="w-20 h-20 mr-4 rounded-full object-cover">
            <div class="flex flex-col">
              <p class="text-lg font-medium">{{ item.title }}</p>
              <p class="text-gray-400"> {{ item.price }}</p>
              
            </div>
          </div>
          <li class="flex justify-start mt-4 p-2">
            <p class="text-lg font-semibold">Total: <span class="text-gray-400">${{ item.price.toFixed(2) }} </span></p>
       
          </li>
        </li>
<div class='w-full md:w-1/2 flex flex-col justify-center items-center'> 
  

<input type="text" placeholder="Add your shipping address to confirm" class=" bg-blue-950 outline-none w-full p-4 border-2 border-b-green-500 rounded-md" v-model="address" @input="(e) => address = e.target.value">
<div class="w-full flex flex-row justify-center items-center">

  <button :disabled="!address" class="mt-4 disabled:bg-cyan-800 disabled:cursor-not-allowed rounded-md w-24 h-12 flex flex-row justify-center items-center p-2 bg-cyan-500" @click="placeOrder()" >Confirm</button>
</div>
</div>
      </ul>
    </div>
  

        <div v-if ="showItem" class="   w-full grid md:grid-cols-3 grid-cols-2 gap-2 md:gap-2  overflow-hidden " >  
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
      src="../assets/buy.svg" 
      @click="buyItem(slide)"
      />

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
      src="../assets/buy.svg" 
      @click="buyItem(slide)"
      
      />

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
const showItem  = ref(true);
const isConfirm = ref(false)
const isOrder = ref(false)
const orderDetails=ref([])
const cartStore = useCartStore();
const buyStore = useBuyStore();
const address =ref('')
const  showAlert =  () => 
{

  buyStore.isAlert=true
}
const  placeOrder =  () => 
{
  isOrder.value = false
isConfirm.value = true
setTimeout(() => {
  isConfirm.value = false;
  showItem.value = true;
}, 3000);
}

const handleClickOutside =()=>{
  isOrder.value = false
  isConfirm.value = false
  showItem.value = true
}
const addToCart = (product) => 
{

cartStore.addItem(product);

}
const buyItem = (item)=>{
  orderDetails.value=[]
  orderDetails.value.push(item)
  console.log(orderDetails.value)
showItem.value = false
isOrder.value = true


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