"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <nav className="flex items-center justify-between p-4 md:p-4 max-w-7xl mx-auto text-white">

        {/* Left: Logo + Brand */}
        <div className="flex items-center gap-2">
          <Image
            src="/favicon.ico"
            alt="Mangga Tree Logo"
            width={40}
            height={40}
          />
          <span className="font-thin text-lg">MANGGA TREE</span>
        </div>

        {/* Middle Links (Desktop) */}
        <ul className="hidden md:flex gap-12 font-medium">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/book" className="hover:text-gray-300">
              Book a Room
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About Us
            </Link>
          </li>
        </ul>

        {/* Right: Contact (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-4 py-2 rounded hover:bg-[#7ea049] transition bg-[#8AAF4F]"
          >
            Contact Us
          </Link>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
        >
          <span className="sr-only">Toggle Menu</span>
          <div className="space-y-1">
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-md flex flex-col items-center justify-center space-y-8 text-white text-xl transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/book" onClick={() => setIsOpen(false)} className="hover:text-gray-300">
            Book a Room
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-gray-300">
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="px-6 py-3 rounded bg-[#8AAF4F] hover:bg-[#7ea049] transition"
          >
            Contact Us
          </Link>
        </div>

      </nav>
    </header>
  );
}
