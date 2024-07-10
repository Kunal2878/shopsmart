<template>
    <div class="w-screen h-screen flex flex-col md:flex-row justify-center items-center  overflow-hidden p-2">
<div class="h-80  w-full md:w-4/5 flex flex-row justify-start items-center overflow-hidden" >  
  <div class="w-full h-80 shrink-0  m-4 shadow-black flex flex-col items-center  justify-center overflow-hidden p-2" v-for="(slide, index) in slides" :key="index"   >

    <img
   
    class="w-120 h-80  flex flex-row justify-center items-center drop-shadow-md shadow-black"
    :src="slide.image"
    
    />
  </div>
 

</div>
<div class="hidden h-[400px] md:w-1/5 md:flex md:flex-col items-center overflow-hidden hover:overflow-y-scroll  ">
  <div class=" w-full flex flex-row justify-center items-center m-2  shadow-lg shadow-black" v-for="(slide, index) in slides"   :key="index">
  <img

  class="w-40 h-40  "
  :src="slide.image"
  @click="changeIndex(currIndex)"
  />
  </div>

</div>
<div class="w-full  md:hidden flex   p-2  overflow-hidden overflow-x-scroll mt-4">
  <div class=" w-1/3 shrink-0 flex flex-row justify-center m-2 snap-x " v-for="(slide, index) in slides" :key="index">
  <img
  
  class="w-full h-40 "
  :src="slide.image"
  @click="changeIndex(currIndex)"
  />
  </div>

</div>

    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
const currIndex=ref(0)

      
     const slides= [
        {
          title: 'TERRA PC-BUSINESS ffgghh 5050S',
          image: 'bz_2018.png',
          price: 559
        },
        {
          title: 'Nike White_black Skateboarding shoes',
          image: 'nike_skate_boardng.png',
          price: 609
        },
        {
          title: 'Rayban sun sports eyewear',
          image: 'Rayban_sun_sports.png',
          price: 66
        },
        {
          title: 'Apple gold S2 smart watch',
          image: 'Apple_gold_smart.png',
          price: 559
        },
        {
          title: 'Nike Air_max Red-White sneakers',
          image: 'nike_air_max_red_w.png',
          price: 689
        },
        {
          title: 'TERRA PC-BUSINESS 5000',
          image: 'Argentina_2018.png',
          price: 609
        },
        {
          title: 'Apple blue S3 smart watch',
          image: 'Apple_blue.png',
          price: 609
        },
        {
          title: 'Rayban wayfarer red eyewear',
          image: 'rayban_wayfarer_red.png',
          price: 66
        }
      ]



      const changeIndex = (index) => {
  currIndex.value = index;
};


watch(currIndex, () => {
  setTimeout(() => {
    if (currIndex===7) {
      currIndex.value = 0;
    } else {
      currIndex.value++;
    }
  }, 2000);
}, { immediate: true }); // Run initially


</script>