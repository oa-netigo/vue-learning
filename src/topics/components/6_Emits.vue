/*
 * v-on / $emit
 *
 * - $emit wird in Vue verwendet, um von einer Kind-Komponente ein benutzerdefiniertes Ereignis
 *   an die Eltern-Komponente zu senden.
 *
 * - Damit können Kind-Komponenten "signalisieren", dass etwas passiert ist
 *   (z. B. ein Button-Klick oder eine Eingabeänderung), ohne die Logik der Eltern direkt zu verändern.
 *
 * - Die Eltern-Komponente kann dieses Ereignis mit v-on (oder @) abhören und darauf reagieren.
 */

/*
 * Emits (Parent catches Child Events)
 *
 * Der Elternteil kann die Events der Kind-Komponente
 * wie native DOM-Events behandeln.
 *
 * Syntax:
 * <Child @eventName="handler" />
 */

<script setup>
import { ref } from "vue";
import EmitExampleChild from "@/components/EmitExampleChild.vue";

const parentCount = ref(0);

function handleIncrement(value) {
  parentCount.value = value;
}

function handleReset() {
  parentCount.value = 0;
}
</script>

<template>
  <h3>Parent Component</h3>
  <p>Parent Count: {{ parentCount }}</p>

  <EmitExampleChild
    @increment="handleIncrement"
    @reset="handleReset"
  />
</template>

<style scoped>
h3 {
  margin-bottom: 8px;
}
</style>
