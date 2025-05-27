import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import BlogsComp from "../components/Blogs/BlogsComp";
import { FiCalendar, FiMapPin, FiDollarSign, FiInfo, FiStar, FiClock } from "react-icons/fi";

const PackageDetails = () => {
  const location = useLocation();
  const { img, date, title, description, author, price, itinerary, overview, specialNotes, additionalInfo } = location.state;
  
  const [activeTab, setActiveTab] = useState('overview');
  
  // Sample itinerary data if not provided
  const defaultItinerary = [
    { day: 1, activity: "Arrival and welcome dinner", description: "Arrive at the destination and enjoy a traditional welcome dinner." },
    { day: 2, activity: "Morning safari drive", description: "Early morning game drive to spot wildlife at their most active time." },
    { day: 3, activity: "Cultural village visit", description: "Experience local culture and traditions with a guided village tour." }
  ];
  
  const itineraryData = itinerary || defaultItinerary;

  return (
    <div className="pt-20">
      {/* Hero Image */}
      <div className="h-[400px] overflow-hidden relative">
        <img
          src={img}
          alt={title}
          className="mx-auto h-full w-full object-cover transition duration-700 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <div className="container">
            <h1 className="text-4xl font-bold text-white">{title}</h1>
            <div className="flex items-center mt-2 text-white/90">
              <FiMapPin className="mr-1" />
              <span className="text-sm">{additionalInfo?.location || "Various Locations"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mt-8">
        {/* Price Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 border-l-4 border-primary">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Package Price</h3>
              <div className="flex items-center mt-2">
                <FiDollarSign className="text-primary mr-1" />
                <span className="text-2xl font-bold">{price || "1,999"}</span>
                <span className="text-gray-500 ml-2">per person</span>
              </div>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Book Now
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto mb-8 border-b border-gray-200 dark:border-gray-700">
          {['overview', 'itinerary', 'special-notes', 'additional-info'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium whitespace-nowrap ${
                activeTab === tab
                  ? "border-b-2 border-primary text-primary"
                  : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column (2/3 width) */}
          <div className="lg:col-span-2">
            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <FiInfo className="mr-2 text-primary" />
                  Overview
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{overview || description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium flex items-center">
                      <FiStar className="mr-2 text-primary" />
                      Highlights
                    </h3>
                    <ul className="mt-2 space-y-2">
                      {additionalInfo?.highlights?.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      )) || (
                        <>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Expert guided tours</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Luxury accommodation</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Unique cultural experiences</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium flex items-center">
                      <FiClock className="mr-2 text-primary" />
                      Duration
                    </h3>
                    <p className="mt-2">{additionalInfo?.duration || "7 days / 6 nights"}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'itinerary' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <FiCalendar className="mr-2 text-primary" />
                  Detailed Itinerary
                </h2>
                <div className="space-y-6">
                  {itineraryData.map((day, index) => (
                    <div key={index} className="border-l-2 border-primary pl-6 pb-6 relative">
                      <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                        {day.day}
                      </div>
                      <h3 className="text-lg font-medium">{day.activity}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-2">{day.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'special-notes' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Special Notes</h2>
                <div className="prose dark:prose-invert max-w-none">
                  {specialNotes || (
                    <>
                      <p>This package includes:</p>
                      <ul>
                        <li>All transportation during the tour</li>
                        <li>Accommodation as specified</li>
                        <li>Meals as indicated in the itinerary</li>
                        <li>Professional guide services</li>
                      </ul>
                      <p className="mt-4">Not included:</p>
                      <ul>
                        <li>International flights</li>
                        <li>Travel insurance</li>
                        <li>Personal expenses</li>
                      </ul>
                    </>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'additional-info' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
                <div className="prose dark:prose-invert max-w-none">
                  {additionalInfo?.details || (
                    <>
                      <h3>What to Bring</h3>
                      <ul>
                        <li>Comfortable walking shoes</li>
                        <li>Weather-appropriate clothing</li>
                        <li>Camera and extra batteries</li>
                        <li>Personal medications</li>
                      </ul>
                      <h3 className="mt-6">Cancellation Policy</h3>
                      <p>Full refund available for cancellations made at least 30 days before departure. Cancellations within 14-29 days receive a 50% refund. No refunds for cancellations within 14 days of departure.</p>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Column (1/3 width) */}
          <div className="space-y-6">
            {/* Author Info */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xl font-bold">
                  {author?.charAt(0) || "A"}
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Written by {author || "Admin"}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">on {date || "June 15, 2023"}</p>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Group Size: {additionalInfo?.groupSize || "4-12 people"}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Difficulty: {additionalInfo?.difficulty || "Moderate"}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Best Time: {additionalInfo?.bestTime || "June - October"}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Age Range: {additionalInfo?.ageRange || "12+ years"}</span>
                </div>
              </div>
            </div>

            {/* Inquiries Card */}
            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
              <h3 className="font-semibold mb-3">Have Questions?</h3>
              <p className="text-sm mb-4">Our travel experts are here to help you plan your perfect trip.</p>
              <button className="w-full px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* All Blogs Section */}
      <div className="mt-16">
        <BlogsComp />
      </div>
    </div>
  );
};

export default PackageDetails;