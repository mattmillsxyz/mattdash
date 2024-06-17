// context/UserContext.tsx
'use client';
import { createContext, useEffect, useState, ReactNode } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { db, auth } from '../firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface UserContextProps {
  user: User | null;
  loading: boolean;
  userData: UserData | null;
}

interface UserData {
  email: string;
  avatar: string;
  id: string;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  loading: true,
  userData: null,
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data() as UserData);
        } else {
          // Create user
          await setDoc(doc(db, 'users', user.uid), {
            id: user.uid,
            email: user.email,
            avatar: user.photoURL,
          });
        }
      }
    };

    fetchUserData();
  }, [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      console.log('DEBUG: USER: ', firebaseUser);
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, userData }}>{children}</UserContext.Provider>
  );
};
