"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center p-8 max-w-7xl mx-auto text-white">
        
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

        {/* Spacer */}
        <div className="flex-1" />

        {/* Middle Links */}
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

        {/* Right: Contact */}
        <div className="ml-6">
          <Link
            href="/contact"
            className="px-4 py-2 rounded hover:bg-[#7ea049] transition bg-[#8AAF4F]"
          >
            Contact Us
          </Link>
        </div>

      </nav>
    </header>
  );
}
