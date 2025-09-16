<script setup>
  // prop drilling Beispiel
  defineProps([
    'studentName',
    'studentAge',
    'studentModules'
  ]);

  // Provide & Inject Beispiel
  // import { inject } from 'vue';
  // const studentName = inject('studentName');
  // const studentAge = inject('studentAge');
  // const studentModules = inject('studentModules');
</script>

<template>
  <h1>Student Name: {{ studentName }}</h1>
  <h2>Age: {{ studentAge }}</h2>
  <h2>Modules: {{ studentModules }}</h2>
</template>
