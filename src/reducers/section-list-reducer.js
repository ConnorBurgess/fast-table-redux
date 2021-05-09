export default (state = {}, action) => {
  const { names, location, issue, id } = action;
  
  switch (action.type) {
  case c.ADD_SECTION:
    return Object.assign({}, state, {
      [id]: {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });

    case c.DELETE_SECTION:
      let newState = {...state};
      delete newState[id];
      return newState;

  default:
    return state;
  }
};