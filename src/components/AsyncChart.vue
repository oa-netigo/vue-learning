<script setup>
import { ref, onMounted, reactive } from 'vue'

const isLoading = ref(true)
const error = ref(null)
const chartData = reactive({
  labels: [],
  values: [],
  colors: []
})

// Simuliere Chart Bibliothek laden und Daten fetchen
onMounted(async () => {
  try {
    console.log('AsyncChart wird geladen...')

    // Simuliere laden einer Chart-Bibliothek
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Simuliere API Call für Chart Daten
    const data = await fetchChartData()

    chartData.labels = data.labels
    chartData.values = data.values
    chartData.colors = data.colors

    isLoading.value = false
    console.log('AsyncChart geladen!')

  } catch (err) {
    error.value = 'Fehler beim Laden der Chart Daten'
    isLoading.value = false
  }
})

async function fetchChartData() {
  // Simuliere API Verzögerung
  await new Promise(resolve => setTimeout(resolve, 1000))

  return {
    labels: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun'],
    values: [65, 59, 80, 81, 56, 55],
    colors: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#4bc0c0', '#ff9f40']
  }
}

function refreshData() {
  isLoading.value = true
  error.value = null

  // Neue Daten generieren
  setTimeout(() => {
    chartData.values = chartData.values.map(() =>
      Math.floor(Math.random() * 100)
    )
    isLoading.value = false
  }, 1000)
}

function getBarHeight(value) {
  const maxValue = Math.max(...chartData.values)
  return (value / maxValue) * 200 + 'px'
}
</script>

<template>
  <div class="async-chart">
    <h3>📊 Async Chart Component</h3>

    <div v-if="isLoading" class="loading">
      <div class="loading-bars">
        <div class="bar" v-for="i in 6" :key="i"></div>
      </div>
      <p>Lade Chart Daten...</p>
    </div>

    <div v-else-if="error" class="error">
      <p>❌ {{ error }}</p>
      <button @click="refreshData">Erneut versuchen</button>
    </div>

    <div v-else class="chart-content">
      <div class="chart-container">
        <div class="chart">
          <div
            v-for="(value, index) in chartData.values"
            :key="chartData.labels[index]"
            class="chart-bar"
            :style="{
              height: getBarHeight(value),
              backgroundColor: chartData.colors[index]
            }"
          >
            <span class="bar-value">{{ value }}</span>
          </div>
        </div>

        <div class="chart-labels">
          <div
            v-for="label in chartData.labels"
            :key="label"
            class="label"
          >
            {{ label }}
          </div>
        </div>
      </div>

      <div class="chart-controls">
        <button @click="refreshData" class="refresh-btn">
          🔄 Daten aktualisieren
        </button>
      </div>

      <div class="chart-stats">
        <div class="stat">
          <span class="stat-label">Max:</span>
          <span class="stat-value">{{ Math.max(...chartData.values) }}</span>
        </div>
        <div class="stat">
          <span class="stat-label">Min:</span>
          <span class="stat-value">{{ Math.min(...chartData.values) }}</span>
        </div>
        <div class="stat">
          <span class="stat-label">Avg:</span>
          <span class="stat-value">
            {{ Math.round(chartData.values.reduce((a, b) => a + b, 0) / chartData.values.length) }}
          </span>
        </div>
      </div>

      <div class="info">
        <p>📈 Dynamisches Chart mit simulierten Daten</p>
        <p>⚡ Asynchron geladen für bessere Performance</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.async-chart {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.loading {
  padding: 40px;
}

.loading-bars {
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 5px;
  height: 60px;
  margin-bottom: 20px;
}

.loading-bars .bar {
  width: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 2px;
  animation: loading-bounce 1.4s ease-in-out infinite;
}

.loading-bars .bar:nth-child(1) { animation-delay: -0.32s; }
.loading-bars .bar:nth-child(2) { animation-delay: -0.16s; }
.loading-bars .bar:nth-child(3) { animation-delay: 0s; }
.loading-bars .bar:nth-child(4) { animation-delay: 0.16s; }
.loading-bars .bar:nth-child(5) { animation-delay: 0.32s; }
.loading-bars .bar:nth-child(6) { animation-delay: 0.48s; }

@keyframes loading-bounce {
  0%, 80%, 100% {
    height: 20px;
  }
  40% {
    height: 60px;
  }
}

.error {
  padding: 40px;
}

.error button {
  padding: 10px 20px;
  background-color: white;
  color: #f5576c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 15px;
}

.chart-content {
  padding: 20px;
}

.chart-container {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.chart {
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 15px;
  height: 220px;
  margin-bottom: 10px;
}

.chart-bar {
  width: 40px;
  border-radius: 5px 5px 0 0;
  position: relative;
  transition: all 0.5s ease;
  cursor: pointer;
  display: flex;
  align-items: end;
  justify-content: center;
}

.chart-bar:hover {
  transform: scale(1.1);
  filter: brightness(1.2);
}

.bar-value {
  position: absolute;
  top: -25px;
  font-size: 12px;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.7);
  padding: 2px 6px;
  border-radius: 3px;
  white-space: nowrap;
}

.chart-labels {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.label {
  width: 40px;
  font-size: 12px;
  font-weight: bold;
}

.chart-controls {
  margin: 20px 0;
}

.refresh-btn {
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
}

.refresh-btn:hover {
  background-color: white;
  color: #f5576c;
}

.chart-stats {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
  flex-wrap: wrap;
}

.stat {
  background: rgba(255, 255, 255, 0.2);
  padding: 10px 15px;
  border-radius: 5px;
}

.stat-label {
  font-weight: bold;
  margin-right: 5px;
}

.stat-value {
  font-size: 18px;
  font-weight: bold;
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
