import React from "react";
import Image  from "next/image";
import Navigation from "@/components/Navigation";
import GeometricPattern from "@/components/GeometricPattern";

const HomePage: React.FC = () => {
  const leftPatternColors = {
    primary: 'bg-blue-800',
    secondary: 'bg-blue-500',
    light: 'bg-blue-300'
  };
  
  const rightPatternColors = {
    primary: 'bg-pink-600',
    secondary: 'bg-pink-400',
    light: 'bg-pink-300'
  };
  
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navigation 
        leftColors={{ primary: 'bg-blue-800', secondary: 'bg-blue-500' }}
        rightColors={{ primary: 'bg-pink-600', secondary: 'bg-pink-400' }}
        currentPage="home"
      />
      
      {/* Main Content */}
      <main className="relative flex items-center justify-center px-8 py-16 min-h-[70vh]">
        {/* Left Pattern */}
        <GeometricPattern side="left" colors={leftPatternColors} />
        
        {/* Hero Section */}
        <div className="flex items-center gap-16 z-10 relative">
          <div className="relative">
            <Image 
              src="/assets/simrah.jpg"
              alt="Simrah"
              width={300}
              height={400}
              className="rounded-xl object-cover shadow-xl"
            />
          </div>
          
          <div className="text-left">
            <h1 className="text-6xl font-bold text-gray-800 mb-2 italic transform -rotate-2">
              Hello World!
            </h1>
            <h2 className="text-6xl font-bold text-gray-800 mb-6 italic transform -rotate-1">
              I&apos;m Simrah Shabandri
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Feel free to click around and explore.<br />
              Make yourself at home :]
            </p>
          </div>
        </div>
        
        {/* Right Pattern */}
        <GeometricPattern side="right" colors={rightPatternColors} />
      </main>
    </div>
  );
};

export default HomePage;