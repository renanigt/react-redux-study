export const addContact = contact => ({
  type: 'ADD_CONTACT',
  name: contact.name,
  phone: contact.phone,
  email: contact.email
});

export const removeContact = index => ({
  type: 'REMOVE_CONTACT',
  index: index
});
