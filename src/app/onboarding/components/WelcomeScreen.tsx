"use client";

import Image from 'next/image';
import Button from '@/app/Components/common/Button/Button';
import { useOnboarding } from '../hooks/useOnboarding';

export default function WelcomeScreen() {
  const { goToNextStep } = useOnboarding();

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Left side - Image */}
      <div className="w-1/3 h-full relative">
        <img 
          src="/onBoardingScreen1.png" 
          alt="Onboarding illustration"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right side - Content */}
      <div className="w-1/2 flex flex-col justify-between p-16">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-[40px] font-bold leading-tight">
            Are You Ready?
          </h1>
          <p className="text-xl leading-relaxed mt-6">
            Let's start by setting up your profile. This will help us match you with other parents for carpooling.
          </p>
        </div>
        
        <div className="flex justify-end">
          <Button 
            variant="primary"
            onClick={goToNextStep}
            className="rounded-lg px-8 py-4 text-lg font-medium bg-[#008F51] hover:bg-[#007A45] transition-colors"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}