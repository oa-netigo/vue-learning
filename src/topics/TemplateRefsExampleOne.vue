/*
 * Template Refs
 *
 * - Ein Template Ref ist eine Möglichkeit, eine Referenz auf eine Kind-Komponente,
 *   ein Element oder ein DOM-Element innerhalb eines Templates zu erstellen.
 *
 * - Dadurch kann man direkt in der Komponenten-Logik auf das referenzierte Objekt
 *   zugreifen und es manipulieren.
 *
 * - Häufig verwendet, um mit Kind-Komponenten zu interagieren,
 *   imperative Aktionen auszulösen oder auf Eigenschaften und Methoden
 *   von DOM-Elementen zuzugreifen.
 */

<script setup>
import { onMounted, ref, computed } from "vue";
const myRef = ref(null);
const currentValue = ref("");

// onMounted ist ein Lifecycle-Hook, der eine Funktion ausführt, sobald die Komponente in den DOM gerendert wurde.
onMounted(() => {
  console.log(myRef.value);
  myRef.value.focus();
  myRef.value.value = "something";
  currentValue.value = "something";

  // Event listener for input changes
  myRef.value.addEventListener('input', (e) => {
    currentValue.value = e.target.value;
  });
});

// Computed property for element info
const elementInfo = computed(() => {
  return myRef.value ? `${myRef.value.tagName.toLowerCase()} element` : 'Not mounted yet';
});

// Methods for button interactions
const focusInput = () => {
  if (myRef.value) {
    myRef.value.focus();
  }
};

const clearInput = () => {
  if (myRef.value) {
    myRef.value.value = "";
    currentValue.value = "";
  }
};

const fillInput = () => {
  if (myRef.value) {
    myRef.value.value = "Hello Vue!";
    currentValue.value = "Hello Vue!";
  }
};

const selectInput = () => {
  if (myRef.value) {
    myRef.value.select();
  }
};
</script>

<template>
  <div class="container-fluid">
    <!-- Header with Info Button -->
    <div class="row">
      <div class="col-12 d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 class="mb-1">Template Refs 🎯</h2>
          <p class="text-muted mb-0">Direkte DOM-Element Referenzen in Vue</p>
        </div>
        <button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasInfo" aria-controls="offcanvasInfo">
          <i class="me-1">ℹ️</i> Info & Erklärung
        </button>
      </div>
    </div>

    <!-- Main Content - Focus on Examples -->
    <div class="row">
      <div class="col-md-8 mx-auto">
        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            <h5 class="card-title mb-0">Interactive Template Ref Example</h5>
          </div>
          <div class="card-body">
            <div class="mb-4">
              <label for="refInput" class="form-label">Input mit Template Ref:</label>
              <input
                id="refInput"
                type="text"
                placeholder="Enter Your Name"
                ref="myRef"
                class="form-control form-control-lg"
              />
              <small class="form-text text-muted">
                Dieses Input wird automatisch fokussiert und mit "something" gefüllt beim Component Mount
              </small>
            </div>

            <div class="d-grid gap-2">
              <button @click="focusInput" class="btn btn-success">
                🎯 Focus Input
              </button>
              <button @click="clearInput" class="btn btn-warning">
                🗑️ Clear Input
              </button>
              <button @click="fillInput" class="btn btn-info">
                ✏️ Fill with "Hello Vue!"
              </button>
              <button @click="selectInput" class="btn btn-secondary">
                📝 Select All Text
              </button>
            </div>

            <div class="mt-4">
              <div class="alert alert-light">
                <strong>Current Input Value:</strong> <code>{{ currentValue }}</code><br>
                <strong>Element Type:</strong> <code>{{ elementInfo }}</code>
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
      <h5 class="offcanvas-title" id="offcanvasInfoLabel">Template Refs - DOM-Element Zugriff</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="row">
        <div class="col-md-4">
          <h6>🎯 Was sind Template Refs?</h6>
          <p><strong>Template Refs</strong> ermöglichen direkten Zugriff auf DOM-Elemente oder Child-Komponenten aus der JavaScript-Logik heraus.</p>
          <div class="alert alert-success">
            <strong>Verwendung für:</strong><br>
            • DOM-Manipulation<br>
            • Fokus-Management<br>
            • Scroll-Verhalten<br>
            • Third-Party Libraries
          </div>
        </div>

        <div class="col-md-4">
          <h6>🔄 Funktionsweise:</h6>
          <ol class="small">
            <li><strong>Ref erstellen:</strong><br><code>const myRef = ref(null)</code></li>
            <li><strong>Template verknüpfen:</strong><br><code>&lt;input ref="myRef" /&gt;</code></li>
            <li><strong>Zugriff nach Mount:</strong><br><code>myRef.value.focus()</code></li>
          </ol>

          <div class="alert alert-warning">
            <strong>⚠️ Wichtig:</strong><br>
            Refs sind erst nach dem <code>onMounted</code> Hook verfügbar!
          </div>
        </div>

        <div class="col-md-4">
          <h6>💡 Best Practices:</h6>
          <div class="alert alert-primary mb-3">
            <strong>✅ Gut:</strong><br>
            • Fokus-Management<br>
            • Scroll-Verhalten<br>
            • Animation-Libraries<br>
            • Canvas/Video APIs
          </div>
          <div class="alert alert-danger mb-0">
            <strong>❌ Vermeide:</strong><br>
            • Übermäßige DOM-Manipulation<br>
            • State-Management über DOM<br>
            • Ersatz für reaktive Daten
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-12">
          <h6>📋 Code Beispiele:</h6>
          <div class="row">
            <div class="col-md-6">
              <h6>Setup & Template:</h6>
              <pre class="bg-light p-3 rounded small"><code>&lt;script setup&gt;
import { ref, onMounted } from 'vue'

const myRef = ref(null)

onMounted(() => {
  myRef.value.focus()
})
&lt;/script&gt;</code></pre>
            </div>
            <div class="col-md-6">
              <h6>Template Usage:</h6>
              <pre class="bg-light p-3 rounded small"><code>&lt;template&gt;
  &lt;input
    ref="myRef"
    placeholder="Auto-focused"
  /&gt;
&lt;/template&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
