'use client';

import { Button } from '@nextui-org/react';
import styles from './MenuBar.module.scss';
import { useRouter, usePathname } from 'next/navigation';
import cx from 'classnames';

function MenuBar() {
  const router = useRouter();
  const path = usePathname();

  return (
    <div className={styles.menuBar}>
      <div className={cx(styles.buttonWrapper, 'dark:bg-neutral-900', 'bg-neutral-100')}>
        <Button
          variant="light"
          isIconOnly
          onClick={() => router.push('/')}
          className={cx(path === '/' ? 'text-success' : null)}
        >
          <i className={cx(styles.icon, 'bi', 'bi-house-door-fill')}></i>
        </Button>
        <Button variant="light" isIconOnly>
          <i className={cx(styles.icon, 'bi', 'bi-newspaper')}></i>
        </Button>
        <Button variant="light" isIconOnly>
          <i className={cx(styles.icon, 'bi', 'bi-bookmark-star-fill')}></i>
        </Button>
        <Button
          variant="light"
          isIconOnly
          onClick={() => router.push('/settings')}
          className={cx(path.startsWith('/settings') ? 'text-success' : null)}
        >
          <i className={cx(styles.icon, 'bi', 'bi-gear-fill')}></i>
        </Button>
        <Button
          variant="light"
          isIconOnly
          onClick={() => router.push('/profile')}
          className={cx(path.startsWith('/profile') ? 'text-success' : null)}
        >
          <i className={cx(styles.icon, 'bi', 'bi-person-circle')}></i>
        </Button>
      </div>
    </div>
  );
}

export default MenuBar;
