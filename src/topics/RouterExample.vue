/*
 * Vue Router ermöglicht Single Page Applications (SPA) mit mehreren Ansichten.
 * Es verwaltet Navigation und URL-Routen ohne Seitenneuladen.
 */

/*
 * Router Grundlagen:
 * - Routen definieren (path -> component)
 * - Navigation mit router-link
 * - Programmatische Navigation
 * - Route Parameter
 * - Query Parameter
 * - Nested Routes
 */

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const route = useRoute()

const userId = ref('')

// Programmatische Navigation
function goToHome() {
  router.push('/')
}

function goToUser() {
  if (userId.value) {
    router.push(`/user/${userId.value}`)
  }
}

function goBack() {
  router.go(-1)
}
</script>

<template>
  <div>
    <div class="navigation">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/user/123">User 123</router-link>
    </div>

    <br>

    <div class="programmatic">
      <div class="actions">
        <button @click="goToHome">Zur Startseite</button>
        <button @click="goBack">Zurück</button>
      </div>

      <br>

      <div class="form">
        <input
          v-model="userId"
          placeholder="User ID eingeben"
          type="number"
        />
        <button @click="goToUser">Zu User</button>
      </div>
    </div>

    <br></br>
    <div class="route-info">
      <div>Path: <strong>{{ route.path }}</strong></div>
      <div><strong>Name:</strong> {{ route.name }}</div>
      <div><strong>Params:</strong> {{ JSON.stringify(route.params) }}</div>
      <div><strong>Query:</strong> {{ JSON.stringify(route.query) }}</div>
    </div>

    <br></br>
    <!-- Router View zeigt die aktuelle Komponente -->
    <div class="router-view">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.navigation {
  display: flex;
  gap: 10px;
}

.navigation a.router-link-active {
  font-weight: bold;
}

.programmatic .actions {
  display: flex;
  gap: 10px;
}

.programmatic .form {
  display: flex;
  gap: 10px;
}

.route-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
