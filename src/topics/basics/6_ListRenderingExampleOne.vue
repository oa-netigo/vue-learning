/*
 * v-for Direktive
 *
 * - Die v-for Direktive wird verwendet, um über ein Array oder ein Objekt zu iterieren.
 * - Sie rendert ein Template für jedes Element in der Sammlung.
 */

<script setup>
import { ref } from "vue";
let fruits = ref(["Apfel", "Banane", "Kirsche", "Drachenfrucht"]);
</script>

<template>
	<ul>
		<li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
	</ul>
</template>
