```js
/*
 * Bedingtes Rendering (Conditional Rendering)
 *
 * Bedingtes Rendering bezieht sich auf die Möglichkeit,
 * Elemente in der Benutzeroberfläche abhängig von bestimmten Bedingungen
 * oder Ausdrücken anzuzeigen oder auszublenden.
 *
 * Direktiven:
 * - v-if (Bedingung)
 * - v-else-if (Bedingung)
 * - v-else
 */
```

<script setup>
const isTrue = true;
const isFalse = false;
</script>

<template>
		<p v-if="isTrue">Dieser Text erscheint, wenn isTrue wahr ist. ✅</p>
		<p v-else-if="isFalse">Dieser Text erscheint, wenn isFalse wahr ist. ❌</p>
    <p v-else>Dieser Text erscheint, wenn keine der Bedingungen wahr ist. ❓</p>
</template>
