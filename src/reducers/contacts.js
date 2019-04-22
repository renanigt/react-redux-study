const contacts = (state = [], action) => {
  switch(action.type) {
    case 'ADD_CONTACT':
      return [
        ...state,
        {
          name: action.name,
          phone: action.phone,
          email: action.email
        }
      ]
    default:
      return state;
  }
}

export default contacts;
