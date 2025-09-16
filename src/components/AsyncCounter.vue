<script setup>
import { ref, onMounted } from 'vue'

const counter = ref(0)
const isLoading = ref(true)
const step = ref(1)

// Simuliere langsame Komponenten-Initialisierung
onMounted(async () => {
  console.log('AsyncCounter wird geladen...')

  // Simuliere API Call oder schwere Berechnungen
  await new Promise(resolve => setTimeout(resolve, 1500))

  isLoading.value = false
  console.log('AsyncCounter geladen!')
})

function increment() {
  counter.value += step.value
}

function decrement() {
  counter.value -= step.value
}

function reset() {
  counter.value = 0
}
</script>

<template>
  <div class="async-counter">
    <h3>🔢 Async Counter Component</h3>

    <div v-if="isLoading" class="loading">
      <div class="spinner"></div>
      <p>Lade Counter Komponente...</p>
    </div>

    <div v-else class="counter-content">
      <div class="counter-display">
        <span class="counter-value">{{ counter }}</span>
      </div>

      <div class="controls">
        <button @click="decrement" class="btn-decrement">
          -{{ step }}
        </button>

        <button @click="increment" class="btn-increment">
          +{{ step }}
        </button>

        <button @click="reset" class="btn-reset">
          Reset
        </button>
      </div>

      <div class="step-control">
        <label>Schrittgröße:</label>
        <input
          v-model.number="step"
          type="number"
          min="1"
          max="10"
        />
      </div>

      <div class="info">
        <p>✅ Diese Komponente wurde asynchron geladen!</p>
        <p>🚀 Code Splitting in Aktion</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.async-counter {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.loading {
  padding: 40px;
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.counter-content {
  padding: 20px;
}

.counter-display {
  margin: 20px 0;
}

.counter-value {
  font-size: 48px;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.2);
  padding: 20px 30px;
  border-radius: 10px;
  display: inline-block;
  min-width: 120px;
}

.controls {
  margin: 20px 0;
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.controls button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s;
}

.btn-increment {
  background-color: #4caf50;
  color: white;
}

.btn-decrement {
  background-color: #f44336;
  color: white;
}

.btn-reset {
  background-color: #ff9800;
  color: white;
}

.controls button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.step-control {
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.step-control input {
  width: 60px;
  padding: 5px;
  text-align: center;
  border: none;
  border-radius: 3px;
}

.info {
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 5px;
  margin: 20px 0;
}

.info p {
  margin: 5px 0;
}
</style>
