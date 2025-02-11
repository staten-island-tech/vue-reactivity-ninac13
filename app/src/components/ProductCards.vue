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
    <div class="card w-2/5 pb-50 pt-12 h-auto border-4 border-secondary rounded-lg border-double mx-5 my-5 min-w-64 shadow-md bg-base-300">
        <h2 class="text-center">{{ category }}</h2>
        <h1 class="text-center">{{ name }}</h1>
        <h2 class="text-center">Brand: {{ brand }}</h2>
        <img :src="img" class="rounded-lg border-double border-4 border-base-300 w-full h-96 object-cover"/> 
        <h2 class="text-center">${{ price }}</h2>
        <h2 class="text-center">Material(s): {{ material }}</h2>
        <slot></slot>
    </div>
</template>

<style scoped>
</style>