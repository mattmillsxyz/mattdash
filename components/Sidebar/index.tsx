'use client';
import cx from 'classnames';

import ThemeSwitcher from '@/components/ThemeSwitcher';

import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={cx(styles.inner, 'bg-white', 'dark:bg-neutral-700')}>
        <div className="text-5xl">{`{m}`}</div>
        <div className="w-100 flex flex-col items-center">
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
