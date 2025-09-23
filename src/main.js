// Import Vue's createApp function
import { createApp } from 'vue'
// Import the root App component
import App from './App.vue'
// Import router
import router from './router'
// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// import main css
import './main.css'

// Create app instance
const app = createApp(App)

// Use router
app.use(router)

// Mount the App component to the #app element
app.mount('#app')
