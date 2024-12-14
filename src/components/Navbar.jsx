"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#service", label: "Service" },
    { href: "#achievements", label: "Achievements" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 py-4 md:py-8 px-10 lg:px-20 fixed w-full z-50">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="text-white font-bold text-xl">
            <Image
              src="/assets/soumyaSourav_logo.webp"
              alt="logo"
              width={200}
              height={200}
            />
          </a>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-black dark:text-gray-400 hover:text-orange-500 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            className="text-gray-400 hover:text-orange-500 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <IoMdClose size={24} /> : <RxHamburgerMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-2">
          <div className="container mx-auto flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
