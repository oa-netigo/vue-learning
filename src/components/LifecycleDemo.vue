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
const updateCount = ref(0)

// Props von Parent
const props = defineProps(['parentLogs'])

// Emit um Logs an Parent zu senden
const emit = defineEmits(['log-message'])

// Hilfsfunktion zum Loggen
function addLog(message) {
  const timestamp = new Date().toLocaleTimeString()
  emit('log-message', `${timestamp}: ${message}`)
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
  updateCount.value++
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

// Simuliere API Call
onMounted(async () => {
  setTimeout(() => {
    addLog('Starte API Call...')
  }, 100)

  // Simuliere Verzögerung
  await new Promise(resolve => setTimeout(resolve, 1000))

  setTimeout(() => {
    addLog('API Call beendet')
  }, 100)
})
</script>

<template>
  <div class="lifecycle-demo">
    <div class="demo-content">
      <h3>📊 Demo Komponente</h3>
      <p>Counter: {{ counter }}</p>
      <p>Updates: {{ updateCount }}</p>
      <button @click="incrementCounter" class="demo-button">
        Counter erhöhen (triggert Update Hooks)
      </button>

      <div class="demo-info">
        <p>✅ Diese Komponente demonstriert alle Lifecycle Hooks</p>
        <p>🔄 Jeder Counter-Click triggert onBeforeUpdate & onUpdated</p>
        <p>🗑️ Der Unmount-Button triggert onBeforeUnmount & onUnmounted</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lifecycle-demo {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.demo-content {
  text-align: center;
}

.demo-button {
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  margin: 10px;
}

.demo-button:hover {
  background-color: white;
  color: #667eea;
}

.demo-info {
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 5px;
  margin: 20px 0;
}

.demo-info p {
  margin: 5px 0;
  font-size: 14px;
}
</style>
