<template>

            <div class="w-full flex flex-col justify-center p-2 mt-4 md:text-[12px] text:[8px]">
                <div class="w-full flex flex-row justify-center items-center mb-4">

                    <button class="w-40  h-30 flex flex-row justify-center items-center border-2 rounded-md p-1 hover:bg-cyan-400 border-cyan-500 text-purple-600  mr-2" @click="isShirts = true; isShoes = false; isEyewear = false; isWristWatch = false">Shirts</button>
                    <button class="w-40  h-30 h-30 flex flex-row justify-center items-center border-2 rounded-md p-1 hover:bg-cyan-400 border-cyan-500 text-purple-600 mr-2" @click="isShirts = false; isShoes = false; isEyewear = true; isWristWatch = false">Eyewear</button>
                    <button class="w-40  h-30 flex flex-row justify-center items-center border-2 rounded-md p-1 hover:bg-cyan-400 border-cyan-500 text-purple-600 mr-2" @click="isShirts = false; isShoes = true; isEyewear = false; isWristWatch = false">Footwear</button>

                    <button class="w-40  h-30 flex flex-row justify-center items-center border-2 rounded-md p-1 hover:bg-cyan-400 border-cyan-500 text-purple-600 mr-2" @click="isShirts = false; isShoes = false; isEyewear = false; isWristWatch = true">Wristwatch</button>
                </div>

                <Shirt v-if="isShirts" />
                <Shoes v-if="isShoes" />
                <Eyewear v-if="isEyewear" />
                <Wristwatch v-if="isWristWatch" />
            </div>    

</template>

<script>
import Shirt from '~/components/Shirt.vue';
import Shoes from '~/components/Shoes.vue';
import Eyewear from '~/components/Eyewear.vue';
import Wristwatch from '~/components/Wristwatch.vue';

export default{
    components:[Shirt,Shoes,Eyewear,Wristwatch],
    data(){
        return{
            isShirts:true,
            isShoes:false,
            isEyewear:false,
            isWristWatch:false
        }
    }
}
</script>


<!-- @click="isShirts= true;
            isShoes=false;
            isEyewear=false;
            isWristWatch=false" -->