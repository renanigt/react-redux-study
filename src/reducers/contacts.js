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
    case 'REMOVE_CONTACT':
      return [
        ...state.filter((elem, index, arr) => index !== action.index)
      ]
    default:
      return state;
  }
}

export default contacts;
