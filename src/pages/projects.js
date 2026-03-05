import React from 'react';
import { NextSeo } from "next-seo";
import Footer from "@/components/organisms/Footer";
import Projects from '@/components/templates/Projects';


const projects = () => {
  return (
    <>
    <NextSeo title="Insights | Victor Peinado" />
      <main className="min-h-screen bg-linear-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 pt-20 lg:pt-0">
        <div className="lg:ml-(--navbar-width) xl:ml-(--navbar-width-lg)">
          <Projects />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default projects;
