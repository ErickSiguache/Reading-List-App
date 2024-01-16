import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { enableUseIcons } from './configurations/fontAwesonIconsConfiguration'

import App from './App.vue'
import router from './router'

const app = createApp(App)

enableUseIcons(app)

app.use(createPinia())
app.use(router)

app.mount('#app')
