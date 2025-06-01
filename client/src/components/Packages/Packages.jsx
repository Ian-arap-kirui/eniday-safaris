import React, { useState, useEffect } from "react";
import PackageCard from "./PackageCard";
import { tourPackages } from "../../utils/tourPackages";
import SearchInput from "../Search/SearchInput";
import { FiSearch, FiCompass } from "react-icons/fi";

const Packages = ({ handleOrderPopup }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  // Popular search suggestions
  const popularSearches = [
    "Maasai Mara",
    "Lamu",
    "Safari",
    "Mount Kenya",
    "National Park",
    "Adventure",
    "Wildlife",
    "Beach",
  ];

  // Filter packages based on search term
  const filteredPackages = tourPackages.filter(
    (pkg) =>
      pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (searchTerm) {
      setIsLoading(true);
      setShowResults(false);

      const timer = setTimeout(() => {
        setIsLoading(false);
        setShowResults(true);
      }, 850);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
      setShowResults(true);
    }
  }, [searchTerm]);

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSelectedSuggestion(suggestion);
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container">
        {/* Permanent Search Suggestions UI */}
        <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center">
              <div className="mr-4 p-3 bg-primary/10 rounded-full">
                <FiSearch className="text-primary text-xl" />
              </div>
              <div>
                <h3 className="font-semibold">Popular Destinations</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Try these popular searches
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(search)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedSuggestion === search
                      ? "bg-primary text-white shadow-md"
                      : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <SearchInput
            searchTerm={searchTerm}
            setSearchTerm={(term) => {
              setSearchTerm(term);
              setSelectedSuggestion(null); // Clear selection when typing manually
            }}
          />
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Tailored Travel Experiences
          </h1>
        </div>

        {/* Loading state */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}

        {/* Results */}
        {showResults && !isLoading && (
          <>
            {filteredPackages.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredPackages.map((item, index) => (
                  <PackageCard
                    handleOrderPopup={handleOrderPopup}
                    key={`${item.type}-${index}`}
                    {...item}
                  />
                ))}
              </div>
            ) : searchTerm ? (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                  <FiSearch className="text-gray-400 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No results found</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We couldn't find any packages matching "{searchTerm}"
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedSuggestion(null);
                  }}
                  className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                >
                  Show all packages
                </button>
              </div>
            ) : null}
          </>
        )}
      </section>
    </div>
  );
};

export default Packages;
