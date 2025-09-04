<script setup>
// Import reactive from Vue to create reactive state
import { reactive } from 'vue';

// Create a reactive object to hold the counter state
const counter = reactive({ count: 0 });
</script>

<template>
  <div>
    <h1>Count: {{ counter.count }}</h1>

    <!-- event listener @click and inline expression -->
    <button @click="counter.count++">Increment</button>
    <button @click="counter.count--">Decrement</button>
  </div>
</template>

<style scoped>
</style>
