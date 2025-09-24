<script setup>
import { ref, reactive } from 'vue';

// Mit ref kannst du einzelne Werte (primitives) (Zahlen, Strings, Booleans) reaktiv machen
const count = ref(0);

// Mit reactive kannst du ganze Objekte mit mehreren Eigenschaften reaktiv machen
const user = reactive({
  name: 'John',
  age: 25
});
</script>

<template>
  <div>
    <h2>ref: für einzelne Werte</h2>
    <p>Zähler (ref): {{ count }}</p>
    <button @click="count++">Zähler erhöhen</button>
    <p><i>Nutze <b>ref</b>, wenn du einen einzelnen reaktiven Wert brauchst.</i></p>

    <h2>reactive: für Objekte</h2>
    <p>Name: {{ user.name }}</p>
    <p>Alter: {{ user.age }}</p>
    <button @click="user.age++">Alter erhöhen</button>
    <button @click="user.name = 'Peter'">Name wechseln</button>
    <p><i>Nutze <b>reactive</b>, wenn du ein reaktives Objekt mit mehreren Eigenschaften brauchst.</i></p>
  </div>
</template>

<style scoped>
</style>