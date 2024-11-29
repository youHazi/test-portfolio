import React from 'react';

const TechIcon = ({ children, label }) => (
  <div className="flex flex-col items-center p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-custom-blue transition-all duration-300">
    <svg 
      viewBox="0 0 24 24" 
      className="w-10 h-10 text-custom-blue mb-2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
    <span className="text-sm text-gray-300 font-medium">{label}</span>
  </div>
);

export default TechIcon;