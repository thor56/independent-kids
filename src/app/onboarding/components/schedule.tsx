"use client";

import { useState } from 'react';
import Button from '@/app/Components/common/Button/Button';
import { useOnboarding } from '../hooks/useOnboarding';

interface Activity {
  type: string;
  location: string;
  date: string;
  time: string;
}

export default function ScheduleScreen() {
  const { goToNextStep, goToPreviousStep, updateOnboardingData } = useOnboarding();
  
  const [activities, setActivities] = useState<Activity[]>([{ type: '', location: '', date: '', time: '' }]);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newActivities = [...activities];
    newActivities[index][name as keyof Activity] = value;
    setActivities(newActivities);
  };

  const handleAddActivity = () => {
    setActivities([...activities, { type: '', location: '', date: '', time: '' }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateOnboardingData({ activities });
    goToNextStep();
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-8">
      <h1 className="text-5xl font-bold text-foreground">Activities/Extracurricular</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground">Activity Type</label>
              <input
                type="text"
                name="type"
                value={activity.type}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">Activity Location</label>
              <input
                type="text"
                name="location"
                value={activity.location}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">Activity Date</label>
              <input
                type="date"
                name="date"
                value={activity.date}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">Activity Time</label>
              <input
                type="time"
                name="time"
                value={activity.time}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddActivity}
          className="text-brand-green hover:underline"
        >
          + Add Activity
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
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
} 