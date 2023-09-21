export const getContacts = state => state.contacts.items;

export const getFilter = state => state.filter;

export const isContactNameUnique = (state, name) => {
  const contacts = state.contacts.items;
  return !contacts.some(contact => contact.name === name);
};

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;
