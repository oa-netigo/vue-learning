<script setup>
  import StudentComponent from '@/components/StudentComponent.vue';

  defineProps([
    'studentName',
    'studentAge',
    'studentModules'
  ]);
</script>

<template>
	<StudentComponent :studentName="studentName" :studentAge="studentAge" :studentModules="studentModules" />
</template>
