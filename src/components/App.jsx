import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';

const HomePage = lazy(() => import('pages/Home'));
const ContactsPage = lazy(() => import('pages/UserContacts'));
const AuthorizationPage = lazy(() => import('pages/Authorization'));
const LoginPage = lazy(() => import('pages/Login'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="register" element={<AuthorizationPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
