// Import Vue's createApp function
import { createApp } from 'vue'
// Import the root App component
import App from './App.vue'
// Import router
import router from './router'

// Create app instance
const app = createApp(App)

// Use router
app.use(router)

// Mount the App component to the #app element
app.mount('#app')
