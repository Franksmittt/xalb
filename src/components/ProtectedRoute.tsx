'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';
import LandingPage from './LandingPage';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = () => {
      const auth = isAuthenticated();
      setAuthenticated(auth);
      if (!auth) {
        // Don't redirect, just show landing page
      }
    };
    checkAuth();
  }, []);

  if (authenticated === null) {
    // Loading state
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#03050d] via-[#080d1c] to-[#140621] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!authenticated) {
    return <LandingPage />;
  }

  return <>{children}</>;
}

