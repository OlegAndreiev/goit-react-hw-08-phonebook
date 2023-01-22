import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Label } from './LoginForm.styled';
import { logIn } from '../../Redux/auth/operations';
import { LogInBtn } from './LoginForm.styled';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Paper
      elevation={2}
      style={{
        width: 400,
        padding: 20,
        paddingTop: 40,
        marginTop: 50,
        marginBottom: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        backgroundColor: 'white',
      }}
    >
      <h2
        style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}
      >
        Log In
      </h2>
      <Form onSubmit={handleSubmit} autoComplete="off">
        {/* <Label>
          Email
          <input type="email" name="email" />
        </Label> */}
        <TextField
          required
          id="outlined-required"
          label="Email"
          type="email"
          name="email"
          style={{
            marginBottom: 20,
          }}
        />
        {/* <Label>
          Password
          <input type="password" name="password" />
        </Label> */}
        <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
          name="password"
          style={{
            marginBottom: 20,
          }}
        />
        <p style={{ margin: 0, fontSize: 12, color: '#9e9e9e' }}>
          * - required
        </p>
        {/* <LogInBtn type="submit">Log In</LogInBtn> */}
        <Button type="submit">Log In</Button>
      </Form>
    </Paper>
  );
};
