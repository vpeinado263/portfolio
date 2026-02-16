import About from "@/components/atoms/About";
import Footer from "@/components/organisms/Footer";
import Certifications from "@/components/templates/Certifications";
import Header from "@/components/templates/Header";
import Hobbies from "@/components/templates/Hobbies";
import Insights from "@/components/templates/Insights";
import Projects from "@/components/templates/Projects";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Victor Peinado | Desarrollador Web</title>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="Victor Peinado, desarrollador web, React, Next.js, portfolio, frontend, JavaScript"
        />
        <meta name="author" content="Victor Peinado" />
        <meta
          name="description"
          content="Portfolio de Victor Peinado, desarrollador web especializado en React y Next.js. Explora mis proyectos, certificaciones y habilidades en tecnologías modernas."
        />

        <meta
          property="og:title"
          content="Victor Peinado | Desarrollador Web"
        />
        <meta
          property="og:description"
          content="Descubre mi portfolio y proyectos como desarrollador web."
        />
        <meta property="og:image" content="/Lus.png" />
        <meta property="og:url" content="https://tudominio.com" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/maletin.svg" />
        <link rel="apple-touch-icon" href="/maletin.svg" />
      </Head>

      <ThemeContextProvider>
        <Header />

        <main role="main">
          <section
            role="region"
            aria-labelledby="about-section"
            className="intro"
          >
            <About />
          </section>

          <section
            role="region"
            aria-labelledby="work-section"
            className="work"
          >
            <h2 id="work-section" className="sr-only">
              Mi Trabajo
            </h2>{" "}
          
            <Projects />
            <Insights />
          </section>

          <section
            role="region"
            aria-labelledby="credentials-section"
            className="credentials"
          >
            <h2 id="credentials-section" className="sr-only">
              Credenciales
            </h2>
            <Certifications />
            <Hobbies />
          </section>
        </main>

        <Footer />
      </ThemeContextProvider>
    </>
  );
}
