import {defineStore} from 'pinia';
export const useBuyStore = defineStore('buy', ()=>{
const items =ref([])
const total = ref(0)
function addItem(){
total.value =4
}
return {total,addItem }
  })