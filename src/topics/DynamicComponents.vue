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
import { ref, defineAsyncComponent, shallowRef } from 'vue'

// Synchrone Komponenten
import TabHome from '../components/TabHome.vue'
import TabAbout from '../components/TabAbout.vue'
import TabContact from '../components/TabContact.vue'

// Async Component - Wird nur geladen wenn benötigt
const AsyncCounter = defineAsyncComponent(() =>
  import('../components/AsyncCounter.vue')
)

// Async Component mit Loading/Error States
const AsyncChart = defineAsyncComponent({
  loader: () => import('../components/AsyncChart.vue'),
  loadingComponent: () => 'Loading Chart...',
  errorComponent: () => 'Failed to load Chart',
  delay: 200, // Zeige Loading nach 200ms
  timeout: 5000 // Timeout nach 5s
})

// State
const currentTab = ref('home')
const currentAsyncComponent = ref(null)
const keepAliveEnabled = ref(true)
const tabData = ref({
  home: { visitCount: 0, lastVisit: null },
  about: { visitCount: 0, lastVisit: null },
  contact: { visitCount: 0, lastVisit: null }
})

// Tab Components Map
const tabComponents = {
  home: TabHome,
  about: TabAbout,
  contact: TabContact
}

// Async Components List
const asyncComponents = [
  { name: 'counter', component: AsyncCounter, title: 'Async Counter' },
  { name: 'chart', component: AsyncChart, title: 'Async Chart' }
]

// Functions
function switchTab(tab) {
  currentTab.value = tab

  // Track tab visits
  tabData.value[tab].visitCount++
  tabData.value[tab].lastVisit = new Date().toLocaleTimeString()
}

function loadAsyncComponent(componentName) {
  const comp = asyncComponents.find(c => c.name === componentName)
  if (comp) {
    currentAsyncComponent.value = comp.component
  }
}

function clearAsyncComponent() {
  currentAsyncComponent.value = null
}

// Dynamic import function
async function loadDynamicComponent(componentPath) {
  try {
    const module = await import(componentPath)
    return module.default
  } catch (error) {
    console.error('Failed to load component:', error)
    return null
  }
}
</script>

<template>
  <div>
    <h1>Dynamic Components</h1>

    <!-- Tab Navigation -->
    <div class="tab-navigation">
      <h2>Dynamische Tab Komponenten</h2>
      <div class="tabs">
        <button
          v-for="tab in Object.keys(tabComponents)"
          :key="tab"
          @click="switchTab(tab)"
          :class="{ active: currentTab === tab }"
          class="tab-button"
        >
          {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
          <span v-if="tabData[tab].visitCount > 0" class="visit-count">
            ({{ tabData[tab].visitCount }})
          </span>
        </button>
      </div>

      <!-- Keep-Alive Toggle -->
      <div class="keep-alive-control">
        <label>
          <input
            type="checkbox"
            v-model="keepAliveEnabled"
          />
          Keep-Alive aktivieren (Zustand erhalten)
        </label>
      </div>

      <!-- Dynamic Component mit/ohne Keep-Alive -->
      <div class="tab-content">
        <keep-alive v-if="keepAliveEnabled">
          <component
            :is="tabComponents[currentTab]"
            :tab-data="tabData[currentTab]"
          />
        </keep-alive>
        <component
          v-else
          :is="tabComponents[currentTab]"
          :tab-data="tabData[currentTab]"
        />
      </div>
    </div>

    <!-- Async Components -->
    <div class="async-section">
      <h3>Async Components (Lazy Loading)</h3>
      <div class="async-controls">
        <button
          v-for="comp in asyncComponents"
          :key="comp.name"
          @click="loadAsyncComponent(comp.name)"
          class="async-button"
        >
          Load {{ comp.title }}
        </button>
        <button @click="clearAsyncComponent" class="clear-button">
          Clear
        </button>
      </div>

      <!-- Async Component Display -->
      <div class="async-content">
        <Suspense v-if="currentAsyncComponent">
          <template #default>
            <component :is="currentAsyncComponent" />
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

    <!-- Component State Info -->
    <div class="state-info">
      <h3>Komponenten Zustand</h3>
      <div class="state-grid">
        <div class="state-card">
          <h4>Aktuelle Tab</h4>
          <p>{{ currentTab }}</p>
        </div>

        <div class="state-card">
          <h4>Keep-Alive</h4>
          <p>{{ keepAliveEnabled ? 'Aktiviert' : 'Deaktiviert' }}</p>
        </div>

        <div class="state-card">
          <h4>Tab Besuche</h4>
          <ul>
            <li v-for="(data, tab) in tabData" :key="tab">
              {{ tab }}: {{ data.visitCount }}x
              <small v-if="data.lastVisit">({{ data.lastVisit }})</small>
            </li>
          </ul>
        </div>

        <div class="state-card">
          <h4>Async Component</h4>
          <p>{{ currentAsyncComponent ? 'Geladen' : 'Nicht geladen' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
