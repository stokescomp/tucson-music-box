import React, { useState } from 'react';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { firebaseAuth } from '/firebase';

function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [haveAccount, setHaveAccount] = useState(true);

  const login = (event) => {
    event.preventDefault();
    try {
      signInWithEmailAndPassword(firebaseAuth, userEmail, userPassword);
      console.log('Login successful!');
    } catch (err) {
      alert(err.message);
    }
  };
  const register = (event) => {
    event.preventDefault();
    try {
      createUserWithEmailAndPassword(
        firebaseAuth,
        registerEmail,
        registerPassword
      );
      console.log('Registration successful!');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className='login'>
      {haveAccount ? (
        <form>
          <fieldset>
            <legend>Log In</legend>
            <label htmlFor='userEmail'>User Email: </label>
            <input
              type='email'
              id='userEmail'
              onChange={(event) => setUserEmail(event.target.value)}
              required
              autoComplete='on'
            />
            <label htmlFor='userEmail'>User Password: </label>
            <input
              type='password'
              id='userPassword'
              onChange={(event) => setUserPassword(event.target.value)}
              required
              autoComplete='on'
            />
            <button onClick={(event) => login(event)}>Login In</button>
          </fieldset>
        </form>
      ) : (
        <form>
          <fieldset>
            <legend>Sign Up</legend>
            <label htmlFor='userEmail'>User Email: </label>
            <input
              type='email'
              id='userEmail'
              onChange={(event) => setRegisterEmail(event.target.value)}
              required
              autoComplete='on'
            />
            <label htmlFor='userEmail'>User Password: </label>
            <input
              type='password'
              id='userPassword'
              onChange={(event) => setRegisterPassword(event.target.value)}
              required
              autoComplete='on'
            />
            <button onClick={(event) => register(event)}>Register</button>
          </fieldset>
        </form>
      )}
      <button onClick={() => setHaveAccount(!haveAccount)}>
        {haveAccount ? 'Go to Sign up!' : 'Go to Sign in'}
      </button>
    </div>
  );
}

export default Login;
