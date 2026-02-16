import { DefaultSeo } from "next-seo";
import ThemeContextProvider from "@/context/ThemeContextProvider"; 
import "@/styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo
        title="Victor Peinado | Desarrollador Web"
        titleTemplate="%s | Victor Peinado" 
        description="Portfolio de Victor Peinado, desarrollador web especializado en React y Next.js. Explora mis proyectos y habilidades."
        openGraph={{
          type: "website",
          locale: "es_ES",
          url: "https://my-portfolio-victor-nu.vercel.app/",
          site_name: "Victor Peinado Portfolio",
          images: [
            {
              url: "https://my-portfolio-victor-nu.vercel.app/agile.png", 
              width: 800,
              height: 600,
              alt: "Victor Peinado",
            },
          ],
        }}
        twitter={{
          handle: "@mi_twitter",
          site: "@mi_portafolio",
          cardType: "summary_large_image",
        }}
        facebook={{
          appId: '123456789012345',
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: "Victor Peinado, desarrollador web, React, Next.js, portfolio, frontend, JavaScript, cuchillos artesanales",
          },
          {
            name: "author",
            content: "Victor Peinado",
          },
        ]}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/maletin.svg",
          },
          {
            rel: "apple-touch-icon",
            href: "/maletin.svg",
          },
        ]}
      />
      
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  );
};

export default App;