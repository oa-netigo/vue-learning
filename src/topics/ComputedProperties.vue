/*
 * Berechnete Eigenschaften (computed properties)
 *
 * Eine berechnete Eigenschaft ist eine spezielle Variable,
 * die sich automatisch aktualisiert, wenn sich die Daten ändern,
 * von denen sie abhängt.
 *
 * Beispiel: Ein "kleiner Arbeiter" beobachtet Daten und gibt dir immer das neueste Ergebnis.
 */


<script setup>
import { computed, ref, reactive } from "vue";

// Beispiel 1: Zwei Namen zusammenfügen
const firstName = ref('John');
const lastName = ref('Doe');
// fullName wird automatisch aktualisiert, wenn sich firstName oder lastName ändern
const fullName = computed(() => firstName.value + " " + lastName.value);

// Beispiel 2: Eine Zahl verdoppeln
const number = ref(5);
// double wird automatisch neu berechnet, wenn sich number ändert
const double = computed(() => number.value * 2);

// Beispiel 3: Status abhängig von einer Bedingung
const isActive = ref(true);
// status zeigt "Aktiv" oder "Inaktiv" je nach Wert von isActive
const status = computed(() => isActive.value ? 'Aktiv' : 'Inaktiv');

// Beispiel 4: Infos aus einem Objekt
const user = reactive({ name: 'John', age: 25 });
// userInfo wird neu berechnet, wenn sich name oder age ändern
const userInfo = computed(() => user.name + ' ' + user.age);
</script>

<template>
  <div class="container-fluid">
    <!-- Header with Info Button -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center">
          <h2 class="mb-0">Computed Properties 🧮</h2>
          <button class="btn btn-outline-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#computedInfo" aria-controls="computedInfo">
            <i class="bi bi-info-circle me-2"></i>Info & Erklärung
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content - Focus on Examples -->
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h5 class="card-title mb-0">1. Namen zusammenfügen</h5>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label class="form-label">Vorname:</label>
              <div class="d-flex gap-2 align-items-center">
                <span class="badge bg-info fs-6">{{ firstName }}</span>
                <button @click="firstName = 'Peter'" class="btn btn-sm btn-outline-primary">
                  → Peter
                </button>
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label">Nachname:</label>
              <div class="d-flex gap-2 align-items-center">
                <span class="badge bg-info fs-6">{{ lastName }}</span>
                <button @click="lastName = 'Parker'" class="btn btn-sm btn-outline-primary">
                  → Parker
                </button>
              </div>
            </div>

            <div class="alert alert-success">
              <strong>Computed Result:</strong><br>
              <span class="h5">{{ fullName }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-header bg-success text-white">
            <h5 class="card-title mb-0">2. Zahl verdoppeln</h5>
          </div>
          <div class="card-body">
            <div class="text-center mb-3">
              <div class="display-4 text-primary">{{ number }}</div>
              <small class="text-muted">Original Zahl</small>
            </div>

            <div class="btn-group w-100 mb-3" role="group">
              <button @click="number--" class="btn btn-outline-danger">-1</button>
              <button @click="number++" class="btn btn-outline-success">+1</button>
            </div>

            <div class="alert alert-warning text-center">
              <strong>Doubled:</strong><br>
              <span class="h3">{{ double }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-header bg-warning text-dark">
            <h4 class="card-title mb-0">3. Status Toggle</h4>
          </div>
          <div class="card-body">
            <div class="text-center mb-3">
              <span
                class="badge fs-4"
                :class="isActive ? 'bg-success' : 'bg-secondary'"
              >
                {{ status }}
              </span>
            </div>

            <button
              @click="isActive = !isActive"
              class="btn w-100"
              :class="isActive ? 'btn-outline-danger' : 'btn-outline-success'"
            >
              {{ isActive ? 'Deaktivieren' : 'Aktivieren' }}
            </button>
          </div>
        </div>
      </div>

      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-header bg-info text-white">
            <h4 class="card-title mb-0">4. User Info Object</h4>
          </div>
          <div class="card-body">
            <div class="row mb-3">
              <div class="col-6">
                <label class="form-label">Name:</label>
                <div class="d-flex gap-1 align-items-center">
                  <span class="badge bg-primary">{{ user.name }}</span>
                  <button @click="user.name = 'Bob'" class="btn btn-sm btn-outline-secondary">
                    → Bob
                  </button>
                </div>
              </div>
              <div class="col-6">
                <label class="form-label">Alter:</label>
                <div class="d-flex gap-1 align-items-center">
                  <span class="badge bg-primary">{{ user.age }}</span>
                  <div class="btn-group" role="group">
                    <button @click="user.age--" class="btn btn-sm btn-outline-danger">-</button>
                    <button @click="user.age++" class="btn btn-sm btn-outline-success">+</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="alert alert-light">
              <strong>Computed User Info:</strong><br>
              <code>{{ userInfo }}</code>
            </div>
          </div>
        </div>
      </div>
    </div>



    <!-- Offcanvas Information Panel -->
    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="computedInfo" aria-labelledby="computedInfoLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="computedInfoLabel">
          <i class="bi bi-info-circle me-2"></i>Computed Properties in Vue.js
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="row">
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="bi bi-cpu me-2"></i>Was sind Computed Properties?
                </h6>
              </div>
              <div class="card-body">
                <p><strong>Definition:</strong> Berechnete Eigenschaften sind spezielle Variablen, die sich automatisch aktualisieren, wenn sich ihre Abhängigkeiten ändern.</p>
                <p><strong>Analogie:</strong> Wie ein "kleiner Arbeiter", der Daten beobachtet und dir immer das neueste Ergebnis liefert.</p>
                <p><strong>Beispiele:</strong></p>
                <ul class="list-unstyled">
                  <li>• Vor- und Nachname zusammenfügen</li>
                  <li>• Zahlen automatisch verdoppeln</li>
                  <li>• Status basierend auf Bedingungen</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-header">
                <h6 class="card-title mb-0">
                  <i class="bi bi-gear me-2"></i>Wie funktionieren sie?
                </h6>
              </div>
              <div class="card-body">
                <ol>
                  <li><strong>Abhängigkeiten verfolgen:</strong> Vue beobachtet automatisch alle Daten, die in der computed function verwendet werden</li>
                  <li><strong>Automatische Neuberechnung:</strong> Bei Änderung der Abhängigkeiten wird die Funktion neu ausgeführt</li>
                  <li><strong>Caching:</strong> Das Ergebnis wird zwischengespeichert und nur bei Bedarf neu berechnet</li>
                  <li><strong>UI-Update:</strong> Die Benutzeroberfläche wird automatisch aktualisiert</li>
                </ol>
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
                <p><strong>Verwende Computed Properties wenn:</strong></p>
                <ul>
                  <li>Du Daten basierend auf anderen Daten berechnen möchtest</li>
                  <li>Du Performance durch Caching brauchst</li>
                  <li>Du komplexe Logik im Template vermeiden willst</li>
                </ul>
                <p><strong>Vorteile:</strong></p>
                <ul class="list-unstyled">
                  <li>✅ Automatisches Caching</li>
                  <li>✅ Reaktive Aktualisierung</li>
                  <li>✅ Bessere Performance</li>
                  <li>✅ Sauberer Code</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>