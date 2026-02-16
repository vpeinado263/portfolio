const defaultSEO = {
  defaultTitle: 'Victor Peinado | Desarrollador Web',
  titleTemplate: '%s | Victor Peinado',
  description: 'Portfolio de Victor Peinado, desarrollador web...',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.tudominio.com/',
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
  twitter: {
    handle: '@tu_usuario',
    site: '@tu_usuario',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'Victor Peinado, desarrollador web, React, Next.js',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/maletin.svg',
    },
  ],
};

export default defaultSEO;