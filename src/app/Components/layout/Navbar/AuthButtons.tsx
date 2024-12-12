"use client";

import { useRouter } from 'next/navigation';
import Button from '../../common/Button/Button';

const AuthButtons = () => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-4">
      <Button 
        variant="primary" 
        className="bg-brand-green hover:bg-brand-green/90"
        onClick={() => router.push('/onboarding')}
      >
        Sign Up
      </Button>
      <Button 
        variant="outline" 
        className="text-white border-white hover:bg-white/10"
      >
        Sign In
      </Button>
    </div>
  );
};

export default AuthButtons; 