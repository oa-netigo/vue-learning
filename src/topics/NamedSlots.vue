/*
 * Named Slots
 *
 * - Ein benannter Slot ist eine Möglichkeit, einem Slot in einer Komponente
 *   einen spezifischen Namen zuzuweisen.
 *
 * - Im Gegensatz zum Standardslot (default slot), der keinen Namen hat
 *   und verwendet wird, wenn kein Name angegeben wird,
 *   ermöglichen benannte Slots die Verwendung mehrerer Slots in einer Komponente.
 *   Dabei wird festgelegt, an welcher Stelle der Inhalt
 *   anhand des Slot-Namens eingefügt werden soll.
 */

<script setup>
import NamedSlotComponent from '@/components/NamedSlotComponent.vue';
</script>

<template>
  <NamedSlotComponent>
    <template #header>
      <h2>Inhalt Header</h2>
    </template>

    <template #footer>
      <p>Inhalt Footer</p>
    </template>
  </NamedSlotComponent>
</template>
