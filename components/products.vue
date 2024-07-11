<template>

                        <div class="w-full flex flex-col justify-center p-2 mt-4 md:text-[12px] text-[8px]">
                            <div class="w-full flex flex-row justify-center items-center mb-4">

                                <button :class="[' REF w-40 h-30 flex flex-row justify-center items-center border-2 rounded-md p-1 hover:bg-cyan-500 border-green-500 text-white mr-2',
                                       isShirts ? 'bg-green-500  ' : 'bg-none']" @click="isShirts = true; isShoes = false; isEyewear = false; isWristWatch = false">Shirts</button>
                                <button :class="[' REF w-40 h-30 flex flex-row justify-center items-center border-2 rounded-md p-1 hover:bg-cyan-500 border-green-500 text-white mr-2',
                                       isEyewear ? 'bg-green-500  ' : 'bg-none']"@click="isShirts = false; isShoes = false; isEyewear = true; isWristWatch = false">Eyewear</button>
                                <button :class="[' REF w-40 h-30 flex flex-row justify-center items-center border-2 rounded-md p-1 hover:bg-cyan-500 border-green-500 text-white mr-2',
                                       isShoes ? 'bg-green-500  ' : 'bg-none']" @click="isShirts = false; isShoes = true; isEyewear = false; isWristWatch = false">Footwear</button>

                                <button :class="[' REF w-40 h-30 flex flex-row justify-center items-center border-2 rounded-md p-1 hover:bg-cyan-500 border-green-500 text-white mr-2',
                                       isWristWatch ? 'bg-green-500  ' : 'bg-none']" @click="isShirts = false; isShoes = false; isEyewear = false; isWristWatch = true">Wristwatch</button>
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
<style>

:hover.REF{

-webkit-box-reflect: below 1px linear-gradient(transparent,rgba(0, 0, 0, 0.493));
box-shadow: 0 0 5px #03f41f, 0 0 6px #03f437c8, 0 0 10prgba(3, 244, 55, 0.701)37, 0 0 10px #03f437b6;
}

</style>

<!-- @click="isShirts= true;
            isShoes=false;
            isEyewear=false;
            isWristWatch=false" -->