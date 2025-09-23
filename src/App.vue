<script setup>
import { ref } from 'vue'
import TopicNavigation from './components/TopicNavigation.vue'

// Basis Themen
import Start from './topics/Start.vue';
import TextInterpolation from './topics/TextInterpolation.vue';
import Component from './topics/Component.vue';
import AttributeBinding from './topics/AttributeBinding.vue';
import ReactivityExampleOne from './topics/ReactivityExampleOne.vue';
import ReactivityExampleTwo from './topics/ReactivityExampleTwo.vue';
import ReactivityExampleThree from './topics/ReactivityExampleThree.vue';
import ReactivityExampleFour from './topics/ReactivityExampleFour.vue';
import ComputedProperties from './topics/ComputedProperties.vue';
import ConditionalRenderingExampleOne from './topics/ConditionalRenderingExampleOne.vue';
import ConditionalRenderingExampleTwo from './topics/ConditionalRenderingExampleTwo.vue';
import ListRenderingExampleOne from './topics/ListRenderingExampleOne.vue';
import ListRenderingExampleTwo from './topics/ListRenderingExampleTwo.vue';
import Props from './topics/Props.vue';
import DynamicProps from './topics/DynamicProps.vue';
import Slots from './topics/Slots.vue';
import FallbackSlots from './topics/FallbackSlots.vue';
import NamedSlots from './topics/NamedSlots.vue';
import PropDrilling from './topics/PropDrilling.vue';
import ProvideAndInject from './topics/ProvideAndInject.vue';
import Watchers from './topics/Watchers.vue';
import TemplateRefsExampleOne from './topics/TemplateRefsExampleOne.vue';
import TemplateRefsExampleTwo from './topics/TemplateRefsExampleTwo.vue';
import DataFetch from './topics/DataFetch.vue';
import Composables from './topics/Composables.vue';

// Erweiterte Themen
import Router from './topics/Router.vue';
import FormsValidation from './topics/FormsValidation.vue';
import LifecycleHooks from './topics/LifecycleHooks.vue';
import CustomDirectives from './topics/CustomDirectives.vue';
import DynamicComponents from './topics/DynamicComponents.vue';

// Current topic state
const currentTopic = ref('Start');

// Component map
const components = {
  Start,
  TextInterpolation,
  Component,
  AttributeBinding,
  ReactivityExampleOne,
  ReactivityExampleTwo,
  ReactivityExampleThree,
  ReactivityExampleFour,
  ComputedProperties,
  ConditionalRenderingExampleOne,
  ConditionalRenderingExampleTwo,
  ListRenderingExampleOne,
  ListRenderingExampleTwo,
  Props,
  DynamicProps,
  Slots,
  FallbackSlots,
  NamedSlots,
  PropDrilling,
  ProvideAndInject,
  Watchers,
  TemplateRefsExampleOne,
  TemplateRefsExampleTwo,
  DataFetch,
  Composables,
  Router,
  FormsValidation,
  LifecycleHooks,
  CustomDirectives,
  DynamicComponents
}

// Switch topic function
const switchTopic = (topicName) => {
  currentTopic.value = topicName
}
</script>

<template>
  <div class="container-fluid">
    <!-- Header -->
    <header class="bg-primary text-white py-3 mb-4">
      <div class="container">
        <h1 class="h3 mb-0">Vue.js Learning Project</h1>
        <small class="text-light">Learn Vue.js concepts with practical examples</small>
      </div>
    </header>

    <!-- Navigation -->
    <TopicNavigation :currentTopic="currentTopic" @switch-topic="switchTopic" />

    <!-- Main Content -->
    <div class="container">
      <!-- Dynamic Component Rendering -->
      <component :is="components[currentTopic]" />
    </div>

    <!-- Footer -->
    <footer class="bg-light text-center py-3 mt-5">
      <div class="container">
        <small class="text-muted">Vue.js Learning Project - Focus on Learning, Not Design</small>
      </div>
    </footer>
  </div>
</template>