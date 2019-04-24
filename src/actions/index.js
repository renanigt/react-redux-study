let nextId = 0;

export const addContact = contact => ({
  type: 'ADD_CONTACT',
  id: nextId++,
  name: contact.name,
  phone: contact.phone,
  email: contact.email
});

export const removeContact = id => ({
  type: 'REMOVE_CONTACT',
  id: id
});
