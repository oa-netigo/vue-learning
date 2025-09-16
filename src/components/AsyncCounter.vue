<script setup>
import { ref, onMounted } from 'vue'

const counter = ref(0)
const isLoading = ref(true)

onMounted(async () => {
  // Simuliere Ladezeit
  await new Promise(resolve => setTimeout(resolve, 1500))
  isLoading.value = false
})

function increment() {
  counter.value ++;
}

function decrement() {
  counter.value --;
}

function reset() {
  counter.value = 0
}
</script>

<template>
  <div class="async-counter">
    <h3>Async Counter Component</h3>

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
          -
        </button>

        <button @click="increment" class="btn-increment">
          +
        </button>

        <button @click="reset" class="btn-reset">
          Reset
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.async-counter {
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.loading {
  padding: 40px;
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid black;
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
