<template>

    <div class="w-full text-white flex flex-row p-4 text-[8px] md:text-[14px] font-semibold overflow-hidden">
        <div class=" w-2/5 flex flex-row justify-start items-center mr-4 md:mlr-6">
    <span class='reflect poetsen-one-regular  text-green-500 font-black text-[20px] md:ml-4'>Shopsmart</span>
    <img src="../assets/cart.svg" class=" reflect size-6 md:size-8" />
        </div>
        <div class="w-3/5 flex flex-row justify-end items-center md:pl-4 pl-6 ">
<NuxtLink class='ml-2 md:ml-4 flex flex-col justify-center items-center' to ='/about'>
 <span class="hidden md:flex">About us</span> 
<img src="../assets/about.svg" class="size-6 md:size-6" />
</NuxtLink>
<NuxtLink class='ml-2 md:ml-4 flex flex-col justify-center items-center' to ='/add_to_cart'>
 <span class="hidden md:flex">  Go to cart</span> 
<img src="../assets/cart2.svg" class="size-6 md:size-6" />
</NuxtLink>

<!-- Add this in your nuxt.config.js file -->


<!-- Then you can use the font in your components like this: -->




<button v-if='isAuthenticated'  class='ml-2 md:ml-4 border-2 rounded-md p-1  hover:bg-green-500 border-green-500 hover:border-cyan-500 text-white' @click='logout'>Logout</button>
<NuxtLink  v-if='!isAuthenticated' class=' ml-2 md:ml-4 border-2 rounded-md p-1 hover:bg-green-500 border-green-500 hover:border-cyan-500 text-white' to='/login'>Signup/Login</NuxtLink>

  
<span  class=" flex flex-row justify-center items-center w-6 h-6 rounded-full border-1 border-red-500">


</span>    
</div>

    </div>
</template>

<script >

export default {
  async setup() {
    // const user = useUser();
    const sty1="hover:bg-green-500/50 hover:text-white"
    var isAuthenticated = false;
    var cokkie = useCookie('shopsmart');

    if (cokkie.value) {
      isAuthenticated = true;
    }

    const logout = () => {
      const getcokkie = useCookie('shopsmart');
      isAuthenticated = false;
      getcokkie.value = '';
    };

    return {
      isAuthenticated,
      logout,
    };
  }
}


</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Jaini&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jaini&family=Vibes&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jaini&family=Poetsen+One&family=Vibes&display=swap');
.vibes-regular {
  font-family: "Vibes", system-ui;
  font-weight: 400;
  font-style: normal;
}
.poetsen-one-regular {
  font-family: "Poetsen One", sans-serif;
  /* font-weight: 400; */
  /* font-style: normal; */
}
.jaini-regular {
  font-family: "Jaini", system-ui;
  font-weight: 800;
  font-style: normal;
}
.reflect{
  -webkit-box-reflect: below 1px linear-gradient(transparent,rgba(0, 0, 0, 0.493));
  /* box-shadow: 0 0 5px #03e9f4, 0 0 15px #03f437, 0 0 25px #03f437, 0 0 100px #03f437; */
}
</style>