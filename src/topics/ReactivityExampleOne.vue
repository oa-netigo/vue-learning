/*
 * Vue.js Reaktivität
 *
 * Reaktivität bedeutet, dass das Framework die Benutzeroberfläche (UI)
 * automatisch aktualisiert, wenn sich die zugrunde liegenden Daten ändern.
 */

 /*
 * reactive()
 *
 * - reactive ist eine Funktion, die verwendet wird, um reaktive Objekte zu erstellen.
 * - Ein reaktives Objekt ist ein Objekt, bei dem Änderungen an seinen Eigenschaften
 *   automatisch erkannt werden und Aktualisierungen in der Benutzeroberfläche auslösen.
 * - Es ist ein Weg, ein Objekt in Vue.js "reaktiv" zu machen.
 * - Kann keine primitiven Datentypen speichern. ❌
 */

<script setup>
// Importiere reactive von Vue, um einen reaktiven Zustand zu erstellen
import { reactive } from 'vue';

// Erstelle ein reaktives Objekt für den Zähler
const counter = reactive({ count: 0 });
</script>

<template>
  <div class="container-fluid">
    <!-- Header with Info Button -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center">
          <h2 class="mb-0">Reactivity with reactive() ⚡</h2>
          <button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#reactiveInfo" aria-controls="reactiveInfo">
            <i class="bi bi-info-circle me-2"></i>Learn More
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content - Focus on Examples -->
    <div class="row">
      <div class="col-md-6">
        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            <h5 class="card-title mb-0">Counter Example</h5>
          </div>
          <div class="card-body text-center">
            <div class="mb-4">
              <span class="display-1 text-primary">{{ counter.count }}</span>
              <p class="text-muted">Current Count</p>
            </div>

            <div class="btn-group" role="group">
              <!-- Ereignis: @click und Ausdruck -->
              <button @click="counter.count++" class="btn btn-success btn-lg">
                <i class="me-2">+</i>Erhöhen
              </button>
              <button @click="counter.count = 0" class="btn btn-secondary">
                Reset
              </button>
              <button @click="counter.count--" class="btn btn-danger btn-lg">
                <i class="me-2">-</i>Verringern
              </button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header bg-info text-white">
            <h5 class="card-title mb-0">Live Code</h5>
          </div>
          <div class="card-body">
            <pre class="bg-light p-3 rounded mb-0"><code>const counter = reactive({ count: {{ counter.count }} })

// Automatische UI Updates bei Änderungen!</code></pre>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card bg-light mb-4">
          <div class="card-header">
            <h5 class="card-title mb-0">Was ist reactive()? 🧠</h5>
          </div>
          <div class="card-body">
            <p><strong>reactive()</strong> erstellt reaktive Objekte, die automatisch UI-Updates auslösen.</p>

            <div class="alert alert-success">
              <h6>✅ Funktioniert mit:</h6>
              <ul class="mb-0">
                <li>Objekten <code>{ }</code></li>
                <li>Arrays <code>[ ]</code></li>
                <li>Maps, Sets</li>
              </ul>
            </div>

            <div class="alert alert-danger">
              <h6>❌ Funktioniert NICHT mit:</h6>
              <ul class="mb-0">
                <li>Primitiven Datentypen</li>
                <li><code>string</code>, <code>number</code>, <code>boolean</code></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card bg-warning bg-opacity-10">
          <div class="card-header bg-warning">
            <h5 class="card-title mb-0">Reaktivität erklärt</h5>
          </div>
          <div class="card-body">
            <p><strong>Reaktivität bedeutet:</strong></p>
            <ul>
              <li>Framework erkennt Datenänderungen</li>
              <li>UI wird automatisch aktualisiert</li>
              <li>Kein manuelles DOM-Management nötig</li>
            </ul>

            <div class="mt-3">
              <small class="text-muted">
                Probiere die Buttons aus und beobachte, wie sich die Anzeige automatisch ändert! ✨
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Offcanvas Information Panel -->
    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="reactiveInfo" aria-labelledby="reactiveInfoLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="reactiveInfoLabel">
          <i class="bi bi-info-circle me-2"></i>reactive() in Vue.js
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="row">
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="bi bi-code-square me-2"></i>What is reactive()?
                </h6>
              </div>
              <div class="card-body">
                <p><strong>Purpose:</strong> Creates reactive objects that automatically update the UI</p>
                <p><strong>Syntax:</strong></p>
                <code>const state = reactive({ count: 0 })</code>
                <p class="mt-2"><strong>Key Features:</strong></p>
                <ul class="list-unstyled">
                  <li>✅ Works with objects and arrays</li>
                  <li>❌ Cannot store primitive types</li>
                  <li>⚡ Automatic change detection</li>
                  <li>🔄 Deep reactivity by default</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="bi bi-gear me-2"></i>How It Works
                </h6>
              </div>
              <div class="card-body">
                <ul>
                  <li><strong>Proxy-based:</strong> Uses JavaScript Proxy to intercept property access</li>
                  <li><strong>Automatic Tracking:</strong> Vue tracks which properties are accessed</li>
                  <li><strong>Change Detection:</strong> Detects when properties are modified</li>
                  <li><strong>UI Updates:</strong> Automatically re-renders components when data changes</li>
                  <li><strong>Deep Reactivity:</strong> Nested objects are also reactive</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="bi bi-lightbulb me-2"></i>When to Use
                </h6>
              </div>
              <div class="card-body">
                <ul>
                  <li><strong>Complex State:</strong> Objects with multiple properties</li>
                  <li><strong>Nested Data:</strong> Objects with nested structures</li>
                  <li><strong>Arrays:</strong> Lists of data that need reactivity</li>
                  <li><strong>Forms:</strong> Form data with multiple fields</li>
                  <li><strong>Settings:</strong> Configuration objects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 mb-3">
            <div class="alert alert-info">
              <i class="bi bi-info-circle me-2"></i>
              <strong>Tip:</strong> Use <code>reactive()</code> for objects and <code>ref()</code> for primitives.
            </div>
          </div>
          <div class="col-lg-6 mb-3">
            <div class="alert alert-success">
              <i class="bi bi-check-circle me-2"></i>
              <strong>Performance:</strong> Vue's reactivity system is highly optimized and efficient.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
pre code {
  font-size: 0.875rem;
}
</style>