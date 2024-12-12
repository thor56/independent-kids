"use client";

import HeroContent from './HeroContent';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.8)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-1 container mx-auto px-6 pt-32">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero; 