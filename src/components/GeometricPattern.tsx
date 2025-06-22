import React from 'react';

interface GeometricPatternProps {
  side: 'left' | 'right';
  colors: {
    primary: string;
    secondary: string;
    light: string;
  };
}

const GeometricPattern: React.FC<GeometricPatternProps> = ({ side, colors }) => {
  const { primary, secondary, light } = colors;
  
  return (
    <div className={`absolute top-0 h-full w-48 flex flex-col justify-around z-0 ${
      side === 'left' ? 'left-0 pl-8' : 'right-0 pr-8'
    }`}>
      <div className="flex flex-col space-y-2">
        <div className="flex gap-2">
          <div className={`w-6 h-6 rounded-sm ${light}`}></div>
          <div className={`w-6 h-6 rounded-sm ${primary}`}></div>
        </div>
        <div className={`flex gap-2 ${side === 'left' ? 'ml-5' : 'mr-5'}`}>
          <div className={`w-6 h-6 rounded-sm ${primary}`}></div>
          <div className={`w-6 h-6 rounded-sm ${secondary}`}></div>
          <div className={`w-6 h-6 rounded-sm ${primary}`}></div>
        </div>
        <div className="flex gap-2">
          <div className={`w-6 h-6 rounded-sm ${secondary}`}></div>
          <div className={`w-6 h-6 rounded-sm ${primary}`}></div>
        </div>
        <div className={`flex gap-2 ${side === 'left' ? 'ml-5' : 'mr-5'}`}>
          <div className={`w-6 h-6 rounded-sm ${primary}`}></div>
        </div>
      </div>
      
      <div className="flex flex-col space-y-2">
        <div className="flex gap-2">
          <div className={`w-6 h-6 rounded-sm ${primary}`}></div>
          <div className={`w-6 h-6 rounded-sm ${secondary}`}></div>
        </div>
        <div className={`flex gap-2 ${side === 'left' ? 'ml-5' : 'mr-5'}`}>
          <div className={`w-6 h-6 rounded-sm ${secondary}`}></div>
          <div className={`w-6 h-6 rounded-sm ${primary}`}></div>
          <div className={`w-6 h-6 rounded-sm ${light}`}></div>
        </div>
      </div>
      
      <div className="flex flex-col space-y-2">
        <div className="flex gap-2">
          <div className={`w-6 h-6 rounded-sm ${primary}`}></div>
          <div className={`w-6 h-6 rounded-sm ${secondary}`}></div>
        </div>
        <div className={`flex gap-2 ${side === 'left' ? 'ml-5' : 'mr-5'}`}>
          <div className={`w-6 h-6 rounded-sm ${secondary}`}></div>
        </div>
        <div className="flex gap-2">
          <div className={`w-6 h-6 rounded-sm ${primary}`}></div>
          <div className={`w-6 h-6 rounded-sm ${secondary}`}></div>
          <div className={`w-6 h-6 rounded-sm ${light}`}></div>
          <div className={`w-6 h-6 rounded-sm ${primary}`}></div>
        </div>
      </div>
    </div>
  );
};

export default GeometricPattern;