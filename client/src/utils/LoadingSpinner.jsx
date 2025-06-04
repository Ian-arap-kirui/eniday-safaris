import React from 'react';
import { FiLoader } from 'react-icons/fi';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 z-50 flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary">
        <FiLoader className="w-full h-full text-primary opacity-0" /> {/* For accessibility */}
      </div>
      <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300 animate-pulse">
        Loading your adventure...
      </p>
    </div>
  );
};

export default LoadingSpinner;