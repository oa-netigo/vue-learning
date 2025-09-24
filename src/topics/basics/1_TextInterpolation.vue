/*
 * Text-Interpolation
 *
 * Text-Interpolation bezieht sich auf den Prozess des dynamischen Bindens von Daten
 * an den Inhalt eines HTML-Elements in einem Template.
 * Sie ermöglicht es, den Wert eines JavaScript-Ausdrucks oder einer Variablen
 * innerhalb des Markups anzuzeigen.
 *
 * Ein Vergleich in Vanilla Javascript: https://codepen.io/om-ab-n/pen/dPYrddv
 */

<script setup>
const message = "Hello World";
const add = (x, y) => x + y;
</script>

<template>
  <!-- Text Interpolation -->
  <h1>{{ message }}</h1>
  <p>2 + 3 = {{ add(2, 3) }}</p>
</template>

<style scoped>
h1 {
  color: blue;
}
</style>