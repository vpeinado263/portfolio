import React from 'react';
import { NextSeo } from "next-seo";
import Hobbies from "@/components/templates/Hobbies";
import Footer from "@/components/organisms/Footer";

const hobbies = () => {
  return (
    <>
       <NextSeo title="Hobbies | Victor Peinado" />
      <main className="min-h-screen bg-linear-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 pt-20 lg:pt-0">
        <div className="lg:ml-(--navbar-width) xl:ml-(--navbar-width-lg)">
          <Hobbies />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default hobbies;
