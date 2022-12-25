import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar';
import { Container } from './StyledLayout';

export const Layout = () => {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
