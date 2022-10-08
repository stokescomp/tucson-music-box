import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import Login from '../login';
import { firebaseAuth } from '/firebase';
import { addUserInfo, fetchUserInfo } from '../../slices/userSlice';

function Profile() {
  const [user, setUser] = useState({});
  const userInfo = useSelector(fetchUserInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
      setData();
    });
  }, [firebaseAuth, user]);

  const setData = () => {
    const data = user ? { name: 'jackson', userType: 1 } : null;
    dispatch(addUserInfo(data));
  };
  console.log(userInfo);

  const logout = async () => {
    await signOut(firebaseAuth);
  };

  return (
    <div>
      {userInfo ? <button onClick={logout}>Log Out</button> : <Login />}
    </div>
  );
}

export default Profile;
