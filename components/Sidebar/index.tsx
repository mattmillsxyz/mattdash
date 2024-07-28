'use client';
import cx from 'classnames';
import { useRouter, usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

import ThemeSwitcher from '@/components/ThemeSwitcher';

import styles from './Sidebar.module.css';

function Sidebar() {
  const router = useRouter();
  const path = usePathname();
  const { theme } = useTheme();

  const getNavButtonStyle = (type: string) => {
    const isActive =
      (type === 'dashboard' && path === '/') ||
      (type === 'about' && path === '/about') ||
      (type === 'resume' && path === '/resume') ||
      (type === 'projects' && path === '/projects');

    if (isActive && theme === 'light') {
      return cx(styles.navButton, styles.active);
    } else if (isActive && theme === 'dark') {
      return cx(styles.navButton, 'dark:bg-white dark:text-zinc-800 hover:dark:bg-white');
    } else if (theme === 'dark') {
      return cx(styles.navButton, 'hover:bg-zinc-700');
    } else {
      return cx(styles.navButton, 'hover:bg-slate-100');
    }
  };

  return (
    <div className={styles.sidebar}>
      <div
        className={cx(
          styles.inner,
          'bg-white dark:bg-zinc-800 text-slate-400 dark:text-neutral-300'
        )}
      >
        <div className="text-5xl">{`{m}`}</div>
        <div className="flex flex-col justify-center items-start w-full">
          <small className={styles.navSection}>Menu</small>
          <button className={getNavButtonStyle('dashboard')}>
            <i className="bi bi-house-fill mr-4"></i>Dashboard
          </button>
          <button className={getNavButtonStyle('about')}>
            <i className="bi bi-person-arms-up mr-4"></i>About
          </button>
          <button className={getNavButtonStyle('resume')}>
            <i className="bi bi-file-earmark-text mr-4"></i>Resume
          </button>
          <button className={getNavButtonStyle('projects')}>
            <i className="bi bi-boxes mr-4"></i>Projects
          </button>
          <small className={styles.navSection}>Links</small>
          <button className={getNavButtonStyle('link')}>
            <i className="bi bi-linkedin mr-4"></i>LinkedIn
          </button>
          <button className={getNavButtonStyle('link')}>
            <i className="bi bi-github mr-4"></i>GitHub
          </button>
          <button className={getNavButtonStyle('link')}>
            <i className="bi bi-instagram mr-4"></i>Instagram
          </button>
        </div>
        <div className={cx(styles.footer)}>
          <ThemeSwitcher />
          <div className="mt-2">
            <small>Made with ♥ in Texas</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
