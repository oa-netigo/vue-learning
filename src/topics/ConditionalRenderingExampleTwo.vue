/*
 * v-show Direktive
 *
 * - Die v-show Direktive wird für bedingtes Rendering verwendet.
 * - Sie steuert die Sichtbarkeit eines Elements basierend auf dem Wahrheitswert
 *   des übergebenen Ausdrucks.
 * - Im Gegensatz zu v-if, das ein Element komplett in den DOM einfügt oder entfernt,
 *   ändert v-show lediglich die CSS-display Eigenschaft, um die Sichtbarkeit zu steuern,
 *   während das Element im DOM bleibt.
 */

<script setup>
import { ref } from "vue";
let isVisible = ref(true);
</script>

<template>
  <div class="container-fluid">
    <!-- Header with Info Button -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center">
          <h2 class="mb-0">Conditional Rendering - v-show 👁️</h2>
          <button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#vshowInfo" aria-controls="vshowInfo">
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
            <h5 class="card-title mb-0">v-show Example</h5>
          </div>
          <div class="card-body">
            <div class="text-center mb-4">
              <div class="alert alert-info" v-show="isVisible">
                <h4 class="mb-2">👋 Hello World!</h4>
                <p class="mb-0">Dieser Absatz wird angezeigt oder versteckt, abhängig vom Wert von isVisible.</p>
              </div>

              <div class="alert alert-warning" v-show="!isVisible">
                <h4 class="mb-2">🙈 Hidden!</h4>
                <p class="mb-0">Das Element ist versteckt, aber noch im DOM vorhanden.</p>
              </div>
            </div>

            <div class="text-center mb-4">
              <button
                @click="isVisible = !isVisible"
                class="btn btn-lg"
                :class="isVisible ? 'btn-danger' : 'btn-success'"
              >
                {{ isVisible ? '👁️ Verstecken' : '👁️ Anzeigen' }}
              </button>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="card bg-light">
                  <div class="card-body">
                    <h6>Current State:</h6>
                    <span class="badge fs-6" :class="isVisible ? 'bg-success' : 'bg-secondary'">
                      isVisible = {{ isVisible }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card bg-light">
                  <div class="card-body">
                    <h6>CSS Display:</h6>
                    <code>{{ isVisible ? 'display: block' : 'display: none' }}</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Offcanvas for Information -->
  <div class="offcanvas offcanvas-bottom" tabindex="-1" id="vshowInfo" aria-labelledby="vshowInfoLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="vshowInfoLabel">
        <i class="bi bi-info-circle me-2"></i>v-show in Vue.js
      </h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="row">
        <div class="col-md-4">
          <h6>🎯 Was ist v-show?</h6>
          <p><strong>v-show</strong> steuert die Sichtbarkeit durch CSS <code>display</code> Eigenschaft. Das Element bleibt immer im DOM.</p>
          <div class="alert alert-info">
            <strong>Funktionsweise:</strong><br>
            • <code>true</code> → <code>display: block</code><br>
            • <code>false</code> → <code>display: none</code>
          </div>
        </div>

        <div class="col-md-4">
          <h6>⚔️ v-show vs v-if:</h6>
          <table class="table table-sm table-bordered">
            <thead class="table-dark">
              <tr>
                <th>Aspekt</th>
                <th>v-show</th>
                <th>v-if</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>DOM</strong></td>
                <td class="text-info">Bleibt im DOM</td>
                <td class="text-warning">Entfernt/Hinzugefügt</td>
              </tr>
              <tr>
                <td><strong>Performance</strong></td>
                <td class="text-success">Schnelle Toggles</td>
                <td class="text-primary">Langsame Toggles</td>
              </tr>
              <tr>
                <td><strong>Initial Cost</strong></td>
                <td class="text-warning">Höher</td>
                <td class="text-success">Niedriger</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="col-md-4">
          <h6>💡 Wann verwenden?</h6>
          <div class="alert alert-success mb-3">
            <strong>✅ v-show verwenden:</strong><br>
            • Häufige Sichtbarkeits-Toggles<br>
            • Element wird oft ein/ausgeblendet<br>
            • Performance bei Toggles wichtig
          </div>
          <div class="alert alert-primary mb-0">
            <strong>✅ v-if verwenden:</strong><br>
            • Seltene Condition-Änderungen<br>
            • Element wird selten gerendert<br>
            • Lazy loading gewünscht
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-12">
          <h6>📋 Code Beispiele:</h6>
          <div class="row">
            <div class="col-md-6">
              <h6>v-show (CSS Toggle):</h6>
              <pre class="bg-light p-3 rounded small"><code>&lt;div v-show="isVisible"&gt;
  Inhalt bleibt im DOM
&lt;/div&gt;

&lt;!-- Resultat: --&gt;
&lt;div style="display: none"&gt;...&lt;/div&gt;</code></pre>
            </div>
            <div class="col-md-6">
              <h6>v-if (DOM Toggle):</h6>
              <pre class="bg-light p-3 rounded small"><code>&lt;div v-if="isVisible"&gt;
  Element wird entfernt/hinzugefügt
&lt;/div&gt;

&lt;!-- Resultat: --&gt;
&lt;!-- Element nicht im DOM --&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

