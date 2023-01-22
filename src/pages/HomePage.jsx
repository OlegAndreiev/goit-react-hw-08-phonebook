import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Block } from '@mui/icons-material';

// const styles = {
//   // container: {
//   //   minHeight: 'calc(100vh - 50px)',
//   //   display: 'flex',
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   //   flexDirection: 'column',
//   // },
//   // title: {
//   //   fontWeight: 500,
//   //   fontSize: 48,
//   //   textAlign: 'center',
//   //   marginBottom: 30,
//   // },
//   img: { width: 200 },
// };

export default function Home() {
  return (
    <div>
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: 0,
          paddingTop: 100,
          fontSize: 36,
        }}
      >
        Welcome to Phonebook
      </h1>
    </div>
  );
}
