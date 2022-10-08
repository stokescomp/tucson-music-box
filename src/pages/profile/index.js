import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import Login from '../login';
import { firebaseAuth } from '/firebase';
import { setLoginState, fetchLoginState } from '../../slices/isLoggedIn';

function Profile() {
  const [user, setUser] = useState({});
  const isLoggedIn = useSelector(fetchLoginState);

  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
      dispatch(setLoginState(user ? true : false));
    });
  }, [firebaseAuth, user]);

  const logout = async () => {
    await signOut(firebaseAuth);
  };

  return (
    <div>
      {isLoggedIn ? <button onClick={logout}>Log Out</button> : <Login />}
    </div>
  );
}

export default Profile;
