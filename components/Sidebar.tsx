'use client';

import cx from 'classnames';

import ThemeSwitcher from '@/components/ThemeSwitcher';
import NavButton from '@/components/NavButton';

import styles from '@/styles/components/Sidebar.module.css';

function Sidebar() {
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
          <NavButton icon="bi-house-fill" text="Dashboard" url="/" />
          <NavButton icon="bi-person-arms-up" text="About" url="/about" />
          <NavButton icon="bi-file-earmark-text" text="Resume" url="/resume" />
          <NavButton icon="bi-boxes" text="Projects" url="/projects" />
          <small className={styles.navSection}>Links</small>
          <NavButton
            icon="bi-linkedin"
            isExternal
            text="LinkedIn"
            url="https://www.linkedin.com/in/mattmills78/"
          />
          <NavButton
            icon="bi-github"
            isExternal
            text="GitHub"
            url="https://github.com/mattmillsxyz"
          />
          <NavButton
            icon="bi-instagram"
            isExternal
            text="Instagram"
            url="https://instagram.com/mattmillsart"
          />
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
