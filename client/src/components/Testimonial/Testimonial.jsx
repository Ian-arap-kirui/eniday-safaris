import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Samuel K.",
    text: "The Maasai Mara migration safari exceeded all expectations! Our guide spotted a leopard on our first game drive. The luxury tented camp made us feel immersed in nature without sacrificing comfort. Already planning our return trip!",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
    trip: "Maasai Mara Great Migration Package"
  },
  {
    id: 2,
    name: "Sophie M.",
    text: "Diani Beach was paradise! The team arranged the perfect mix of relaxation and adventure - from snorkeling in the marine park to a romantic dhow dinner cruise. The Swahili hospitality made us feel like family.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
    trip: "Coastal Escape to Diani"
  },
  {
    id: 3,
    name: "Raj & Priya P.",
    text: "Our cultural tour to Lamu felt like stepping back in time. The team connected us with local artisans and arranged a private cooking class with a Swahili chef. The attention to detail was remarkable - they even accommodated our dietary restrictions!",
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 4,
    trip: "Lamu Cultural Immersion"
  },
  {
    id: 4,
    name: "The Johnson Family",
    text: "Perfect first safari for our kids (ages 8 & 11)! The guides were incredible at engaging them with animal tracking skills. Seeing elephants in Amboseli with Kilimanjaro in the background was unforgettable. Educational and fun!",
    img: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
    trip: "Family Safari Adventure"
  },
  {
    id: 5,
    name: "David W.",
    text: "As a solo female traveler, I felt completely safe on my Mount Kenya trek. The guides were professional and the porter team went above and beyond. Waking up above the clouds at Shipton's Camp was worth every step!",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
    trip: "Mount Kenya Summit Challenge"
  }
];
const Testimonial = () => {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Increased for better readability
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section 
      data-aos="fade-up" 
      className="py-12 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-primary to-secondary text-white mb-4">
            What Our Guests Say
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Traveler Testimonials
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Hear from adventurers who've experienced Kenya's magic through our curated journeys
          </p>
        </div>

        {/* Testimonial slider */}
        <div data-aos="zoom-in" className="max-w-4xl mx-auto">
          <Slider {...sliderSettings}>
            {testimonialData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

// Extracted testimonial card component for better reusability
const TestimonialCard = ({ name, text, img, rating, trip }) => (
  <div className="px-2">
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-full flex flex-col">
      <div className="flex items-center mb-4">
        <img 
          src={img} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
          loading="lazy"
        />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} filled={i < rating} />
            ))}
          </div>
        </div>
      </div>
      <blockquote className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
        "{text}"
      </blockquote>
      <div className="text-sm text-primary dark:text-secondary font-medium">
        {trip}
      </div>
    </div>
  </div>
);

// Simple star rating component
const StarIcon = ({ filled }) => (
  <svg
    className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default Testimonial;
