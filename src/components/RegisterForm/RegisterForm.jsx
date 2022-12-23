import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { authorization } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Box } from 'components/Box';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { error, isLoading } = useAuth();

  useEffect(() => {
    if (name === '' && email === '' && password === '') {
      return;
    }

    if (error && isLoading) {
      toast.error('You entered incorrect data. Try entering other data.');
      return;
    }
  }, [name, email, error, password, isLoading]);
  const handleAuthorization = event => {
    event.preventDefault();

    dispatch(
      authorization({
        name,
        email,
        password,
      })
    );
  };

  const handleChangeInputValue = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

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

  const clearInputValue = name === '' || email === '' || password === '';

  return (
    <main>
      <Box p={[4]} as="div">
        <form onSubmit={handleAuthorization}>
          <label htmlFor="nameId">
            Username
            <input
              id="nameId"
              type="text"
              name="name"
              value={name}
              required
              placeholder=" "
              onChange={handleChangeInputValue}
            />
          </label>

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
            {isLoading ? '00000' : 'Authorization'}
          </button>
        </form>
      </Box>
      <Toaster />
    </main>
  );
};
