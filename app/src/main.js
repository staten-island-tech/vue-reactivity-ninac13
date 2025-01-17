import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { jewelryArray } from '/src/products.js';

const app = createApp(App)

app.use(router)

app.mount('#app')

