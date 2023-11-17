import { createApp } from 'vue'
import Home from '../src/components/Home'
import router from './router/index.js'

createApp(Home).use(router).mount('#app')
