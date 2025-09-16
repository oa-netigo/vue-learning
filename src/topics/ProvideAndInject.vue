/*
 * Provide & Inject
 *
 * - Die Optionen provide und inject werden verwendet,
 *   um Eigenschaften oder Daten entlang der Komponenten-Hierarchie
 *   bereitzustellen und weiterzugeben.
 *
 * - Sie ermöglichen eine Form von Dependency Injection:
 *   Eine Eltern-Komponente kann Daten oder Methoden bereitstellen,
 *   die Kind-Komponenten dann injizieren und verwenden können.
 */


<script setup>
import { provide } from 'vue';
import SchoolComponent from '@/components/SchoolComponent.vue';

// Provide & Inject Beispiel
provide('studentName', 'Peter Parker');
provide('studentAge', 22);
provide('studentModules', ['Sport', 'IT', 'Biologie']);
</script>

<template>
  <SchoolComponent/>
</template>
