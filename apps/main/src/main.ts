import { createApp } from 'vue'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import { registerMicroApps, start } from 'qiankun'
import App from './App.vue'
import router from './router'

const isTestDeploy = true

const entry: string = isTestDeploy ? 'http://127.0.0.1:8238' : '//localhost:2334'

registerMicroApps([
  {
    name: 'vue app',
    entry,
    container: '#child-app',
    activeRule: '/vue3',
  },
])

start()

createApp(App).use(router).mount('#app')
