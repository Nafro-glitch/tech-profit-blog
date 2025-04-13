import React from 'react';

interface AdBannerProps {
  type: 'sidebar' | 'horizontal' | 'popup';
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  theme?: 'blue' | 'green' | 'yellow';
}

export default function AdBanner({ 
  type, 
  title, 
  description, 
  buttonText, 
  buttonLink,
  theme = 'blue' 
}: AdBannerProps) {
  
  // تحديد الألوان بناءً على السمة
  const themeColors = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      button: 'bg-blue-600 hover:bg-blue-700',
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      button: 'bg-green-600 hover:bg-green-700',
    },
    yellow: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      button: 'bg-yellow-600 hover:bg-yellow-700',
    },
  };
  
  const colors = themeColors[theme];
  
  // تحديد الأنماط بناءً على نوع الإعلان
  if (type === 'sidebar') {
    return (
      <div className={`${colors.bg} border ${colors.border} rounded-lg p-4 mb-6`}>
        <p className="text-sm text-gray-500 mb-1">إعلان</p>
        <h4 className="text-lg font-bold text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-600 mb-3 text-sm">{description}</p>
        <a 
          href={buttonLink} 
          className={`block text-center ${colors.button} text-white font-medium py-2 px-4 rounded-lg transition-colors`}
        >
          {buttonText}
        </a>
      </div>
    );
  }
  
  if (type === 'horizontal') {
    return (
      <div className={`${colors.bg} border ${colors.border} rounded-lg p-4 my-6 text-center`}>
        <p className="text-sm text-gray-500 mb-1">إعلان</p>
        <h4 className="text-lg font-bold text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-600 mb-3">{description}</p>
        <a 
          href={buttonLink} 
          className={`inline-block ${colors.button} text-white font-medium py-2 px-6 rounded-lg transition-colors`}
        >
          {buttonText}
        </a>
      </div>
    );
  }
  
  if (type === 'popup') {
    return (
      <div className="fixed bottom-4 left-4 z-50 max-w-sm">
        <div className={`${colors.bg} border ${colors.border} rounded-lg p-4 shadow-lg`}>
          <div className="flex justify-between items-start mb-2">
            <p className="text-sm text-gray-500">إعلان</p>
            <button className="text-gray-400 hover:text-gray-600">×</button>
          </div>
          <h4 className="text-lg font-bold text-gray-800 mb-2">{title}</h4>
          <p className="text-gray-600 mb-3 text-sm">{description}</p>
          <a 
            href={buttonLink} 
            className={`block text-center ${colors.button} text-white font-medium py-2 px-4 rounded-lg transition-colors`}
          >
            {buttonText}
          </a>
        </div>
      </div>
    );
  }
  
  return null;
}
