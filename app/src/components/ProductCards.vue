<script setup>
import { ref } from 'vue'
defineProps(['name'])
defineProps(['brand'])
defineProps(['image'])
defineProps(['price'])
defineProps(['category'])
defineProps(['material'])
</script>

<template>
    <div>
        <h1>{{ name }}</h1>
        <h2>{{ brand }}</h2>
        <image></image>    
        <h2>{{ brand }}</h2>
        <h2>{{ brand }}</h2>
        <button>Add to Cart</button>
    </div>
</template>

<style scoped></style>