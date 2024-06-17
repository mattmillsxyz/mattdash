/* eslint-disable @next/next/no-img-element */
// app/login/page.tsx
'use client';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, provider } from '../../firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Link from 'next/link';
import { UserContext } from '@/context/UserContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) router.push('/');
  }, [user, router]);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (error) {
      console.error('Error logging in: ', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push('/');
    } catch (error) {
      console.error('Error logging in: ', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleEmailLogin}>
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
        <button type="submit">Login</button>
      </form>
      <div style={{ marginBottom: 20, marginTop: 20 }}>
        <button
          onClick={handleGoogleLogin}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <img width={220} src="/img/sign-in-with-google.png" alt="Sign in with Google" />
        </button>
      </div>
      Don&apos;t have an account? <Link href="/signup">Sign up now</Link>.
    </div>
  );
};

export default Login;
