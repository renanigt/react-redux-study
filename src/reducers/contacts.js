const contacts = (state = [], action) => {
  switch(action.type) {
    case 'ADD_CONTACT':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          phone: action.phone,
          email: action.email
        }
      ]
    case 'REMOVE_CONTACT':
      return [
        ...state.filter((elem, index, arr) => elem.id !== action.id)
      ]
    default:
      return state;
  }
}

export default contacts;
