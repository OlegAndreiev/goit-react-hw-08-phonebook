import { useDispatch } from 'react-redux';
import { Form, Label } from './LoginForm.styled';
import { logIn } from '../../Redux/auth/operations';
import { LogInBtn } from './LoginForm.styled';

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
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <LogInBtn type="submit">Log In</LogInBtn>
    </Form>
  );
};
