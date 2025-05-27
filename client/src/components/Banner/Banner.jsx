import React from "react";
import TravelImg from "../../assets/travelbox.png";
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";

const Banner = () => {
  const services = [
    {
      icon: <MdFlight className="text-2xl" />,
      name: "Flight Bookings",
      color: "bg-violet-100 dark:bg-violet-400"
    },
    {
      icon: <MdOutlineLocalHotel className="text-2xl" />,
      name: "Luxury Stays",
      color: "bg-orange-100 dark:bg-orange-400"
    },
    {
      icon: <IoIosWifi className="text-2xl" />,
      name: "Seamless Connectivity",
      color: "bg-green-100 dark:bg-green-400"
    },
    {
      icon: <IoFastFoodSharp className="text-2xl" />,
      name: "Gourmet Experiences",
      color: "bg-yellow-100 dark:bg-yellow-400"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image section */}
          <div 
            data-aos="fade-right"
            className="w-full lg:w-1/2 flex justify-center"
          >
            <img
              src={TravelImg}
              alt="Travel experience"
              className="max-w-md w-full h-auto rounded-xl shadow-xl object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1
              data-aos="fade-left"
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Curated Kenyan Experiences
            </h1>
            
            <p 
              data-aos="fade-left"
              data-aos-delay="100"
              className="text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              From the sweeping savannahs of Maasai Mara to the pristine beaches of Diani, we craft unforgettable journeys that showcase Kenya's breathtaking diversity. Our expert planners handle every detail so you can immerse yourself in adventure.
            </p>

            <div 
              data-aos="fade-up"
              data-aos-delay="200"
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  <span className={`${service.color} p-3 rounded-full shadow-sm`}>
                    {service.icon}
                  </span>
                  <span className="font-medium">{service.name}</span>
                </div>
              ))}
            </div>

            <button
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-6 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:shadow-lg transition-all duration-300"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;