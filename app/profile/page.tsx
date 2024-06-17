// app/profile/page.tsx
'use client';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Profile</h1>
      {user && (
        <div>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
