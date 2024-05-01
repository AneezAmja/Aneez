import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

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
          <li className="cursor-pointer hover:text-secondary-light font-medium">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer hover:text-secondary-light font-medium">
            <Link to="about" smooth={true} duration={500}  offset={-80}>
              About
            </Link>
          </li>
          <li className="cursor-pointer hover:text-secondary-light font-medium">
            <Link to="experencies" smooth={true} duration={500} offset={-80}>
              Experencies
            </Link>
          </li>
          <li className="cursor-pointer hover:text-secondary-light font-medium">
            <Link to="projects" smooth={true} duration={500} offset={-80}>
              Projects
            </Link>
          </li>
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
        <li className="py-6 text-3xl cursor-pointer hover:text-secondary-light">
          {" "}
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-3xl cursor-pointer hover:text-secondary-light">
          {" "}
          <Link to="about" smooth={true} duration={500} offset={-80}>
            About
          </Link>
        </li>
        <li className="py-6 text-3xl cursor-pointer hover:text-secondary-light">
          {" "}
          <Link to="experencies" smooth={true} duration={500} offset={-80}>
            Experencies
          </Link>
        </li>
        <li className="py-6 text-3xl cursor-pointer hover:text-secondary-light">
          {" "}
          <Link to="projects" smooth={true} duration={500} offset={-80}>
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
