import React, { useEffect, useState } from 'react';

import { onAuthStateChanged, signOut } from 'firebase/auth';

import SignInSide from '../signIn';
import { firebaseAuth, firestore } from '/firebase';
import { getDoc, doc, collection, setDoc } from 'firebase/firestore';

function Profile() {
  const [user, setUser] = useState({});

  const userCollectionRef = collection(firestore, 'users');

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
      // Only set user info for redux when the uid is returned from user
      user?.uid && initUserInfoToFB();
    });
  }, [firebaseAuth, user]);

  // The function init user default info when not initialized and dispatching it to redux
  const initUserInfoToFB = async () => {
    const data = JSON.parse(localStorage.getItem('user'));
    if (!data) {
      data = { userType: 3 };
      localStorage.setItem('user', JSON.stringify(data));
    }
    await setDoc(doc(userCollectionRef, user.uid), data);
    console.log(data);
  };

  const logout = async () => {
    await signOut(firebaseAuth);
  };

  return (
    <div>
      {user ? <button onClick={logout}>Log Out</button> : <SignInSide />}
    </div>
  );
}

export default Profile;
