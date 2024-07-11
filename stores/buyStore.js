import {defineStore} from 'pinia';
export const useBuyStore = defineStore('buy', {
  state: () => ({
    isAlert: false
  })
})