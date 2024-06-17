// app/profile/page.tsx
'use client';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { db } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

interface UserData {
  email: string;
}

const Profile = () => {
  const { user } = useContext(UserContext);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data() as UserData);
        }
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <div>
      <h1>Profile</h1>
      {userData && (
        <div>
          <p>Email: {userData.email}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
