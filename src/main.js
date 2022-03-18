import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
// import Vue from 'vue'
import Vuelidate from 'vuelidate'
// Vue.use(Vuelidate)


createApp(App)
.use(Vuelidate)
.mount('#app')
// import "bootstrap/dist/js/bootstrap.js"