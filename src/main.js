import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/main.scss'
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import isInput  from '@/components/isInput'
import isButton  from '@/components/isButton'
import isLoader  from '@/components/UI/isLoader'
import {store} from '@/vuex/index'

const app = createApp(App)
app.use(bootstrap)
app.use(store)

app.component('is-input', isInput)
app.component('is-button', isButton)
app.component('is-loader', isLoader)
app.mount('#app')
