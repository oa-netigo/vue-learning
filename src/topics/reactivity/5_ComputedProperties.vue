/*
 * Berechnete Eigenschaften (computed properties)
 *
 * Eine berechnete Eigenschaft ist eine spezielle Variable,
 * die sich automatisch aktualisiert, wenn sich die Daten ändern,
 * von denen sie abhängt.
 *
 * Beispiel: Ein "kleiner Arbeiter" beobachtet Daten und gibt dir immer das neueste Ergebnis.
 */


<script setup>
import { computed, ref, reactive } from "vue";

// Beispiel 1: Zwei Namen zusammenfügen
const firstName = ref('John');
const lastName = ref('Doe');
// fullName wird automatisch aktualisiert, wenn sich firstName oder lastName ändern
const fullName = computed(() => firstName.value + " " + lastName.value);

// Beispiel 2: Eine Zahl verdoppeln
const number = ref(5);
// double wird automatisch neu berechnet, wenn sich number ändert
const double = computed(() => number.value * 2);

// Beispiel 3: Status abhängig von einer Bedingung
const isActive = ref(true);
// status zeigt "Aktiv" oder "Inaktiv" je nach Wert von isActive
const status = computed(() => isActive.value ? 'Aktiv' : 'Inaktiv');

// Beispiel 4: Infos aus einem Objekt
const user = reactive({ name: 'John', age: 25 });
// userInfo wird neu berechnet, wenn sich name oder age ändern
const userInfo = computed(() => user.name + ' ' + user.age);
</script>

<template>
  <div>
  <h2>Berechnete Eigenschaften (computed)</h2>

  <h3>1. Zwei Namen zusammenfügen</h3>
  <p>Vorname: {{ firstName }}</p>
  <button @click="firstName = 'Peter'">Vorname wechseln</button>
  <p>Nachname: {{ lastName }}</p>
  <button @click="lastName = 'Parker'">Nachname wechseln</button>
  <p>Vollständiger Name: {{ fullName }}</p>

  <h3>2. Zahl verdoppeln</h3>
  <p>Zahl: {{ number }}</p>
  <button @click="number++">Zahl erhöhen</button>
  <button @click="number--">Zahl verringern</button>
  <p>Verdoppelt: {{ double }}</p>

  <h3>3. Status abhängig von einer Bedingung</h3>
  <p>Status: {{ status }}</p>
  <button @click="isActive = !isActive">Status wechseln</button>

  <h3>4. Infos aus einem Objekt</h3>
  <p>Name: {{ user.name }}</p>
  <button @click="user.name = 'Bob'">Name wechseln</button>
  <p>Alter: {{ user.age }}</p>
  <button @click="user.age++">Alter erhöhen</button>
  <button @click="user.age--">Alter verringern</button>
  <p>User Info: {{ userInfo }}</p>
  </div>
</template>