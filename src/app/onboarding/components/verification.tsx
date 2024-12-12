"use client";

import { useState } from 'react';
import Button from '@/app/Components/common/Button/Button';
import { useOnboarding } from '../hooks/useOnboarding';

interface Child {
  firstName: string;
  lastName: string;
  gender: string;
  age: string;
  grade: string;
  school: string;
}

export default function VerificationScreen() {
  const { goToNextStep, goToPreviousStep, updateOnboardingData } = useOnboarding();
  
  const [children, setChildren] = useState<Child[]>([{ firstName: '', lastName: '', gender: '', age: '', grade: '', school: '' }]);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newChildren = [...children];
    newChildren[index][name as keyof Child] = value;
    setChildren(newChildren);
  };

  const handleAddChild = () => {
    setChildren([...children, { firstName: '', lastName: '', gender: '', age: '', grade: '', school: '' }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateOnboardingData({ children });
    goToNextStep();
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-8">
      <h1 className="text-5xl font-bold text-foreground">Child Information</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {children.map((child, index) => (
          <div key={index} className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground">First name</label>
              <input
                type="text"
                name="firstName"
                value={child.firstName}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">Last name</label>
              <input
                type="text"
                name="lastName"
                value={child.lastName}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">Gender</label>
              <select
                name="gender"
                value={child.gender}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">Age</label>
              <input
                type="number"
                name="age"
                value={child.age}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">Grade</label>
              <input
                type="text"
                name="grade"
                value={child.grade}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">School/Daycare Location</label>
              <input
                type="text"
                name="school"
                value={child.school}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddChild}
          className="text-brand-green hover:underline"
        >
          + Add kid
        </button>
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            className="text-foreground border-foreground hover:bg-foreground/10"
            onClick={goToPreviousStep}
          >
            Back
          </Button>
          <Button 
            variant="primary" 
            className="bg-brand-green text-white"
            type="submit"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
} 