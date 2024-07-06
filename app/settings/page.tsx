'use client';

import { ThemeSwitcher } from '@/components/ThemeSwitcher';

import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

import { UserContext } from '@/context/UserContext';

function Settings() {
  const { user } = useContext(UserContext);
  const auth = getAuth();
  const router = useRouter();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        router.push('/login');
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
      });
  };

  return (
    <>
      <div>
        <ThemeSwitcher />
      </div>
      <button className="btn btn-primary" onClick={handleSignOut}>
        SIGN OUT
      </button>
    </>
  );
}

export default Settings;
