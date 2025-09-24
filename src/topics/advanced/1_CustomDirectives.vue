/*
 * Custom Directives erlauben es, eigene v-Direktiven zu erstellen
 * für wiederverwendbare DOM-Manipulationen.
 */

/*
 * Directive Hooks:
 * - created: Element erstellt, aber noch nicht eingefügt
 * - beforeMount: Vor dem Einfügen ins DOM
 * - mounted: Element im DOM eingefügt
 * - beforeUpdate: Vor Update des Elements
 * - updated: Nach Update des Elements
 * - beforeUnmount: Vor Entfernung aus DOM
 * - unmounted: Nach Entfernung aus DOM
 */

<script setup>
import { ref } from 'vue'

const color = ref('#42b883')

// 1. Focus Directive - Fokussiert Input beim Mount
const vFocus = {
  mounted(el) {
    el.focus()
  }
}

// 2. Color Directive - Setzt Textfarbe
const vColor = {
  mounted(el, binding) {
    el.style.color = binding.value
  },
  updated(el, binding) {
    el.style.color = binding.value
  }
}

// 3. Highlight Directive - Hebt Text hervor
const vHighlight = {
  mounted(el, binding) {
    const color = binding.value || 'yellow'
    el.style.backgroundColor = color
  }
}
</script>

<template>
  <div>
    <h2>🎯 Custom Directives</h2>

    <!-- 1. Focus Directive -->
    <div class="example">
      <h3>v-focus Directive</h3>
      <p>Fokussiert Input automatisch beim Mount:</p>
      <input v-focus placeholder="Automatisch fokussiert" />
    </div>

    <!-- 2. Color Directive -->
    <div class="example">
      <h3>v-color Directive</h3>
      <p v-color="color">
        Dieser Text hat eine dynamische Farbe
      </p>
      <input
        v-model="color"
        type="color"
        @change="() => {}"
      />
    </div>

    <!-- 3. Highlight Directive -->
    <div class="example">
      <h3>v-highlight Directive</h3>
      <p v-highlight>
        Dieser Text hat Standard-Highlighting
      </p>
      <p v-highlight="'lightblue'">
        Dieser Text hat Benutzerdefiniertes-Highlighting
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
