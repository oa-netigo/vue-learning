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
import { ref, directive } from 'vue'

const text = ref('Hello World')
const color = ref('#42b883')
const isVisible = ref(true)
const clickCount = ref(0)

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
    el.style.padding = '2px 4px'
    el.style.borderRadius = '3px'
  },
  updated(el, binding) {
    const color = binding.value || 'yellow'
    el.style.backgroundColor = color
  }
}

// 4. Click Outside Directive - Erkennt Klicks außerhalb
const vClickOutside = {
  mounted(el, binding) {
    el.clickOutsideEvent = function(event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}

// 5. Tooltip Directive - Zeigt Tooltip an
const vTooltip = {
  mounted(el, binding) {
    el.style.position = 'relative'
    el.style.cursor = 'pointer'

    const tooltip = document.createElement('div')
    tooltip.textContent = binding.value
    tooltip.style.cssText = `
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      background: #333;
      color: white;
      padding: 5px 10px;
      border-radius: 3px;
      font-size: 12px;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s;
      z-index: 1000;
    `

    el.appendChild(tooltip)

    el.addEventListener('mouseenter', () => {
      tooltip.style.opacity = '1'
    })

    el.addEventListener('mouseleave', () => {
      tooltip.style.opacity = '0'
    })
  }
}

// 6. Animated Counter Directive
const vAnimateNumber = {
  mounted(el, binding) {
    const endValue = binding.value
    const duration = 2000
    const startTime = Date.now()

    function animate() {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      const currentValue = Math.floor(endValue * progress)
      el.textContent = currentValue

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  },
  updated(el, binding) {
    // Re-animate when value changes
    const endValue = binding.value
    const duration = 1000
    const startValue = parseInt(el.textContent) || 0
    const startTime = Date.now()

    function animate() {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      const currentValue = Math.floor(startValue + (endValue - startValue) * progress)
      el.textContent = currentValue

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }
}

// Registriere Directives global (normalerweise in main.js)
// app.directive('focus', vFocus)

// Functions
function incrementCounter() {
  clickCount.value++
}

function hideBox() {
  isVisible.value = false
  setTimeout(() => {
    isVisible.value = true
  }, 2000)
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
      <p v-highlight="'lightblue'">
        Dieser Text ist hervorgehoben
      </p>
      <p v-highlight>
        Dieser Text hat Standard-Highlighting
      </p>
    </div>

    <!-- 4. Click Outside Directive -->
    <div class="example">
      <h3>v-click-outside Directive</h3>
      <div
        v-if="isVisible"
        v-click-outside="hideBox"
        class="click-box"
      >
        Klicke außerhalb dieser Box um sie zu verstecken
      </div>
      <p v-if="!isVisible">
        Box wurde versteckt. Erscheint in 2 Sekunden wieder.
      </p>
    </div>

    <!-- 5. Tooltip Directive -->
    <div class="example">
      <h3>v-tooltip Directive</h3>
      <button
        v-tooltip="'Das ist ein Tooltip!'"
        @click="incrementCounter"
      >
        Hover für Tooltip
      </button>

      <span
        v-tooltip="'Klicks: ' + clickCount"
        class="tooltip-text"
      >
        Hover hier für Click Count
      </span>
    </div>

    <!-- 6. Animated Number Directive -->
    <div class="example">
      <h3>v-animate-number Directive</h3>
      <p>
        Counter:
        <span
          v-animate-number="clickCount"
          class="animated-number"
        ></span>
      </p>
      <button @click="incrementCounter">
        Increment für Animation
      </button>
    </div>

    <!-- Directive Code Examples -->
    <div class="code-examples">
      <h3>Directive Implementierung</h3>
      <div class="code-example">
        <h4>Einfache Directive:</h4>
        <pre><code>const vFocus = {
  mounted(el) {
    el.focus()
  }
}</code></pre>
      </div>

      <div class="code-example">
        <h4>Directive mit Parametern:</h4>
        <pre><code>const vColor = {
  mounted(el, binding) {
    el.style.color = binding.value
  },
  updated(el, binding) {
    el.style.color = binding.value
  }
}</code></pre>
      </div>

      <div class="code-example">
        <h4>Directive mit Cleanup:</h4>
        <pre><code>const vClickOutside = {
  mounted(el, binding) {
    el.clickOutsideEvent = function(event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}</code></pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.example {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
  margin: 20px 0;
  border-left: 4px solid #42b883;
}

.example h3 {
  margin-top: 0;
  color: #2c3e50;
}

.example input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 5px;
}

.click-box {
  background-color: #e3f2fd;
  border: 2px solid #2196f3;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  user-select: none;
}

.tooltip-text {
  background-color: #42b883;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
}

.animated-number {
  background-color: #ff6b6b;
  color: white;
  padding: 4px 8px;
  border-radius: 3px;
  font-weight: bold;
  min-width: 30px;
  display: inline-block;
  text-align: center;
}

button {
  padding: 10px 15px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
}

button:hover {
  background-color: #369870;
}

.code-examples {
  margin: 30px 0;
}

.code-example {
  background-color: #1e1e1e;
  color: #e6e6e6;
  padding: 15px;
  border-radius: 5px;
  margin: 15px 0;
}

.code-example h4 {
  margin: 0 0 10px 0;
  color: #42b883;
}

.code-example pre {
  margin: 0;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  overflow-x: auto;
}

.code-example code {
  color: #e6e6e6;
}
</style>
