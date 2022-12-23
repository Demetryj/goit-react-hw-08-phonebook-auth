import { useSelector } from 'react-redux';
import {
  selectAuthUser,
  selectAuthError,
  selectAuthIsLoading,
  selectAuthIsLoggedIn,
  selectAuthIsRefreshing,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const user = useSelector(selectAuthUser);
  const error = useSelector(selectAuthError);
  const isLoading = useSelector(selectAuthIsLoading);
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const isRefreshing = useSelector(selectAuthIsRefreshing);

  return { user, error, isLoading, isLoggedIn, isRefreshing };
};
