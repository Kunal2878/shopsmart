<template>
    <div class="w-full bg-white flex flex-col items-center mt-10">
   
      <div v-if="cart.length">
<div v-if="buy_pro">
  <div class="order-confirmation">
    <h1 class="text-2xl font-semibold mb-4">Order Confirmation</h1>
    <div v-if="orderDetails">
      <ul class="list-none space-y-4">
        <li v-for="item in orderDetails" :key="item.title">
          <div class="flex items-center">
            <img :src="item.image" alt="" class="w-20 h-20 mr-4 rounded-full object-cover">
            <div class="flex flex-col">
              <p class="text-lg font-medium">{{ item.title }}</p>
              <p class="text-gray-500">{{ item.quantity }} x {{ item.price }}</p>
              <p class="text-gray-700 font-semibold">
                {{ (item.quantity * item.price).toFixed(2) }}
              </p>
            </div>
          </div>
        </li>
        <li class="flex justify-end mt-4">
          <p class="text-lg font-semibold">Total:</p>
          <p class="text-xl font-bold text-green-500 ml-4">
            {{ calculateTotal(orderDetails.items) }}
          </p>
        </li>
      </ul>
    </div>
    <p v-else class="text-green-500 font-semibold">
      Your order has been placed successfully!
    </p>
  </div>


</div>







        <div v-else>

          <h1 class="text-2xl font-semibold mb-4">Your Cart</h1>
          <ul class="list-none space-y-4">
            <li v-for="item in cart" :key="item.title">
              <div class="flex justify-between items-center bg-gray-100 p-2 rounded-md">
                <div class="flex items-center">
                  <img
                    :src="item.image"
                    alt="Product Image"
                    class="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div class="text-left">
                    <p class="font-medium">{{ item.title }}</p>
                    <span class="text-gray-500 text-sm">Price: ${{ item.price }}</span>
                  </div>
                </div>
                <div class="flex items-center">
                  <button
                    @click="removeFromCart(item)"
                    class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-200"
                  >
                    Remove
                  </button>
                  <button
                    @click="buy_pro.value=true; orderDetails.value.push(item)"
                    class="px-2 py-1 bg-green-500 text-white rounded hover:bg-blue-700"
                  >
                    Buy
                  </button>
                  <div class="flex items-center mx-4">
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
              </div>
            </li>
          </ul>
          <div class="w-full flex flex-row justify-center items-center mt-4">
            <button 
            @click="buy_pro.value=true; orderDetails.value=[...cart]"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Buy all
            </button>
          </div>
        </div>
        </div>
      <p v-else class="top-1/2 w-full flex flex-row justify-center items-center text-2xl text-gray-400">Your cart is empty</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
import { useCartStore } from '@/stores/cartStore'
  const buy_pro=ref(false)
  const orderDetails=ref([])
  const cartStore = useCartStore();
  const cart = cartStore.items;
  const removeFromCart = (itemId) => {
    cartStore.removeItem(itemId);
  };
  
  const editQuantity = (item, delta) => {
    const quantity = cartStore.items.find((i) => i.title === item.title).quantity + delta;

    cartStore.editItemQuantity(item, quantity);

  };
  </script>
  
  <style scoped>
  /* Add any custom styles for your cart page */
  </style>
  