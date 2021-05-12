import * as c from '../actions/ActionTypes'

export default (state = null, action) => {
  switch (action.type) {
    case c.SELECT_SECTION:
      return action.section;
      default:
      return state;
  }
} 