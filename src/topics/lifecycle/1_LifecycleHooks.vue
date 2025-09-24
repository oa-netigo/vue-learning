/*
 * Lifecycle Hooks sind Funktionen, die zu bestimmten Zeitpunkten
 * im Lebenszyklus einer Komponente aufgerufen werden.
 */

/*
 * Hauptphasen einer Vue Komponente:
 * 1. Creation (Erstellung)
 * 2. Mounting (DOM Einbindung)
 * 3. Updating (Aktualisierung)
 * 4. Unmounting (Entfernung)
 */

/*
 * Wichtige Lifecycle Hooks:
 * - onBeforeMount: Vor dem ersten Rendern
 * - onMounted: Nach dem ersten Rendern (DOM verfügbar)
 * - onBeforeUpdate: Vor jeder Aktualisierung
 * - onUpdated: Nach jeder Aktualisierung
 * - onBeforeUnmount: Vor dem Entfernen der Komponente
 * - onUnmounted: Nach dem Entfernen der Komponente
 */

/*
* Typische Use Cases:
* onMounted: API Calls, DOM Referenzen, Event Listener, Timer starten
* onUpdated: DOM nach Update prüfen, Scroll Position anpassen, Plugins re-initial
* onUnmounted: Event Listener entfernen, Timer stoppen, WebSocket schließen, Memory Leaks verhindern
*/

<script setup>
import { ref } from 'vue'
import LifecycleDemo from '../components/LifecycleDemo.vue'

const logs = ref([])
const showComponent = ref(true)

// Event Handler für Log Messages von Child Component
function handleLogMessage(message) {
  logs.value.push(message)
}

function unmountComponent() {
  showComponent.value = false
}
</script>

<template>
  <div class="lifecycle-container">
    <div class="main-content">
      <h1>Lifecycle Hooks</h1>

      <LifecycleDemo
        v-if="showComponent"
        @log-message="handleLogMessage"
      />

      <br>

      <div class="controls">
        <button v-if="showComponent" @click="unmountComponent" class="unmount-btn">Komponente unmounten</button>
        <p v-if="!showComponent" class="unmount-info">
          Die Komponente wurde unmounted. Beobachte die Unmount-Hooks in den Logs.
        </p>
      </div>

    </div>

    <div class="logs-sidebar">
      <div class="sidebar-content logs-content">
        <h3>Lifecycle Logs</h3>
        <div class="log-container">
          <div
            v-for="(log, index) in logs"
            :key="index"
            class="log-entry"
          >
            {{ log }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lifecycle-container {
  display: flex;
  gap: 20px;
}

.main-content {
  flex: 1;
  max-width: calc(50%);
  min-width: 0;
}
</style>
