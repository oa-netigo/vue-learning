<script setup>
import { ref, computed } from 'vue'

const props = defineProps(['tabData'])

const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submittedForms = ref([])

const isFormValid = computed(() => {
  return contactForm.value.name &&
         contactForm.value.email &&
         contactForm.value.message
})

function submitForm() {
  if (isFormValid.value) {
    submittedForms.value.push({
      id: Date.now(),
      ...contactForm.value,
      timestamp: new Date().toLocaleString()
    })

    // Reset form
    contactForm.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }

    alert('Nachricht erfolgreich gesendet!')
  }
}
</script>

<template>
  <div class="tab-content">
    <h3>📞 Contact Tab</h3>
    <p>Kontaktiere uns hier!</p>

    <div class="content">
      <p>Besuche: {{ tabData?.visitCount || 0 }}</p>
      <p v-if="tabData?.lastVisit">
        Letzter Besuch: {{ tabData.lastVisit }}
      </p>

      <div class="contact-form">
        <h4>Kontaktformular</h4>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label>Name *</label>
            <input
              v-model="contactForm.name"
              type="text"
              required
            />
          </div>

          <div class="form-group">
            <label>E-Mail *</label>
            <input
              v-model="contactForm.email"
              type="email"
              required
            />
          </div>

          <div class="form-group">
            <label>Betreff</label>
            <input
              v-model="contactForm.subject"
              type="text"
            />
          </div>

          <div class="form-group">
            <label>Nachricht *</label>
            <textarea
              v-model="contactForm.message"
              required
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="!isFormValid"
            class="submit-btn"
          >
            Senden
          </button>
        </form>
      </div>

      <div v-if="submittedForms.length > 0" class="submitted-forms">
        <h4>Gesendete Nachrichten ({{ submittedForms.length }})</h4>
        <div
          v-for="form in submittedForms"
          :key="form.id"
          class="submitted-form"
        >
          <strong>{{ form.name }}</strong> - {{ form.timestamp }}
          <br>
          {{ form.subject || 'Kein Betreff' }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab-content {
  padding: 20px;
  background-color: #fff8f0;
  border-radius: 5px;
}

.content {
  margin: 15px 0;
}

.contact-form {
  background-color: #ffe6cc;
  padding: 15px;
  border-radius: 5px;
  margin: 15px 0;
}

.form-group {
  margin: 15px 0;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.submit-btn {
  padding: 10px 20px;
  background-color: #ff9800;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.submit-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.submitted-forms {
  background-color: #f0f8ff;
  padding: 15px;
  border-radius: 5px;
  margin: 15px 0;
}

.submitted-form {
  background-color: white;
  padding: 10px;
  margin: 5px 0;
  border-radius: 3px;
  border-left: 3px solid #ff9800;
}
</style>
