import { defineConfig, type HeadConfig } from 'vitepress'

const siteUrl = 'https://switch2.cfw.guide'

function routeFromRelativePath(relativePath: string) {
  const route = relativePath
    .replace(/^es\//, '')
    .replace(/(^|\/)index\.md$/, '$1')
    .replace(/\.md$/, '')

  return route ? `/${route}` : '/'
}

function getAlternateUrls(relativePath: string) {
  const route = routeFromRelativePath(relativePath)

  return {
    en: `${siteUrl}${route}`,
    es: `${siteUrl}/es${route}`
  }
}

export default defineConfig({
  title: 'Switch 2 Guide',
  description: 'The complete guide to installing homebrew on your Nintendo Switch 2.',
  transformHead({ pageData, siteConfig }) {
    const isSpanishPage = pageData.relativePath.startsWith('es/')
    const counterpartPath = isSpanishPage
      ? pageData.relativePath.slice(3)
      : `es/${pageData.relativePath}`
    const { en, es } = getAlternateUrls(pageData.relativePath)
    const head: HeadConfig[] = [
      ['link', { rel: 'canonical', href: isSpanishPage ? es : en }]
    ]

    if (siteConfig.pages.includes(counterpartPath)) {
      head.push(
        ['link', { rel: 'alternate', hreflang: 'en-US', href: en }],
        ['link', { rel: 'alternate', hreflang: 'es-ES', href: es }],
        ['link', { rel: 'alternate', hreflang: 'x-default', href: en }]
      )
    }

    return head
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US'
    },
    es: {
      label: 'Español',
      lang: 'es-ES',
      title: 'Guía de Switch 2',
      description: 'La guía completa para instalar homebrew en tu Nintendo Switch 2.',
      themeConfig: {
        nav: [
          { text: 'Preguntas frecuentes', link: '/es/guide/faq/' },
          { text: 'GitHub', link: 'https://github.com/cfw-guide/switch2.cfw.guide/' }
        ],
        sidebar: {
          '/es/guide/': [
            {
              text: 'Guía',
              items: [
                { text: 'Primeros pasos', link: '/es/guide/get-started/' },
                { text: 'Bloquear Nintendo', link: '/es/guide/blocking-nintendo/' },
                { text: 'Elegir tu punto de entrada', link: '/es/guide/choosing-your-entrypoint/' },
                { text: 'Preparar CivSwitch', link: '/es/guide/preparing-civswitch/' },
                { text: 'Instalar kaiHEN (CivSwitch)', link: '/es/guide/installing-kaihen-(civswitch)/' },
                { text: 'Usar kaiHEN', link: '/es/guide/using-kaihen/' }
              ]
            },
            {
              text: 'Opcional',
              items: [
                { text: 'Actualizar a 23.0.1', link: '/es/guide/updating-to-23.0.1/' }
              ]
            }
          ]
        },
        outline: { label: 'En esta página' },
        docFooter: { prev: 'Página anterior', next: 'Página siguiente' },
        darkModeSwitchLabel: 'Apariencia',
        lightModeSwitchTitle: 'Cambiar al tema claro',
        darkModeSwitchTitle: 'Cambiar al tema oscuro',
        sidebarMenuLabel: 'Menú',
        returnToTopLabel: 'Volver arriba',
        langMenuLabel: 'Cambiar idioma',
        skipToContentLabel: 'Ir al contenido',
        notFound: {
          title: 'PÁGINA NO ENCONTRADA',
          quote: 'Pero si no cambias de dirección y sigues buscando, puede que acabes donde te diriges.',
          linkLabel: 'ir al inicio',
          linkText: 'Volver al inicio'
        }
      }
    }
  },
  themeConfig: {
    nav: [
      { text: 'FAQ', link: '/guide/faq/' },
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
