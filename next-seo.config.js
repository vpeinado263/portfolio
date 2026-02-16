
const defaultSEO = {
  defaultTitle: 'Victor Peinado | Desarrollador Web',
  titleTemplate: '%s | Victor Peinado',
  description: 'Portfolio de Victor Peinado, desarrollador web especializado en React y Next.js. Explora mis proyectos, certificaciones y habilidades.',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://github.com/vpeinado263/portfolio',
    site_name: 'Victor Peinado Portfolio',
    images: [
      {
        url: 'https://www.tudominio.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Victor Peinado Portfolio',
      },
    ],
  },
  x: {
    handle: '',
    site: '',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'Victor Peinado, desarrollador web, React, Next.js, portfolio, frontend',
    },
    {
      name: 'author',
      content: 'Victor Peinado',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/maletin.svg',
    },
    {
      rel: 'apple-touch-icon',
      href: '/maletin.svg',
      sizes: '76x76',
    },
  ],
};

export default defaultSEO;