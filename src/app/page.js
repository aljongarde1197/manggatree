export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center">

      {/* Background Image with Black & White */}
      <div
        className="absolute inset-0 bg-cover bg-center filter grayscale brightness-75"
        style={{
          backgroundImage: "url('/background-cover.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 text-white space-y-6 animate-fade-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">
          MANGGA TREE
        </h2>

        <h4 className="text-2xl md:text-3xl font-thin mb-2">
          MINI SHOP | BEER GARDEN | ROOM STAY + RENT
        </h4>

        <p className="text-lg md:text-2xl text-gray-200 max-w-xl mx-auto">
          Turn a little break into a long and enjoyable night.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a
            href="#learn-more"
            className="px-6 py-3 bg-[#8AAF4F] text-white rounded-lg font-semibold hover:bg-[#7ea049] transition"
          >
            Learn More
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-white text-white rounded-lg font-semibold bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
          >
            Contact Us
          </a>
        </div>
      </div>


    </main>
  );
}
