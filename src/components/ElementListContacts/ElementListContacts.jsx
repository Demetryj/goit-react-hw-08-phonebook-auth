import { useMemo } from 'react';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';
import { TfiWrite } from 'react-icons/tfi';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import { getFirstLetters } from 'utils/getFirstLetters';
import { getRandomColor } from 'utils/getRandomColor';
import {
  Wprapper,
  DataUser,
  Button,
  Circle,
} from './StyledElementListContacts';

export const ElementListContacts = ({ id, name, number }) => {
  const [deleteContact, { error, isLoading }] = useDeleteContactMutation();

  const initContact = getFirstLetters(name).toUpperCase();

  const handleDelete = () => {
    deleteContact(id);

    if (error) {
      toast.error(`${name} not deleted`);
    }

    // toast.success(`${name} deleted from contacts`);
  };

  const randomColor = useMemo(() => getRandomColor(), []);

  return (
    <>
      <Circle getColor={randomColor}>{initContact}</Circle>
      <Wprapper>
        <DataUser>{name}</DataUser>
        <DataUser>{number}</DataUser>
      </Wprapper>
      <Button type="button" onClick={() => {}} disabled={isLoading}>
        <TfiWrite />
      </Button>
      <Button type="button" onClick={handleDelete} delete disabled={isLoading}>
        <MdDeleteForever />
      </Button>
    </>
  );
};

ElementListContacts.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
