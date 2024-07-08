/* eslint-disable @next/next/no-img-element */
// app/profile/page.tsx
'use client';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

import styles from './profile.module.scss';
import { Button, Chip, Image } from '@nextui-org/react';
import cx from 'classnames';

const Profile = () => {
  const { user, userData } = useContext(UserContext);
  const created = user?.metadata?.creationTime
    ? new Date(user?.metadata?.creationTime).toLocaleDateString()
    : null;

  return (
    <div className={styles.profile}>
      <div className={cx('container', styles.profileWrapper)}>
        <div className="flex">
          <div className={cx(styles.avatar, 'flex-1')}>
            {userData?.avatar && (
              <div className={cx('border-3 border-green-600 rounded-full p-2')}>
                <Image
                  width={100}
                  height={100}
                  radius={'full'}
                  src={userData.avatar}
                  alt="Avatar"
                />
              </div>
            )}
          </div>
          <div
            className={cx(
              styles.membership,
              'flex-1',
              'border-neutral-200',
              'dark:border-neutral-700'
            )}
          >
            <div>
              {created && (
                <div className="ml-8 text-right">
                  <div className="mt-3 mb-4">
                    <Chip size="lg" radius="sm" variant="bordered" color="success">
                      Level <strong>1</strong>
                    </Chip>
                  </div>

                  <small className="text-neutral-500">Joined</small>
                  <div className="font-bold">{created}</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          {userData?.name && (
            <h1 className={cx(styles.username, 'text-4xl mt-6 font-bold')}>{userData.name}</h1>
          )}
          {userData?.email && (
            <p className={cx(styles.email, 'text-neutral-500')}>{userData.email}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
