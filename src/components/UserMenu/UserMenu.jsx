import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrapper } from './StyledUserMenu';
import avatar from 'images/avatar.webp';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Wrapper>
      <span>
        <img src={avatar} alt="avatar" width={40} height={40} />
      </span>
      <p>{user.name}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </Wrapper>
  );
};
