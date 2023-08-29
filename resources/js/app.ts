import { createApp, h } from 'vue'
import {createPinia, } from 'pinia'
import { createInertiaApp } from '@inertiajs/vue3'

import DefaultLayout from './Layouts/DefaultLayout.vue'

const pinia = createPinia()

createInertiaApp({
  resolve: (name) => {
    const page = require(`./Pages/${name}`).default
    if (!page.layout) {
      page.layout = DefaultLayout
    }
    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(pinia)
      .use(plugin)
      .mount(el)
  },
}).then()

