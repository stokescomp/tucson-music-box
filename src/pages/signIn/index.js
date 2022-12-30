import React, { useState } from 'react';
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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import Container from '@mui/material/Container';

import { firebaseAuth } from '/firebase';

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='right'
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

const theme = createTheme();

export default function SignInSide() {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const [haveAccount, setHaveAccount] = useState(true);

  const [name, setName] = useState('');

  const handleSignInSubmit = async (event) => {
    event.preventDefault();
    try {
      signInWithEmailAndPassword(firebaseAuth, signInEmail, signInPassword);
      setSignInEmail('');
      setSignInPassword('');
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();
    try {
      createUserWithEmailAndPassword(firebaseAuth, signUpEmail, signUpPassword);
      const data = { name, signUpEmail };
      localStorage.setItem('user', JSON.stringify(data));
      console.log('Registration successful!');
      setName('');
      setSignUpEmail('');
      setSignUpPassword('');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      {haveAccount ? (
        <ThemeProvider theme={theme}>
          <Grid container component='main' sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: 'url(https://source.unsplash.com/random)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                  t.palette.mode === 'light'
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                  Sign in
                </Typography>
                <Box
                  component='form'
                  noValidate
                  onSubmit={handleSignInSubmit}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                    autoFocus
                    onChange={(event) => setSignInEmail(event.target.value)}
                  />
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    onChange={(event) => setSignInPassword(event.target.value)}
                  />
                  <FormControlLabel
                    control={<Checkbox value='remember' color='primary' />}
                    label='Remember me'
                  />
                  <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    sx={{ mt: 3, mb: 2 }}
                    onClick={(event) => handleSignInSubmit(event)}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href='#' variant='body2'>
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link
                        href='#'
                        variant='body2'
                        onClick={() => setHaveAccount(!haveAccount)}
                      >
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                  <Copyright sx={{ mt: 5 }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme}>
          <Container component='main' maxWidth='xs'>
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
                <LockOutlinedIcon />
              </Avatar>
              <Typography component='h1' variant='h5'>
                Sign up
              </Typography>
              <Box
                component='form'
                noValidate
                onSubmit={handleSignUpSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      fullWidth
                      id='Name'
                      label='Name'
                      name='Name'
                      autoComplete='name'
                      onChange={(event) => setName(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id='email'
                      label='Email Address'
                      name='email'
                      autoComplete='email'
                      onChange={(event) => setSignUpEmail(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name='password'
                      label='Password'
                      type='password'
                      id='password'
                      autoComplete='new-password'
                      onChange={(event) =>
                        setSignUpPassword(event.target.value)
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value='allowExtraEmails' color='primary' />
                      }
                      label='I want to receive inspiration, marketing promotions and updates via email.'
                    />
                  </Grid>
                </Grid>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                  onClick={(event) => handleSignUpSubmit(event)}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent='flex-end'>
                  <Grid item>
                    <Link
                      href='#'
                      variant='body2'
                      onClick={() => setHaveAccount(!haveAccount)}
                    >
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      )}
    </div>
  );
}
