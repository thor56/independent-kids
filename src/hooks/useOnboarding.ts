import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { OnboardingContext } from '../app/onboarding/layout';
import { ONBOARDING_STEPS } from '../app/onboarding/config/steps';

export const useOnboarding = () => {
  const router = useRouter();
  const { currentStep, setCurrentStep, onboardingData, setOnboardingData } = useContext(OnboardingContext);

  // Function to navigate to the next step
  const goToNextStep = () => {
    const nextStep = currentStep + 1;
    console.log(`Navigating to step: ${nextStep}`);
    setCurrentStep(nextStep); // Update the current step in state
  };

  // Function to navigate to the previous step
  const goToPreviousStep = () => {
    const prevStep = currentStep - 1;
    setCurrentStep(prevStep); // Update the current step in state
  };

  // Function to update the onboarding data
  const updateOnboardingData = (newData: any) => {
    setOnboardingData({ ...onboardingData, ...newData });
  };

  return {
    currentStep,
    onboardingData,
    goToNextStep,
    goToPreviousStep,
    updateOnboardingData,
  };
};
