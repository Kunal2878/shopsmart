<template>
    <div class="w-screen h-screen flex flex-row justify-center items-center bg-white overflow-hidden">
<div class="w-full md:w-3/5 h-[50vh] md:h-[70vh] flex flex-row justify-center items-center p-2 md:p-4 overflow-hidden">
<div class="w-full" v-for="(slide, currIndex) in slides" :key="currIndex">
<img

class="w-full md:w-3/5 h-full"
:src="slide[currIndex].image"

/>
</div>

</div>
<div class="w-full flex flex-col p-2 md:p-4" v-for="(slide, currIndex) in slides" :key="currIndex">
<img

class="w-full md:w-3/5 h-full"
:src="slide.image"
@click="changeIndex(currIndex)"
/>
</div>

    </div>
</template>

<script >
import { ref, watch } from 'vue';
export default {
  data() {
    return {
      currIndex: 0,
      slides: [
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
    }
  },
methods:{
  changeIndex(index){
this.currIndex=index
  }
}
}
watch(
  () => true, // Empty dependency for continuous execution
  () => {
    setTimeout(() => {
  if(this.currIndex===7){
    this.currIndex=0
  }
  this.currIndex++;
    }, 2000);
  },
  { immediate: true } // Run initially
);


</script>