/*
 * Vue Watchers
 *
 * - Watcher ermöglichen es, reaktiv Änderungen an einer bestimmten Eigenschaft
 *   oder einem Ausdruck zu beobachten und eine benutzerdefinierte Logik
 *   auszuführen, wenn sich dieser Wert ändert.
 *
 * - Watcher sind Teil des Reaktivitätssystems von Vue.js
 *   und ermöglichen es dem Framework, den DOM automatisch zu aktualisieren,
 *   wenn sich die zugrunde liegenden Daten ändern.
 */

/*
 * watch( source, callback, options )
 * source
 * - Ref()
 * - Reactive object
 * - Array
 * - Getter Function
 *
 * callback
 * - Die "Callback"-Funktion wird immer dann aufgerufen, wenn sich Daten ändern.
 * - Sie erhält den neuen Wert und den alten Wert als Argumente.
 *
 * options:
 * - immediate
 * - deep
 * - flush
 * - onTrack/onTrigger
 */

<script setup>
import { ref, watch } from "vue";

const message = ref("Hello, Vue!");
const inputText = ref("");

watch(inputText, (newValue, oldValue) => {
  message.value = `You typed: ${newValue}`;
});
</script>

<template>
  <div class="container-fluid">
    <!-- Header with Info Button -->
    <div class="row">
      <div class="col-12 d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 class="mb-1">Vue Watchers 👁️</h2>
          <p class="text-muted mb-0">Beobachte Datenänderungen und führe benutzerdefinierte Logik aus</p>
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
            <h5 class="card-title mb-0">Interactive Watcher Example</h5>
          </div>
          <div class="card-body">
            <div class="mb-4 text-center">
              <div class="alert alert-success">
                <h3 class="mb-0">{{ message }}</h3>
              </div>
            </div>

            <div class="mb-3">
              <label for="textInput" class="form-label">Type something to trigger the watcher:</label>
              <input
                id="textInput"
                v-model="inputText"
                placeholder="Start typing..."
                class="form-control form-control-lg"
              />
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="card bg-light">
                  <div class="card-body">
                    <h6>Current Input:</h6>
                    <code>inputText = "{{ inputText || '(empty)' }}"</code>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card bg-light">
                  <div class="card-body">
                    <h6>Watcher Result:</h6>
                    <code>message = "{{ message }}"</code>
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
  <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasInfo" aria-labelledby="offcanvasInfoLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasInfoLabel">Vue Watchers - Reaktive Datenbeobachtung</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="row">
        <div class="col-md-4">
          <h6>🎯 Was sind Watchers?</h6>
          <p><strong>Watchers</strong> beobachten Änderungen an reaktiven Daten und führen Seiteneffekte aus, wenn sich diese Daten ändern.</p>
          <div class="alert alert-success">
            <strong>Verwendung für:</strong><br>
            • API Calls<br>
            • DOM Manipulationen<br>
            • Logging/Debugging<br>
            • Validation
          </div>
        </div>

        <div class="col-md-4">
          <h6>📡 Watch Sources:</h6>
          <ul class="list-unstyled small">
            <li><span class="badge bg-primary me-2">ref()</span> Reactive Reference</li>
            <li><span class="badge bg-success me-2">reactive()</span> Reactive Object</li>
            <li><span class="badge bg-warning text-dark me-2">Array</span> Multiple Sources</li>
            <li><span class="badge bg-info me-2">Getter</span> Function</li>
          </ul>

          <h6 class="mt-3">⚙️ Callback Parameters:</h6>
          <ul class="list-unstyled small">
            <li><code class="bg-success text-white px-2 py-1 rounded">newValue</code> - Neuer Wert</li>
            <li><code class="bg-danger text-white px-2 py-1 rounded">oldValue</code> - Alter Wert</li>
          </ul>
        </div>

        <div class="col-md-4">
          <h6>🔧 Watcher Optionen:</h6>
          <table class="table table-sm">
            <tbody>
              <tr>
                <td><code>immediate</code></td>
                <td>Sofort beim Setup ausführen</td>
              </tr>
              <tr>
                <td><code>deep</code></td>
                <td>Tiefe Objektüberwachung</td>
              </tr>
              <tr>
                <td><code>flush</code></td>
                <td>Timing der Ausführung</td>
              </tr>
            </tbody>
          </table>

          <div class="alert alert-warning">
            <h6>⚠️ Wichtig:</h6>
            <p class="mb-0 small">Watchers sollten sparsam verwendet werden. Für berechnete Werte sind <strong>Computed Properties</strong> oft die bessere Wahl.</p>
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-12">
          <h6>📋 Code Beispiele:</h6>
          <div class="row">
            <div class="col-md-6">
              <h6>Basic Watcher:</h6>
              <pre class="bg-light p-3 rounded small"><code>watch(inputText, (newVal, oldVal) => {
  console.log(`Changed: ${oldVal} → ${newVal}`)
  // Seiteneffekte hier
})</code></pre>
            </div>
            <div class="col-md-6">
              <h6>Watcher mit Optionen:</h6>
              <pre class="bg-light p-3 rounded small"><code>watch(
  () => user.name,  // Getter function
  (newName) => saveToAPI(newName),
  { immediate: true, deep: true }
)</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>