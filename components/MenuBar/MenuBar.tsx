'use client';

import { Button } from '@nextui-org/react';
import styles from './MenuBar.module.scss';
import cx from 'classnames';
import { useRouter } from 'next/navigation';

function MenuBar() {
  const router = useRouter();

  return (
    <div className={styles.menuBar}>
      <div className={cx(styles.buttonWrapper, 'dark:bg-neutral-900', 'bg-neutral-100')}>
        <Button variant="light" isIconOnly onClick={() => router.push('/')}>
          <i className={cx(styles.icon, 'bi', 'bi-house-door-fill')}></i>
        </Button>
        <Button variant="light" isIconOnly>
          <i className={cx(styles.icon, 'bi', 'bi-newspaper')}></i>
        </Button>
        <Button variant="light" isIconOnly>
          <i className={cx(styles.icon, 'bi', 'bi-bookmark-star-fill')}></i>
        </Button>
        <Button variant="light" isIconOnly onClick={() => router.push('/settings')}>
          <i className={cx(styles.icon, 'bi', 'bi-gear-fill')}></i>
        </Button>
        <Button variant="light" isIconOnly onClick={() => router.push('/profile')}>
          <i className={cx(styles.icon, 'bi', 'bi-person-circle')}></i>
        </Button>
      </div>
    </div>
  );
}

export default MenuBar;
