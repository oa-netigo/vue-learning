<script setup>
import { ref, reactive } from 'vue'

const props = defineProps(['tabData'])

const formData = reactive({
  name: '',
  message: ''
})

const messages = ref([])

function addMessage() {
  if (formData.name && formData.message) {
    messages.value.push({
      id: Date.now(),
      name: formData.name,
      message: formData.message,
      time: new Date().toLocaleTimeString()
    })

    formData.message = ''
  }
}
</script>

<template>
  <div class="tab-content">
    <h3>ℹ️ About Tab</h3>
    <p>Hier erfährst du mehr über uns!</p>

    <div class="content">
      <p>Besuche: {{ tabData?.visitCount || 0 }}</p>
      <p v-if="tabData?.lastVisit">
        Letzter Besuch: {{ tabData.lastVisit }}
      </p>

      <div class="guestbook">
        <h4>Gästebuch</h4>
        <div class="form">
          <input
            v-model="formData.name"
            placeholder="Dein Name"
            @keyup.enter="addMessage"
          />
          <input
            v-model="formData.message"
            placeholder="Deine Nachricht"
            @keyup.enter="addMessage"
          />
          <button @click="addMessage">Hinzufügen</button>
        </div>

        <div class="messages">
          <div
            v-for="msg in messages"
            :key="msg.id"
            class="message"
          >
            <strong>{{ msg.name }}</strong> ({{ msg.time }}): {{ msg.message }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab-content {
  padding: 20px;
  background-color: #f0fff0;
  border-radius: 5px;
}

.content {
  margin: 15px 0;
}

.guestbook {
  background-color: #e6ffe6;
  padding: 15px;
  border-radius: 5px;
  margin: 15px 0;
}

.form {
  display: flex;
  gap: 10px;
  margin: 10px 0;
  flex-wrap: wrap;
}

.form input {
  flex: 1;
  min-width: 150px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form button {
  padding: 8px 15px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.messages {
  margin: 15px 0;
  max-height: 200px;
  overflow-y: auto;
}

.message {
  background-color: white;
  padding: 10px;
  margin: 5px 0;
  border-radius: 3px;
  border-left: 3px solid #28a745;
}
</style>
