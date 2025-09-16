/*
 * Lifecycle Hooks sind Funktionen, die zu bestimmten Zeitpunkten
 * im Lebenszyklus einer Komponente aufgerufen werden.
 */

/*
 * Hauptphasen einer Vue Komponente:
 * 1. Creation (Erstellung)
 * 2. Mounting (DOM Einbindung)
 * 3. Updating (Aktualisierung)
 * 4. Unmounting (Entfernung)
 */

/*
 * Wichtige Lifecycle Hooks:
 * - onBeforeMount: Vor dem ersten Rendern
 * - onMounted: Nach dem ersten Rendern (DOM verfügbar)
 * - onBeforeUpdate: Vor jeder Aktualisierung
 * - onUpdated: Nach jeder Aktualisierung
 * - onBeforeUnmount: Vor dem Entfernen der Komponente
 * - onUnmounted: Nach dem Entfernen der Komponente
 */

<script setup>
import { ref } from 'vue'
import LifecycleDemo from '../components/LifecycleDemo.vue'

const logs = ref([])
const showComponent = ref(true)

// Event Handler für Log Messages von Child Component
function handleLogMessage(message) {
  logs.value.push(message)
}

function unmountComponent() {
  showComponent.value = false
}
</script>

<template>
  <div class="lifecycle-container">
    <!-- Left Sidebar - Logs -->
    <div class="logs-sidebar">
      <div class="sidebar-content logs-content">
        <h3>📋 Lifecycle Logs ({{ logs.length }})</h3>
        <div class="log-container">
          <div
            v-for="(log, index) in logs"
            :key="index"
            class="log-entry"
          >
            {{ log }}
          </div>
          <div v-if="logs.length === 0" class="no-logs">
            Keine Logs vorhanden
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <h2>🔄 Lifecycle Hooks im Detail</h2>

      <div class="controls">
        <h3>Interaktion</h3>
        <button v-if="showComponent" @click="unmountComponent" class="unmount-btn">Komponente unmounten</button>
        <p v-if="!showComponent" class="unmount-info">
          ⏳ Die Komponente wurde unmounted. Beobachte die Unmount-Hooks in den Logs und in der Browser-Konsole.
        </p>
      </div>

      <!-- Die Demo-Komponente die gemounted/unmounted wird -->
      <LifecycleDemo
        v-if="showComponent"
        @log-message="handleLogMessage"
      />

      <div class="use-cases">
        <h3>Typische Use Cases</h3>
        <div class="use-case">
          <h4>onMounted</h4>
          <ul>
            <li>API Calls starten</li>
            <li>DOM Referenzen abrufen</li>
            <li>Event Listeners hinzufügen</li>
            <li>Timer/Intervals starten</li>
          </ul>
        </div>

        <div class="use-case">
          <h4>onUpdated</h4>
          <ul>
            <li>DOM nach Update prüfen</li>
            <li>Scroll Position anpassen</li>
            <li>Plugins re-initialisieren</li>
          </ul>
        </div>

        <div class="use-case">
          <h4>onUnmounted</h4>
          <ul>
            <li>Event Listeners entfernen</li>
            <li>Timer/Intervals stoppen</li>
            <li>WebSocket Verbindungen schließen</li>
            <li>Memory Leaks verhindern</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Right Sidebar - Lifecycle Phases -->
    <div class="lifecycle-sidebar">
      <div class="sidebar-content">
        <h3>📋 Lifecycle Phasen</h3>
        <div class="phases">
          <div class="phase creation">
            <h4>1. Creation</h4>
            <ul>
              <li>Script Setup</li>
              <li>Reactive Data Setup</li>
            </ul>
          </div>

          <div class="phase mounting">
            <h4>2. Mounting</h4>
            <ul>
              <li>onBeforeMount</li>
              <li>Initial Render</li>
              <li>onMounted</li>
            </ul>
          </div>

          <div class="phase updating">
            <h4>3. Updating</h4>
            <ul>
              <li>onBeforeUpdate</li>
              <li>Re-Render</li>
              <li>onUpdated</li>
            </ul>
          </div>

          <div class="phase unmounting">
            <h4>4. Unmounting</h4>
            <ul>
              <li>onBeforeUnmount</li>
              <li>Cleanup</li>
              <li>onUnmounted</li>
            </ul>
          </div>
        </div>

        <div class="lifecycle-flow">
          <h4>🔄 Flow Diagram</h4>
          <div class="flow-steps">
            <div class="flow-step">Setup</div>
            <div class="arrow">↓</div>
            <div class="flow-step">beforeMount</div>
            <div class="arrow">↓</div>
            <div class="flow-step">Render</div>
            <div class="arrow">↓</div>
            <div class="flow-step">mounted</div>
            <div class="arrow">↓</div>
            <div class="flow-step update-cycle">
              <div>beforeUpdate</div>
              <div class="cycle">⟲</div>
              <div>updated</div>
            </div>
            <div class="arrow">↓</div>
            <div class="flow-step">beforeUnmount</div>
            <div class="arrow">↓</div>
            <div class="flow-step">unmounted</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Container Layout */
.lifecycle-container {
  display: flex;
  gap: 20px;
  min-height: 100vh;
}

.logs-sidebar {
  width: 600px;
  position: sticky;
  top: 20px;
  height: fit-content;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
}

.main-content {
  flex: 1;
  max-width: calc(100% - 670px);
  min-width: 0; /* Wichtig für Flexbox */
}

.lifecycle-sidebar {
  width: 300px;
  position: sticky;
  top: 20px;
  height: fit-content;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
}

.sidebar-content {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.logs-content {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.logs-content h3 {
  color: white;
}

.sidebar-content h3 {
  margin: 0 0 15px 0;
  color: #2c3e50;
  text-align: center;
}

/* Controls */
.controls {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 5px;
  margin: 20px 0;
}

.controls button {
  padding: 8px 15px;
  margin: 5px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.unmount-btn {
  background-color: #dc3545 !important;
  padding: 12px 20px !important;
  font-weight: bold;
}

.unmount-btn:hover {
  background-color: #c82333 !important;
}

.unmount-info {
  background-color: #fff3cd;
  color: #856404;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ffeeba;
  margin: 10px 0;
}

/* Sidebar Phases */
.phases {
  margin: 15px 0;
}

.phase {
  padding: 12px;
  border-radius: 8px;
  margin: 8px 0;
  border-left: 4px solid;
}

.phase.creation {
  background-color: #e8f5e8;
  border-left-color: #28a745;
}

.phase.mounting {
  background-color: #e3f2fd;
  border-left-color: #2196f3;
}

.phase.updating {
  background-color: #fff3e0;
  border-left-color: #ff9800;
}

.phase.unmounting {
  background-color: #ffebee;
  border-left-color: #f44336;
}

.phase h4 {
  margin: 0 0 8px 0;
  color: #2c3e50;
  font-size: 14px;
}

.phase ul {
  margin: 0;
  padding-left: 16px;
  font-size: 13px;
}

.phase li {
  margin: 3px 0;
}

/* Flow Diagram */
.lifecycle-flow {
  margin: 20px 0;
  background: white;
  border-radius: 8px;
  padding: 15px;
}

.lifecycle-flow h4 {
  margin: 0 0 15px 0;
  color: #2c3e50;
  font-size: 14px;
  text-align: center;
}

.flow-steps {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flow-step {
  background-color: #42b883;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  min-width: 100px;
}

.update-cycle {
  background-color: #ff9800;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.cycle {
  font-size: 18px;
  font-weight: bold;
}

.arrow {
  color: #666;
  font-size: 16px;
  margin: 5px 0;
}

/* Logs */
.logs-sidebar .log-container {
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  padding: 15px;
  border-radius: 8px;
  max-height: 400px;
  overflow-y: auto;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  margin: 15px 0;
}

.logs-sidebar .log-entry {
  padding: 3px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  word-break: break-word;
}

.logs-sidebar .log-entry:last-child {
  border-bottom: none;
}

.logs-sidebar .no-logs {
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
  text-align: center;
  padding: 20px;
}

.log-info {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 15px;
  margin: 20px 0;
}

.log-info h4 {
  margin: 0 0 10px 0;
  color: #fff;
  font-size: 14px;
}

.log-info ul {
  margin: 0;
  padding-left: 16px;
  font-size: 12px;
}

.log-info li {
  margin: 5px 0;
  color: rgba(255, 255, 255, 0.9);
}

/* Use Cases */
.use-cases {
  margin: 20px 0;
}

.use-case {
  background-color: #f0f8ff;
  padding: 15px;
  border-radius: 5px;
  margin: 10px 0;
  border-left: 4px solid #007bff;
}

.use-case h4 {
  margin: 0 0 10px 0;
  color: #2c3e50;
}

.use-case ul {
  margin: 0;
  padding-left: 20px;
}

/* Responsive */
@media (max-width: 1400px) {
  .lifecycle-container {
    flex-direction: column;
  }

  .logs-sidebar,
  .lifecycle-sidebar {
    width: 100%;
    position: static;
    max-height: none;
    order: 2;
  }

  .main-content {
    max-width: 100%;
    order: 1;
  }

  .logs-sidebar {
    order: 3;
  }
}

@media (max-width: 768px) {
  .lifecycle-container {
    gap: 10px;
  }

  .sidebar-content {
    padding: 15px;
  }

  .logs-sidebar .log-container {
    max-height: 250px;
  }
}
</style>
