import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const HeaderContainer = styled.div`
  min-width: 500px;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  gap: 20px;
  border-radius: 35px;
  background: #e0e0e0;
  box-shadow: -29px 29px 21px #aaaaaa, 29px -29px 21px #ffffff;
`;

export const LogOutBtn = styled.button`
  color: white;
  background: linear-gradient(145deg, #b94848, #dc5656);
  cursor: pointer;
  max-width: 200px;
  padding: 0.5em 1.5em;
  font-size: 18px;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  border-radius: 69px;
  box-shadow: 8px 8px 16px #b5b5b5, -8px -8px 16px #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

  &:hover {
    background: linear-gradient(145deg, #b94852, #dc5662);
    box-shadow: 8px 8px 16px #b5b5b5, -8px -8px 16px #ffffff;
  }

  &:active {
    background: #e0e0e0;
    box-shadow: inset 8px 8px 16px #b5b5b5, inset -8px -8px 16px #ffffff;
  }
`;

export const UserDetails = styled.h2`
  font-weight: 200;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Link = styled(NavLink)`
  font-weight: 200;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  color: #090909;
  cursor: pointer;
  max-width: 200px;
  padding: 0.5em 1.5em;
  font-size: 18px;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  border-radius: 69px;
  background: #e0e0e0;
  box-shadow: 8px 8px 16px #b5b5b5, -8px -8px 16px #ffffff;
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
