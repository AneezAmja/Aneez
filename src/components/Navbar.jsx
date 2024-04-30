import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleMenuOpen = () => setOpen(!open);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary-dark z-50">
      <div>
        <h3 className="text-primary-content text-2xl font-bold">Aneez Amja</h3>
      </div>

      {/* Menu */}
      <nav>
        <ul className="hidden md:flex">
          <li className="cursor-pointer hover:text-secondary-light font-medium">Home</li>
          <li className="cursor-pointer hover:text-secondary-light font-medium">About</li>
          <li className="cursor-pointer hover:text-secondary-light font-medium">Experiences</li>
          <li className="cursor-pointer hover:text-secondary-light font-medium">Projects</li>
        </ul>
      </nav>

      {/* Hamburger */}

      <div className="md:hidden z-10 cursor-pointer" onClick={handleMenuOpen}>
        {!open ? (
          <FaBars className="text-primary-content" />
        ) : (
          <FaTimes className="text-primary-content" />
        )}
      </div>

      {/* Mobile menu */}
      {/* <ul className={!open ? 'hidden' : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center"}> */}
        <ul
          className={
            !open
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center"
          }
          style={{
            backgroundImage:
              "linear-gradient(45deg, rgb(21, 42, 97), rgb(39, 78, 181))",
          }}
        >
          <li className="py-6 text-3xl cursor-pointer hover:text-secondary-light">Home</li>
          <li className="py-6 text-3xl cursor-pointer hover:text-secondary-light">About</li>
          <li className="py-6 text-3xl cursor-pointer hover:text-secondary-light">Experiences</li>
          <li className="py-6 text-3xl cursor-pointer hover:text-secondary-light">Projects</li>
        </ul>
    </div>
  );
};

export default NavBar;
