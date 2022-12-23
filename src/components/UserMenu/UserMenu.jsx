import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Wrapper } from './UserMenuStyled';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Wrapper>
      <span></span>
      <p></p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </Wrapper>
  );
};
