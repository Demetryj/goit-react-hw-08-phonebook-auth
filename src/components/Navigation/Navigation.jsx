import { NavLink } from 'react-router-dom';
import { Wrapper } from './NavigationStyles';

export const Navigation = () => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>
      <NavLink to="contacts">Contacts</NavLink>
    </Wrapper>
  );
};
