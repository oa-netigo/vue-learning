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

<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue'

const counter = ref(0)
const logs = ref([])
const startTime = ref(0)

// Hilfsfunktion zum Loggen
function addLog(message) {
  const timestamp = new Date().toLocaleTimeString()
  logs.value.push(`${timestamp}: ${message}`)
  console.log(`[Lifecycle] ${message}`)
}

// CREATION PHASE
console.log('1. Component Script Setup - Komponente wird initialisiert')
addLog('Component Setup - Script wird ausgeführt')
startTime.value = Date.now()

// MOUNTING PHASE
onBeforeMount(() => {
  addLog('onBeforeMount - Vor dem ersten Render')
  // DOM noch nicht verfügbar
  // Hier: Letzte Vorbereitungen vor dem Rendern
})

onMounted(() => {
  addLog('onMounted - Nach dem ersten Render')
  // DOM ist jetzt verfügbar
  // Hier: DOM Manipulationen, API Calls, Timer starten
  const loadTime = Date.now() - startTime.value
  addLog(`Komponente geladen in ${loadTime}ms`)
})

// UPDATING PHASE
onBeforeUpdate(() => {
  addLog('onBeforeUpdate - Vor dem Re-Render')
  // Wird vor jedem Re-Render aufgerufen
  // Hier: Zustand vor Update speichern
})

onUpdated(() => {
  addLog('onUpdated - Nach dem Re-Render')
  // DOM wurde aktualisiert
  // Hier: DOM Operationen nach Update
})

// UNMOUNTING PHASE
onBeforeUnmount(() => {
  addLog('onBeforeUnmount - Vor dem Entfernen')
  // Komponente wird gleich entfernt
  // Hier: Cleanup vorbereiten
})

onUnmounted(() => {
  addLog('onUnmounted - Nach dem Entfernen')
  // Komponente wurde entfernt
  // Hier: Event Listeners entfernen, Timer stoppen
  console.log('Komponente wurde unmounted')
})

// Funktionen
function incrementCounter() {
  counter.value++
  // Triggert onBeforeUpdate und onUpdated
}

function clearLogs() {
  logs.value = []
}

// Simuliere API Call
onMounted(async () => {
  addLog('Starte API Call...')

  // Simuliere Verzögerung
  await new Promise(resolve => setTimeout(resolve, 1000))

  addLog('API Call beendet')
})
</script>

<template>
  <div>
    <h2>🔄 Lifecycle Hooks im Detail</h2>

    <div class="controls">
      <h3>Interaktion</h3>
      <p>Counter: {{ counter }}</p>
      <button @click="incrementCounter">Counter erhöhen</button>
      <button @click="clearLogs">Logs löschen</button>
    </div>

    <div class="lifecycle-info">
      <h3>Lifecycle Phasen</h3>
      <div class="phases">
        <div class="phase">
          <h4>1. Creation</h4>
          <ul>
            <li>Script Setup</li>
            <li>Reactive Data Setup</li>
          </ul>
        </div>

        <div class="phase">
          <h4>2. Mounting</h4>
          <ul>
            <li>onBeforeMount</li>
            <li>Initial Render</li>
            <li>onMounted</li>
          </ul>
        </div>

        <div class="phase">
          <h4>3. Updating</h4>
          <ul>
            <li>onBeforeUpdate</li>
            <li>Re-Render</li>
            <li>onUpdated</li>
          </ul>
        </div>

        <div class="phase">
          <h4>4. Unmounting</h4>
          <ul>
            <li>onBeforeUnmount</li>
            <li>Cleanup</li>
            <li>onUnmounted</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="logs">
      <h3>Lifecycle Logs ({{ logs.length }})</h3>
      <div class="log-container">
        <div
          v-for="(log, index) in logs"
          :key="index"
          class="log-entry"
        >
          {{ log }}
        </div>
        <div v-if="logs.length === 0" class="no-logs">
          Keine Logs vorhanden
        </div>
      </div>
    </div>

    <div class="use-cases">
      <h3>Typische Use Cases</h3>
      <div class="use-case">
        <h4>onMounted</h4>
        <ul>
          <li>API Calls starten</li>
          <li>DOM Referenzen abrufen</li>
          <li>Event Listeners hinzufügen</li>
          <li>Timer/Intervals starten</li>
        </ul>
      </div>

      <div class="use-case">
        <h4>onUpdated</h4>
        <ul>
          <li>DOM nach Update prüfen</li>
          <li>Scroll Position anpassen</li>
          <li>Plugins re-initialisieren</li>
        </ul>
      </div>

      <div class="use-case">
        <h4>onUnmounted</h4>
        <ul>
          <li>Event Listeners entfernen</li>
          <li>Timer/Intervals stoppen</li>
          <li>WebSocket Verbindungen schließen</li>
          <li>Memory Leaks verhindern</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.controls {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 5px;
  margin: 20px 0;
}

.controls button {
  padding: 8px 15px;
  margin: 5px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.lifecycle-info {
  margin: 20px 0;
}

.phases {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 15px 0;
}

.phase {
  background-color: #e8f5e8;
  padding: 15px;
  border-radius: 5px;
  border-left: 4px solid #42b883;
}

.phase h4 {
  margin: 0 0 10px 0;
  color: #2c3e50;
}

.phase ul {
  margin: 0;
  padding-left: 20px;
}

.logs {
  margin: 20px 0;
}

.log-container {
  background-color: #1e1e1e;
  color: #e6e6e6;
  padding: 15px;
  border-radius: 5px;
  max-height: 300px;
  overflow-y: auto;
  font-family: 'Courier New', monospace;
  font-size: 13px;
}

.log-entry {
  padding: 2px 0;
  border-bottom: 1px solid #333;
}

.log-entry:last-child {
  border-bottom: none;
}

.no-logs {
  color: #888;
  font-style: italic;
  text-align: center;
  padding: 20px;
}

.use-cases {
  margin: 20px 0;
}

.use-case {
  background-color: #f0f8ff;
  padding: 15px;
  border-radius: 5px;
  margin: 10px 0;
  border-left: 4px solid #007bff;
}

.use-case h4 {
  margin: 0 0 10px 0;
  color: #2c3e50;
}

.use-case ul {
  margin: 0;
  padding-left: 20px;
}
</style>
