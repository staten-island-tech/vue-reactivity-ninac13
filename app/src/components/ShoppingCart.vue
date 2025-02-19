<script setup>
defineProps({
    name: String,
    img: String,
    price: Number,
})
</script>

<template>
    <div>
        <h1 class="text-center">{{ name }}</h1>
        <div class="flex justify-center">
            <img :src="img" class="w-2/5"/>
        </div>
        <h3 class="text-center text-sm">${{ price }}</h3>
        <div class="flex justify-center">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped></style>