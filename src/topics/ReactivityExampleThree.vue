/*
 * ref()
 *
 * - ref wird verwendet, um eine reaktive Referenz auf einen Wert zu erstellen.
 * - Im Gegensatz zu reactive (das für Objekte gedacht ist),
 *   ist ref speziell für einzelne Werte vorgesehen.
 * - Du kannst jeden beliebigen Wert speichern. ✅
 */

<script setup>
// Importiere ref von Vue, um einen reaktiven Zustand zu erstellen
import { ref } from 'vue';

// Erstelle eine reaktive Variable für den Zähler
let count = ref(0);

// Erstelle eine reaktive Variable für den Benutzernamen
let username = ref('');

</script>

<template>
  <div class="container-fluid">
    <!-- Header with Info Button -->
    <div class="row">
      <div class="col-12 d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 class="mb-1">Reactivity with ref() 🎯</h2>
          <p class="text-muted mb-0">Reaktive Referenzen für einzelne Werte</p>
        </div>
        <button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasInfo" aria-controls="offcanvasInfo">
          <i class="me-1">ℹ️</i> Info & Erklärung
        </button>
      </div>
    </div>

    <!-- Main Content - Focus on Examples -->
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h5 class="card-title mb-0">Counter Example (ref)</h5>
          </div>
          <div class="card-body text-center">
            <div class="mb-4">
              <span class="display-1 text-primary">{{ count }}</span>
              <p class="text-muted">Current Count</p>
            </div>

            <div class="btn-group" role="group">
              <button @click="count++" class="btn btn-success btn-lg">
                <i class="me-2">+</i>Erhöhen
              </button>
              <button @click="count = 0" class="btn btn-secondary">
                Reset
              </button>
              <button @click="count--" class="btn btn-danger btn-lg">
                <i class="me-2">-</i>Verringern
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-header bg-success text-white">
            <h5 class="card-title mb-0">Username Example (ref)</h5>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label class="form-label">Current Username:</label>
              <div class="alert alert-info">
                <h4 class="mb-0">{{ username || '(empty)' }}</h4>
              </div>
            </div>

            <div class="d-grid gap-2">
              <button @click="username = 'John'" class="btn btn-outline-primary">
                Set to "John"
              </button>
              <button @click="username = 'Jane'" class="btn btn-outline-primary">
                Set to "Jane"
              </button>
              <button @click="username = ''" class="btn btn-outline-secondary">
                Clear Username
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Live Values Display -->
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header bg-info text-white">
            <h5 class="card-title mb-0">Live Values</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <code>count.value = {{ count }}</code>
              </div>
              <div class="col-md-6">
                <code>username.value = "{{ username }}"</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Offcanvas for Information -->
  <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasInfo" aria-labelledby="offcanvasInfoLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasInfoLabel">ref() - Reaktive Referenzen</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="row">
        <div class="col-md-4">
          <h6>🎯 Was ist ref()?</h6>
          <p><strong>ref()</strong> erstellt eine reaktive Referenz für einzelne Werte (primitive und komplexe Typen).</p>
          <div class="alert alert-success">
            <strong>✅ Funktioniert mit:</strong><br>
            • Strings, Numbers, Booleans<br>
            • Arrays, Objects<br>
            • Null, Undefined
          </div>
        </div>

        <div class="col-md-4">
          <h6>🔄 ref() vs reactive():</h6>
          <table class="table table-sm">
            <thead>
              <tr>
                <th>ref()</th>
                <th>reactive()</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-success">✅ Primitive Typen</td>
                <td class="text-danger">❌ Primitive Typen</td>
              </tr>
              <tr>
                <td class="text-success">✅ Objekte</td>
                <td class="text-success">✅ Objekte</td>
              </tr>
              <tr>
                <td>.value Zugriff</td>
                <td>Direkter Zugriff</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="col-md-4">
          <h6>💡 Wichtige Konzepte:</h6>
          <div class="alert alert-warning">
            <strong>⚠️ .value Zugriff:</strong><br>
            In JavaScript: <code>count.value++</code><br>
            In Template: <code>&#123;&#123; count &#125;&#125;</code>
          </div>
          <div class="alert alert-info">
            <strong>🔄 Auto-Unwrapping:</strong><br>
            Vue entpackt refs automatisch in Templates
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-12">
          <h6>📋 Code Beispiele:</h6>
          <div class="row">
            <div class="col-md-6">
              <pre class="bg-light p-3 rounded small"><code>// JavaScript
const count = ref(0)
count.value++  // Increment

// Template
&#123;&#123; count &#125;&#125;  // Auto-unwrapped</code></pre>
            </div>
            <div class="col-md-6">
              <pre class="bg-light p-3 rounded small"><code>// Verschiedene Typen
const message = ref('Hello')
const isActive = ref(true)
const items = ref([1, 2, 3])
const user = ref({ name: 'John' })</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Bootstrap handles the styling */
</style>