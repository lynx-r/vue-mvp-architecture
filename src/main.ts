import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import marketplaceModule from './modules/marketplace'
import router from './router'

import { createPinia } from 'pinia'
import { registerModules } from './register-modules'
import vuexStore from './stores/vuex'

registerModules({
  marketplace: marketplaceModule
})

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(vuexStore)

app.mount('#app')
