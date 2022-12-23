import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
import { Forma } from 'components/Forma';
import { ListContacts } from 'components/ListContacts';
import { Filter } from 'components/Filter';
import { Box } from 'components/Box';
import { Title, TitleContacts } from 'components/Titles/TitlesStyled';
import { Loader } from 'components/Loader';

const UserContacts = () => {
  const { data: contacts = [], error, isLoading } = useGetContactsQuery();
  return (
    <main>
      <Box p={[4]} as="div">
        <Title>Phonebook</Title>
        <Forma />
        <TitleContacts>Contacts</TitleContacts>
        <Filter />
        {!isLoading && error && <p>{error}</p>}
        {contacts.length > 0 && !error && <ListContacts />}
        {isLoading && <Loader />}
      </Box>
    </main>
  );
};

export default UserContacts;
