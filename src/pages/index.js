import { NextSeo } from "next-seo";
import TypingEffect from "@/components/molecules/TypingEffect";
import Header from "@/components/templates/Header";
import Footer from "@/components/organisms/Footer";
import Link from "next/link";
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
      <main className="min-h-screen flex items-center justify-center lg:ml-(--navbar-width) xl:ml-(--navbar-width-lg)">
        <div className="text-center p-4">
          <TypingEffect
            avatarSrc="https://avatars.githubusercontent.com/u/132930442?v=4"
            avatarAlt="Victor Peinado"
            avatarSize={150}
            text="Hola, soy Victor Peinado"
            typingSpeed={80}
            subtitle="Full Stack Developer | Enfermero Profesional"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}