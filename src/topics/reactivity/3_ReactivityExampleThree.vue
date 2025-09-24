/*
 * ref()
 *
 * - ref wird verwendet, um eine reaktive Referenz auf einen Wert zu erstellen.
 * - Im Gegensatz zu reactive (das für Objekte gedacht ist),
 *   ist ref speziell für einzelne Werte vorgesehen.
 * - Du kannst jeden beliebigen Wert speichern. ✅
 */

<script setup>
// Importiere ref von Vue, um einen reaktiven Zustand zu erstellen
import { ref } from 'vue';

// Erstelle eine reaktive Variable für den Zähler
let count = ref(0);

// Erstelle eine reaktive Variable für den Benutzernamen
let username = ref('');

</script>

<template>
  <div>
  <h1>Zähler: {{ count }}</h1>
  <button @click="count++">Zähler erhöhen</button>
  <button @click="count--">Zähler verringern</button>

  <hr>

  <h1>Benutzername: {{ username }}</h1>
  <button @click="username = 'John'">Benutzernamen ändern</button>
  </div>
</template>

<style scoped>
</style>