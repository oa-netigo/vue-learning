<script setup>
// Importiere reactive von Vue, um einen reaktiven Zustand zu erstellen
import { reactive } from 'vue';

// Erstelle ein reaktives Objekt für die Person
const person = reactive({
  personalDetails: {
    name: 'John Doe', age: 30
  },
  hobbies: [
    'Lesen', 'Reisen', 'Spielen'
  ]
});

// Funktion zum Ändern des Namens der Person
const changeName = () => {
  person.personalDetails.name = 'Jane Smith';
};

// Funktion zum Ändern der Hobbys der Person
const changeHobbies = () => {
  person.hobbies[0] = 'Kochen';
  person.hobbies[1] = 'Wandern';
};
</script>

<template>
  <div class="container-fluid">
    <!-- Header with Info Button -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center">
          <h2 class="mb-0">Nested Object Reactivity 🎯</h2>
          <button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#nestedReactivityInfo" aria-controls="nestedReactivityInfo">
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
            <h5 class="card-title mb-0">Person Profile - Nested Reactivity</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <div class="card bg-light mb-3">
                  <div class="card-header">
                    <h5 class="mb-0">Personal Details</h5>
                  </div>
                  <div class="card-body">
                    <p class="card-text">
                      <strong>Name:</strong>
                      <span class="badge bg-primary fs-6">{{ person.personalDetails.name }}</span>
                    </p>
                    <p class="card-text">
                      <strong>Alter:</strong>
                      <span class="badge bg-success fs-6">{{ person.personalDetails.age }} Jahre</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card bg-light mb-3">
                  <div class="card-header">
                    <h5 class="mb-0">Hobbies</h5>
                  </div>
                  <div class="card-body">
                    <div class="d-flex flex-wrap gap-1">
                      <span
                        v-for="(hobby, index) in person.hobbies"
                        :key="index"
                        class="badge bg-info"
                      >
                        {{ hobby }}
                      </span>
                    </div>
                    <small class="text-muted">Total: {{ person.hobbies.length }} Hobbies</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-3">
              <h5 class="mb-3">Actions</h5>
              <div class="btn-group-vertical w-100" role="group">
                <div class="btn-group mb-2" role="group">
                  <button @click="person.personalDetails.age += 10" class="btn btn-success">
                    🎂 Alter erhöhen (+10)
                  </button>
                  <button @click="changeName" class="btn btn-warning">
                    👤 Name ändern
                  </button>
                </div>
                <div class="btn-group" role="group">
                  <button @click="changeHobbies" class="btn btn-info">
                    🔄 Hobbys ändern
                  </button>
                  <button @click="person.hobbies.push('Neues Hobby')" class="btn btn-primary">
                    ➕ Hobby hinzufügen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header bg-secondary text-white">
            <h5 class="card-title mb-0">Live Object State</h5>
          </div>
          <div class="card-body">
            <pre class="bg-light p-3 rounded"><code>{{ JSON.stringify(person, null, 2) }}</code></pre>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card bg-light">
          <div class="card-header">
            <h5 class="card-title mb-0">Nested Reactivity 🪆</h5>
          </div>
          <div class="card-body">
            <p><strong>reactive()</strong> macht auch verschachtelte Objekte reaktiv!</p>

            <div class="alert alert-success">
              <h6>✅ Deep Reactivity:</h6>
              <ul class="mb-0 small">
                <li><code>person.personalDetails.name</code></li>
                <li><code>person.hobbies[0]</code></li>
                <li>Alle Ebenen sind reaktiv</li>
              </ul>
            </div>

            <div class="alert alert-info">
              <h6>🔄 Array Operations:</h6>
              <ul class="mb-0 small">
                <li><code>push()</code>, <code>pop()</code></li>
                <li><code>splice()</code>, <code>sort()</code></li>
                <li>Alle mutierenden Methoden</li>
              </ul>
            </div>

            <div class="alert alert-warning">
              <h6>⚡ Performance:</h6>
              <p class="mb-0 small">
                Vue überwacht automatisch alle Änderungen in verschachtelten Strukturen und aktualisiert nur die betroffenen UI-Teile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Offcanvas Information Panel -->
    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="nestedReactivityInfo" aria-labelledby="nestedReactivityInfoLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="nestedReactivityInfoLabel">
          <i class="bi bi-info-circle me-2"></i>Nested Object Reactivity in Vue.js
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="row">
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="bi bi-layers me-2"></i>Deep Reactivity
                </h6>
              </div>
              <div class="card-body">
                <p><strong>What it means:</strong> Vue.js automatically tracks changes in nested objects and arrays</p>
                <p><strong>Example:</strong></p>
                <pre><code>const person = reactive({
  details: { name: 'John' },
  hobbies: ['Reading', 'Gaming']
});</code></pre>
                <p class="mt-2"><strong>Benefits:</strong></p>
                <ul class="list-unstyled">
                  <li>✅ Automatic change detection</li>
                  <li>⚡ Efficient updates</li>
                  <li>🎯 Precise re-rendering</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="bi bi-search me-2"></i>How Vue Tracks Changes
                </h6>
              </div>
              <div class="card-body">
                <ul>
                  <li><strong>Proxy Wrapping:</strong> Every nested object becomes a proxy</li>
                  <li><strong>Property Access:</strong> Tracks when properties are read</li>
                  <li><strong>Property Changes:</strong> Detects when properties are modified</li>
                  <li><strong>Array Mutations:</strong> Monitors array method calls</li>
                  <li><strong>Component Updates:</strong> Triggers re-renders only where needed</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="bi bi-speedometer2 me-2"></i>Performance Benefits
                </h6>
              </div>
              <div class="card-body">
                <ul>
                  <li><strong>Selective Updates:</strong> Only affected components re-render</li>
                  <li><strong>Batch Updates:</strong> Multiple changes are batched together</li>
                  <li><strong>Dependency Tracking:</strong> Precise tracking of what changed</li>
                  <li><strong>Memory Efficient:</strong> Minimal overhead for tracking</li>
                  <li><strong>Lazy Evaluation:</strong> Only compute what's needed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 mb-3">
            <div class="alert alert-success">
              <i class="bi bi-check-circle me-2"></i>
              <strong>Automatic:</strong> No need to manually notify Vue about nested changes!
            </div>
          </div>
          <div class="col-lg-6 mb-3">
            <div class="alert alert-info">
              <i class="bi bi-lightbulb me-2"></i>
              <strong>Deep by Default:</strong> All levels of nesting are automatically reactive.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
pre code {
  font-size: 0.8rem;
  white-space: pre-wrap;
}

.btn-group-vertical .btn-group {
  width: 100%;
}

.btn-group-vertical .btn-group .btn {
  flex: 1;
}
</style>