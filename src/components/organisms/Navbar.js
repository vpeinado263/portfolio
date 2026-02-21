import React from "react";
import MyMenu from "@/components/molecules/MyMenu";

const Navbar = () => {
  return (
    <div
      className="
        hidden lg:block
        fixed top-0 left-0
        w-(--navbar-width) xl:w-(--navbar-width-lg)
        h-screen
        py-8 px-4
        bg-white dark:bg-gray-900
        border-r border-gray-200 dark:border-gray-800
        z-40
        overflow-y-auto
        transition-all duration-300
      "
    >
      <nav className="flex flex-col gap-6">
        <MyMenu />
      </nav>
    </div>
  );
};

export default Navbar;