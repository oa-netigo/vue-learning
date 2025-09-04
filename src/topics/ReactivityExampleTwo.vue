<script setup>
// Importiere reactive von Vue, um einen reaktiven Zustand zu erstellen
import { reactive } from 'vue';

// Erstelle ein reaktives Objekt für die Person
const person = reactive({
  personalDetails: {
    name: 'John Doe', age: 30
  },
  hobbies: [
    'Lesen', 'Reisen', 'Spielen'
  ]
});

// Funktion zum Ändern des Namens der Person
const changeName = () => {
  person.personalDetails.name = 'Jane Smith';
};

// Funktion zum Ändern der Hobbys der Person
const changeHobbies = () => {
  person.hobbies[0] = 'Kochen';
  person.hobbies[1] = 'Wandern';
};
</script>

<template>
  <div>
  <h1>Name: {{ person.personalDetails.name }}</h1>
  <h2>Alter: {{ person.personalDetails.age }}</h2>
  <h3>Hobbys: {{ person.hobbies }}</h3>
  <button @click="person.personalDetails.age += 10">Alter erhöhen</button>
  <button @click="changeName">Name ändern</button>
  <button @click="changeHobbies">Hobbys ändern</button>
  <button @click="person.hobbies.push('Neues Hobby')">Hobby hinzufügen</button>
  </div>
</template>

<style scoped>
</style>