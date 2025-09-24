/*
 * v-model Direktive
 *
 * - v-model wird verwendet, um ein Zwei-Wege-Datenbinding zwischen einer
 *   Eingabe-Komponente (z. B. input, select, textarea) und einer Variablen
 *   in der Vue-Instanz herzustellen.
 *
 * - Änderungen in der Eingabe aktualisieren automatisch den Wert in der
 *   Vue-Datenstruktur, und umgekehrt werden Änderungen an der Datenvariable
 *   sofort in der Eingabe reflektiert.
 *
 * - Praktisch für Formulareingaben und interaktive UI-Elemente.
 */

<template>
  <div>
    <h2>🎯 v-model Direktive</h2>

    <p>Mit v-model:</p>
    <input
      type="text"
      v-model="name"
    />
    <p>Dein Name: {{ name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  }
}
</script>




