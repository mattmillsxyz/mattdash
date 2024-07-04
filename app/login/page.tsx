/* eslint-disable @next/next/no-img-element */
// app/login/page.tsx
'use client';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Link, Input } from '@nextui-org/react';
import cx from 'classnames';

import { auth, provider } from '../../firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { UserContext } from '@/context/UserContext';

import styles from './login.module.scss';

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
    <div className={cx(styles.login, 'min-h-screen')}>
      <div>
        <h1 className="text-success font-bold">DRILL</h1>
      </div>
      <div className={styles.loginForm}>
        <form onSubmit={handleEmailLogin}>
          <Input
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mb-6"
          />
          <Input
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mb-10"
          />
          <Button className="w-full font-bold" color="success" size="lg" type="submit">
            LOG IN
          </Button>
        </form>
        <div className="mt-8 text-center">
          <button
            onClick={handleGoogleLogin}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <img width={160} src="/img/buttons/sign-in-with-google.png" alt="Sign in with Google" />
          </button>
        </div>
        <div className="mt-4 text-center">
          Don&apos;t have an account?{' '}
          <Link href="/signup" color="success">
            Sign up now
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default Login;
