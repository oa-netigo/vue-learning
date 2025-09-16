<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps(['tabData'])

const counter = ref(0)
const timer = ref(null)

onMounted(() => {
  console.log('TabHome mounted')
  // Starte einen Timer
  timer.value = setInterval(() => {
    counter.value++
  }, 1000)
})

onUnmounted(() => {
  console.log('TabHome unmounted')
  // Cleanup Timer
  if (timer.value) {
    clearInterval(timer.value)
  }
})
</script>

<template>
  <div class="tab-content">
    <h3>🏠 Home Tab</h3>
    <p>Willkommen auf der Startseite!</p>

    <div class="content">
      <p>Timer: {{ counter }} Sekunden</p>
      <p>Besuche: {{ tabData?.visitCount || 0 }}</p>
      <p v-if="tabData?.lastVisit">
        Letzter Besuch: {{ tabData.lastVisit }}
      </p>

      <div class="features">
        <h4>Features:</h4>
        <ul>
          <li>Auto-incrementing Timer</li>
          <li>Visit Counter</li>
          <li>Keep-Alive Test</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab-content {
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 5px;
}

.content {
  margin: 15px 0;
}

.features {
  background-color: #e6f3ff;
  padding: 15px;
  border-radius: 5px;
  margin: 15px 0;
}

.features ul {
  margin: 10px 0;
  padding-left: 20px;
}
</style>
