/* eslint-disable @next/next/no-img-element */
// app/profile/page.tsx
'use client';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Profile = () => {
  const { user, userData } = useContext(UserContext);
  const created = user?.metadata?.creationTime
    ? new Date(user?.metadata?.creationTime).toLocaleDateString()
    : null;

  return (
    <div>
      <h1>Profile</h1>
      {userData?.avatar && (
        <img style={{ width: 50, borderRadius: 25 }} src={userData.avatar} alt="Avatar" />
      )}
      {userData?.email && (
        <div>
          <p>Email: {userData.email}</p>
        </div>
      )}
      {created && <div>Created: {created}</div>}
    </div>
  );
};

export default Profile;
