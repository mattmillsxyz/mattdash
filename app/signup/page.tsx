/* eslint-disable @next/next/no-img-element */
// app/signup/page.tsx
'use client';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Link, Input } from '@nextui-org/react';
import cx from 'classnames';
import { auth, db, provider } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { UserContext } from '@/context/UserContext';

import styles from './signup.module.scss';

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
    <div className={cx(styles.signup, 'min-h-screen')}>
      <div>
        <h1 className="text-success font-bold">DRILL</h1>
      </div>
      <div className={styles.signupForm}>
        <form onSubmit={handleSignUp}>
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
            SIGN UP
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
          Already have an account?{' '}
          <Link href="/login" color="success">
            Log in now
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default SignUp;
