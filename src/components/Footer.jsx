import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer component with links and copyright information
 * @returns {JSX.Element} - Footer component
 */
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              PLP Task Manager
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              A modern task management application built with React and Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/tasks" 
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Tasks
                </Link>
              </li>
              <li>
                <Link 
                  to="/api" 
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  API Data
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center md:text-left">
            <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-3">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://react.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  React Documentation
                </a>
              </li>
              <li>
                <a 
                  href="https://tailwindcss.com/docs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Tailwind CSS
                </a>
              </li>
              <li>
                <a 
                  href="https://vitejs.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Vite
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a 
                href="#" 
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 