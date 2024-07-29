'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Switch, cn } from '@nextui-org/react';

import styles from '@/styles/components/ThemeSwitcher.module.css';

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
      <i className="bi bi-moon-fill mr-2" />
      <Switch
        classNames={{
          wrapper: cn('dark:bg-neutral-500'),
        }}
        isSelected={theme !== 'dark'}
        onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        color="warning"
        size="sm"
      ></Switch>
      <i className="bi bi-lightbulb-fill" />
    </div>
  );
}

export default ThemeSwitcher;
