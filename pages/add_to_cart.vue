<template>
    <div class="w-full top-0 min-h-screen bg-blue-950 text-white flex flex-col items-center  ">
   

      <div v-if="cart.length" class="w-full md:w-1/2 h-full">
<div v-if="buy_pro">
  <div class="order-confirmation p-4">
    <h1 class="text-2xl font-semibold mb-4">Order Confirmation</h1>
    <div v-if="orderDetails">
      <ul class="list-none flex-col space-y-4">
        <li v-for="item in orderDetails" :key="item.title">
          <div class="flex items-center">
            <img :src="item.image" alt="" class="w-20 h-20 mr-4 rounded-full object-cover">
            <div class="flex flex-col">
              <p class="text-lg font-medium">{{ item.title }}</p>
              <p class="text-gray-400">{{ item.quantity }} x {{ item.price }}</p>
              <p class="text-gray-600 font-semibold">
                {{ (item.quantity * item.price).toFixed(2) }}
              </p>
            </div>
          </div>
        </li>
        <li class="flex justify-end mt-4">
          <p class="text-lg font-semibold">Total: <span class="text-gray-400">${{ total.toFixed(2) }} </span></p>
     
        </li>
<div class='w-full md:w-1/2 flex flex-col'> 
  

<input type="text" placeholder="Add your shipping address to confirm" class=" bg-blue-950 outline-none w-full p-4 border-2 border-b-green-500 rounded-md" v-model="address" @input="(e) => address = e.target.value">
<div class="w-full flex flex-row justify-center items-center">

  <button :disabled="!address" class="mt-4 disabled:bg-cyan-800 disabled:cursor-not-allowed rounded-md w-24 h-12 flex flex-row justify-center items-center p-2 bg-cyan-500" @click="placeOrder()" >Confirm</button>
</div>
</div>
      </ul>
    </div>
  
  </div>


</div>

<div v-else-if='isConfirm' class="absolute top-1/4 w-full md:w-1/2 flex flex-col justify-center items-center align-center text-white font-semibold ">
<div class="size-40 flex flex-row justify-center items-center rounded-full border-2 bg-yellow-400 p-2">
  <img src="../assets/confirm.svg" class="size-32 flex flex-row justify-center items-center " />

</div>
<h2 class="w-full flex flex-row justify-center items-center text-[20px]">Order Placed successfully</h2>
<h2 class="w-full flex flex-row justify-center items-center text-[14px] text-gray-400">Shipping address: {{ address }} </h2>

</div>




        <div v-else class="w-full flex- flex-col  p-4">

          <h1 class="text-2xl font-semibold mb-4">Your Cart</h1>
          <ul class="list-none space-y-4">
            <li v-for="item in cart" :key="item.title" class=" w-200 flex flex-col items-center rounded-md bg-gray-600">
     <div class="w-full flex flex-col">

       <div class="  w-full flex flex-row items-start justify-start p-4">
         <img
           :src="item.image"
           alt="Product Image"
           class="left-0 ml-4 w-16 h-16 object-cover rounded-md mr-4"
         />
         <div class="text-left">
           <p class="font-medium">{{ item.title }}</p>
           <span class="text-gray-300 text-sm">Price: ${{ item.price }}</span>
         </div>
       </div>

       <div class=" w-full flex flex-row justify-center items-center mx-4">
         <button
           @click="editQuantity(item, -1)"
           class="px-2 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
         >
           -
         </button>
         <span class="px-2">{{ item.quantity }}</span>
         <button
           @click="editQuantity(item, 1)"
           class="px-2 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
         >
           +
         </button>
       </div>
     </div>
           


                <div class="w-full flex flex-row justify-between items-center p-4">
                  <button
                    @click="removeFromCart(item)"
                    class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-200 mr-4"
                  >
                    Remove
                  </button>
                  <button
                    @click="buyItem(item)" class="px-2 py-1 mr-4 bg-green-500 text-white rounded hover:bg-blue-700"
                  >
                    Buy
                  </button>
                </div>

          

            </li>
          </ul>
          <div class="w-full flex flex-row justify-center items-center mt-4">
            <button 
             @click="buyAll()"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Buy all
            </button>
          </div>

          <ul v-if="recent_ordered.length" class="list-none space-y-4">
            <h1 class="text-2xl font-semibold mb-4">Recently ordered items</h1>
            <li v-for="item in recent_ordered" :key="item.title" class=" w-200 flex flex-col items-center rounded-md bg-gray-600">
    

       <div class="  w-full flex flex-row items-start justify-between p-4">
         <img
           :src="item.image"
           alt="Product Image"
           class="left-0 ml-4 w-16 h-16 object-cover rounded-md mr-4"
         />
      
           <p class="font-medium text-[12px] text-gray-600">{{ item.title }}</p>
           <span class="text-gray-300 text-sm">Qty: {{ item.quanty }}</span>
           <span class="text-gray-300 text-sm">Price: ${{ item.price }}</span>
  
       </div>


            </li>
          </ul>
        </div>



        </div>
      <p v-else class="absolute  top-1/2 w-full flex flex-row justify-center items-center text-2xl text-gray-400">Your cart is empty</p>
     
  
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
import { useCartStore } from '@/stores/cartStore'
  const buy_pro=ref(false)
  const address =ref('')
  const place_order=ref(false)
  const isConfirm=ref(false)
  const orderDetails=ref([])
  const total=ref(0)
  const cartStore = useCartStore();
  const cart = cartStore.items;
  const recent_ordered = cartStore.recent_items;

  const removeFromCart = (itemId) => {
    cartStore.removeItem(itemId);
  };
  
  const editQuantity = (item, delta) => {
    const quantity = cartStore.items.find((i) => i.title === item.title).quantity + delta;

    cartStore.editItemQuantity(item, quantity);

  };
const buyItem = (item)=>{
  buy_pro.value=true
  orderDetails.value.push(item)
  if (orderDetails.value.length > 0) {
 
      for (const item of orderDetails.value) {
       total.value= total.value+item.price*item.quantity

      }

    }

}
const placeOrder = () => {
  cartStore.recent_items.value = [...orderDetails.value]
  buy_pro.value=false;
  isConfirm.value=true;
  place_order.value = true;
  setTimeout(() => {
    navigateTo('/');
  }, 2000);
}
const buyAll =()=>{
  buy_pro.value=true; 
  orderDetails.value=[...cart]
  console.log(  orderDetails.value)
}

  watch(() => orderDetails.value, () => {
    if (orderDetails.value.length > 0) {
      
      for (const item of orderDetails.value) {
       total.value= total.value+item.price*item.quantity

      }
     
    }
  }, { immediate: true });
</script>  
  <style scoped>
  /* Add any custom styles for your cart page */
  </style>
  