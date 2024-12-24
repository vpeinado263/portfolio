import About from '@/components/atoms/About';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/templates/Header';
import Insights from '@/components/templates/Insights';
import Projects from '@/components/templates/Projects';
import ThemeContextProvider from '@/context/ThemeContextProvider';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Victor Peinado</title>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="Bienvenido a mi Portafolio soy Victor Peinado, desarrollador web en formación en tecnologías modernas como React, Next.js y más. Descubre mis proyectos y habilidades."
        />
        <meta name="author" content="Victor Peinado" />
        <meta
          name="description"
          content="Explora mis proyectos y habilidades."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/maletin.svg" />
      </Head>

      <ThemeContextProvider>
       <Header />
        <main role="main">
          <section role="region" aria-labelledby="about-section">
           <About />
          </section>
          <section role="region" aria-labelledby="projects-section">
           <Projects />
          </section>
          <section role="region" aria-labelledby="insights-section">
           <Insights />
          </section>
        </main>
        <Footer />
      </ThemeContextProvider>
    </>
  );
}
