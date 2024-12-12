// ProfileScreen.tsx
"use client";

import { useState } from 'react';
import { useOnboarding } from '../hooks/useOnboarding';
import ChatInterface from './ChatInterface';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  streetAddress: string;
  aptSuite: string;
  city: string;
  state: string;
  zipCode: string;
}

export default function ProfileScreen() {
  const { goToPreviousStep } = useOnboarding();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [showChat, setShowChat] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+1',
    phoneNumber: '',
    streetAddress: '',
    aptSuite: '',
    city: '',
    state: 'CA',
    zipCode: '',
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const userData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: `${formData.countryCode}${formData.phoneNumber}`,
        address: {
          street: formData.streetAddress,
          apt_suite: formData.aptSuite,
          city: formData.city,
          state: formData.state,
          zipcode: formData.zipCode,
          country: 'USA'
        }
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      const createdUser = await response.json();
      setUserId(createdUser._id);
      setShowChat(true);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create user');
      console.error('Error creating user:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (showChat && userId) {
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

        {/* Right side - Chat Interface */}
        <div className="w-2/3 flex flex-col h-full bg-[#f5f5f5]">
          <div className="flex-1 p-6">
            <ChatInterface userId={userId} />
          </div>

          {/* Footer with Progress Bar */}
          <div className="px-16 py-8 bg-white border-t border-gray-200">
            <div className="max-w-3xl mx-auto">
              <div className="w-full h-1 bg-gray-100 rounded-full">
                <div className="w-1/3 h-full bg-[#008540] rounded-full"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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

      {/* Right side - Form */}
      <div className="w-2/3 flex flex-col h-full">
        <div className="flex-1 px-16 py-12 overflow-y-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-[48px] font-bold font-roboto mb-12">
              Parent Information
            </h1>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">
                {error}
              </div>
            )}

            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[20px] text-gray-900 mb-3 font-bold">
                    First name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full h-[50px] border border-gray-300 rounded-full px-4 shadow-[0_2px_4px_0px_rgba(0,0,0,0.1)]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[20px] text-gray-900 mb-3 font-bold">
                    Last name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full h-[50px] border border-gray-300 rounded-full px-4 shadow-[0_2px_4px_0px_rgba(0,0,0,0.1)]"
                    required
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[20px] text-gray-900 mb-3 font-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-[50px] border border-gray-300 rounded-full px-4 shadow-[0_2px_4px_0px_rgba(0,0,0,0.1)]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[20px] text-gray-900 mb-3 font-bold">
                    Phone number
                  </label>
                  <div className="flex h-[50px]">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      className="w-[100px] rounded-l-full border border-gray-300 pl-3 pr-2 bg-white shadow-[0_2px_4px_0px_rgba(0,0,0,0.1)]"
                    >
                      <option value="+1">🇺🇸 +1</option>
                    </select>
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="flex-1 border border-l-0 border-gray-300 rounded-r-full px-4 shadow-[0_2px_4px_0px_rgba(0,0,0,0.1)]"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Address Fields */}
              <div>
                <label className="block text-[20px] text-gray-900 mb-3 font-bold">
                  Street Address
                </label>
                <input
                  type="text"
                  value={formData.streetAddress}
                  onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                  className="w-full h-[50px] border border-gray-300 rounded-full px-4 shadow-[0_2px_4px_0px_rgba(0,0,0,0.1)]"
                  required
                />
              </div>

              <div>
                <label className="block text-[20px] text-gray-900 mb-3 font-bold">
                  Apt/Suite <span className="text-gray-500">(optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.aptSuite}
                  onChange={(e) => setFormData({ ...formData, aptSuite: e.target.value })}
                  className="w-full h-[50px] border border-gray-300 rounded-full px-4 shadow-[0_2px_4px_0px_rgba(0,0,0,0.1)]"
                />
              </div>

              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-5">
                  <label className="block text-[20px] text-gray-900 mb-3 font-bold">
                    City
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full h-[50px] border border-gray-300 rounded-full px-4 shadow-[0_2px_4px_0px_rgba(0,0,0,0.1)]"
                    required
                  />
                </div>
                <div className="col-span-3">
                  <label className="block text-[20px] text-gray-900 mb-3 font-bold">
                    State
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full h-[50px] border border-gray-300 rounded-full px-4 bg-white shadow-[0_2px_4px_0px_rgba(0,0,0,0.1)]"
                    required
                  >
                    <option value="CA">CA</option>
                    <option value="NY">NY</option>
                  </select>
                </div>
                <div className="col-span-4">
                  <label className="block text-[20px] text-gray-900 mb-3 font-bold">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    className="w-full h-[50px] border border-gray-300 rounded-full px-4 shadow-[0_2px_4px_0px_rgba(0,0,0,0.1)]"
                    required
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between">
                <button 
                  type="button"
                  onClick={goToPreviousStep}
                  className="text-[20px] font-medium text-gray-900 flex items-center hover:text-[#008540] transition-colors"
                  disabled={isLoading}
                >
                  ← Back
                </button>
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="h-[50px] w-[128px] bg-[#008540] text-white text-[20px] font-medium rounded-lg disabled:bg-gray-400 hover:bg-[#007535] transition-colors"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2" />
                      <span>Loading...</span>
                    </div>
                  ) : 'Next'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="px-16 py-8 border-t border-gray-200">
          <div className="max-w-3xl mx-auto">
            {/* Progress bar */}
            <div className="w-full h-1 bg-gray-100 rounded-full">
              <div className="w-1/3 h-full bg-[#008540] rounded-full"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}