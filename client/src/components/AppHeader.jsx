import { useState } from "react";
import { navLinks } from "../Data/data";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-purple-800 text-white p-4 rounded-full fixed top-10 left-10 right-10 z-50 border-2 border-black shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <span>Pan</span>
          <span className="text-pink-500">kaj.</span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              className={`text-white text-lg font-semibold transition duration-300 ease-in-out ${
                link.title === "Home"
                  ? "bg-pink-500 px-4 py-2 rounded-full"
                  : "hover:text-pink-500"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation - Hamburger Menu */}
        <div className="md:hidden">
          <GiHamburgerMenu
            className="text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <nav className="md:hidden absolute top-[80px] left-0 right-0 bg-purple-800 flex flex-col items-center justify-center rounded border-2 border-black shadow-md">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                className={`text-white text-lg font-semibold  transition duration-300 ease-in-out mt-4  ${
                  link.title === "Home"
                    ? "bg-pink-500 px-4 py-2 w-full rounded-full border-2 border-white"
                    : link.title === "Project"
                    ? "bg-blue-500 px-4 py-2 w-full rounded-full border-2 border-white"
                    : link.title === "Features"
                    ? "bg-gray-500 px-4 py-2 w-full rounded-full border-2 border-white"
                    : link.title === "Services"
                    ? "bg-red-500 px-4 py-2 w-full rounded-full border-2 border-white"
                    : link.title === "Clients"
                    ? "bg-yellow-500 px-4 py-2 w-full rounded-full border-2 border-white"
                    : link.title === "Team"
                    ? "bg-orange-500 px-4 py-2 mb-3 w-full rounded-full border-2 border-white"
                    : "hover:text-pink-500"
                }`}
                onClick={toggleMenu}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
