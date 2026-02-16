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
        title="Inicio"
        description="Bienvenido a mi portfolio." 
        openGraph={{
          title: "Victor Peinado - Inicio",
          description: "Explora mi trabajo como desarrollador web.",
          images: [
            {
              url: "https://my-portfolio-victor-nu.vercel.app/nurse.png", 
              width: 800,
              height: 600,
              alt: "Victor Peinado",
            },
          ],
        }}
      />

      <Header />

      <main role="main">
        <section role="region" aria-labelledby="about-section" className="intro">
          <About />
        </section>

        <section role="region" aria-labelledby="work-section" className="work">
          <Projects />
          <Insights />
        </section>

        <section role="region" aria-labelledby="credentials-section" className="credentials">

          <Certifications />
          <Hobbies />
        </section>
      </main>

      <Footer />
    </>
  );
}