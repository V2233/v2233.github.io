import { defineClientConfig } from 'vuepress/client'
import Typewriter from './components/global/home.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Typewriter', Typewriter)
  },
})