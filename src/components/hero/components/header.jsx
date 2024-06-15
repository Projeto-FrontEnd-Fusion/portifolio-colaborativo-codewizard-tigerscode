import { LuMenu, LuX } from "react-icons/lu";
import { useState } from "react";
import GitButton from "./git-button";
import ThemeToggle from "./theme-toggle";
import Menu from "./menu";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className="flex h-24 items-center justify-between px-4 md:px-[93px] lg:flex-row-reverse lg:justify-start lg:gap-8">
        <GitButton primary />

        <div className="flex items-center justify-center gap-3">
          <ThemeToggle />
          <button
            className="text-black hover:text-gray-text lg:hidden dark:text-white-two"
            onClick={handleOpenMenu}
          >
            <LuMenu size={36} />
          </button>
        </div>

        <div className="hidden lg:block">
          <Menu primary />
        </div>
      </header>

      {open && (
        <section className="fixed right-0 z-50 h-[100vh] w-[90vw] max-w-md bg-black p-10 shadow-lg lg:hidden dark:bg-primary">
          <div className="mb-5 flex items-center justify-between">
            <h1 className="font-title text-xl text-white-one">
              Frontend Fusion
            </h1>
            <button
              className="cursor-pointer text-white-one hover:text-gray-text"
              onClick={handleOpenMenu}
            >
              <LuX size={24} />
            </button>
          </div>
          <Menu hasIcons />
        </section>
      )}
    </>
  );
};

export default Header;
