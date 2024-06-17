'use client';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UserContext } from '../context/UserContext';

import Login from '@/app/login/page';

function AuthWrapper({ children }: { children: any }) {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <div>Loading...</div>;
  } else if (user) {
    return children;
  }

  return <Login></Login>;
}

export default AuthWrapper;
