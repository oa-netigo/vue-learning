<script setup>
// Import reactive from Vue to create reactive state
import { reactive } from 'vue';

// Create a reactive object to hold the person state
const person = reactive({
  personalDetails: {
    name: 'John Doe', age: 30
  },
  hobbies: [
    'Reading', 'Traveling', 'Gaming'
  ]
});

// Function to change the person's name
const changeName = () => {
  person.personalDetails.name = 'Jane Smith';
};

// Function to change the person's hobbies
const changeHobbies = () => {
  person.hobbies[0] = 'Cooking';
  person.hobbies[1] = 'Hiking';
};
</script>

<template>
  <div>
    <h1>Person name: {{ person.personalDetails.name }}</h1>
    <h2>Person age: {{ person.personalDetails.age }}</h2>
    <h3>Person hobbies: {{ person.hobbies }}</h3>
    <button @click="person.personalDetails.age += 10">Increment Age</button>
    <button @click="changeName">Change Name</button>
    <button @click="changeHobbies">Change Hobbies</button>
    <button @click="person.hobbies.push('New Hobby')">Add Hobby</button>
  </div>
</template>

<style scoped>
</style>
