'use client';
import { useContext } from 'react';

import { UserContext } from '@/context/UserContext';

import styles from './page.module.css';

const Home = () => {
  const { userData } = useContext(UserContext);

  if (userData && !userData.name) {
    console.log('DEBUG: missing name!');
  }

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1>Home</h1>
    </main>
  );
};

export default Home;
