/*
 * Vue ist ein JavaScript-Framework zum Erstellen von Benutzeroberflächen.
 */

/*
 * Vorteile von Vue.js:
 *
 * - Flexibilität
 * - Einfach zu lernen
 * - Komponentenbasiert
 * - Leichtgewichtig
 * - Beliebt
 * - Reaktivität
 * - Ökosystem
 * - Performance
 */


<!-- Javascript Logik -->
<script setup>
</script>

<!-- Template Struktur -->
<template>
  <div class="container-fluid">
    <!-- Header with Info Button -->
    <div class="row">
      <div class="col-12 d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 class="mb-1">Vue.js Learning Start 🚀</h2>
          <p class="text-muted mb-0">Willkommen bei Vue.js - Deine Reise beginnt hier!</p>
        </div>
        <button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasInfo" aria-controls="offcanvasInfo">
          <i class="me-1">ℹ️</i> Info & Erklärung
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <div class="row">
      <div class="col-12">
        <div class="jumbotron bg-primary text-white text-center py-5 rounded mb-4">
          <h1 class="display-4">Hello World 🚀</h1>
          <p class="lead">Welcome to Vue.js Learning!</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Offcanvas for Information -->
  <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasInfo" aria-labelledby="offcanvasInfoLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasInfoLabel">Vue.js - Das Progressive JavaScript Framework</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="row">
        <div class="col-md-4">
          <h6>🎯 Was ist Vue.js?</h6>
          <p><strong>Vue.js</strong> ist ein progressives JavaScript-Framework zum Erstellen von Benutzeroberflächen.</p>
          <div class="alert alert-success">
            <strong>📈 Progressiv bedeutet:</strong><br>
            • Kann schrittweise in bestehende Projekte integriert werden<br>
            • Von einfachen Widgets bis zu komplexen SPAs<br>
            • Du entscheidest, wie viel du nutzen möchtest
          </div>
        </div>

        <div class="col-md-4">
          <h6>🏗️ Architektur & Konzepte:</h6>
          <ul class="list-unstyled small">
            <li><span class="badge bg-primary me-2">🧩</span> <strong>Komponenten:</strong> Wiederverwendbare UI-Bausteine</li>
            <li><span class="badge bg-success me-2">⚡</span> <strong>Reaktivität:</strong> Automatische UI-Updates</li>
            <li><span class="badge bg-info me-2">📝</span> <strong>Templates:</strong> HTML-basierte Syntax</li>
            <li><span class="badge bg-warning text-dark me-2">🎛️</span> <strong>Directives:</strong> v-if, v-for, v-model</li>
          </ul>
        </div>

        <div class="col-md-4">
          <h6>🌟 Warum Vue.js lernen?</h6>
          <div class="row">
            <div class="col-12">
              <div class="alert alert-primary mb-2">
                <strong>🎓 Lernfreundlich:</strong><br>
                Einfache HTML/CSS/JS Kenntnisse reichen für den Start
              </div>
              <div class="alert alert-success mb-2">
                <strong>🚀 Produktiv:</strong><br>
                Schnelle Entwicklung, weniger Boilerplate
              </div>
              <div class="alert alert-info mb-0">
                <strong>📱 Vielseitig:</strong><br>
                Web, Mobile (Ionic), Desktop (Electron)
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-12">
          <h6>📚 Vue.js Ökosystem:</h6>
          <div class="row">
            <div class="col-md-3">
              <div class="card">
                <div class="card-body p-3">
                  <h6 class="card-title">🎯 Vue Router</h6>
                  <p class="card-text small">Single-Page Application Routing</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <div class="card-body p-3">
                  <h6 class="card-title">🗄️ Pinia</h6>
                  <p class="card-text small">State Management Store</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <div class="card-body p-3">
                  <h6 class="card-title">⚡ Vite</h6>
                  <p class="card-text small">Schneller Build Tool</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <div class="card-body p-3">
                  <h6 class="card-title">🎨 Nuxt.js</h6>
                  <p class="card-text small">Full-Stack Framework</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Komponentenspezifische Stile -->
<style scoped>
.jumbotron {
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
}
</style>