import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, collection, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import SignInSide from '../signIn';
import { firebaseAuth, firestore } from '/firebase';

function Profile() {
  const [user, setUser] = useState({});
  const userCollectionRef = collection(firestore, 'users');
  const [userTypeState, setUserTypeState] = useState(3);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateName, setUpdateName] = useState('');
  const [updateEmail, setUpdateEmail] = useState('');
  const [localStorageUserState, setLocalStorageUserState] = useState({});

  const theme = createTheme();

  function Copyright(props) {
    return (
      <Typography
        variant='body2'
        color='text.secondary'
        align='center'
        paddingBottom={2}
        {...props}
      >
        {'Copyright © '}
        <Link color='inherit' href='https://mui.com/'>
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
      // Only set user info for redux when the uid is returned from user
    });
  }, [firebaseAuth]);

  useEffect(() => {
    if (user?.uid) {
      setUserInfo();
    }
  }, [user, userTypeState]);

  // The function init user default info when not initialized and dispatching it to redux
  const setUserInfo = async () => {
    const dataFB = await getDoc(doc(userCollectionRef, user.uid));
    if (user.uid === 'aGzKqEv6RPPnKBiWPnJHR6tXTWh1') {
      setUserTypeState(1);
    } else {
      setUserTypeState(dataFB?.data()?.userType);
    }

    const data = {
      ...JSON.parse(localStorage.getItem('user')),
      ...dataFB?.data(),
      userType: userTypeState,
      id: user.uid,
    };

    localStorage.setItem('user', JSON.stringify(data));
    await setDoc(doc(userCollectionRef, user.uid), data);
    setLocalStorageUserState(JSON.parse(localStorage.getItem('user')));
  };

  const logout = async () => {
    await signOut(firebaseAuth);
    localStorage.removeItem('user');
    setIsUpdate(false);
    console.log('Remove user data from localStorage');
  };

  const updateUserName = async (evet) => {
    event.preventDefault();
    if (window.confirm('Are you sure to update your NAME?')) {
      await updateDoc(doc(userCollectionRef, user.uid), {
        name: updateName,
      });
      location.reload();
    }
    setIsUpdate(!isUpdate);
  };
  const updateUserEmail = async (evet) => {
    event.preventDefault();
    if (window.confirm('Are you sure to update your EMAIL?')) {
      await updateDoc(doc(userCollectionRef, user.uid), {
        signUpEmail: updateEmail,
      });
      location.reload();
    }
    setIsUpdate(!isUpdate);
  };

  return (
    <div>
      {user ? (
        <ThemeProvider theme={theme}>
          <Container component='main' maxWidth='xl'>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                {userTypeState}
              </Avatar>
              <Typography component='h1' variant='h5'>
                Profile
              </Typography>
              <Box component='form' noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography component='h1' variant='h5'>
                      {localStorageUserState.signUpEmail
                        ? localStorageUserState.signUpEmail
                        : 'Email: '}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    {isUpdate ? (
                      <TextField
                        name='Name'
                        required
                        fullWidth
                        id='Name'
                        label='Name'
                        autoFocus
                        defaultValue={
                          localStorageUserState.name
                            ? localStorageUserState.name
                            : 'Your Name'
                        }
                        onChange={(event) => setUpdateName(event.target.value)}
                      />
                    ) : (
                      <Typography component='h1' variant='h5'>
                        {localStorageUserState.name
                          ? localStorageUserState.name
                          : 'Name: '}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={6}>
                    {isUpdate ? (
                      <Button
                        type='submit'
                        variant='contained'
                        fullWidth
                        sx={{ mt: 3, mb: 2 }}
                        onClick={(event) => updateUserName(event)}
                      >
                        Confirm
                      </Button>
                    ) : (
                      <Button
                        type='submit'
                        variant='contained'
                        fullWidth
                        sx={{ mt: 3, mb: 2 }}
                        onClick={(event) => {
                          event.preventDefault();
                          setIsUpdate(!isUpdate);
                        }}
                      >
                        Update
                      </Button>
                    )}
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    {isUpdate ? (
                      <Button
                        type='submit'
                        variant='contained'
                        fullWidth
                        sx={{ mt: 3, mb: 2 }}
                        onClick={(event) => {
                          event.preventDefault();
                          setIsUpdate(!isUpdate);
                        }}
                      >
                        Cancel
                      </Button>
                    ) : (
                      <Button
                        type='submit'
                        variant='contained'
                        fullWidth
                        sx={{ mt: 3, mb: 2 }}
                        onClick={(event) => {
                          event.preventDefault();
                          logout();
                          setIsUpdate(!isUpdate);
                        }}
                      >
                        Logout
                      </Button>
                    )}
                  </Grid>
                </Grid>
                <Grid container justifyContent='flex-end'></Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      ) : (
        <SignInSide />
      )}
    </div>
  );
}

export default Profile;
