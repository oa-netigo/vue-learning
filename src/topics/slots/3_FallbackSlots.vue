/*
 * Fallback Default
 *
 * - Fallback-Inhalt in Slots bezeichnet den Standardinhalt,
 *   der angezeigt wird, wenn für einen bestimmten Slot kein Inhalt bereitgestellt wird.
 *
 * - Dadurch wird sichergestellt, dass eine Komponente
 *   trotzdem sinnvollen Inhalt (meaningful content) hat,
 *   selbst wenn die Eltern-Komponente keinen Inhalt an diesen Slot übergibt.
 */


<script setup>
import StaticPropsComponent from '@/components/StaticPropsComponent.vue';
</script>

<template>
  <StaticPropsComponent>
    <!-- <h2>Überschriebener Titel</h2> -->
    <!-- <p>Dieser Inhalt überschreibt den Standardinhalt des Slots.</p> -->
  </StaticPropsComponent>
</template>
