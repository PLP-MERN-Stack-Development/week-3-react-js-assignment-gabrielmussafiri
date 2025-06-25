import React from 'react';
import ApiData from '../components/ApiData';

/**
 * API page component
 * @returns {JSX.Element} - API page
 */
const Api = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          API Integration
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Explore data from external APIs with search, pagination, and real-time updates.
        </p>
      </div>
      
      <ApiData />
    </div>
  );
};

export default Api; 