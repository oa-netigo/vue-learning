/*
 * Bedingtes Rendering (Conditional Rendering)
 *
 * Bedingtes Rendering bezieht sich auf die Möglichkeit,
 * Elemente in der Benutzeroberfläche abhängig von bestimmten Bedingungen
 * oder Ausdrücken anzuzeigen oder auszublenden.
 *
 * Direktiven:
 * - v-if (Bedingung)
 * - v-else-if (Bedingung)
 * - v-else
 */

<script setup>
const isTrue = true;
const isFalse = false;
</script>

<template>
  <div class="container-fluid">
    <!-- Header with Info Button -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center">
          <h2 class="mb-0">Conditional Rendering 🔄</h2>
          <button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#conditionalInfo" aria-controls="conditionalInfo">
            <i class="bi bi-info-circle me-2"></i>Info & Erklärung
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content - Focus on Examples -->
    <div class="row">
      <div class="col-12">
        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            <h5 class="card-title mb-0">Live Example - v-if / v-else-if / v-else</h5>
          </div>
          <div class="card-body">
            <div class="alert alert-success" v-if="isTrue">
              <i class="me-2">✅</i>
              <strong>v-if condition:</strong> Dieser Text erscheint, wenn isTrue wahr ist.
            </div>

            <div class="alert alert-danger" v-else-if="isFalse">
              <i class="me-2">❌</i>
              <strong>v-else-if condition:</strong> Dieser Text erscheint, wenn isFalse wahr ist.
            </div>

            <div class="alert alert-warning" v-else>
              <i class="me-2">❓</i>
              <strong>v-else fallback:</strong> Dieser Text erscheint, wenn keine der Bedingungen wahr ist.
            </div>

            <div class="mt-4">
              <h5>Current Values:</h5>
              <div class="row">
                <div class="col-6">
                  <span class="badge bg-primary me-2">isTrue:</span>
                  <span :class="isTrue ? 'badge bg-success' : 'badge bg-danger'">
                    {{ isTrue }}
                  </span>
                </div>
                <div class="col-6">
                  <span class="badge bg-primary me-2">isFalse:</span>
                  <span :class="isFalse ? 'badge bg-success' : 'badge bg-danger'">
                    {{ isFalse }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Offcanvas Information Panel -->
    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="conditionalInfo" aria-labelledby="conditionalInfoLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="conditionalInfoLabel">
          <i class="bi bi-info-circle me-2"></i>Conditional Rendering in Vue.js
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="row">
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="bi bi-toggle-on me-2"></i>Was ist Conditional Rendering?
                </h6>
              </div>
              <div class="card-body">
                <p><strong>Definition:</strong> Bedingtes Rendering ermöglicht es, Elemente in der Benutzeroberfläche abhängig von bestimmten Bedingungen anzuzeigen oder auszublenden.</p>
                <p><strong>Direktiven:</strong></p>
                <ul class="list-unstyled">
                  <li><code>v-if</code> - Erste Bedingung</li>
                  <li><code>v-else-if</code> - Alternative Bedingung</li>
                  <li><code>v-else</code> - Fallback ohne Bedingung</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="bi bi-gear me-2"></i>Wie funktioniert v-if?
                </h6>
              </div>
              <div class="card-body">
                <ul>
                  <li><strong>DOM-Manipulation:</strong> Elemente werden komplett aus dem DOM entfernt oder hinzugefügt</li>
                  <li><strong>Reihenfolge wichtig:</strong> v-if, dann v-else-if, dann v-else</li>
                  <li><strong>Nur eines gerendert:</strong> Nur das erste zutreffende Element wird angezeigt</li>
                  <li><strong>Lazy Rendering:</strong> Elemente werden nur gerendert wenn nötig</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="bi bi-lightbulb me-2"></i>Wann verwenden?
                </h6>
              </div>
              <div class="card-body">
                <p><strong>v-if verwenden wenn:</strong></p>
                <ul>
                  <li>Elemente seltener gewechselt werden</li>
                  <li>Performance bei Initial-Rendering wichtig ist</li>
                  <li>Komplexere Bedingungen geprüft werden</li>
                </ul>
                <div class="alert alert-warning">
                  <strong>Tipp:</strong> Für häufige Toggles verwende <code>v-show</code> statt <code>v-if</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
