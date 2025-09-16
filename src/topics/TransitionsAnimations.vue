/*
 * Vue bietet eingebaute Komponenten für Transitions und Animationen.
 * Diese machen es einfach, ansprechende UI-Übergänge zu erstellen.
 */

/*
 * Transition Features:
 * - Enter/Leave Transitions
 * - CSS Transitions und Animations
 * - JavaScript Hooks
 * - List Transitions
 * - State Transitions
 */

<script setup>
import { ref } from 'vue'

// State
const show = ref(true)
const items = ref([
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3' }
])
const nextId = ref(4)
const selectedTransition = ref('fade')
const notification = ref('')
const showNotification = ref(false)

// Available transitions
const transitions = [
  'fade',
  'slide',
  'bounce',
  'zoom',
  'flip'
]

// Functions
function toggle() {
  show.value = !show.value
}

function addItem() {
  const newItem = {
    id: nextId.value++,
    text: `Item ${nextId.value - 1}`
  }

  // Add at random position
  const randomIndex = Math.floor(Math.random() * (items.value.length + 1))
  items.value.splice(randomIndex, 0, newItem)
}

function removeItem(id) {
  const index = items.value.findIndex(item => item.id === id)
  if (index > -1) {
    items.value.splice(index, 1)
  }
}

function shuffleItems() {
  items.value = [...items.value].sort(() => Math.random() - 0.5)
}

function showNotificationMessage(message) {
  notification.value = message
  showNotification.value = true

  setTimeout(() => {
    showNotification.value = false
  }, 3000)
}

// JavaScript Hooks
function onBeforeEnter(el) {
  console.log('Before Enter:', el)
}

function onEnter(el, done) {
  console.log('Enter:', el)
  done()
}

function onAfterEnter(el) {
  console.log('After Enter:', el)
}

function onBeforeLeave(el) {
  console.log('Before Leave:', el)
}

function onLeave(el, done) {
  console.log('Leave:', el)
  done()
}

function onAfterLeave(el) {
  console.log('After Leave:', el)
}
</script>

<template>
  <div>
    <h2>✨ Transitions & Animationen</h2>

    <!-- Transition Controls -->
    <div class="controls">
      <h3>Element Transitions</h3>
      <button @click="toggle">
        {{ show ? 'Verstecken' : 'Zeigen' }}
      </button>

      <div class="transition-selector">
        <label>Transition Art:</label>
        <select v-model="selectedTransition">
          <option v-for="transition in transitions" :key="transition" :value="transition">
            {{ transition }}
          </option>
        </select>
      </div>
    </div>

    <!-- Single Element Transition -->
    <div class="single-transition">
      <h3>Single Element Transition</h3>
      <Transition
        :name="selectedTransition"
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @before-leave="onBeforeLeave"
        @leave="onLeave"
        @after-leave="onAfterLeave"
      >
        <div v-if="show" class="transition-box">
          <h4>Animiertes Element</h4>
          <p>Ich verwende die "{{ selectedTransition }}" Transition</p>
          <p>Transition: {{ selectedTransition }}</p>
        </div>
      </Transition>
    </div>

    <!-- List Transitions -->
    <div class="list-transitions">
      <h3>List Transitions</h3>
      <div class="list-controls">
        <button @click="addItem">Item hinzufügen</button>
        <button @click="shuffleItems">Mischen</button>
      </div>

      <TransitionGroup
        name="list"
        tag="ul"
        class="item-list"
      >
        <li
          v-for="item in items"
          :key="item.id"
          class="list-item"
        >
          <span>{{ item.text }}</span>
          <button @click="removeItem(item.id)" class="remove-btn">
            ✕
          </button>
        </li>
      </TransitionGroup>
    </div>

    <!-- Notification System -->
    <div class="notification-demo">
      <h3>Notification Transitions</h3>
      <div class="notification-controls">
        <button @click="showNotificationMessage('Success Message!')">
          Success
        </button>
        <button @click="showNotificationMessage('Warning Message!')">
          Warning
        </button>
        <button @click="showNotificationMessage('Error Message!')">
          Error
        </button>
      </div>

      <Transition name="notification" appear>
        <div v-if="showNotification" class="notification">
          {{ notification }}
        </div>
      </Transition>
    </div>

    <!-- Animation Examples -->
    <div class="animation-examples">
      <h3>CSS Animation Examples</h3>
      <div class="animation-grid">
        <div class="pulse-box">Pulse</div>
        <div class="rotate-box">Rotate</div>
        <div class="shake-box">Shake</div>
        <div class="float-box">Float</div>
      </div>
    </div>

    <!-- Code Examples -->
    <div class="code-examples">
      <h3>Implementation Examples</h3>

      <div class="code-example">
        <h4>Basis Transition:</h4>
        <pre><code>&lt;Transition name="fade"&gt;
  &lt;div v-if="show"&gt;Content&lt;/div&gt;
&lt;/Transition&gt;</code></pre>
      </div>

      <div class="code-example">
        <h4>List Transition:</h4>
        <pre><code>&lt;TransitionGroup name="list" tag="ul"&gt;
  &lt;li v-for="item in items" :key="item.id"&gt;
    {{ item.text }}
  &lt;/li&gt;
&lt;/TransitionGroup&gt;</code></pre>
      </div>

      <div class="code-example">
        <h4>JavaScript Hooks:</h4>
        <pre><code>&lt;Transition
  @before-enter="onBeforeEnter"
  @enter="onEnter"
  @after-enter="onAfterEnter"
&gt;
  &lt;div v-if="show"&gt;Content&lt;/div&gt;
&lt;/Transition&gt;</code></pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Controls */
.controls {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
  margin: 20px 0;
}

.controls button {
  padding: 10px 15px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
}

.transition-selector {
  margin: 15px 0;
}

.transition-selector label {
  margin-right: 10px;
  font-weight: bold;
}

.transition-selector select {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

/* Single Element Transition */
.single-transition {
  margin: 30px 0;
}

.transition-box {
  background: linear-gradient(135deg, #42b883, #369870);
  color: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  max-width: 400px;
  margin: 20px auto;
}

/* Fade Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Slide Transition */
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(100%);
}

/* Bounce Transition */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* Zoom Transition */
.zoom-enter-active, .zoom-leave-active {
  transition: all 0.3s ease;
}
.zoom-enter-from, .zoom-leave-to {
  transform: scale(0);
  opacity: 0;
}

/* Flip Transition */
.flip-enter-active, .flip-leave-active {
  transition: all 0.6s ease;
}
.flip-enter-from, .flip-leave-to {
  transform: rotateY(90deg);
  opacity: 0;
}

/* List Transitions */
.list-transitions {
  margin: 30px 0;
}

.list-controls {
  margin: 15px 0;
}

.list-controls button {
  padding: 8px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
}

.item-list {
  list-style: none;
  padding: 0;
  max-width: 400px;
}

.list-item {
  background-color: #e9ecef;
  padding: 15px;
  margin: 5px 0;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.remove-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  cursor: pointer;
  font-size: 12px;
}

/* List Transition Classes */
.list-enter-active, .list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-move {
  transition: transform 0.3s ease;
}

/* Notification */
.notification-demo {
  margin: 30px 0;
}

.notification-controls button {
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
  color: white;
}

.notification-controls button:nth-child(1) {
  background-color: #28a745;
}

.notification-controls button:nth-child(2) {
  background-color: #ffc107;
  color: #212529;
}

.notification-controls button:nth-child(3) {
  background-color: #dc3545;
}

.notification {
  background-color: #d4edda;
  color: #155724;
  padding: 15px;
  border: 1px solid #c3e6cb;
  border-radius: 5px;
  margin: 15px 0;
  position: relative;
  max-width: 400px;
}

.notification-enter-active, .notification-leave-active {
  transition: all 0.3s ease;
}
.notification-enter-from, .notification-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

/* Animation Examples */
.animation-examples {
  margin: 30px 0;
}

.animation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.animation-grid > div {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.pulse-box {
  background-color: #e91e63;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.rotate-box {
  background-color: #9c27b0;
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.shake-box {
  background-color: #ff9800;
  animation: shake 1s infinite;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

.float-box {
  background-color: #2196f3;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Code Examples */
.code-examples {
  margin: 30px 0;
}

.code-example {
  background-color: #1e1e1e;
  color: #e6e6e6;
  padding: 15px;
  border-radius: 5px;
  margin: 15px 0;
}

.code-example h4 {
  margin: 0 0 10px 0;
  color: #42b883;
}

.code-example pre {
  margin: 0;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  overflow-x: auto;
}

.code-example code {
  color: #e6e6e6;
}
</style>
