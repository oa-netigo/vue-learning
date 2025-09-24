/*
 * Vue.js Reaktivität
 *
 * Reaktivität bedeutet, dass das Framework die Benutzeroberfläche (UI)
 * automatisch aktualisiert, wenn sich die zugrunde liegenden Daten ändern.
 */

 /*
 * reactive()
 *
 * - reactive ist eine Funktion, die verwendet wird, um reaktive Objekte zu erstellen.
 * - Ein reaktives Objekt ist ein Objekt, bei dem Änderungen an seinen Eigenschaften
 *   automatisch erkannt werden und Aktualisierungen in der Benutzeroberfläche auslösen.
 * - Es ist ein Weg, ein Objekt in Vue.js "reaktiv" zu machen.
 * - Kann keine primitiven Datentypen speichern. ❌
 */

<script setup>
// Importiere reactive von Vue, um einen reaktiven Zustand zu erstellen
import { reactive } from 'vue';

// Erstelle ein reaktives Objekt für den Zähler
const counter = reactive({ count: 0 });
</script>

<template>
  <div>
  <h1>Zähler: {{ counter.count }}</h1>

  <!-- Ereignis: @click und Ausdruck -->
  <button @click="counter.count++">Erhöhen</button>
  <button @click="counter.count--">Verringern</button>
  </div>
</template>

<style scoped>
</style>