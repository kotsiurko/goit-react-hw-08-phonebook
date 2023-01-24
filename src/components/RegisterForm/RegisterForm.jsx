import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import {
  Form,
  Title,
  LabelGroup,
  LabelTitle,
  Input,
} from './RegisterForm.styled';
import { Button } from '../App.styled';

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
    <>
      <Title>Registration form</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <LabelGroup>
          <LabelTitle >
            Username
          </LabelTitle>
          <Input type="text" name="name" />

          <LabelTitle >
            Email
          </LabelTitle>
          <Input type="email" name="email" />

          <LabelTitle >
            Password
          </LabelTitle>
          <Input type="password" name="password" />

        </LabelGroup>
        <Button type="submit">Register</Button>
      </Form>
    </>
  );
};
