/*
 * Event Handling
 *
 * Vue ermöglicht es, DOM-Events mit Methoden oder Inline-Handlern zu verknüpfen.
 *
 * Syntax:
 * v-on:event="handler"
 * @event="handler"
 *
 * Event-Modifier:
 * .prevent  → verhindert Standardverhalten (z. B. Form-Submit)
 * .stop     → stoppt Event-Bubbling
 * .once     → Event wird nur einmal ausgelöst
 */

<script setup>
import { ref } from "vue";

const count = ref(0);

function increment() {
  count.value++;
}

function reset() {
  count.value = 0;
}

function showAlert(message) {
  alert(message);
}
</script>

<template>
  <!-- Standard Event Binding -->
  <button v-on:click="increment">Increment (v-on)</button>

  <br>

  <!-- Kurzschreibweise -->
  <button @click="increment">Increment (@)</button>

  <br>

  <!-- Inline-Handler -->
  <button @click="count++">Increment Inline</button>

  <br>

  <!-- Mehrere Handler -->
  <button @click="increment(); showAlert('Button clicked!')">
    Increment + Alert
  </button>

  <br>

  <!-- Event-Modifier -->
  <form @submit.prevent="showAlert('Form submitted!')">
    <button type="submit">Submit (prevent default)</button>
  </form>

  <br>

  <button @click.once="showAlert('Only once!')">Click Once</button>

  <br>

  <button @click.stop="showAlert('Stopped event!')">Stop Propagation</button>

  <p>Count: {{ count }}</p>

  <button @click="reset">Reset</button>
</template>

<style scoped>
button {
  margin: 4px 0;
}
</style>
