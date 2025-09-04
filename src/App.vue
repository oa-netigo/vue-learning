<!-- Javascript logic -->
<script setup>
const message = "Hello World";
const add = (x, y) => x + y;
</script>

<!-- Template structure -->
<template>
  <!-- Text interpolation -->
  <h1>{{ message }}</h1>
  <p>2 + 3 = {{ add(2, 3) }}</p>
</template>

<!-- Component specific styles -->
<style scoped>
h1 {
  color: blue;
}
</style>
