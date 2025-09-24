/*
 * Composables sind wiederverwendbare Funktionen, die Vue's Composition API nutzen.
 * Sie ermöglichen es, stateful logic zwischen Komponenten zu teilen.
 */
<template>
  <div>
    <h2>Vue Composables 🔧</h2>

    <div class="example-section">
      <h3>Counter Composable</h3>
      <p>Count: {{ count }}</p>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
      <button @click="reset">Reset</button>
    </div>

    <div class="example-section">
      <h3>Mouse Position Composable</h3>
      <p>Mouse Position: x={{ x }}, y={{ y }}</p>
      <small>Bewege die Maus über das Fenster</small>
    </div>

    <div class="example-section">
      <h3>Local Storage Composable</h3>
      <input
        v-model="name"
        placeholder="Dein Name (wird gespeichert)"
        style="margin-right: 10px;"
      >
      <button @click="clearName">Clear</button>
      <p v-if="name">Hallo {{ name }}! (Gespeichert im LocalStorage)</p>
    </div>

    <div class="example-section">
      <h3>Fetch Data Composable</h3>
      <button @click="fetchUser">Fetch Random User</button>
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error: {{ error }}</div>
      <div v-else-if="userData">
        <h4>{{ userData.name.first }} {{ userData.name.last }}</h4>
        <img :src="userData.picture.medium" :alt="userData.name.first" />
        <p>{{ userData.email }}</p>
      </div>
    </div>

    <div class="code-explanation">
      <h3>Was sind Composables?</h3>
      <ul>
        <li><strong>Wiederverwendbar:</strong> Logic kann zwischen Komponenten geteilt werden</li>
        <li><strong>Testbar:</strong> Composables können isoliert getestet werden</li>
        <li><strong>Reaktiv:</strong> Nutzen Vue's Reaktivitätssystem</li>
        <li><strong>Konvention:</strong> Beginnen meist mit "use" (z.B. useCounter, useMouse)</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCounter } from '../composables/useCounter'
import { useMouse } from '../composables/useMouse'
import { useLocalStorage } from '../composables/useLocalStorage'
import { useFetch } from '../composables/useFetch'

// Counter Composable verwenden
const { count, increment, decrement, reset } = useCounter()

// Mouse Position Composable verwenden
const { x, y } = useMouse()

// Local Storage Composable verwenden
const { value: storedName, setValue: setName, clear: clearName } = useLocalStorage('userName', '')
const name = computed({
  get: () => storedName.value,
  set: (val) => setName(val)
})

// Fetch Composable verwenden
const { data: userData, loading, error, execute } = useFetch()

// Funktion zum Laden eines Random Users
const fetchUser = () => {
  execute('https://randomuser.me/api/')
}

// Automatisch einen User beim Mount laden
fetchUser()
</script>

<style scoped>
.example-section {
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.code-explanation {
  margin-top: 30px;
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 8px;
}

button {
  padding: 8px 16px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  background-color: #42b883;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #369970;
}

input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

img {
  border-radius: 50%;
  margin-top: 10px;
}
</style>