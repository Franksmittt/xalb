'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import LandingPage from './LandingPage';
import { isAuthenticated } from '@/lib/auth';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  
  // Don't show header/footer on login page
  const hideLayout = pathname === '/login';
  
  // Public routes that don't need authentication
  const publicRoutes = ['/login'];
  const isPublicRoute = publicRoutes.includes(pathname);

  useEffect(() => {
    // Only check authentication on client side after mount
    if (typeof window !== 'undefined') {
      setAuthenticated(isAuthenticated());
    }
  }, [pathname]);

  if (hideLayout) {
    return <>{children}</>;
  }

  // For protected routes, check authentication
  if (!isPublicRoute) {
    if (authenticated === null) {
      // Loading state
      return (
        <div className="min-h-screen bg-gradient-to-br from-[#03050d] via-[#080d1c] to-[#140621] flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
      );
    }

    if (!authenticated) {
      // Show landing page for non-authenticated users on protected routes
      return <LandingPage />;
    }
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

