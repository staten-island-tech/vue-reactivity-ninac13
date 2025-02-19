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
    <div class="card w-2/5 pb-50 pt-6 h-auto border-secondary hover:border-4 rounded-lg my-5 min-w-64 shadow-md bg-base-100">
        <h2 class="text-center">{{ category }}</h2>
        <h1 class="text-center text-2xl text-neutral my-1">{{ name }}</h1>
        <h2 class="text-center mb-2">Brand: {{ brand }}</h2>
        <img :src="img" class="rounded-2xl border-8 border-base-100 h-96 object-cover"/> 
        <h2 class="text-center mt-3">${{ price }}</h2>
        <h2 class="text-center pb-2">Material(s): {{ material }}</h2>
        <slot></slot>
    </div>
</template>

<style scoped>
</style>