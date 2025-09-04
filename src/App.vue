<script setup>
import { ref, reactive } from 'vue';

// Use ref for primitive values (numbers, strings, booleans)
const count = ref(0);

// Use reactive for objects with multiple properties
const user = reactive({
  name: 'Alice',
  age: 25
});
</script>

<template>
  <div>
    <h2>ref: for primitives</h2>
    <p>Count (ref): {{ count }}</p>
    <button @click="count++">Increment ref</button>
    <p><i>Use <b>ref</b> when you need a single reactive value.</i></p>

    <h2>reactive: for objects</h2>
    <p>User name: {{ user.name }}</p>
    <p>User age: {{ user.age }}</p>
    <button @click="user.age++">Increment age</button>
    <button @click="user.name = user.name === 'Alice' ? 'Bob' : 'Alice'">Toggle name</button>
    <p><i>Use <b>reactive</b> when you need a reactive object with multiple properties.</i></p>
  </div>
</template>

<style scoped>
</style>
