import { NavLink } from 'react-router-dom';
import { Wrapper } from './AuthNavStyled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <NavLink to="register">Authorization</NavLink>
      <NavLink to="login">LogIn</NavLink>
    </Wrapper>
  );
};
