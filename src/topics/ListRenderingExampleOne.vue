/*
 * v-for Direktive
 *
 * - Die v-for Direktive wird verwendet, um über ein Array oder ein Objekt zu iterieren.
 * - Sie rendert ein Template für jedes Element in der Sammlung.
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
          <h2 class="mb-1">List Rendering with v-for 📋</h2>
          <p class="text-muted mb-0">Iteriere über Arrays und Objekte mit der v-for Direktive</p>
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
            <h5 class="card-title mb-0">Basic v-for</h5>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li v-for="fruit in fruits" :key="fruit" class="list-group-item d-flex justify-content-between align-items-center">
                <span>{{ fruit }}</span>
                <span class="badge bg-primary rounded-pill">🍎</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-header bg-success text-white">
            <h5 class="card-title mb-0">v-for with Index</h5>
          </div>
          <div class="card-body">
            <div class="list-group">
              <div v-for="(fruit, index) in fruits" :key="fruit" class="list-group-item d-flex justify-content-between align-items-center">
                <span>{{ index + 1 }}. {{ fruit }}</span>
                <span class="badge bg-success rounded-pill">#{{ index }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Array Content Display -->
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header bg-info text-white">
            <h5 class="card-title mb-0">Array Content (Live)</h5>
          </div>
          <div class="card-body">
            <code>fruits = {{ JSON.stringify(fruits) }}</code>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Offcanvas for Information -->
  <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasInfo" aria-labelledby="offcanvasInfoLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasInfoLabel">v-for Directive - Erklärung & Syntax</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="row">
        <div class="col-md-4">
          <h6>🎯 Was ist v-for?</h6>
          <p>Die v-for Direktive wird verwendet, um über Arrays, Objekte, Strings oder Zahlen zu iterieren und für jedes Element ein Template zu rendern.</p>
        </div>

        <div class="col-md-4">
          <h6>📝 Syntax Optionen:</h6>
          <ul class="list-unstyled small">
            <li><code class="bg-primary text-white px-2 py-1 rounded">v-for="item in items"</code></li>
            <li><code class="bg-success text-white px-2 py-1 rounded">v-for="(item, index) in items"</code></li>
            <li><code class="bg-warning text-dark px-2 py-1 rounded">v-for="(value, key) in object"</code></li>
            <li><code class="bg-info text-white px-2 py-1 rounded">v-for="n in 10"</code></li>
          </ul>
        </div>

        <div class="col-md-4">
          <h6>⚠️ Wichtige Regeln:</h6>
          <div class="alert alert-danger mb-2">
            <strong>:key Attribut:</strong> Immer ein eindeutiges <code>:key</code> verwenden für Performance und korrekte Updates.
          </div>
          <div class="alert alert-info mb-0">
            <strong>Performance:</strong> Vue verfolgt Array-Änderungen und aktualisiert nur betroffene DOM-Elemente.
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-12">
          <h6>� Code Beispiele:</h6>
          <div class="row">
            <div class="col-md-6">
              <pre class="bg-light p-3 rounded small"><code>&lt;li v-for="item in items" :key="item"&gt;
  &#123;&#123; item &#125;&#125;
&lt;/li&gt;</code></pre>
            </div>
            <div class="col-md-6">
              <pre class="bg-light p-3 rounded small"><code>&lt;li v-for="(item, index) in items" :key="item"&gt;
  &#123;&#123; index &#125;&#125;: &#123;&#123; item &#125;&#125;
&lt;/li&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
