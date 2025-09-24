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

 /*
 * Provide Function
 * - Provide ist eine Option in einer Eltern-Komponente,
 *   die es ermöglicht, Daten oder Methoden mit Kind-Komponenten zu teilen.
 * - Eigenschaften oder Methoden werden so verfügbar gemacht,
 *   dass sie in Kind-Komponenten injiziert werden können.
 *
 * Inject Function
 * - Inject ist eine Option in einer Kind-Komponente,
 *   die angibt, welche Eigenschaften oder Methoden sie von der Eltern-Komponente
 *   erhalten möchte.
 * - Dadurch kann die Kind-Komponente die bereitgestellten Daten oder Methoden
 *   injizieren und verwenden.
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
