/*
 * Composables sind wiederverwendbare Funktionen, die Vue's Composition API nutzen.
 * Sie ermöglichen es, stateful logic zwischen Komponenten zu teilen.
 */
<template>
  <div class="container-fluid">
    <!-- Header with Info Button -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center">
          <h2 class="mb-0">Vue Composables 🔧</h2>
          <button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#composablesInfo" aria-controls="composablesInfo">
            <i class="bi bi-info-circle me-2"></i>Learn More
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content - Focus on Examples -->

    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title mb-0">Counter Composable</h4>
          </div>
          <div class="card-body">
            <p class="h5 mb-3">Count: <span class="badge bg-primary">{{ count }}</span></p>
            <div class="btn-group" role="group">
              <button @click="increment" class="btn btn-success">+1</button>
              <button @click="decrement" class="btn btn-warning">-1</button>
              <button @click="reset" class="btn btn-secondary">Reset</button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title mb-0">Mouse Position Composable</h4>
          </div>
          <div class="card-body">
            <p class="mb-2">Mouse Position: x={{ x }}, y={{ y }}</p>
            <small class="text-muted">Bewege die Maus über das Fenster</small>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title mb-0">Local Storage Composable</h4>
          </div>
          <div class="card-body">
            <div class="input-group mb-3">
              <input
                v-model="name"
                placeholder="Dein Name (wird gespeichert)"
                class="form-control"
              >
              <button @click="clearName" class="btn btn-outline-danger">Clear</button>
            </div>
            <div v-if="name" class="alert alert-success">
              Hallo <strong>{{ name }}</strong>! (Gespeichert im LocalStorage)
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title mb-0">Fetch Data Composable</h4>
          </div>
          <div class="card-body">
            <button @click="fetchUser" class="btn btn-primary mb-3">Fetch Random User</button>

            <div v-if="loading" class="text-center">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>

            <div v-else-if="error" class="alert alert-danger">
              Error: {{ error }}
            </div>

            <div v-else-if="userData" class="text-center">
              <h5>{{ userData.name.first }} {{ userData.name.last }}</h5>
              <img :src="userData.picture.medium" :alt="userData.name.first" class="rounded-circle mb-2" />
              <p class="text-muted mb-0">{{ userData.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-12">
        <div class="card bg-light">
          <div class="card-header">
            <h4 class="card-title mb-0">Was sind Composables?</h4>
          </div>
          <div class="card-body">
            <ul class="list-unstyled">
              <li class="mb-2"><span class="badge bg-success me-2">✓</span><strong>Wiederverwendbar:</strong> Logic kann zwischen Komponenten geteilt werden</li>
              <li class="mb-2"><span class="badge bg-success me-2">✓</span><strong>Testbar:</strong> Composables können isoliert getestet werden</li>
              <li class="mb-2"><span class="badge bg-success me-2">✓</span><strong>Reaktiv:</strong> Nutzen Vue's Reaktivitätssystem</li>
              <li class="mb-0"><span class="badge bg-success me-2">✓</span><strong>Konvention:</strong> Beginnen meist mit "use" (z.B. useCounter, useMouse)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Offcanvas Information Panel -->
    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="composablesInfo" aria-labelledby="composablesInfoLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="composablesInfoLabel">
          <i class="bi bi-info-circle me-2"></i>Vue.js Composables
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="row">
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="bi bi-puzzle-fill me-2"></i>What are Composables?
                </h6>
              </div>
              <div class="card-body">
                <p><strong>Definition:</strong> Reusable functions that encapsulate and share stateful logic using Vue's Composition API</p>
                <p><strong>Convention:</strong> Function names start with "use" (e.g., useCounter, useFetch)</p>
                <p><strong>Benefits:</strong></p>
                <ul class="list-unstyled">
                  <li>🔄 Reusable logic</li>
                  <li>🎯 Better organization</li>
                  <li>🧪 Easier testing</li>
                  <li>📦 Encapsulation</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="bi bi-gear me-2"></i>How They Work
                </h6>
              </div>
              <div class="card-body">
                <ul>
                  <li><strong>Composition API:</strong> Use reactive, ref, computed, etc.</li>
                  <li><strong>Return Values:</strong> Expose reactive state and methods</li>
                  <li><strong>Side Effects:</strong> Handle cleanup with onUnmounted</li>
                  <li><strong>Parameters:</strong> Accept configuration options</li>
                  <li><strong>Lifecycle:</strong> Access component lifecycle hooks</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="bi bi-lightbulb me-2"></i>Common Examples
                </h6>
              </div>
              <div class="card-body">
                <ul>
                  <li><strong>useCounter:</strong> Counter state and methods</li>
                  <li><strong>useFetch:</strong> HTTP requests with loading states</li>
                  <li><strong>useMouse:</strong> Mouse position tracking</li>
                  <li><strong>useLocalStorage:</strong> Browser storage integration</li>
                  <li><strong>useAuth:</strong> Authentication logic</li>
                  <li><strong>useForm:</strong> Form validation and handling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 mb-3">
            <div class="alert alert-success">
              <i class="bi bi-check-circle me-2"></i>
              <strong>Best Practice:</strong> Keep composables focused on a single responsibility.
            </div>
          </div>
          <div class="col-lg-6 mb-3">
            <div class="alert alert-info">
              <i class="bi bi-lightbulb me-2"></i>
              <strong>Tip:</strong> Composables make it easy to share logic between multiple components.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCounter } from '../composables/useCounter'
import { useMouse } from '../composables/useMouse'
import { useLocalStorage } from '../composables/useLocalStorage'
import { useFetch } from '../composables/useFetch'

// Counter Composable verwenden
const { count, increment, decrement, reset } = useCounter()

// Mouse Position Composable verwenden
const { x, y } = useMouse()

// Local Storage Composable verwenden
const { value: storedName, setValue: setName, clear: clearName } = useLocalStorage('userName', '')
const name = computed({
  get: () => storedName.value,
  set: (val) => setName(val)
})

// Fetch Composable verwenden
const { data: userData, loading, error, execute } = useFetch()

// Funktion zum Laden eines Random Users
const fetchUser = () => {
  execute('https://randomuser.me/api/')
}

// Automatisch einen User beim Mount laden
fetchUser()
</script>

<style scoped>
/* Minimal custom styles - Bootstrap handles the rest */
</style>
