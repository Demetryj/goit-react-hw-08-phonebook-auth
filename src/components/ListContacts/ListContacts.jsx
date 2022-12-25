import { ElementListContacts } from 'components/ElementListContacts';
import { WrapperListContacts, List, ElementList } from './StyledListContacts';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
import { selectFilterValue } from 'redux/filter/selectors';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader';

export const ListContacts = () => {
  const { data: contacts = [], error, isLoading } = useGetContactsQuery();

  //useMemo
  const filterValue = useSelector(selectFilterValue);
  const normalyzeFilter = filterValue.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalyzeFilter)
  );

  return (
    <WrapperListContacts>
      {contacts.length > 0 && !error && !isLoading ? (
        <List>
          {visibleContacts.map(({ name, number, id }) => (
            <ElementList key={id}>
              <ElementListContacts name={name} number={number} id={id} />
            </ElementList>
          ))}
        </List>
      ) : (
        <p>{error}</p>
      )}
      {isLoading && <Loader />}
    </WrapperListContacts>
  );
};
