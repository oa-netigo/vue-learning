/*
 * Dynamische Komponenten erlauben es, zur Laufzeit zwischen
 * verschiedenen Komponenten zu wechseln.
 */

/*
 * Dynamic Components Features:
 * - <component :is="componentName">
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
    <h2>🔄 Dynamische & Async Components</h2>

    <!-- Tab Navigation -->
    <div class="tab-navigation">
      <h3>Dynamische Tab Komponenten</h3>
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

    <!-- Code Examples -->
    <div class="code-examples">
      <h3>Implementation Examples</h3>

      <div class="code-example">
        <h4>Dynamische Komponente:</h4>
        <pre><code>&lt;component :is="currentComponent" /&gt;</code></pre>
      </div>

      <div class="code-example">
        <h4>Mit Keep-Alive:</h4>
        <pre><code>&lt;keep-alive&gt;
  &lt;component :is="currentComponent" /&gt;
&lt;/keep-alive&gt;</code></pre>
      </div>

      <div class="code-example">
        <h4>Async Component:</h4>
        <pre><code>const AsyncComp = defineAsyncComponent(() =>
  import('./MyComponent.vue')
)</code></pre>
      </div>

      <div class="code-example">
        <h4>Async mit Loading State:</h4>
        <pre><code>const AsyncComp = defineAsyncComponent({
  loader: () => import('./MyComponent.vue'),
  loadingComponent: LoadingSpinner,
  errorComponent: ErrorComponent,
  delay: 200,
  timeout: 5000
})</code></pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab-navigation {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
  margin: 20px 0;
}

.tabs {
  display: flex;
  gap: 10px;
  margin: 15px 0;
  flex-wrap: wrap;
}

.tab-button {
  padding: 10px 15px;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.tab-button.active {
  background-color: #42b883;
  color: white;
  border-color: #42b883;
}

.tab-button:hover {
  background-color: #e9ecef;
}

.tab-button.active:hover {
  background-color: #369870;
}

.visit-count {
  font-size: 12px;
  opacity: 0.8;
}

.keep-alive-control {
  margin: 15px 0;
}

.keep-alive-control label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.tab-content {
  border: 2px solid #42b883;
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0;
  min-height: 200px;
}

.async-section {
  margin: 30px 0;
}

.async-controls {
  display: flex;
  gap: 10px;
  margin: 15px 0;
  flex-wrap: wrap;
}

.async-button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.async-button:hover {
  background-color: #0056b3;
}

.clear-button {
  padding: 10px 15px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.clear-button:hover {
  background-color: #545b62;
}

.async-content {
  border: 2px solid #007bff;
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0;
  min-height: 150px;
}

.loading {
  text-align: center;
  padding: 20px;
  color: #6c757d;
  font-style: italic;
}

.no-component {
  text-align: center;
  padding: 20px;
  color: #6c757d;
  font-style: italic;
}

.state-info {
  margin: 30px 0;
}

.state-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 15px 0;
}

.state-card {
  background-color: #e8f5e8;
  padding: 15px;
  border-radius: 5px;
  border-left: 4px solid #42b883;
}

.state-card h4 {
  margin: 0 0 10px 0;
  color: #2c3e50;
}

.state-card p {
  margin: 5px 0;
  font-weight: bold;
}

.state-card ul {
  margin: 5px 0;
  padding-left: 20px;
}

.state-card li {
  margin: 5px 0;
}

.state-card small {
  color: #6c757d;
  font-size: 11px;
}

.code-examples {
  margin: 30px 0;
}

.code-example {
  background-color: #1e1e1e;
  color: #e6e6e6;
  padding: 15px;
  border-radius: 5px;
  margin: 15px 0;
}

.code-example h4 {
  margin: 0 0 10px 0;
  color: #42b883;
}

.code-example pre {
  margin: 0;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  overflow-x: auto;
}

.code-example code {
  color: #e6e6e6;
}
</style>
