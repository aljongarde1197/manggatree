"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const sectionsRef = useRef([]);
  const [menuOpen, setMenuOpen] = useState(true);

  const images = [
    "/background-cover.jpg",
    "/outside_room_3.jpg",
    "/shop_1.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Cycle images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Client-side scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url('${images[currentImage]}')` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 text-white space-y-6 animate-fade-up">
        <h2 className="text-4xl md:text-5xl font-bold">MANGGA TREE</h2>
        <h4 className="text-2xl md:text-3xl font-thin">
          MINI SHOP | BEER GARDEN | ROOM STAY + RENT
        </h4>
        <p className="text-lg md:text-2xl text-gray-200 max-w-xl mx-auto">
          Turn a little break into a long and enjoyable night.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a
            href="#beer-garden"
            className="px-6 py-3 bg-[#8AAF4F] rounded-lg font-semibold hover:bg-[#7ea049] transition"
          >
            Explore
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white rounded-lg font-semibold bg-white/10 hover:bg-white/20 transition"
          >
            Contact Us
          </a>
        </div>

        <p className="text-lg md:text-2xl text-gray-200 max-w-xl mx-auto mt-10 mb-2 font-bold">
          OPEN DAILY TILL 3AM
        </p>

        <p className="text-lg md:text-lg text-gray-200 mx-auto">
          Monday - Friday  11:30am - 4am  |  Saturday & Sunday  10am - 4am
        </p>
      </div>
    </section>

      <div className="max-w-3xl md:max-w-7xl mx-auto text-center space-y-8 py-24">
        <h3 className="text-2xl md:text-5xl font-thin text-white">
          Celebrating <b className="text-[#7ea049]">8 Amazing Years!</b>
        </h3>
        <p className="text-lg md:text-xl text-white">
          For 8 incredible years, we’ve been serving unforgettable nights, delicious drinks, and happy memories. Join us and experience the magic that keeps our guests coming back!
        </p>
        <a
          href="#beer-garden"
          className="inline-block px-6 py-3 bg-[#8AAF4F] text-white rounded-lg font-semibold hover:bg-[#7ea049] transition"
        >
          Explore Now
        </a>

        {/* Row of Images */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-8 mt-2 md:mt-8 p-4 md:p-0">
          <img
            src="/crowd_1.jpg"
            alt="Celebration"
            className="w-full h-60 object-cover rounded-lg shadow-lg"
          />
          <img
            src="/people_1.jpg"
            alt="Guests enjoying drinks"
            className="w-full h-60 object-cover rounded-lg shadow-lg"
          />
          <img
            src="/people_2.jpg"
            alt="Group of friends"
            className="w-full h-60 object-cover rounded-lg shadow-lg"
          />
          <img
            src="/crowd_2.jpg"
            alt="Cheers!"
            className="w-full h-60 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>



      {/* BEER GARDEN */}
      <section
        id="beer-garden"
        ref={(el) => (sectionsRef.current[0] = el)}
        className="min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white px-6 opacity-0 translate-y-12 transition-all duration-700"
      >
        <div className="max-w-3xl text-center space-y-4">
          <h2 className="text-4xl font-bold text-[#8AAF4F]">Beer Garden</h2>
          <p className="text-lg text-gray-300">
            Open-air vibes, craft beers, live music, and unforgettable nights.
          </p>
        </div>
      </section>

   {/* ROOM RENTAL */}
<section
  id="room-rental"
  ref={(el) => (sectionsRef.current[1] = el)}
  className="relative min-h-screen flex flex-col items-center justify-center bg-[#141414] text-white px-6 opacity-0 translate-y-12 transition-all duration-700"
>
  <div className="max-w-5xl text-center space-y-8">
    <h2 className="text-4xl font-bold text-white">“Stay in style, unwind in comfort — our aesthetic rooms offer a cozy retreat with interiors designed to elevate every moment.”</h2>
    {/* <p className="text-lg text-gray-300">
      To book a room, kindly contact us
    </p> */}

    {/* Modern Gallery with multiple images */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {[
        "/outside_room_1.jpg",
        "/shower_1.jpg",
        "/room_1.jpg",
        "/room_2.jpg",
        "/kitchen_1.jpg",
        "/outside_room_2.jpg",
      ].map((src, i) => (
        <div
          key={i}
          className={`overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105
            ${i % 2 === 0 ? "rotate-1" : "-rotate-1"} hover:rotate-0 cursor-pointer`}
          onClick={() => setLightboxImage(src)}
        >
          <img
            src={src}
            alt={`Room ${i + 1}`}
            className="w-full h-64 object-cover"
          />
        </div>
      ))}
    </div>
  </div>

  {/* Lightbox Overlay */}
  {lightboxImage && (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
      onClick={() => setLightboxImage(null)}
    >
      <img
        src={lightboxImage}
        alt="Full view"
        className="max-w-full max-h-full object-contain rounded-lg shadow-xl"
      />
      <button
        className="absolute top-6 right-6 text-white text-3xl font-bold"
        onClick={() => setLightboxImage(null)}
      >
        ×
      </button>
    </div>
  )}
</section>





      {/* MINI SHOP */}
      <section
        id="mini-shop"
        ref={(el) => (sectionsRef.current[2] = el)}
        className="min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white px-6 opacity-0 translate-y-12 transition-all duration-700"
      >
        <div className="max-w-5xl text-center space-y-4">
          <h2 className="text-4xl font-bold text-[#8AAF4F]">Mini Shop</h2>
          <p className="text-lg text-gray-300">
            Snacks, drinks, and essentials for your night.
          </p>
        </div>
      </section>

      {/* PARTY CUSTOMER */}
      <section
        id="customer-feedback"
        ref={(el) => (sectionsRef.current[3] = el)}
        className="min-h-screen flex items-center justify-center bg-[#141414] text-white px-6 opacity-0 translate-y-12 transition-all duration-700"
      >
        <div className="max-w-5xl text-center space-y-8">
          <h2 className="text-4xl font-bold text-white">
            YOUR FAVORITE DRINKS WITH YOUR FAVORITE PEOPLE
          </h2>

          {/* ------------------- Inserted Content ------------------- */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-left">
            {/* Left: Message bubble */}
            <div className="flex-1">
              <div className="bg-[#1f1f1f] rounded-xl p-5 shadow-lg relative">
                <p className="text-gray-200 text-lg">
                  "We had an amazing night at Mangga Tree! The beers, music, and cozy
                  environment made it unforgettable."
                </p>
                {/* Bubble pointer */}
                <div className="absolute -right-4 top-8 w-0 h-0 border-t-6 border-t-transparent border-b-6 border-b-transparent border-l-6 border-l-[#1f1f1f]"></div>
              </div>
              <p className="mt-2 text-gray-400 italic">– Happy Customer</p>
            </div>

            {/* Right: Image group */}
            <div className="flex-1 grid grid-cols-2 gap-3">
              <img
                src="/group_1.jpg"
                alt="People enjoying drinks"
                className="w-full h-40 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/group_2.jpg"
                alt="Group of friends"
                className="w-full h-40 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/group_3.jpg"
                alt="Cheers!"
                className="w-full h-40 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/group_4.jpg"
                alt="Smiles"
                className="w-full h-40 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          {/* ----------------- End Inserted Content ----------------- */}

          <h2 className="text-4xl font-bold text-white">"SEE YOU AT MANGGA TREE!"</h2>
        </div>
      </section>


      {/* FLOATING MENU */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

        {/* Menu Items */}
        <div
          className={`flex flex-col gap-3 bg-black/70 backdrop-blur-md p-3 rounded-xl shadow-lg
          text-white transition-all duration-300 origin-bottom
          ${menuOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"}`}
        >
          <a
            href="#beer-garden"
            className="px-4 py-2 rounded-lg hover:bg-[#8AAF4F] text-sm font-semibold"
          >
            BEER GARDEN
          </a>
          <a
            href="#room-rental"
            className="px-4 py-2 rounded-lg hover:bg-[#8AAF4F] text-sm font-semibold"
          >
            ROOM RENTAL
          </a>
          <a
            href="#mini-shop"
            className="px-4 py-2 rounded-lg hover:bg-[#8AAF4F] text-sm font-semibold"
          >
            MINI SHOP
          </a>

          <a
            href="#customer-feedback"
            className="px-4 py-2 rounded-lg hover:bg-[#8AAF4F] text-sm font-semibold"
          >
            CUSTOMER FEEDBACKS
          </a>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`mt-3 w-12 h-12 rounded-full bg-[#8AAF4F] text-white text-xl
          shadow-lg flex items-center justify-center
          transition-all duration-300 hover:bg-[#7ea049]
          `}
          aria-label="Toggle menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>
    </main>
  );
}
