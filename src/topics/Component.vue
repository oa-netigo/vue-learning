/*
 * Was ist eine Komponente ("Component")?
 *
 * Ein Komponent ist ein Teil der Benutzeroberfläche (UI),
 * der seine eigene Logik und sein eigenes Aussehen hat.
 * Ein Komponent kann so klein wie ein Button oder so groß wie eine ganze Seite sein.
 *
 * Komponente in einfachen Worten:
 * Eine Komponente ist wie ein Baustein für deine Website.
 * Stell dir vor, es ist ein kleines, wiederverwendbares Teil deiner Webseite,
 * das du an verschiedenen Stellen leicht einsetzen kannst.
 *
 * Analogie:
 * Komponenten sind wie Lego-Bausteine, die du immer wieder verwenden kannst,
 * um verschiedene Dinge zu bauen.
 */

<script setup>
// Die folgende Zeile importiert die Komponente CallToAction aus src/components/CallToAction.vue.
// Das @ steht für den src-Ordner (Alias), damit du nicht den ganzen Pfad schreiben musst.
import CallToAction from '@/components/CallToAction.vue';
</script>

<template>
  <!-- Hier fügen wir die CallToAction-Komponente in die Benutzeroberfläche ein. -->
  <!-- Sie wird wie ein eigenes HTML-Element verwendet und zeigt ihren Inhalt an. -->
  <CallToAction/>
</template>

<style scoped></style>