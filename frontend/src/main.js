import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

//define baseurl 
axios.defaults.baseURL = "http://localhost/codetest"


createApp(App).use(router).mount('#app')
