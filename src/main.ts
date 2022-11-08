import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {
  // create naive ui
  create,
  // component
  NButton
} from 'naive-ui'

const naive = create({
  components: [NButton]
})
createApp(App).use(naive).mount('#app')
