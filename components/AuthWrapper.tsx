'use client';
import { useContext, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { UserContext } from '../context/UserContext';

import Login from '@/app/login/page';
import SignUp from '@/app/signup/page';

function AuthWrapper({ children }: { children: any }) {
  const { user, loading } = useContext(UserContext);
  const pathname = usePathname();

  console.log('DEBUG: router: ', pathname);

  if (loading) {
    return <div>Loading...</div>;
  } else if (user) {
    return children;
  }

  return pathname === '/signup' ? <SignUp /> : <Login />;
}

export default AuthWrapper;
