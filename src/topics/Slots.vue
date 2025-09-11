/*
 * Was ist ein Slot?
 *
 * - Ein Slot ist wie ein Platzhalter in einer Komponente,
 *   in den man verschiedene Inhalte einfügen kann.
 *
 * - Er ermöglicht die Erstellung wiederverwendbarer Komponenten,
 *   die unterschiedliche Inhalte aufnehmen können,
 *   während eine konsistente Struktur beibehalten wird.
 */

<script setup>
import SlotComponent from '@/components/SlotComponent.vue';
</script>

<template>
  <SlotComponent>
    <h2>Inhalt Titel</h2>
    <p>Inhalt Beschreibung</p>
  </SlotComponent>
</template>
