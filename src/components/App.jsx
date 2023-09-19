import React, { useEffect } from 'react';
import { ContactList } from './ContactsList';
import { Form } from './Form';
import { FilterInput } from './FilterInput';
import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <FilterInput />
        <ContactList />
      </div>
    </div>
  );
};
