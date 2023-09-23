import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
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
      {/* <Helmet> */}
      <title>Your contacts</title>
      {/* </Helmet> */}
      {/* <TaskEditor /> */}
      <Form />
      <div>{isLoading && 'Request in progress...'}</div>
      {/* <TaskList /> */}
      <FilterInput />
      <ContactList />
      <h3>contacts!</h3>
    </>
  );
}
