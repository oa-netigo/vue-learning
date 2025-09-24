/*
 * Attribut-Bindings
 *
 * Attribut-Binding ist eine Möglichkeit, HTML-Attribute mit Daten
 * in einer Vue-Instanz zu verknüpfen.
 *
 * Syntax:
 * v-bind:attr
 * :attr
 */

<script setup>
const website = "https://vuejs.org";

const imgUrl = "https://placehold.co/600x400";
const imgAlt = "Lorem ipsum";
const imgWidth = 600;
const imgHeight = 400;
</script>

<template>
  <!-- attribute binding (alte Methode)-->
  <a v-bind:href="website" target="_blank">vuejs</a>

  <br>

  <!-- attribute binding (neue Methode)-->
  <a :href="website" target="_blank">vuejs</a>

  <br>

  <img :src="imgUrl" :alt="imgAlt" :width="imgWidth" :height="imgHeight">
</template>

<style scoped>
</style>