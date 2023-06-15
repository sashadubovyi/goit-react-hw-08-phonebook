import Notiflix from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupUserThunk } from 'store/auth/authOperations';
import {
  BtnBox,
  ButtonSignUp,
  Form,
  InputDetails,
  InputField,
  RegContainer,
  RegQuestion,
  Title,
} from './Register.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    if (!token) return;
    navigate('/');
  }, [token, navigate]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError(Notiflix.Notify.info('Complete all input fields'));
      return;
    }

    const user = { name, email, password };
    dispatch(signupUserThunk(user))
      .unwrap()
      .then()
      .catch(error => Notiflix.Notify.failure(error));

    setName('');
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <RegContainer>
      <Title>Registration</Title>
      {error && <p>{error}</p>}
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <label>
          <InputDetails>Name</InputDetails>
          <InputField
            placeholder="Please enter a name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
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
          <ButtonSignUp type="submit">Sign Up</ButtonSignUp>
          <RegQuestion to="/login">Already have an account?</RegQuestion>
        </BtnBox>
      </Form>
    </RegContainer>
  );
};

export default RegisterForm;
