import { Toaster } from 'react-hot-toast';
import { Forma } from 'components/Forma';
import { ListContacts } from 'components/ListContacts';
import { Filter } from 'components/Filter';
import { Box } from 'components/Box';

const UserContacts = () => {
  return (
    <main>
      <Box p={[4]} as="div">
        <Forma />
        <Filter />
        <ListContacts />
      </Box>
      <Toaster />
    </main>
  );
};

export default UserContacts;
