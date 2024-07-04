<template>

    <div class="w-full flex flex-row p-4 text-black text-[8px] md:text-[14px] font-semibold overflow-hidden">
        <div class="w-1/3 flex flex-row justify-start items-center">
    <span>Shopsmart</span>
        </div>
        <div class="w-2/3 flex flex-row justify-center items-center md:pl-4 ">
<NuxtLink class='ml-2 md:ml-4' to ='/products'>Products</NuxtLink>
<NuxtLink class='ml-2 md:ml-4' to ='/about'>About us</NuxtLink>
<NuxtLink class='ml-2 md:ml-4' to ='/add_to_cart'>Go to cart</NuxtLink>
<NuxtLink class='ml-2 md:ml-4 border-2 rounded-md p-1 hover:bg-cyan-400 border-cyan-500 text-purple-600' to='/login'>Signup/Login</NuxtLink>
        </div>

    </div>
</template>