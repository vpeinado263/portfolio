import { NextSeo } from "next-seo";
import About from "@/components/atoms/About";
import Footer from "@/components/organisms/Footer";
import Certifications from "@/components/templates/Certifications";
import Header from "@/components/templates/Header";
import Hobbies from "@/components/templates/Hobbies";
import Insights from "@/components/templates/Insights";
import Projects from "@/components/templates/Projects";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Inicio | Victor Peinado - Portfolio"
        description="Portfolio profesional de Victor Peinado - Desarrollador Full Stack y Enfermero Profesional"
        openGraph={{
          title: "Victor Peinado - Portfolio Profesional",
          description:
            "Explora mi trabajo como desarrollador web y enfermero profesional",
          images: [
            {
              url: "https://my-portfolio-victor-nu.vercel.app/agile.png",
              width: 800,
              height: 600,
              alt: "Victor Peinado - Portfolio",
            },
          ],
          site_name: "Victor Peinado Portfolio",
        }}
        twitter={{
          handle: "@tu_handle",
          site: "@tu_site",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "desarrollador web, full stack, enfermero, portfolio, react, next.js",
          },
          {
            name: "author",
            content: "Victor Peinado",
          },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
          },
        ]}
      />

      <Header />

      <main
        role="main"
        id="main-content"
        className="
          min-h-screen
          bg-linear-to-b from-gray-50 to-white
          dark:from-gray-950 dark:to-gray-900
          transition-colors duration-300
        "
      >
        {/* Sección de introducción */}
        <section
          role="region"
          aria-labelledby="about-section"
          className="
            scroll-mt-20
            lg:scroll-mt-0
          "
        >
          <About />
        </section>

        {/* Sección de trabajo */}
        <section
          role="region"
          aria-labelledby="work-section"
          className="
            scroll-mt-20
            lg:scroll-mt-0
            relative
          "
        >
          {/* Decoración de separador */}
          <div className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

          <Projects />
          <Insights />
        </section>

        {/* Sección de credenciales */}
        <section
          role="region"
          aria-labelledby="credentials-section"
          className="
            scroll-mt-20
            lg:scroll-mt-0
            relative
          "
        >
          {/* Decoración de separador */}
          <div className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

          <Certifications />
          <Hobbies />
        </section>
      </main>

      <Footer />
    </>
  );
}
