import './public-path'
import type { App } from 'vue'
import { createApp } from 'vue'
import type { RouterHistory } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import AppVue from './App.vue'
import { routes } from './router'

declare global {
  interface Window {
    __POWERED_BY_QIANKUN__: boolean
    __INJECTED_PUBLIC_PATH_BY_QIANKUN__: string
  }
}

type Nullable<T> = T | null

let router = null
let instance: Nullable<App<Element>> = null
let history: Nullable<RouterHistory> = null

function render(props: {
  container?: Element
} = {}) {
  const { container } = props
  history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/vue3' : '/')
  router = createRouter({
    history,
    routes,
  })

  instance = createApp(AppVue)
  instance.use(router)
  instance.mount(container ? container.querySelector('#app')! : '#app')
}

if (!window.__POWERED_BY_QIANKUN__)
  render()

export async function bootstrap() {
  console.log('%c%s', 'color: green;', 'vue3.0 app bootstraped')
}

export async function mount(props: any) {
  render(props)
  if (!instance)
    return
  instance.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange
  instance.config.globalProperties.$setGlobalState = props.setGlobalState
}

export async function unmount() {
  if (!instance)
    return
  instance.unmount()
  instance._container && (instance._container.innerHTML = '')
  instance = null
  router = null
  history?.destroy()
}
