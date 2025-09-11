/*
 * Warum Keys?
 *
 * - Wenn Vue eine Liste von Elementen rendert, wird ein virtueller DOM genutzt,
 *   um den effizientesten Weg zu finden, den echten DOM zu aktualisieren.
 *   Keys helfen Vue dabei zu identifizieren, welche Elemente sich geändert haben,
 *   hinzugefügt oder entfernt wurden.
 *
 * - Ohne Keys muss Vue möglicherweise die gesamte DOM-Struktur
 *   für jedes Update neu erstellen, was weniger effizient ist.
 */

<script setup>
import { ref } from "vue";
let fruits = ref(["Apfel", "Banane", "Kirsche", "Drachenfrucht"]);
</script>

<template>
	<ul>
		<li v-for="(fruit, index) in fruits" :key="index">{{ fruit }}</li>
	</ul>
</template>
