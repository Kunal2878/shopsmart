import {defineStore} from 'pinia';
export const useBuyStore = defineStore('buy', ()=>{
const items =ref([])
const total = ref(0)
const isAlert=false
function addItem()
{
  
total.value = 4

}
return {total,addItem, isAlert }
  })