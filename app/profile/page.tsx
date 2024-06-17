/* eslint-disable @next/next/no-img-element */
// app/profile/page.tsx
'use client';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Profile = () => {
  const { userData } = useContext(UserContext);

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
    </div>
  );
};

export default Profile;
