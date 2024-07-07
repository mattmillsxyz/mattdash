/* eslint-disable @next/next/no-img-element */
// app/profile/page.tsx
'use client';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

import styles from './profile.module.scss';
import { Button } from '@nextui-org/react';
import cx from 'classnames';

const Profile = () => {
  const { user, userData } = useContext(UserContext);
  const created = user?.metadata?.creationTime
    ? new Date(user?.metadata?.creationTime).toLocaleDateString()
    : null;

  return (
    <div className={styles.profile}>
      <div className={cx('container', styles.profileWrapper)}>
        <div className="columns-2 h-full">
          <div className={cx(styles.avatar, 'border-neutral-200', 'dark:border-neutral-700')}>
            {userData?.avatar && (
              <img style={{ width: 100, borderRadius: 50 }} src={userData.avatar} alt="Avatar" />
            )}
          </div>
          <div>
            {created && (
              <div>
                <small>Joined</small>
                <br />
                {created}
              </div>
            )}
          </div>
        </div>
        <div>
          {userData?.email && (
            <div>
              <p>Email: {userData.email}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
