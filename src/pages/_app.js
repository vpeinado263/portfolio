import { DefaultSeo } from "next-seo";
import "@/styles/globals.css";

 const App = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo
        title="Victor Peinado Portafolio"
        description="Aqui muestro mi evolución como desarrollador Web Full Stack"
        openGraph={{
          url: 'https://my-portfolio-victor-nu.vercel.app/',
          title: 'Mi Portafolio',
          description: 'Portafolio de desarrollador web con proyectos interactivos y tecnologías modernas.',
          images: [
            {
              url: 'https://my-portfolio-victor-nu.vercel.app/public/maletin.svg',
              width: 800,
              height: 600,
              alt: 'Victor Peinado Portafolio',
            },
          ],
          site_name: 'Victor Portfolio',
        }}
        twitter={{
          handle: '@mi_twitter',
          site: '@mi_portafolio',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </> 
   );
};

export default App;
