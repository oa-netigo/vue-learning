<script setup>
import { ref, computed } from 'vue'

const formData = ref({
  name: '',
  email: ''
})

const errors = ref({})

const isFormValid = computed(() =>
  formData.value.name && formData.value.email && Object.keys(errors.value).length === 0
)

function validateName() {
  if (!formData.value.name) {
    errors.value.name = 'Name ist erforderlich'
  } else if (formData.value.name.length < 3) {
    errors.value.name = 'Name muss mindestens 3 Zeichen lang sein'
  } else {
    delete errors.value.name
  }
}

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.value.email) {
    errors.value.email = 'E-Mail ist erforderlich'
  } else if (!emailRegex.test(formData.value.email)) {
    errors.value.email = 'Ungültiges E-Mail Format'
  } else {
    delete errors.value.email
  }
}

function submitForm() {
  validateName()
  validateEmail()
  if (isFormValid.value) {
    alert('Formular gesendet!\n' + JSON.stringify(formData.value, null, 2))
  } else {
    alert('Bitte Fehler korrigieren!')
  }
}

function resetForm() {
  formData.value = { name: '', email: '' }
  errors.value = {}
}
</script>

<template>
  <div>
    <form @submit.prevent="submitForm" class="form">
      <div class="field">
        <label for="name">Name *</label>
        <input
          id="name"
          v-model="formData.name"
          @blur="validateName"
          type="text"
          placeholder="Dein Name"
          :class="{ error: errors.name }"
        />
        <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
      </div>
      <div class="field">
        <label for="email">E-Mail *</label>
        <input
          id="email"
          v-model="formData.email"
          @blur="validateEmail"
          type="email"
          placeholder="deine@email.com"
          :class="{ error: errors.email }"
        />
        <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
      </div>
      <div class="buttons">
        <button type="submit" :disabled="!isFormValid">Senden</button>
        <button type="button" @click="resetForm">Reset</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.field {
  display: flex;
  flex-direction: column;
}

.buttons {
  display: flex;
  gap: 10px;
}

.error-message { color: red; font-size: 0.9em; }
.error { border-color: red; }
</style>
