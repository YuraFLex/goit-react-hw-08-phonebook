export const selectContacts = state => {
  return state.contacts.contacts.items;
};
export const selectLoading = state => {
  return state.contacts.contacts.isLoading;
};
export const selectError = state => {
  return state.contacts.contacts.error;
};
