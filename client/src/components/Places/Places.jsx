import React from "react";
import PlaceCard from "./PlaceCard";
// import TurkanaImg from "../../assets/places/turkana.png";
import { tourPackages } from "../../utils/tourPackages";
import SearchInput from "../Search/SearchInput";

const Places = ({ handleOrderPopup }) => {
  // Group places by type
  const placesByType = tourPackages.reduce((acc, place) => {
    if (!acc[place.type]) {
      acc[place.type] = [];
    }
    acc[place.type].push(place);
    return acc;
  }, {});
  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container">

        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Tailored Travel Experiences
        </h1>

        {/* Dynamically render sections by type */}
        {Object.entries(placesByType).map(([type, places]) => (
          <div key={type} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <span className="w-4 h-4 bg-primary/80 mr-2"></span>
              {type}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {places.map((item, index) => (
                <PlaceCard
                  handleOrderPopup={handleOrderPopup}
                  key={`${type}-${index}`}
                  {...item}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Places;
