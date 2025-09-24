/*
 * Was sind Props?
 *
 * - Props (Kurzform für „Properties“) sind eine Möglichkeit, Daten
 *   von einer Eltern-Komponente (parent) zu einer Kind-Komponente (child) zu übergeben.
 *
 * - Sie ermöglichen die Kommunikation zwischen Komponenten,
 *   indem die Eltern-Komponente Daten an ihre Kind-Komponenten weitergibt.
 *
 * - Nützlich für die Erstellung wiederverwendbarer und modularer Komponenten.
 */

<script setup>
import CallToActionWithProps from '@/components/CallToActionWithProps.vue';
</script>

<template>
	<CallToActionWithProps title="Benutzerdefinierter Titel von Props.vue" description="Benutzerdefinierte Beschreibung von Props.vue" buttonText="Benutzerdefinierter Button-Text von Props.vue" />
</template>
