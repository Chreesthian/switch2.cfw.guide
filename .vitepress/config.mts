import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Switch 2 Guide',
  description: 'The complete guide to installing homebrew on your Nintendo Switch 2.',
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/cfw-guide/switch2.cfw.guide/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Get Started', link: '/guide/get-started/' },
            { text: 'Blocking Nintendo', link: '/guide/blocking-nintendo/' },
            { text: 'Choosing Your Entrypoint', link: '/guide/choosing-your-entrypoint/' },
            { text: 'Preparing CivSwitch', link: '/guide/preparing-civswitch/' },
            { text: 'Installing kaiHEN (CivSwitch)', link: '/guide/installing-kaihen-(civswitch)/' },
            { text: 'Using kaiHEN', link: '/guide/using-kaihen/' }
          ]
        },
        {
          text: 'Optional',
          items: [
            { text: 'Updating to 23.0.1', link: '/guide/updating-to-23.0.1/' }
          ]
        }
      ]
    }
  }
})
