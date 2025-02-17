<script setup>
const cart = ref([])
defineProps({
    name: String,
    img: String,
    price: Number,
})
</script>

<template>
    <div>
        <h1>{{ name }}</h1>
        <img :src="img"/>
        <h2>{{ price }}</h2>
    </div>
    

</template>

<style scoped></style>