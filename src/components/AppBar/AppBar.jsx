import { Navigation } from 'components/Navigation';
import { AuthNav } from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu';
import { useAuth } from 'hooks';
import { Header } from './StyledAppBar';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
    </Header>
  );
};
