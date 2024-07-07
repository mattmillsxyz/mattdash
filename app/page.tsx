'use client';
import { useContext } from 'react';
import cx from 'classnames';

import { UserContext } from '@/context/UserContext';

import styles from './page.module.css';

const Home = () => {
  const { userData } = useContext(UserContext);

  const timeOfDay = () => {
    const now = new Date();
    const hour = now.getHours();

    if (hour > 0 && hour < 12) return 'morning';
    if (hour >= 12 && hour < 5) return 'afternoon';
    return 'evening';
  };

  return (
    <main className={cx(styles.home, 'container', 'mx-auto')}>
      <div className={styles.welcome}>
        <div className={cx(styles.welcomeTitle, 'text-4xl')}>
          Hello {userData?.name ? <strong>{userData.name}!</strong> : '!'}
        </div>
        <p className="mt-1 text-neutral-500">Good {timeOfDay()}.</p>
      </div>
    </main>
  );
};

export default Home;
