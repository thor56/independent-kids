interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  return (
    <div className="w-full max-w-xl mx-auto px-6 py-4">
      <div className="h-2 bg-gray-200 rounded-full">
        <div 
          className="h-full bg-brand-green rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
} 