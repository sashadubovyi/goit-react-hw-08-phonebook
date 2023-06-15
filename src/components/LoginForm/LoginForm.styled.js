import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LoginContainer = styled.div`
  min-width: 500px;
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  gap: 20px;
  border-radius: 35px;
  background: #e0e0e0;
  box-shadow: -29px 29px 21px #aaaaaa, 29px -29px 21px #ffffff;
`;

export const Title = styled.h2`
  font-weight: 200;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ButtonLogIn = styled.button`
  color: #090909;
  cursor: pointer;
  max-width: 150px;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  border-radius: 69px;
  background: #e0e0e0;
  box-shadow: 8px 8px 16px #b5b5b5, -8px -8px 16px #ffffff;
  font-weight: 200;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

  &:hover {
    background: linear-gradient(145deg, #cacaca, #f0f0f0);
    box-shadow: 8px 8px 16px #b5b5b5, -8px -8px 16px #ffffff;
  }

  &:active {
    background: #e0e0e0;
    box-shadow: inset 8px 8px 16px #b5b5b5, inset -8px -8px 16px #ffffff;
  }
`;

export const InputField = styled.input`
  outline: transparent;
  padding: 0.7em 1.7em;
  font-size: 18px;
  width: 65%;
  border: none;
  border-radius: 35px;
  background: #e0e0e0;
  box-shadow: inset 8px 8px 12px #b5b5b5, inset -8px -8px 12px #ffffff;
`;

export const InputDetails = styled.p`
  padding-left: 20px;
  font-weight: 200;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

export const RegQuestion = styled(NavLink)`
  font-weight: 300;
  color: blue;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

export const BtnBox = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
