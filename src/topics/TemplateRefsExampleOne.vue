/*
 * Template Refs
 *
 * - Ein Template Ref ist eine Möglichkeit, eine Referenz auf eine Kind-Komponente,
 *   ein Element oder ein DOM-Element innerhalb eines Templates zu erstellen.
 *
 * - Dadurch kann man direkt in der Komponenten-Logik auf das referenzierte Objekt
 *   zugreifen und es manipulieren.
 *
 * - Häufig verwendet, um mit Kind-Komponenten zu interagieren,
 *   imperative Aktionen auszulösen oder auf Eigenschaften und Methoden
 *   von DOM-Elementen zuzugreifen.
 */

<script setup>
import { onMounted, ref } from "vue";
const myRef = ref("");

// onMounted ist ein Lifecycle-Hook, der eine Funktion ausführt, sobald die Komponente in den DOM gerendert wurde.
onMounted(() => {
  console.log(myRef.value);
  myRef.value.focus();
  myRef.value.value = "something";
});
</script>

<template>
  <input
    type="text"
    placeholder="Enter Your Name"
    ref="myRef"
  />
</template>
