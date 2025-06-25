import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component for displaying content in a boxed layout
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.title - Card title (optional)
 * @param {string} props.subtitle - Card subtitle (optional)
 * @returns {JSX.Element} - Card component
 */
const Card = ({ children, className = '', title, subtitle, ...rest }) => {
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 ${className}`}
      {...rest}
    >
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Card; 