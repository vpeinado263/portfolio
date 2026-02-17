import SocialLink from "@/components/molecules/SocialLink";
import Whatsapp from "@/components/molecules/Whatsapp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
      bg-white dark:bg-gray-900
      border-t border-gray-200 dark:border-gray-800
      px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-6
      w-full
      transition-all duration-300
      lg:w-[calc(100%-var(--navbar-width))] lg:ml-(--navbar-width)
      xl:w-[calc(100%-var(--navbar-width-lg))] xl:ml-(--navbar-width-lg) xl:px-12
      2xl:max-w-(--container-max) 2xl:mx-auto 2xl:px-0
    "
    >
      {/* Versión móvil/tablet: centrado vertical */}
      <div className="lg:flex lg:justify-between lg:items-center">
        {/* Enlaces sociales */}
        <div
          className="
          flex flex-wrap justify-center items-center
          gap-6 md:gap-8 lg:gap-6 xl:gap-8
          mb-4 lg:mb-0
        "
        >
          {/* GitHub */}
          <div
            className="
            flex items-center
            transition-transform duration-200
            hover:-translate-y-1 hover:opacity-90
            active:-translate-y-0.5
          "
          >
            <SocialLink
              href="https://github.com/vpeinado263"
              iconSrc="/github.svg"
              iconAlt="GitHub"
              iconWidth={24}
              iconHeight={24}
              platform="github"
              variant="iconOnly"
              size="md"
              showTooltip={true}
              tooltipText="GitHub"
            />
          </div>

          {/* LinkedIn */}
          <div
            className="
            flex items-center
            transition-transform duration-200
            hover:-translate-y-1 hover:opacity-90
            active:-translate-y-0.5
          "
          >
            <SocialLink
              href="https://www.linkedin.com/in/victor-peinado1739/"
              iconSrc="/linkedin.svg"
              iconAlt="LinkedIn"
              iconWidth={24}
              iconHeight={24}
              platform="linkedin"
              variant="iconOnly"
              size="md"
              showTooltip={true}
              tooltipText="LinkedIn"
            />
          </div>

          {/* WhatsApp */}
          <div
            className="
            flex items-center
            transition-transform duration-200
            hover:-translate-y-1 hover:opacity-90
            active:-translate-y-0.5
          "
          >
            <Whatsapp
              iconSize={24}
              showTooltip={true}
              tooltipText="WhatsApp"
              tooltipPosition="top"
              pulseAnimation={false}
            />
          </div>

          {/* CV */}
          <div
            className="
            flex items-center
            transition-transform duration-200
            hover:-translate-y-1 hover:opacity-90
            active:-translate-y-0.5
          "
          >
            <SocialLink
              href="https://drive.google.com/file/d/1C-5VwDMs-oU2-Ah0xHupGkxTo2QPk1dN/view"
              iconSrc="/file.svg"
              iconAlt="Currículum Vitae"
              iconWidth={24}
              iconHeight={24}
              platform="cv"
              size="md"
              className="gap-1"
            >
              <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                CV
              </span>
            </SocialLink>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="
          text-center lg:text-right
          text-xs md:text-sm
          text-gray-400 dark:text-gray-500
          border-t lg:border-t-0
          border-dashed border-gray-200 dark:border-gray-800
          pt-4 lg:pt-0
          mt-2 lg:mt-0
        "
        >
          © {currentYear} Victor Peinado. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
