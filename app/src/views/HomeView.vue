<script setup>
import Products from "../components/Products.vue";
import jewelryArray from "../products.js";
import { ref } from 'vue';
const jewelryProducts = ref([jewelryArray]);
</script>

<template>
  <main>
    <h1>Jewelry Store!</h1>
  </main>
</template>