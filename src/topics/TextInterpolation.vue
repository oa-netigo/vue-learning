/*
 * Text-Interpolation
 *
 * Text-Interpolation bezieht sich auf den Prozess des dynamischen Bindens von Daten
 * an den Inhalt eines HTML-Elements in einem Template.
 * Sie ermöglicht es, den Wert eines JavaScript-Ausdrucks oder einer Variablen
 * innerhalb des Markups anzuzeigen.
 *
 * Ein Vergleich in Vanilla Javascript: https://codepen.io/om-ab-n/pen/dPYrddv
 */

<script setup>
const message = "Hello World";
const add = (x, y) => x + y;
</script>

<template>
  <div class="container-fluid">
    <!-- Header with Info Button -->
    <div class="row">
      <div class="col-12 d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 class="mb-1">Text Interpolation 📝</h2>
          <p class="text-muted mb-0">Dynamisches Binden von Daten in Templates</p>
        </div>
        <button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#textInterpolationInfo" aria-controls="textInterpolationInfo">
          <i class="me-1">ℹ️</i> Info & Erklärung
        </button>
      </div>
    </div>

    <!-- Main Content - Focus on Examples -->
    <div class="row">
      <div class="col-12">
        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            <h5 class="card-title mb-0">Live Text Interpolation Examples</h5>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label class="form-label">Message Variable:</label>
              <div class="alert alert-info">
                <h3 class="mb-0">{{ message }}</h3>
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label">Function Call:</label>
              <div class="alert alert-success">
                <p class="mb-0">2 + 3 = <strong>{{ add(2, 3) }}</strong></p>
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label">JavaScript Expression:</label>
              <div class="alert alert-warning">
                <p class="mb-0">Current Time: <strong>{{ new Date().toLocaleTimeString() }}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card bg-light">
          <div class="card-header">
            <h5 class="card-title mb-0">Was ist Text Interpolation?</h5>
          </div>
          <div class="card-body">
            <ul class="list-unstyled">
              <li class="mb-2">
                <span class="badge bg-success me-2">✓</span>
                Dynamisches Binden von Daten
              </li>
              <li class="mb-2">
                <span class="badge bg-success me-2">✓</span>
                JavaScript-Ausdrücke im Template
              </li>
              <li class="mb-2">
                <span class="badge bg-success me-2">✓</span>
                Verwendung von <code>&#123;&#123; &#125;&#125;</code> Syntax
              </li>
              <li class="mb-0">
                <span class="badge bg-success me-2">✓</span>
                Funktionsaufrufe möglich
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Offcanvas Information Panel -->
    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="textInterpolationInfo" aria-labelledby="textInterpolationInfoLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="textInterpolationInfoLabel">
          <i class="bi bi-info-circle me-2"></i>Text Interpolation in Vue.js
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="row">
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="bi bi-code-square me-2"></i>Basic Syntax
                </h6>
              </div>
              <div class="card-body">
                <p><strong>Mustache Syntax:</strong></p>
                <code>&#123;&#123; variable &#125;&#125;</code>
                <p class="mt-2"><strong>Examples:</strong></p>
                <ul class="list-unstyled">
                  <li><code>&#123;&#123; message &#125;&#125;</code></li>
                  <li><code>&#123;&#123; user.name &#125;&#125;</code></li>
                  <li><code>&#123;&#123; count + 1 &#125;&#125;</code></li>
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
                  <li><strong>Reactive Updates:</strong> Automatically updates when data changes</li>
                  <li><strong>JavaScript Expressions:</strong> Supports simple JavaScript expressions</li>
                  <li><strong>HTML Escaping:</strong> Automatically escapes HTML for security</li>
                  <li><strong>One-Way Binding:</strong> Data flows from component to template</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="bi bi-lightbulb me-2"></i>Best Practices
                </h6>
              </div>
              <div class="card-body">
                <ul>
                  <li><strong>Simple Expressions:</strong> Keep expressions simple and readable</li>
                  <li><strong>Avoid Side Effects:</strong> Don't modify data in templates</li>
                  <li><strong>Use Computed:</strong> For complex logic, use computed properties</li>
                  <li><strong>HTML Content:</strong> Use <code>v-html</code> directive for HTML content</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="alert alert-info">
              <i class="bi bi-info-circle me-2"></i>
              <strong>Note:</strong> Text interpolation is the most basic form of data binding in Vue.js.
              It's perfect for displaying simple values and basic expressions in your templates.
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