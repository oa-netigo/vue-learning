<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div style="padding: 20px; background: #fff8e8; border-radius: 5px;">
    <h2>👤 User Page</h2>
    <p>User ID: {{ route.params.id }}</p>
    <p>Query: {{ JSON.stringify(route.query) }}</p>

    <div v-if="route.params.id === '123'" style="margin-top: 10px; padding: 10px; background: #e0ffe0; border-radius: 5px;">
      <strong>Willkommen, spezieller User 123!</strong>
    </div>
    <router-link to="/">Zur Startseite</router-link>
  </div>
</template>
