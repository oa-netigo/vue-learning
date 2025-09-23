/*
 * Was sind Props?
 *
 * - Props (Kurzform für „Properties“) sind eine Möglichkeit, Daten
 *   von einer Eltern-Komponente (parent) zu einer Kind-Komponente (child) zu übergeben.
 *
 * - Sie ermöglichen die Kommunikation zwischen Komponenten,
 *   indem die Eltern-Komponente Daten an ihre Kind-Komponenten weitergibt.
 *
 * - Nützlich für die Erstellung wiederverwendbarer und modularer Komponenten.
 */

<script setup>
import CallToActionWithProps from '@/components/CallToActionWithProps.vue';
</script>

<template>
  <div class="container-fluid">
    <!-- Header with Info Button -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center">
          <h2 class="mb-0">Props (Properties) 📦</h2>
          <button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#propsInfo" aria-controls="propsInfo">
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
            <h5 class="card-title mb-0">Live Example - Component mit Props</h5>
          </div>
          <div class="card-body">
            <div class="alert alert-info mb-3">
              <strong>Parent Component übergibt Props an Child Component:</strong>
            </div>

            <!-- Props werden hier von Parent (Props.vue) zu Child (CallToActionWithProps.vue) übergeben -->
            <CallToActionWithProps
              title="Benutzerdefinierter Titel von Props.vue"
              description="Benutzerdefinierte Beschreibung von Props.vue"
              buttonText="Benutzerdefinierter Button-Text von Props.vue"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Offcanvas Information Panel -->
    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="propsInfo" aria-labelledby="propsInfoLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="propsInfoLabel">
          <i class="bi bi-info-circle me-2"></i>Props (Properties) in Vue.js
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="row">
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="bi bi-box-arrow-down me-2"></i>Was sind Props?
                </h6>
              </div>
              <div class="card-body">
                <p><strong>Definition:</strong> Props (Properties) sind eine Möglichkeit, Daten von einer Eltern-Komponente zu einer Kind-Komponente zu übergeben.</p>
                <p><strong>Datenfluss:</strong></p>
                <div class="text-center mb-3">
                  <div class="badge bg-primary mb-2">Parent Component</div>
                  <div>⬇️ Props ⬇️</div>
                  <div class="badge bg-success">Child Component</div>
                </div>
                <p><strong>Eigenschaften:</strong> Props sind read-only in der Child-Komponente.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="bi bi-gear me-2"></i>Wie funktionieren Props?
                </h6>
              </div>
              <div class="card-body">
                <ol>
                  <li><strong>Definition:</strong> Props werden in der Child-Komponente definiert</li>
                  <li><strong>Übergabe:</strong> Parent übergibt Werte als HTML-Attribute</li>
                  <li><strong>Zugriff:</strong> Child kann Props wie normale Variablen verwenden</li>
                  <li><strong>Reaktivität:</strong> Änderungen der Props lösen automatisch Updates aus</li>
                </ol>
                <div class="alert alert-warning">
                  <strong>Wichtig:</strong> Props sollten niemals direkt in der Child-Komponente geändert werden!
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="bi bi-lightbulb me-2"></i>Vorteile von Props
                </h6>
              </div>
              <div class="card-body">
                <ul>
                  <li><strong>Wiederverwendbarkeit:</strong> Komponenten können mit verschiedenen Daten verwendet werden</li>
                  <li><strong>Modulare Architektur:</strong> Klare Trennung von Verantwortlichkeiten</li>
                  <li><strong>One-Way Data Flow:</strong> Predictable Datenfluss von oben nach unten</li>
                  <li><strong>Testbarkeit:</strong> Komponenten können isoliert getestet werden</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
