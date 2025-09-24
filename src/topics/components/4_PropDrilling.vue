/*
 * Prop Drilling
 *
 * Prop Drilling bezeichnet das Durchreichen von Props über mehrere Ebenen von Komponenten, auch wenn nicht alle Zwischenkomponenten die Props selbst benötigen.
 * Es entsteht also eine Art „Prop-Kette“, nur damit eine Kind-Komponente tief im Baum die Daten erhält.
 */


<script setup>
import SchoolComponent from '@/components/SchoolComponent.vue';

const studentName = 'Max Mustermann';
const studentAge = 20;
const studentModules = ['Mathematik', 'Physik', 'Chemie'];
</script>

<template>
	<SchoolComponent :studentName="studentName" :studentAge="studentAge" :studentModules="studentModules" />
</template>
