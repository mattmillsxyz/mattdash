'use client';
import { ComponentProps, useContext } from 'react';
import { usePathname } from 'next/navigation';
import { Spinner } from '@nextui-org/react';
import { UserContext } from '../context/UserContext';

import Login from '@/app/login/page';
import SignUp from '@/app/signup/page';
import Onboarding from '@/components/Onboarding';

function AuthWrapper({ children }: { children: any }) {
  const { user, userData, loading } = useContext(UserContext);
  const pathname = usePathname();

  if (loading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <Spinner color="success" />
      </div>
    );
  } else if (user) {
    if (userData && !userData.onboardingComplete) return <Onboarding />;
    return children;
  }

  return pathname === '/signup' ? <SignUp /> : <Login />;
}

export default AuthWrapper;
