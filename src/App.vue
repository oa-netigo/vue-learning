<!-- Javascript logic -->
<script setup>
const message = "Hello World";
const add = (x, y) => x + y;

const website = "https://vuejs.org";

const imgUrl = "https://placehold.co/600x400";
const imgAlt = "Lorem ipsum";
const imgWidth = 600;
const imgHeight = 400;
</script>

<!-- Template structure -->
<template>
  <!-- Text interpolation -->
  <h1>{{ message }}</h1>
  <p>2 + 3 = {{ add(2, 3) }}</p>

  <!-- attribute binding (old way)-->
  <a v-bind:href="website" target="_blank">vuejs</a>

  <br>

  <!-- attribute binding (new way)-->
  <a :href="website" target="_blank">vuejs</a>

  <br>

  <img :src="imgUrl" :alt="imgAlt" :width="imgWidth" :height="imgHeight">
</template>

<!-- Component specific styles -->
<style scoped>
h1 {
  color: blue;
}
</style>
