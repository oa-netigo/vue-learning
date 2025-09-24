<template>
  <div>
    <h2>🎯 v-model Direktive</h2>

    <p>Ohne v-model:</p>
    <input
      type="text"
      :value="name"
      @input="updateName"
    />
    <p>Dein Name: {{ name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    updateName(event) {
      this.name = event.target.value
    }
  }
}
</script>



