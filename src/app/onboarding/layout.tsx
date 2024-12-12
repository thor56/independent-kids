"use client";

import { createContext, useContext, useState } from 'react';

export const OnboardingContext = createContext({
  currentStep: 1,
  setCurrentStep: (step: number) => {},
  onboardingData: {},
  setOnboardingData: (data: any) => {},
});

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [onboardingData, setOnboardingData] = useState({});

  return (
    <OnboardingContext.Provider 
      value={{ 
        currentStep, 
        setCurrentStep, 
        onboardingData, 
        setOnboardingData 
      }}
    >
      <div className="min-h-screen bg-white">
        {children}
      </div>
    </OnboardingContext.Provider>
  );
} 