'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@nextui-org/react';

import styles from './ThemeSwitcher.module.scss';

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.themeSwitcher}>
      <i className="bi bi-moon-fill mr-1" />
      <Switch
        isSelected={theme !== 'dark'}
        onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        color="warning"
        size="sm"
      ></Switch>
      <i className="bi bi-sun-fill" />
    </div>
  );
}

export default ThemeSwitcher;
