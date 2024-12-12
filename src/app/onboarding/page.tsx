"use client";

import { useOnboarding } from './hooks/useOnboarding';
import ProfileScreen from './components/ProfileScreen';
import ChildrenScreen from './components/children';
import ScheduleScreen from './components/schedule';
import VerificationScreen from './components/verification';
import { ONBOARDING_STEPS } from './config/steps';
import WelcomeScreen from './components/WelcomeScreen';

export default function OnboardingPage() {
  const { currentStep } = useOnboarding();

  // Conditional rendering based on currentStep
  const renderStep = () => {
    switch (currentStep) {
      case ONBOARDING_STEPS.PROFILE:
        return <ProfileScreen />;
      case ONBOARDING_STEPS.CHILDREN:
        return <ChildrenScreen />;
      case ONBOARDING_STEPS.SCHEDULE:
        return <ScheduleScreen />;
      case ONBOARDING_STEPS.VERIFICATION:
        return <VerificationScreen />;
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