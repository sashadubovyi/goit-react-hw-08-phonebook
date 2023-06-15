import Notiflix from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUserThunk } from 'store/auth/authOperations';
import {
  BtnBox,
  ButtonLogIn,
  Form,
  InputDetails,
  InputField,
  LoginContainer,
  RegQuestion,
  Title,
} from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    if (!token) return;
    navigate('/');
  }, [token, navigate]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    const user = { email, password };
    dispatch(loginUserThunk(user))
      .unwrap()
      .then()
      .catch(error => Notiflix.Notify.failure(error));

    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <LoginContainer>
      <Title>Login to your account</Title>
      {error && <p>{error}</p>}
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <label>
          <InputDetails>Email</InputDetails>
          <InputField
            placeholder="Please enter email address"
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          <InputDetails>Password</InputDetails>
          <InputField
            placeholder="Please enter password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <BtnBox>
          <ButtonLogIn type="submit">Login</ButtonLogIn>
          <RegQuestion to="/signup">Don't have an account yet?</RegQuestion>
        </BtnBox>
      </Form>
    </LoginContainer>
  );
};

export default LoginForm;
