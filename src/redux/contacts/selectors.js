export const selectLoading = state => state.contacts.loading;

export const selectFilter = state => state.filter;

export const selectAllContacts = state => state.contacts.items;

export const isContactNameUnique = (state, name) => {
  const contacts = state.contacts.items;
  return !contacts.some(contact => contact.name === name);
};
