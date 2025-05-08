import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About Us
          </h1>
          
          {/* Mission Statement */}
          <div className="mb-8" >
            <h2 className="text-2xl font-semibold mb-3 text-primary/80">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300">
              To inspire unforgettable journeys across Kenya by connecting travelers with authentic wildlife adventures, pristine beaches, and vibrant cultural experiences—all while promoting sustainable tourism that benefits local communities.
            </p>
          </div>

          {/* Vision Statement */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-primary/80">Our Vision</h2>
            <p className="text-gray-700 dark:text-gray-300">
              To be East Africa’s most trusted travel curator, where every itinerary transforms visitors into lifelong ambassadors for Kenya’s natural wonders and rich heritage.
            </p>
          </div>

          {/* Core Values */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-primary/80">Our Core Values</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Sustainability:</strong> Partnering with eco-conscious lodges and conservation projects.</li>
              <li><strong>Authenticity:</strong> Showcasing Kenya beyond tourist clichés through local partnerships.</li>
              <li><strong>Expertise:</strong> Leveraging our Nairobi-based team’s 15+ years of on-ground knowledge.</li>
              <li><strong>Community Impact:</strong> Ensuring 30% of proceeds support education and wildlife initiatives.</li>
            </ul>
          </div>

          {/* Nairobi Advantage */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-primary/80">Why Nairobi?</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Based in Nairobi—Africa’s safari capital—we’re at the heart of Kenya’s tourism ecosystem. Our location gives you:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Direct access to premier parks (Maasai Mara, Amboseli) within 4-6 hours’ drive</li>
              <li>Exclusive partnerships with Nairobi National Park for city safaris</li>
              <li>24/7 support from our local operations team</li>
            </ul>
          </div>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;