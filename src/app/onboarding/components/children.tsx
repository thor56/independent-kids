"use client";

import { useState } from 'react';
import Button from '@/app/Components/common/Button/Button';
import { useOnboarding } from '../hooks/useOnboarding';

export default function ChildrenScreen() {
  const { goToNextStep, goToPreviousStep, updateOnboardingData } = useOnboarding();
  
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    schoolName: '',
    schoolAddress: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    updateOnboardingData(formData);
    goToNextStep();
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - Image */}
      <div className="w-1/2 bg-gray-200">
        <img 
          src="/onBoardingScreen1.png" 
          alt="Onboarding illustration"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right side - Form */}
      <div className="w-1/2 flex flex-col justify-between p-16">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-[40px] font-bold leading-tight">
            Children Information
          </h1>
          <div className="space-y-6 mt-8">
            <div>
              <input
                type="text"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                placeholder="Child Name"
                className="w-full border border-gray-300 rounded-full px-6 py-3"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                placeholder="Child Age"
                className="w-full border border-gray-300 rounded-full px-6 py-3"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                placeholder="School Name"
                className="w-full border border-gray-300 rounded-full px-6 py-3"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="schoolAddress"
                value={formData.schoolAddress}
                onChange={handleChange}
                placeholder="School Address"
                className="w-full border border-gray-300 rounded-full px-6 py-3"
                required
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <Button 
            variant="outline"
            onClick={() => goToPreviousStep()}
            className="px-8 py-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Back
          </Button>
          <Button 
            variant="primary"
            onClick={() => handleSubmit()}
            className="px-8 py-4 bg-[#008F51] text-white rounded-lg hover:bg-[#007A45]"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}