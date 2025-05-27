import React from "react";
import { motion } from "framer-motion"; // Replaces AOS for smoother animations
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-full w-full">
      {/* Video overlay with better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 z-0"></div>

      {/* Content container */}
      <div className="relative h-full flex items-center justify-center p-4 z-10">
        <div className="container max-w-4xl text-center text-white space-y-6 px-4">
          {/* Tagline - More emphasis on brand */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl font-medium text-primary-200"
          >
            Eniday Tours and Travels
          </motion.p>

          {/* Main heading - More impactful */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Unforgettable
            </span>{" "}
            Kenyan Adventures
          </motion.h1>

          {/* Subheading - More concise and compelling */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto"
          >
            Experience Africa's wonders with our expertly curated safaris, beach
            getaways, and cultural journeys.
          </motion.p>

          {/* CTA Button - More prominent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-2"
          >
            <Link to="/packages">
              <button
                className="relative px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black/30"
                aria-label="Explore our travel packages"
              >
                Start Your Journey
                <span className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
