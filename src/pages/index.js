import { NextSeo } from "next-seo";
import TypingEffect from "@/components/molecules/TypingEffect";
import Header from "@/components/templates/Header";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Victor Peinado - Inicio"
        description="Portfolio profesional de Victor Peinado - Desarrollador Full Stack y Enfermero Profesional"
      />
      <Navbar />
      <Header />
      <main className="min-h-screen flex items-center lg:ml-(--navbar-width) xl:ml-(--navbar-width-lg)">
        <div>
          <TypingEffect
            avatarSize={150}
            text="¡Hola!"
            typingSpeed={150}
            subtitle=""
          />
        </div>
      </main>
      <Footer />
    </>
  );
}