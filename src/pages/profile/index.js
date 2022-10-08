import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";

import Login from "../login";
import { firebaseAuth } from "/firebase";
import { addUserInfo, fetchUserInfo } from "../../slices/userSlice";
import { useRouter } from "next/router";

function Profile() {
  const router = useRouter();

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
    const data = user ? { name: "jackson", userType: 1 } : null;
    // const data = user;

    dispatch(addUserInfo(data));
  };

  const logout = async () => {
    router.push("/");

    await signOut(firebaseAuth);
    const data = null;
    dispatch(addUserInfo(null));
  };

  return (
    <div>
      <div>Your email is {user?.email}</div>
      {userInfo ? <button onClick={logout}>Log Out</button> : <Login />}
    </div>
  );
}

export default Profile;
