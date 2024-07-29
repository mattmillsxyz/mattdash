'use client';

import Link from 'next/link';
import cx from 'classnames';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

import styles from '@/styles/components/NavButton.module.css';

type NavButtonProps = {
  icon?: string;
  isExternal?: boolean;
  url: string;
  text: string;
};

function NavButton({ icon, isExternal = false, url, text }: NavButtonProps) {
  const path = usePathname();
  const { theme } = useTheme();

  // TODO: make this better...
  const getNavButtonStyle = () => {
    const isActive =
      (text === 'Dashboard' && path === '/') ||
      (text === 'About' && path === '/about') ||
      (text === 'Resume' && path === '/resume') ||
      (text === 'Projects' && path === '/projects');

    if (isActive && theme === 'light') {
      return cx(styles.navButton, styles.active);
    } else if (isActive && theme === 'dark') {
      return cx(styles.navButton, 'dark:bg-white dark:text-zinc-800 hover:dark:bg-white');
    } else if (theme === 'dark') {
      return cx(styles.navButton, 'hover:bg-zinc-800', !isExternal ? 'dark:text-neutral-300' : '');
    } else {
      return cx(styles.navButton, 'hover:bg-slate-100', !isExternal ? 'text-slate-500' : '');
    }
  };

  return (
    <Link className={getNavButtonStyle()} href={url} target={isExternal ? '_blank' : '_self'}>
      {icon && <i className={`bi ${icon} mr-4`}></i>}
      {text}
    </Link>
  );
}

export default NavButton;
