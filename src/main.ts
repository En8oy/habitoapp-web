import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./plugins/router"
import { createPinia } from 'pinia'
import es from './lang/es.json'
import en from './lang/en.json'
import gr from './lang/en.json'
// import VueProgressBar from "@aacassandra/vue3-progressbar";

import { createI18n } from 'vue-i18n'


// const options = {
//   color: 'rgb(0, 255, 0)',
//   failedColor: 'red',
//   height: '5px'
// };


const i18n = createI18n({
	legacy: false,
	locale: 'es',
  messages: {
    en: en,
		es: es,
		gr : gr
  }
})
const pinia = createPinia()

createApp(App).use(router).use(pinia).use(i18n).mount('#app')
