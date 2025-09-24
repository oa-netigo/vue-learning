/*
 * Vue Watchers
 *
 * - Watcher ermöglichen es, reaktiv Änderungen an einer bestimmten Eigenschaft
 *   oder einem Ausdruck zu beobachten und eine benutzerdefinierte Logik
 *   auszuführen, wenn sich dieser Wert ändert.
 *
 * - Watcher sind Teil des Reaktivitätssystems von Vue.js
 *   und ermöglichen es dem Framework, den DOM automatisch zu aktualisieren,
 *   wenn sich die zugrunde liegenden Daten ändern.
 */

/*
 * watch( source, callback, options )
 * source
 * - Ref()
 * - Reactive object
 * - Array
 * - Getter Function
 *
 * callback
 * - Die "Callback"-Funktion wird immer dann aufgerufen, wenn sich Daten ändern.
 * - Sie erhält den neuen Wert und den alten Wert als Argumente.
 *
 * options:
 * - immediate
 * - deep
 * - flush
 * - onTrack/onTrigger
 */

<script setup>
import { ref, watch } from "vue";

const message = ref("Hello, Vue!");
const inputText = ref("");

watch(inputText, (newValue, oldValue) => {
  message.value = `You typed: ${newValue}`;
});
</script>

<template>
  <h1>{{ message }}</h1>
  <input
    v-model="inputText"
    placeholder="Type something..."
  />
</template>