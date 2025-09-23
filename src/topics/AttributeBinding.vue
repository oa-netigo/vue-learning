/*
 * Attribut-Bindings
 *
 * Attribut-Binding ist eine Möglichkeit, HTML-Attribute mit Daten
 * in einer Vue-Instanz zu verknüpfen.
 *
 * Syntax:
 * v-bind:attr
 * :attr
 */

<script setup>
const website = "https://vuejs.org";

const imgUrl = "https://placehold.co/600x400";
const imgAlt = "Lorem ipsum";
const imgWidth = 600;
const imgHeight = 400;
</script>

<template>
  <div class="container-fluid">
    <!-- Header with Info Button -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center">
          <h2 class="mb-0">Attribute Binding 🔗</h2>
          <button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#attributeBindingInfo" aria-controls="attributeBindingInfo">
            <i class="bi bi-info-circle me-2"></i>Learn More
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content - Focus on Examples -->
    <div class="row">
      <div class="col-12">
        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            <h5 class="card-title mb-0">Live Attribute Binding Examples</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6 mb-3">
                <h5>Link Binding</h5>
                <div class="mb-2">
                  <strong>Alte Methode:</strong><br>
                  <!-- attribute binding (alte Methode)-->
                  <a v-bind:href="website" target="_blank" class="btn btn-outline-primary btn-sm">
                    Vue.js (v-bind:href)
                  </a>
                </div>

                <div>
                  <strong>Neue Methode:</strong><br>
                  <!-- attribute binding (neue Methode)-->
                  <a :href="website" target="_blank" class="btn btn-primary btn-sm">
                    Vue.js (:href)
                  </a>
                </div>
              </div>

              <div class="col-md-6 mb-3">
                <h5>Image Binding</h5>
                <div class="card">
                  <img :src="imgUrl" :alt="imgAlt" class="card-img-top" style="max-height: 200px; object-fit: cover;">
                  <div class="card-body p-2">
                    <small class="text-muted">
                      Dimensions: {{ imgWidth }} x {{ imgHeight }}
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div class="alert alert-info">
              <strong>Tipp:</strong> Die Kurzschreibweise <code>:</code> ist gleichbedeutend mit <code>v-bind:</code>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header bg-secondary text-white">
            <h4 class="card-title mb-0">Code Beispiele</h4>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <h6>JavaScript (Script Setup)</h6>
                <pre class="bg-light p-3 rounded"><code>const website = "{{ website }}"
const imgUrl = "{{ imgUrl }}"
const imgAlt = "{{ imgAlt }}"</code></pre>
              </div>
              <div class="col-md-6">
                <h6>Template Syntax</h6>
                <pre class="bg-light p-3 rounded"><code>&lt;a :href="website"&gt;Link&lt;/a&gt;
&lt;img :src="imgUrl" :alt="imgAlt"&gt;</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card bg-light">
          <div class="card-header">
            <h5 class="card-title mb-0">Attribut-Binding</h5>
          </div>
          <div class="card-body">
            <p><strong>Attribut-Binding verknüpft HTML-Attribute mit Vue-Daten</strong></p>

            <hr>

            <h6>Syntax Optionen:</h6>
            <ul class="list-unstyled">
              <li class="mb-2">
                <code class="bg-warning px-2 py-1 rounded">v-bind:attr</code><br>
                <small class="text-muted">Vollständige Syntax</small>
              </li>
              <li class="mb-2">
                <code class="bg-success text-white px-2 py-1 rounded">:attr</code><br>
                <small class="text-muted">Kurzschreibweise (empfohlen)</small>
              </li>
            </ul>

            <hr>

            <h6>Häufige Verwendung:</h6>
            <ul class="list-unstyled">
              <li><span class="badge bg-primary me-2">src</span> Bilder</li>
              <li><span class="badge bg-primary me-2">href</span> Links</li>
              <li><span class="badge bg-primary me-2">class</span> CSS Klassen</li>
              <li><span class="badge bg-primary me-2">style</span> Inline Styles</li>
              <li><span class="badge bg-primary me-2">disabled</span> Form Controls</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Offcanvas Information Panel -->
    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="attributeBindingInfo" aria-labelledby="attributeBindingInfoLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="attributeBindingInfoLabel">
          <i class="bi bi-info-circle me-2"></i>Attribute Binding in Vue.js
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="row">
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="bi bi-code-square me-2"></i>Syntax Options
                </h6>
              </div>
              <div class="card-body">
                <p><strong>Full Syntax:</strong></p>
                <code>v-bind:attribute="value"</code>
                <p class="mt-2"><strong>Shorthand:</strong></p>
                <code>:attribute="value"</code>
                <p class="mt-2"><strong>Examples:</strong></p>
                <ul class="list-unstyled">
                  <li><code>:src="imageUrl"</code></li>
                  <li><code>:href="linkUrl"</code></li>
                  <li><code>:class="cssClass"</code></li>
                  <li><code>:disabled="isDisabled"</code></li>
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
                  <li><strong>Dynamic Values:</strong> Attributes update when data changes</li>
                  <li><strong>JavaScript Expressions:</strong> Supports any valid JavaScript expression</li>
                  <li><strong>Boolean Attributes:</strong> Added/removed based on truthiness</li>
                  <li><strong>Object Syntax:</strong> Bind multiple attributes with objects</li>
                  <li><strong>Reactive Binding:</strong> Automatically updates DOM attributes</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="bi bi-lightbulb me-2"></i>Common Use Cases
                </h6>
              </div>
              <div class="card-body">
                <ul>
                  <li><strong>Image Sources:</strong> Dynamic image URLs</li>
                  <li><strong>Links:</strong> Dynamic href values</li>
                  <li><strong>CSS Classes:</strong> Conditional styling</li>
                  <li><strong>Form Controls:</strong> Dynamic disabled/enabled states</li>
                  <li><strong>Data Attributes:</strong> Custom data attributes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 mb-3">
            <div class="alert alert-success">
              <i class="bi bi-check-circle me-2"></i>
              <strong>Pro Tip:</strong> Use the shorthand <code>:</code> syntax for cleaner, more readable templates.
            </div>
          </div>
          <div class="col-lg-6 mb-3">
            <div class="alert alert-warning">
              <i class="bi bi-exclamation-triangle me-2"></i>
              <strong>Remember:</strong> Attribute binding is one-way - from data to DOM.
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