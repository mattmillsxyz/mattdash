/* eslint-disable @next/next/no-img-element */
// app/signup/page.tsx
'use client';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db, provider } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { UserContext } from '@/context/UserContext';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) router.push('/');
  }, [user, router]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Add user to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        uid: user.uid,
      });

      router.push('/');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push('/profile');
    } catch (error) {
      console.error('Error logging in: ', error);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <div style={{ marginBottom: 20, marginTop: 20 }}>
        <button
          onClick={handleGoogleLogin}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <img width={220} src="/img/sign-up-with-google.png" alt="Sign in with Google" />
        </button>
      </div>
    </div>
  );
};

export default SignUp;
