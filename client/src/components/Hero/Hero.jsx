import React from "react";

const Hero = () => {
  return (
    <div className="relative h-full bg-black/20">
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative h-full flex justify-center items-center p-4">
        <div className="container text-center text-white space-y-4">
          <p data-aos="fade-up" className="text-lg md:text-xl">
            Welcome to Eniday Tours and Travels
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="font-bold text-4xl md:text-5xl"
          >
            Your Journey Begins Here!
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-lg md:text-xl opacity-80"
          >
            Discover the world’s most breathtaking destinations and experience
            travel like never before. At Eniday, every journey is designed to
            inspire and create unforgettable memories.
          </p>
          <button
            data-aos="fade-up"
            data-aos-delay="700"
            className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-6 py-3 rounded-full duration-200"
          >
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
