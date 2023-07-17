import App from './App.vue'
import Default from '@/layouts/default/Default.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
const app = createApp(App)

app.component('LayoutDefault', Default)
app.use(createPinia())
app.use(router)
app.use(BootstrapVue3)

app.mount('#app')
