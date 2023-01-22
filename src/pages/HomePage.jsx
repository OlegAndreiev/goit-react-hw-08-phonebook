import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useAuth } from '../hooks/useAuth';

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Typography
        variant="h1"
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: 0,
          paddingTop: 100,
          fontSize: 48,
        }}
      >
        Welcome to Phonebook
      </Typography>
      {!isLoggedIn && (
        <Typography
          variant="subtitle1"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 100,
            fontSize: 18,
          }}
        >
          Please register. If you are already a registered user, then login.
        </Typography>
      )}
    </>
  );
}
