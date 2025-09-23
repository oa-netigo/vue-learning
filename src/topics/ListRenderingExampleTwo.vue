/*
 * Warum Keys?
 *
 * - Wenn Vue eine Liste von Elementen rendert, wird ein virtueller DOM genutzt,
 *   um den effizientesten Weg zu finden, den echten DOM zu aktualisieren.
 *   Keys helfen Vue dabei zu identifizieren, welche Elemente sich geändert haben,
 *   hinzugefügt oder entfernt wurden.
 *
 * - Ohne Keys muss Vue möglicherweise die gesamte DOM-Struktur
 *   für jedes Update neu erstellen, was weniger effizient ist.
 */

<script setup>
import { ref } from "vue";
let fruits = ref(["Apfel", "Banane", "Kirsche", "Drachenfrucht"]);
</script>

<template>
  <div class="container-fluid">
    <!-- Header with Info Button -->
    <div class="row">
      <div class="col-12 d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 class="mb-1">List Rendering - Keys 🔑</h2>
          <p class="text-muted mb-0">Warum Keys wichtig sind für Performance</p>
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
          <div class="card-header bg-danger text-white">
            <h5 class="card-title mb-0">❌ Problematisch: Index als Key</h5>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li v-for="(fruit, index) in fruits" :key="index" class="list-group-item d-flex justify-content-between">
                <span>{{ fruit }}</span>
                <code class="text-danger">key="{{ index }}"</code>
              </li>
            </ul>
            <div class="mt-3">
              <button @click="fruits.unshift('Neue Frucht')" class="btn btn-warning btn-sm">
                Am Anfang hinzufügen
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-header bg-success text-white">
            <h5 class="card-title mb-0">✅ Besser: Unique Key</h5>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li v-for="fruit in fruits" :key="fruit" class="list-group-item d-flex justify-content-between">
                <span>{{ fruit }}</span>
                <code class="text-success">key="{{ fruit }}"</code>
              </li>
            </ul>
            <div class="mt-3">
              <button @click="fruits.push('Ananas')" class="btn btn-success btn-sm">
                Am Ende hinzufügen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header bg-info text-white">
            <h5 class="card-title mb-0">Array Manipulation</h5>
          </div>
          <div class="card-body">
            <div class="btn-group mb-3" role="group">
              <button @click="fruits.sort()" class="btn btn-primary">Sort</button>
              <button @click="fruits.reverse()" class="btn btn-warning">Reverse</button>
              <button @click="fruits.splice(1, 1)" class="btn btn-danger">Remove 2nd</button>
              <button @click="fruits = ['Apfel', 'Banane', 'Kirsche', 'Drachenfrucht']" class="btn btn-secondary">Reset</button>
            </div>
            <div class="alert alert-light">
              <strong>Current Array:</strong> <code>{{ JSON.stringify(fruits) }}</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Offcanvas for Information -->
  <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasInfo" aria-labelledby="offcanvasInfoLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasInfoLabel">Keys in v-for - Performance & Korrektheit</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="row">
        <div class="col-md-4">
          <h6>🔑 Warum Keys?</h6>
          <p>Keys helfen Vue dabei zu identifizieren, welche Elemente sich geändert haben, hinzugefügt oder entfernt wurden.</p>
          <div class="alert alert-success">
            <strong>Vorteile:</strong><br>
            • Effiziente DOM-Updates<br>
            • Korrekte Component-States<br>
            • Bessere Performance<br>
            • Animationen funktionieren
          </div>
        </div>

        <div class="col-md-4">
          <h6>❌ Schlechte Keys vs ✅ Gute Keys:</h6>
          <table class="table table-sm table-bordered">
            <thead class="table-dark">
              <tr>
                <th>Schlecht ❌</th>
                <th>Gut ✅</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>:key="index"</code></td>
                <td><code>:key="item.id"</code></td>
              </tr>
              <tr>
                <td><code>:key="Math.random()"</code></td>
                <td><code>:key="item.name"</code></td>
              </tr>
              <tr>
                <td>Instabile Keys</td>
                <td>Stabile, einzigartige Keys</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="col-md-4">
          <h6>🎯 Best Practices:</h6>
          <div class="alert alert-primary mb-3">
            <strong>✅ Verwende:</strong><br>
            • Eindeutige IDs<br>
            • Stabile Eigenschaften<br>
            • Unveränderliche Werte
          </div>
          <div class="alert alert-danger mb-0">
            <strong>❌ Vermeide:</strong><br>
            • Array-Index bei dynamischen Listen<br>
            • Math.random()<br>
            • Nicht-eindeutige Werte
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-12">
          <h6>📋 Probleme ohne korrekte Keys:</h6>
          <div class="row">
            <div class="col-md-6">
              <h6>Problem mit Index-Keys:</h6>
              <pre class="bg-light p-3 rounded small"><code>// Ursprünglich:
[
  { key: 0, value: "Apfel" },
  { key: 1, value: "Banane" }
]

// Nach Einfügen am Anfang:
[
  { key: 0, value: "Orange" },  // Falsche Zuordnung!
  { key: 1, value: "Apfel" },   // Falsche Zuordnung!
  { key: 2, value: "Banane" }
]</code></pre>
            </div>
            <div class="col-md-6">
              <h6>Lösung mit eindeutigen Keys:</h6>
              <pre class="bg-light p-3 rounded small"><code>// Mit eindeutigen Keys:
[
  { key: "orange", value: "Orange" },
  { key: "apfel", value: "Apfel" },
  { key: "banane", value: "Banane" }
]

// Vue kann Elemente korrekt verfolgen
// und effizient aktualisieren</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
