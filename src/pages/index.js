import Header from '@/components/templates/Header';
import Projects from '@/components/templates/Projects';
import Head from 'next/head';

export default function Index() {
  return (
    <>
      <Head>
        <title>Victor Peinado</title>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Bienvenido a mi Portafolio soy Victor Peinado, desarrollador web en formación en tecnologías modernas como React, Next.js y más. Descubre mis proyectos y habilidades." />
        <meta name="author" content="Victor Peinado" />
        <meta name="description" content="Explora mis proyectos y habilidades."  />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/maletin.svg" />
      </Head>
      <Header />
      <Projects />
    </>
  );
}
