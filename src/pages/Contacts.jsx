import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import { Form } from 'components/Form';
import { FilterInput } from 'components/FilterInput';
import { ContactList } from 'components/ContactsList';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Your contacts</title>
      <Form />
      <div>{isLoading && 'Request in progress...'}</div>
      <FilterInput />
      <ContactList />
    </>
  );
}
