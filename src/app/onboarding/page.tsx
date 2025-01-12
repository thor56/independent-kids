"use client";

import { useOnboarding } from '@/hooks/useOnboarding';
import ProfileScreen from './components/ProfileScreen';
import { ONBOARDING_STEPS } from './config/steps';
import WelcomeScreen from './components/WelcomeScreen';

export default function OnboardingPage() {
  const { currentStep } = useOnboarding();

  // Conditional rendering based on currentStep
  const renderStep = () => {
    switch (currentStep) {
      case ONBOARDING_STEPS.PROFILE:
        return <ProfileScreen />;
      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {renderStep()}
    </div>
  );
}