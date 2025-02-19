<script setup>
import Products from "../components/ProductCards.vue";
import Cart from "../components/ShoppingCart.vue"
import jewelryArray from "../products.js";
import { ref } from 'vue';
const jewelryProducts = ref(jewelryArray);
const cart = ref([]);
</script>

<template>
  <main class="bg-neutral-content">
    <h1 class="justify-self-start font-shrikhand flex justify-center text-base-content text-5xl mx-auto w-fit px-4 py-4 bg-base-100 border-neutral border-4 mb-5 underline underline-offset-8 rounded-3xl shadow-2xl">Jewelry Store!</h1>
    <div class="grid grid-cols-5 gap-4">
      <div class="col-span-3 flex-1 ml-28 container flex justify-center flex-wrap gap-8">
        <Products v-for="jewelry in jewelryProducts" 
          :key="jewelry.name" 
          :category="jewelry.category"
          :name="jewelry.name"
          :brand="jewelry.brand"
          :img="jewelry.img"
          :price="jewelry.price"
          :material="jewelry.material"
        ><button @click="cart.push(jewelry)" class="border-base-100 pt-2 pb-1 bg-neutral-content hover:bg-base-100 hover:text-neutral hover:text-xl duration-500 border-8 rounded-2xl">Add to Cart</button></Products>
      </div>
      <div class="fixed col-span-1 h-5/6 w-1/4 border-8 bg-base-100 border-double border-neutral justify-self-end mr-16 rounded-lg overflow-auto">
        <h1 class="text-2xl pt-5 text-center flex justify-center flex-wrap">Jewelry Cart</h1>
        <div class="flex justify-center">
          <button @click="cart=[]" class="border-base-100 pt-2 pb-1 bg-neutral-content hover:bg-base-100 hover:text-neutral hover:text-xl duration-500 border-8 rounded-2xl w-2/3">Remove All Items</button>
        </div>
        <div class="container flex justify-center flex-wrap bg-neutral-content rounded-xl">
          <Cart v-for="item in cart"
            :key="item.name"
            :name="item.name"
            :img="item.img"
            :price="item.price"
          ><button @click="cart=cart.filter(cartItem => cartItem!==item)" class="mb-5 border-base-100 pt-2 pb-1 bg-neutral-content hover:bg-base-100 hover:text-neutral hover:text-base duration-500 border-8 rounded-2xl w-1/2 text-sm">Remove Item(s)</button></Cart>
        </div>
      </div>
    </div>
  </main>
</template>