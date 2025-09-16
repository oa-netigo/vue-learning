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
const startTime = ref(0)
const updateCount = ref(0)

// Props von Parent
const props = defineProps(['parentLogs'])

// Emit um Logs an Parent zu senden
const emit = defineEmits(['log-message'])

// Hilfsfunktion zum Loggen
function addLog(message) {
  const timestamp = new Date().toLocaleTimeString()
  emit('log-message', `${timestamp}: ${message}`);
}

// CREATION PHASE
addLog('Component Setup - Script wird ausgeführt')
startTime.value = Date.now()

// MOUNTING PHASE
onBeforeMount(() => {
  addLog('onBeforeMount - Vor dem ersten Render');
})

onMounted(() => {
  addLog('onMounted - Nach dem ersten Render');
  const loadTime = Date.now() - startTime.value
  addLog(`Komponente geladen in ${loadTime}ms`);
})

// UPDATING PHASE
onBeforeUpdate(() => {
  updateCount.value++
  addLog('onBeforeUpdate - Vor dem Re-Render');
})

onUpdated(() => {
  addLog('onUpdated - Nach dem Re-Render');
})

// UNMOUNTING PHASE
onBeforeUnmount(() => {
  addLog('onBeforeUnmount - Vor dem Entfernen');
})

onUnmounted(() => {
  addLog('onUnmounted - Nach dem Entfernen');
})

// Funktionen
function incrementCounter() {
  counter.value++
}
</script>

<template>
  <div class="counter">
    <p>Counter: {{ counter }}</p>
    <button @click="incrementCounter" class="demo-button">
      Counter erhöhen
    </button>
  </div>
</template>

<style scoped>
.counter {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}
</style>
