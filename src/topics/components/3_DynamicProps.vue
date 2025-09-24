<script setup>
import { ref } from 'vue';
import CallToActionWithProps from '@/components/CallToActionWithProps.vue';
const title = ref('Dynamischer Titel');
const description = ref('Diese Beschreibung kann sich dynamisch ändern.');
const buttonText = ref('Klicke mich');
</script>

<template>
	<CallToActionWithProps :title="title" :description="description" :buttonText="buttonText" />
</template>
