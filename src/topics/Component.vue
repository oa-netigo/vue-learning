/*
 * Was ist eine Komponente ("Component")?
 *
 * Ein Komponent ist ein Teil der Benutzeroberfläche (UI),
 * der seine eigene Logik und sein eigenes Aussehen hat.
 * Ein Komponent kann so klein wie ein Button oder so groß wie eine ganze Seite sein.
 *
 * Komponente in einfachen Worten:
 * Eine Komponente ist wie ein Baustein für deine Website.
 * Stell dir vor, es ist ein kleines, wiederverwendbares Teil deiner Webseite,
 * das du an verschiedenen Stellen leicht einsetzen kannst.
 *
 * Analogie:
 * Komponenten sind wie Lego-Bausteine, die du immer wieder verwenden kannst,
 * um verschiedene Dinge zu bauen.
 */

<script setup>
// Die folgende Zeile importiert die Komponente CallToAction aus src/components/CallToAction.vue.
// Das @ steht für den src-Ordner (Alias), damit du nicht den ganzen Pfad schreiben musst.
import CallToAction from '@/components/CallToAction.vue';
</script>

<template>
  <div class="container-fluid">
    <!-- Header with Info Button -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center">
          <h2 class="mb-0">Vue Components 🧩</h2>
          <button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#componentInfo" aria-controls="componentInfo">
            <i class="bi bi-info-circle me-2"></i>Learn More
          </button>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-8">
        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            <h4 class="card-title mb-0">Live Component Example</h4>
          </div>
          <div class="card-body">
            <p class="mb-3">Here's a reusable component in action:</p>
            <!-- Hier fügen wir die CallToAction-Komponente in die Benutzeroberfläche ein. -->
            <!-- Sie wird wie ein eigenes HTML-Element verwendet und zeigt ihren Inhalt an. -->
            <CallToAction/>
          </div>
        </div>

        <div class="card">
          <div class="card-header bg-info text-white">
            <h4 class="card-title mb-0">Lego-Baustein Analogie 🧱</h4>
          </div>
          <div class="card-body">
            <p>Komponenten sind wie Lego-Bausteine, die du immer wieder verwenden kannst, um verschiedene Dinge zu bauen.</p>
            <div class="alert alert-light">
              <strong>Ein Component kann sein:</strong><br>
              • So klein wie ein Button<br>
              • So groß wie eine ganze Seite<br>
              • Überall wiederverwendbar
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card bg-light">
          <div class="card-header">
            <h5 class="card-title mb-0">Was ist eine Komponente?</h5>
          </div>
          <div class="card-body">
            <p><strong>Ein Component ist ein Teil der Benutzeroberfläche (UI), der seine eigene Logik und sein eigenes Aussehen hat.</strong></p>

            <hr>

            <h6>Vorteile:</h6>
            <ul class="list-unstyled">
              <li class="mb-2">
                <span class="badge bg-success me-2">✓</span>
                <strong>Wiederverwendbar</strong><br>
                <small class="text-muted">Einmal schreiben, überall nutzen</small>
              </li>
              <li class="mb-2">
                <span class="badge bg-success me-2">✓</span>
                <strong>Modular</strong><br>
                <small class="text-muted">Eigene Logik & Styling</small>
              </li>
              <li class="mb-2">
                <span class="badge bg-success me-2">✓</span>
                <strong>Testbar</strong><br>
                <small class="text-muted">Isoliert testbar</small>
              </li>
              <li class="mb-0">
                <span class="badge bg-success me-2">✓</span>
                <strong>Wartbar</strong><br>
                <small class="text-muted">Code-Organisation</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Offcanvas Information Panel -->
    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="componentInfo" aria-labelledby="componentInfoLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="componentInfoLabel">
          <i class="bi bi-info-circle me-2"></i>Vue.js Components
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="row">
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="bi bi-puzzle me-2"></i>What are Components?
                </h6>
              </div>
              <div class="card-body">
                <p><strong>Definition:</strong> Self-contained, reusable pieces of UI with their own logic and styling</p>
                <p><strong>Think of them as:</strong></p>
                <ul class="list-unstyled">
                  <li>🧩 LEGO blocks for your website</li>
                  <li>📦 Encapsulated functionality</li>
                  <li>🔄 Reusable building blocks</li>
                  <li>🎯 Focused, single-purpose elements</li>
                </ul>
                <p><strong>Examples:</strong> Buttons, forms, navigation bars, cards, modals</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="bi bi-star me-2"></i>Key Benefits
                </h6>
              </div>
              <div class="card-body">
                <ul>
                  <li><strong>Reusability:</strong> Write once, use everywhere</li>
                  <li><strong>Maintainability:</strong> Easier to update and debug</li>
                  <li><strong>Testability:</strong> Test components in isolation</li>
                  <li><strong>Modularity:</strong> Organize code into logical units</li>
                  <li><strong>Collaboration:</strong> Team members can work on different components</li>
                  <li><strong>Performance:</strong> Efficient rendering and updates</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="bi bi-gear me-2"></i>Component Structure
                </h6>
              </div>
              <div class="card-body">
                <p><strong>Three main sections:</strong></p>
                <ul class="list-unstyled">
                  <li><code>&lt;script setup&gt;</code> - JavaScript logic</li>
                  <li><code>&lt;template&gt;</code> - HTML structure</li>
                  <li><code>&lt;style&gt;</code> - CSS styling</li>
                </ul>
                <p class="mt-2"><strong>Features:</strong></p>
                <ul>
                  <li>Props for data input</li>
                  <li>Events for communication</li>
                  <li>Slots for flexible content</li>
                  <li>Reactive data management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 mb-3">
            <div class="alert alert-success">
              <i class="bi bi-check-circle me-2"></i>
              <strong>Best Practice:</strong> Keep components small, focused, and single-purpose.
            </div>
          </div>
          <div class="col-lg-6 mb-3">
            <div class="alert alert-info">
              <i class="bi bi-lightbulb me-2"></i>
              <strong>Tip:</strong> Use descriptive names that clearly indicate the component's purpose.
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