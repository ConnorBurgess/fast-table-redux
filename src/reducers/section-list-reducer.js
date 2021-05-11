import * as c from '../actions/ActionTypes'

export default (state = {}, action) => {
  const { name, tableCount, originalCount, id } = action;
  
  switch (action.type) {
  case c.ADD_SECTION:
    case c.UPDATE_SECTION:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        tableCount: tableCount,
        originalCount: originalCount, 
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