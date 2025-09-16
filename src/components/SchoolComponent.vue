<script setup>
  import StudentComponent from '@/components/StudentComponent.vue';

  // prop drilling Beispiel
  defineProps([
    'studentName',
    'studentAge',
    'studentModules'
  ]);
</script>

<template>
  <!-- Prop Drilling Beispiel -->
  <!-- Übergeben von Props an StudentComponent -->
	<StudentComponent :studentName="studentName" :studentAge="studentAge" :studentModules="studentModules" />

  <!-- Provide & Inject Beispiel -->
  <!-- Hier muss nichts übergeben werden, stattdessen werden die props im jeweiligen Component injiziert -->
  <!-- <StudentComponent /> -->
</template>
