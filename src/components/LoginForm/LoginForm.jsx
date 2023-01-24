import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Title, LabelGroup, LabelTitle, Input } from './LoginForm.styled';
import { Button } from '../App.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Title>Log in to your profile</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <LabelGroup>
          <LabelTitle>Email</LabelTitle>
          <Input type="email" name="email" />

          <LabelTitle>Password</LabelTitle>
          <Input type="password" name="password" />
        </LabelGroup>
        <Button type="submit">Log In</Button>
      </Form>
    </>
  );
};
