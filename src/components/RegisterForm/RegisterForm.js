import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Label, RegisterBtn } from './RegisterForm.styled';
import { register } from '../../Redux/auth/operations';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
        Registration form
      </h2>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        {/* <Label>
          Username
          <input type="text" name="name" />
        </Label> */}
        <TextField
          required
          id="outlined-required"
          label="Name"
          type="text"
          name="name"
          style={{
            marginBottom: 20,
          }}
        />
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
        {/* <RegisterBtn type="submit">Register</RegisterBtn> */}
        <p style={{ margin: 0, fontSize: 12, color: '#9e9e9e' }}>
          * - required
        </p>
        <Button type="submit">Register</Button>
      </Form>
    </Paper>
  );
};
