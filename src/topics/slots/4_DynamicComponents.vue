/*
 * Dynamische Komponenten erlauben es, zur Laufzeit zwischen
 * verschiedenen Komponenten zu wechseln.
 */

/*
 * Dynamic Components Features:
 * - component :is="componentName"
 * - Keep-alive für Zustand erhalten
 * - Async Components für Code Splitting
 * - Lazy Loading von Komponenten
 * - Dynamic Imports
 */

<script setup>
import { ref, defineAsyncComponent } from 'vue'

const AsyncCounter = defineAsyncComponent(() =>
  import('../components/AsyncCounter.vue')
)

// State
const showAsyncCounter = ref(false)

function loadAsyncCounter() {
  showAsyncCounter.value = true
}

</script>

<template>
  <div>
    <h1>Dynamic Components</h1>

    <div class="async-section">

      <div class="async-controls">
        <button @click="loadAsyncCounter" class="async-button">
          Async Counter laden
        </button>
      </div>

      <br>

      <div class="async-content">
        <Suspense v-if="showAsyncCounter">
          <template #default>
            <AsyncCounter />
          </template>
          <template #fallback>
            <div class="loading">Loading component...</div>
          </template>
        </Suspense>
        <div v-else class="no-component">
          No async component loaded
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
