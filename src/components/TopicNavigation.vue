<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Vue.js Topics</span>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <button
              @click="$emit('switch-topic', 'Start')"
              class="nav-link btn btn-link"
              :class="{ active: currentTopic === 'Start' }"
            >
              Start
            </button>
          </li>
          <li class="nav-item">
            <button
              @click="$emit('switch-topic', 'TextInterpolation')"
              class="nav-link btn btn-link"
              :class="{ active: currentTopic === 'TextInterpolation' }"
            >
              Text Interpolation
            </button>
          </li>
          <li class="nav-item">
            <button
              @click="$emit('switch-topic', 'Component')"
              class="nav-link btn btn-link"
              :class="{ active: currentTopic === 'Component' }"
            >
              Components
            </button>
          </li>
          <li class="nav-item">
            <button
              @click="$emit('switch-topic', 'Composables')"
              class="nav-link btn btn-link"
              :class="{ active: currentTopic === 'Composables' }"
            >
              Composables
            </button>
          </li>
          <li class="nav-item">
            <button
              @click="$emit('switch-topic', 'AttributeBinding')"
              class="nav-link btn btn-link"
              :class="{ active: currentTopic === 'AttributeBinding' }"
            >
              Attribute Binding
            </button>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Reactivity
            </a>
            <ul class="dropdown-menu">
              <li>
                <button
                  @click="$emit('switch-topic', 'ReactivityExampleOne')"
                  class="dropdown-item btn btn-link"
                >
                  reactive()
                </button>
              </li>
              <li>
                <button
                  @click="$emit('switch-topic', 'ReactivityExampleTwo')"
                  class="dropdown-item btn btn-link"
                >
                  Nested Objects
                </button>
              </li>
              <li>
                <button
                  @click="$emit('switch-topic', 'ReactivityExampleThree')"
                  class="dropdown-item btn btn-link"
                >
                  ref()
                </button>
              </li>
              <li>
                <button
                  @click="$emit('switch-topic', 'ComputedProperties')"
                  class="dropdown-item btn btn-link"
                >
                  Computed Properties
                </button>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Advanced
            </a>
            <ul class="dropdown-menu">
              <li>
                <button
                  @click="$emit('switch-topic', 'Props')"
                  class="dropdown-item btn btn-link"
                >
                  Props
                </button>
              </li>
              <li>
                <button
                  @click="$emit('switch-topic', 'Slots')"
                  class="dropdown-item btn btn-link"
                >
                  Slots
                </button>
              </li>
              <li>
                <button
                  @click="$emit('switch-topic', 'Watchers')"
                  class="dropdown-item btn btn-link"
                >
                  Watchers
                </button>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li>
                <button
                  @click="$emit('switch-topic', 'ConditionalRenderingExampleOne')"
                  class="dropdown-item btn btn-link"
                >
                  v-if / v-else
                </button>
              </li>
              <li>
                <button
                  @click="$emit('switch-topic', 'ConditionalRenderingExampleTwo')"
                  class="dropdown-item btn btn-link"
                >
                  v-show
                </button>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li>
                <button
                  @click="$emit('switch-topic', 'ListRenderingExampleOne')"
                  class="dropdown-item btn btn-link"
                >
                  v-for Lists
                </button>
              </li>
              <li>
                <button
                  @click="$emit('switch-topic', 'ListRenderingExampleTwo')"
                  class="dropdown-item btn btn-link"
                >
                  v-for Keys
                </button>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li>
                <button
                  @click="$emit('switch-topic', 'TemplateRefsExampleOne')"
                  class="dropdown-item btn btn-link"
                >
                  Template Refs
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  currentTopic: String
})

defineEmits(['switch-topic'])
</script>

<style scoped>
.nav-link.btn {
  border: none;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

.nav-link.btn:hover {
  background-color: rgba(0,0,0,0.05);
  border-radius: 0.25rem;
}

.nav-link.active {
  font-weight: bold;
  color: var(--bs-primary) !important;
}

.dropdown-item.btn {
  width: 100%;
  text-align: left;
  border: none;
  background: none;
}
</style>