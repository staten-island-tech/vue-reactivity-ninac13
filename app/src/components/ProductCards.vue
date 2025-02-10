<script setup>
defineProps({
    category: String,
    name: String,
    brand: String,
    img: String,
    price: Number,
    material: String,
})
</script>

<template>
    <div class="card w-1/3 pb-50 pt-12 h-auto border-4 border-base-100 rounded-lg border-double mx-5 my-5 min-w-64 shadow-md bg-base-300">
        <h2>{{ category }}</h2>
        <h1>{{ name }}</h1>
        <h2>Brand: {{ brand }}</h2>
        <img :src="img" class="rounded-lg border-double border-4 border-base-300 w-full h-96 object-cover"/> 
        <h2>${{ price }}</h2>
        <h2>Material(s): {{ material }}</h2>
        <button>Add to Cart</button>
    </div>
</template>

<style scoped></style>