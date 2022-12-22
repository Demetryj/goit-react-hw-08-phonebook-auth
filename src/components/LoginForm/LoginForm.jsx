import { Box } from 'components/Box';
import { Form } from './LoginFormStyled';

export const LoginForm = () => {
  return (
    <main>
      <Box p={[4]} as="div">
        <Form>
          <label htmlFor="emailId">
            Email
            <input
              id="emailId"
              type="email"
              name="email"
              //   value={name}
              required
              placeholder=" "
            />
          </label>

          <label htmlFor="passwordId">
            Password
            <input
              id="passwordId"
              type="password"
              name="password"
              //   value={name}
              required
              placeholder=" "
            />
          </label>

          <button type="submit">Login</button>
        </Form>
      </Box>
    </main>
  );
};
