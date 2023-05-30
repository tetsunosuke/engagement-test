import './style.css'
import './style.scss'
import App from './App.vue'
import { createApp } from 'vue'



// BootstrapのJSをすべてインポート
import * as bootstrap from 'bootstrap'

const app = createApp(App)
app.mount('#app')
