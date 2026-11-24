import DefaultTheme from 'vitepress/theme'
import Definition from './components/Definition.vue'
import Tabs from './components/Tabs.vue'
import Tab from './components/Tab.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Definition', Definition)
    app.component('Tabs', Tabs)
    app.component('Tab', Tab)
  }
}
