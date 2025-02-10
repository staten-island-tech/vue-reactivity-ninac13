<script setup>
import Products from "../components/ProductCards.vue";
import jewelryArray from "../products.js";
import { ref } from 'vue';
const jewelryProducts = ref(jewelryArray);
</script>

<template>
  <main>
    <h1 class="font-shrikhand flex justify-center text-base-content text-5xl mx-auto w-fit px-4 py-4 bg-neutral-content border-neutral border-4 mt-7 mb-5 underline underline-offset-8 rounded-3xl">Jewelry Store!</h1>
      <div class="flex-1 ml-60 container flex justify-center flex-wrap">
        <Products v-for="jewelry in jewelryProducts" 
          :key="jewelry.name" 
          :category="jewelry.category"
          :name="jewelry.name"
          :brand="jewelry.brand"
          :img="jewelry.img"
          :price="jewelry.price"
          :material="jewelry.material"
        />
      </div>
  </main>
</template>