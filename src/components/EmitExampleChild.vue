/*
 * Emits (Child → Parent Communication)
 *
 * Mit $emit kann eine Kind-Komponente Events an die Eltern-Komponente senden.
 * Der Elternteil kann diese Events dann abfangen und darauf reagieren.
 *
 * Syntax:
 * defineEmits(['eventName'])
 * emit('eventName', payload)
 */

<script setup>
import { ref } from "vue";

// Definiere erlaubte Events
const emit = defineEmits(['increment', 'reset']);

// Lokaler Counter im Kind (optional, könnte auch nur Buttons senden)
const localCount = ref(0);

function incrementChild() {
  localCount.value++;
  emit('increment', localCount.value);
}

function resetChild() {
  localCount.value = 0;
  emit('reset');
}
</script>

<template>
  <button @click="incrementChild">Increment (emit)</button>
  <button @click="resetChild">Reset (emit)</button>

  <p>Child Count: {{ localCount }}</p>
</template>

<style scoped>
button {
  margin: 4px 0;
}
</style>
