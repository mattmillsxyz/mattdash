'use client';
import cx from 'classnames';

import styles from './page.module.css';

const Home = () => {
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
        <p className="mt-1 text-neutral-500 font-bold">Good {timeOfDay()}.</p>
        <div className={cx(styles.welcomeTitle, 'text-4xl', 'mb-2')}>Hi, I&apos;m Matt! 👋</div>
      </div>
    </main>
  );
};

export default Home;
