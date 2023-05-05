import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Button from './button'

import PopUi from '../build/button/'

createApp(App).use(PopUi).mount('#app')
