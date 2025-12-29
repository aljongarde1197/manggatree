"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      // Change 100 to match your hero section height if needed
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white text-black" : "bg-transparent text-white"
      } backdrop-blur-sm`}
    >
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        {/* Left: Logo + Brand */}
        <div className="flex items-center gap-2">
          <Image src="/favicon.ico" alt="Mangga Tree Logo" width={40} height={40} />
          <span className="font-thin text-lg tracking-wide">MANGGA TREE</span>
        </div>

        {/* Middle Links (Desktop) */}
        <ul className="hidden md:flex gap-12 font-medium">
          <li>
            <Link href="/" className="hover:text-[#7ea049] transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/book" className="hover:text-[#7ea049] transition">
              Book a Room
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#7ea049] transition">
              About Us
            </Link>
          </li>
        </ul>

        {/* Right: Social Icons + Contact (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=100063920565714"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-full hover:bg-black/10 hover:text-[#8AAF4F] transition"
            >
              <FaFacebookF size={18} />
            </a>
          </div>

          <Link
            href="/contact"
            className="px-4 py-2 rounded bg-[#8AAF4F] hover:bg-[#7ea049] text-white transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span
              className={`block w-6 h-0.5 transition-transform duration-300 bg-current ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-opacity duration-300 bg-current ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-transform duration-300 bg-current ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-sm
            flex flex-col items-center justify-center space-y-8 text-white text-xl
            transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/book" onClick={() => setIsOpen(false)}>
            Book a Room
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About Us
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="px-6 py-3 rounded bg-[#8AAF4F] hover:bg-[#7ea049] text-white transition"
          >
            Contact Us
          </Link>

          <div className="flex gap-6 pt-6">
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram size={22} />
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebookF size={22} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter / X">
              <FaXTwitter size={22} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
