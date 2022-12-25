import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { logIn } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Box } from 'components/Box';
import { Form } from './StyledLoginForm';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { error, isLoading, isLoggedIn } = useAuth();

  useEffect(() => {
    if (email === '' && password === '') {
      return;
    }

    if (error && isLoading && !isLoggedIn) {
      toast.error('You entered incorrect data. Try entering other data.');
      return;
    }
  }, [email, error, password, isLoading, isLoggedIn]);

  const handleLogin = event => {
    event.preventDefault();

    dispatch(
      logIn({
        email,
        password,
      })
    );
  };

  const handleChangeInputValue = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const clearInputValue = email === '' || password === '';

  return (
    <main>
      <Box p={[4]} as="div">
        <Form onSubmit={handleLogin}>
          <label htmlFor="emailId">
            Email
            <input
              id="emailId"
              type="email"
              name="email"
              value={email}
              required
              placeholder=" "
              onChange={handleChangeInputValue}
            />
          </label>

          <label htmlFor="passwordId">
            Password
            <input
              id="passwordId"
              type="password"
              name="password"
              value={password}
              required
              placeholder=" "
              onChange={handleChangeInputValue}
            />
          </label>

          <button type="submit" disabled={clearInputValue || isLoading}>
            {isLoading ? '00000' : 'Login'}
          </button>
        </Form>
      </Box>
      <Toaster />
    </main>
  );
};
