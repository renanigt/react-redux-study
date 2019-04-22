export const addContact = contact => ({
  type: 'ADD_CONTACT',
  name: contact.name,
  phone: contact.phone,
  email: contact.email
});
