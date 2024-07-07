'use client';

import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { Button, Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import cx from 'classnames';

import { UserContext } from '@/context/UserContext';

import styles from './settings.module.scss';

function Settings() {
  const { user } = useContext(UserContext);
  const auth = getAuth();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        router.push('/login');
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
      });
  };

  const capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1);

  const renderThemeSwitcher = () => {
    return (
      <>
        <span className="mr-2 font-normal">{capitalize(theme || '')}</span>
        <Switch
          isSelected={theme !== 'dark'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          color="warning"
          startContent={
            <div>
              <i className="bi bi-sun-fill text-white" />
            </div>
          }
          endContent={
            <div>
              <i className="bi bi-moon-fill" />
            </div>
          }
        ></Switch>
      </>
    );
  };

  const renderListItem = (text: string, handleClick: () => void, hasArrow?: boolean) => {
    return (
      <button
        className={cx(
          styles.settingsItem,
          'btn',
          'btn-primary',
          'dark:border-neutral-700',
          'border-neutral-100',
          'w-full',
          'text-left',
          'font-bold',
          text === 'Color Mode' ? 'cursor-default' : null
        )}
        onClick={handleClick}
      >
        <div className={cx(styles.itemName, text === 'Sign Out' ? 'text-warning' : null)}>
          {text}
        </div>
        {text === 'Color Mode' ? renderThemeSwitcher() : null}
        {hasArrow && <i className="bi bi-chevron-right text-xl" />}
      </button>
    );
  };

  return (
    <div className={styles.settings}>
      <div className={styles.settingsWrapper}>
        <div className="text-center mb-12">
          <h3 className="font-bold text-2xl">Settings</h3>
        </div>
        <div className={styles.settingsList}>
          {renderListItem('Subscription', () => router.push('/settings/subscription'), true)}
          {renderListItem('Color Mode', () => null, false)}
          {renderListItem('Language', () => router.push('/settings/language'), true)}
          {renderListItem('Notifications', () => router.push('/settings/notifications'), true)}
          {renderListItem('Contact Us', () => router.push('/settings/contact-us'), true)}
          {renderListItem('Reset Password', () => router.push('/settings/reset-password'), true)}
          {renderListItem('Sign Out', handleSignOut, false)}
        </div>
      </div>
    </div>
  );
}

export default Settings;
