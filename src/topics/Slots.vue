/*
 * Was ist ein Slot?
 *
 * - Ein Slot ist wie ein Platzhalter in einer Komponente,
 *   in den man verschiedene Inhalte einfügen kann.
 *
 * - Er ermöglicht die Erstellung wiederverwendbarer Komponenten,
 *   die unterschiedliche Inhalte aufnehmen können,
 *   während eine konsistente Struktur beibehalten wird.
 */

<script setup>
import SlotComponent from '@/components/SlotComponent.vue';
</script>

<template>
  <div class="container-fluid">
    <!-- Header with Info Button -->
    <div class="row">
      <div class="col-12 d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 class="mb-1">Slots 🎯</h2>
          <p class="text-muted mb-0">Platzhalter für dynamische Inhalte in Komponenten</p>
        </div>
        <button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasInfo" aria-controls="offcanvasInfo">
          <i class="me-1">ℹ️</i> Info & Erklärung
        </button>
      </div>
    </div>

    <!-- Main Content - Focus on Examples -->
    <div class="row">
      <div class="col-12">
        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            <h5 class="card-title mb-0">Live Slot Example</h5>
          </div>
          <div class="card-body">
            <div class="alert alert-info mb-3">
              <strong>Parent Component</strong> übergibt Inhalt an <strong>Child Component</strong> durch Slots:
            </div>

            <!-- Slot Component mit dynamischem Inhalt -->
            <SlotComponent>
              <div class="text-center">
                <h3 class="text-primary">🎉 Dynamischer Slot Inhalt!</h3>
                <p class="lead">Dieser Inhalt wird von der Parent-Komponente in den Slot der Child-Komponente eingefügt.</p>
                <div class="btn-group" role="group">
                  <span class="badge bg-success me-2">✅ Flexibel</span>
                  <span class="badge bg-info me-2">🔄 Wiederverwendbar</span>
                  <span class="badge bg-warning text-dark">⚡ Mächtig</span>
                </div>
              </div>
            </SlotComponent>
          </div>
        </div>

        <!-- Multiple Examples -->
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="card">
              <div class="card-header bg-success text-white">
                <h6 class="card-title mb-0">Example 1 - Simple Content</h6>
              </div>
              <div class="card-body">
                <SlotComponent>
                  <h4>Einfacher Titel</h4>
                  <p>Einfache Beschreibung in einem Slot.</p>
                </SlotComponent>
              </div>
            </div>
          </div>

          <div class="col-md-6 mb-4">
            <div class="card">
              <div class="card-header bg-warning text-dark">
                <h6 class="card-title mb-0">Example 2 - Rich Content</h6>
              </div>
              <div class="card-body">
                <SlotComponent>
                  <div class="alert alert-success">
                    <h5>⭐ Rich Content Slot</h5>
                    <ul class="mb-0">
                      <li>Listen</li>
                      <li>Buttons</li>
                      <li>Alles HTML möglich!</li>
                    </ul>
                  </div>
                </SlotComponent>
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
      <h5 class="offcanvas-title" id="offcanvasInfoLabel">Slots - Flexible Komponenten-Inhalte</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="row">
        <div class="col-md-4">
          <h6>🎯 Was sind Slots?</h6>
          <p><strong>Slots</strong> sind Platzhalter in Komponenten, die es ermöglichen, dynamische Inhalte von außen einzufügen.</p>
          <div class="alert alert-success">
            <strong>🎪 Analogie:</strong><br>
            Wie ein Bilderrahmen, in den du verschiedene Bilder einsetzen kannst, aber der Rahmen bleibt gleich.
          </div>
        </div>

        <div class="col-md-4">
          <h6>🔄 Funktionsweise:</h6>
          <div class="text-center mb-3">
            <div class="badge bg-primary mb-2 d-block">Parent Component</div>
            <div class="text-center">⬇️ Inhalt ⬇️</div>
            <div class="badge bg-success mb-2 d-block">Child Component (Slot)</div>
            <div class="text-center">⬇️ Rendering ⬇️</div>
            <div class="badge bg-info d-block">Final Output</div>
          </div>
        </div>

        <div class="col-md-4">
          <h6>✨ Vorteile:</h6>
          <ul class="list-unstyled">
            <li><span class="badge bg-success me-2">✓</span> <strong>Wiederverwendbarkeit:</strong> Gleiche Struktur, verschiedene Inhalte</li>
            <li><span class="badge bg-success me-2">✓</span> <strong>Flexibilität:</strong> Jeder HTML-Inhalt möglich</li>
            <li><span class="badge bg-success me-2">✓</span> <strong>Komponenten-Design:</strong> Saubere Trennung von Struktur und Inhalt</li>
            <li><span class="badge bg-success me-2">✓</span> <strong>Komposition:</strong> Komponenten zusammensetzen</li>
          </ul>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-12">
          <h6>📋 Code Beispiele:</h6>
          <div class="row">
            <div class="col-md-6">
              <h6>Parent Component (Slots.vue):</h6>
              <pre class="bg-light p-3 rounded small"><code>&lt;SlotComponent&gt;
  &lt;h2&gt;Inhalt Titel&lt;/h2&gt;
  &lt;p&gt;Inhalt Beschreibung&lt;/p&gt;
&lt;/SlotComponent&gt;</code></pre>
            </div>
            <div class="col-md-6">
              <h6>Child Component (SlotComponent.vue):</h6>
              <pre class="bg-light p-3 rounded small"><code>&lt;template&gt;
  &lt;div class="wrapper"&gt;
    &lt;slot&gt;&lt;/slot&gt;  &lt;!-- Platzhalter --&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
