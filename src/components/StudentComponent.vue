<script setup>
  defineProps([
    'studentName',
    'studentAge',
    'studentModules'
  ]);
</script>

<template>
  <h1>Student Name: {{ studentName }}</h1>
  <h2>Age: {{ studentAge }}</h2>
  <h2>Modules: {{ studentModules }}</h2>
</template>
