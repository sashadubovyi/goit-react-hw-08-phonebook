import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { deleteToken } from 'services/phonebookAPI';
import { actions } from 'store/auth/authSlice';
import {
  Box,
  HeaderContainer,
  Link,
  LinkBox,
  LogOutBtn,
  UserBox,
  UserDetails,
} from './Header.styled';

const Header = () => {
  const { user, token } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logoutFn() {
    dispatch(actions.logout());
    deleteToken();
    navigate('/login');
  }

  return (
    <HeaderContainer>
      {token ? (
        <div>
          <NavLink to="/phonebook"></NavLink>
          <Box>
            <UserBox>
              <UserDetails>Hello {user.name}</UserDetails>
              {/* <UserDetails>{user.email}</UserDetails> */}
            </UserBox>
            <LogOutBtn onClick={logoutFn} type="button">
              Log Out
            </LogOutBtn>
          </Box>
        </div>
      ) : (
        <LinkBox>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </LinkBox>
      )}
    </HeaderContainer>
  );
};

export default Header;
