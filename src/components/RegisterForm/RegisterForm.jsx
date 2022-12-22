import { Box } from 'components/Box';
import { useAuthorizationUserMutation } from 'redux/authSlice';

export const RegisterForm = () => {
  const [autorizationUser, result] = useAuthorizationUserMutation();
  console.log(result);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    console.log(
      typeof form.elements.name.value,
      typeof form.elements.email.value,
      typeof form.elements.password.value
    );

    autorizationUser({
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    });
  };

  return (
    <main>
      <Box p={[4]} as="div">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nameId">
            Username
            <input
              id="nameId"
              type="text"
              name="name"
              required
              placeholder=" "
            />
          </label>

          <label htmlFor="emailId">
            Email
            <input
              id="emailId"
              type="email"
              name="email"
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
              required
              placeholder=" "
            />
          </label>

          <button type="submit">Authorization</button>
        </form>
      </Box>
    </main>
  );
};
