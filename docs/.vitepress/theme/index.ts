import DefaultTheme from "vitepress/theme";

// import { registerComponents } from 'vitepress-theme-demoblock/dist/bin/vitepress-register-components.mjs'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import Test from "../../../src/components/index"

import 'vitepress-theme-demoblock/dist/theme/styles/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('DemoBlock', DemoBlock)
    app.component('Demo', Demo)
    app.component('Test', Test)
  }
}