'use client';

import { UserContext } from '@/context/UserContext';
import { getAuth, signOut } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

function Header() {
  const { user } = useContext(UserContext);
  const auth = getAuth();
  const router = useRouter();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('DEBUG: SIGNED OUT');
        router.push('/login');
      })
      .catch((error) => {
        // An error happened.
        console.log('DEBUG: SINGOUT ERROR: ', error);
      });
  };

  const handleSignIn = () => {
    router.push('/login');
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{ marginRight: 20 }}>
          <Link href="/">DRILL</Link>
        </h1>
        <Link href="/profile">Profile</Link>
      </div>
      <div>
        {user ? (
          <button onClick={handleSignOut}>SIGN OUT</button>
        ) : (
          <button onClick={handleSignIn}>SIGN OUT</button>
        )}
      </div>
    </div>
  );
}

export default Header;
