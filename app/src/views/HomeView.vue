<script setup>
import Products from "../components/ProductCards.vue";
// import Cart from "../components/Cart.vue"
import jewelryArray from "../products.js";
import { ref } from 'vue';
const jewelryProducts = ref(jewelryArray);
const cart = ref([]);
</script>

<template>
  <main class="bg-neutral-content">
    <h1 class="justify-self-start font-shrikhand flex justify-center text-base-content text-5xl mx-auto w-fit px-4 py-4 bg-base-100 border-neutral border-4 mt-7 mb-5 underline underline-offset-8 rounded-3xl shadow-2xl">Jewelry Store!</h1>
    <div class="grid grid-cols-5 gap-4">
      <div class="col-span-3 flex-1 ml-60 container flex justify-center flex-wrap">
        <Products v-for="jewelry in jewelryProducts" 
          :key="jewelry.name" 
          :category="jewelry.category"
          :name="jewelry.name"
          :brand="jewelry.brand"
          :img="jewelry.img"
          :price="jewelry.price"
          :material="jewelry.material"
        ><button @click="console.log(jewelry.name)" class="border-4 rounded-lg border-base-100 pt-2 pb-1 bg-neutral-content hover:bg-base-100 hover:text-neutral hover:text-xl duration-500">Add to Cart</button></Products>
      </div>
      <div class="col-span-1 h-full absolute right-10 border-4 border-neutral justify-self-end px-40 rounded-lg">
        <h1 class="text-2xl pt-5 text-center">Jewelry Cart</h1>

      </div>
    </div>
  </main>
</template>