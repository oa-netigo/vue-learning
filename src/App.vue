<script setup>
// Import ref from Vue to create reactive state
import { ref } from 'vue';

// Create a reactive state variable for count
let count = ref(0);

let username = ref('');

</script>

<template>
  <div>
    <h1>Count: {{ count }}</h1>
    <button @click="count++">Increment Count</button>
    <button @click="count--">Decrement Count</button>

    <hr>

    <h1>Username: {{ username }}</h1>
    <button @click="username = 'John'">Change Username</button>
  </div>
</template>

<style scoped>
</style>
