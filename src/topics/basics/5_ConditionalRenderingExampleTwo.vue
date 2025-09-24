/*
 * v-show Direktive
 *
 * - Die v-show Direktive wird für bedingtes Rendering verwendet.
 * - Sie steuert die Sichtbarkeit eines Elements basierend auf dem Wahrheitswert
 *   des übergebenen Ausdrucks.
 * - Im Gegensatz zu v-if, das ein Element komplett in den DOM einfügt oder entfernt,
 *   ändert v-show lediglich die CSS-display Eigenschaft, um die Sichtbarkeit zu steuern,
 *   während das Element im DOM bleibt.
 */

<script setup>
import { ref } from "vue";
let isVisible = ref(true);
</script>

<template>
	<p v-show="isVisible">
		Dieser Absatz wird angezeigt oder versteckt, abhängig vom Wert von isVisible.
	</p>
	<button @click="isVisible = !isVisible">Sichtbarkeit umschalten</button>
</template>

