import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    recent_items:[]
  }),



  // (Optional) watch effect
  
  actions: {
    addItem(item) {
        console.log(item,"adding")
      const existingItem = this.items.find((cartItem) => cartItem.title === item.title);
      if (existingItem) {
        existingItem.quantity++;
   
      } else {
        this.items.push({ ...item, quantity: 1 });
        console.log("Item added",this.items);
      }
    },
    removeItem(item) {
      const itemIndex = this.items.findIndex((cartItem) => cartItem.title === item.title);
      if (itemIndex !== -1) {
        this.items.splice(itemIndex, 1);
      }
    },
    editItemQuantity(item, newQuantity) {
      const itemIndex = this.items.findIndex((existingItem) => existingItem.title === item.title);
      console.log(itemIndex, "itemIndex");
      if (itemIndex !== -1 && newQuantity > 0) {
        this.items[itemIndex].quantity = newQuantity;
      }
    },
  },
});
