import formReducer from './form-reducer';
import sectionListReducer from './section-list-reducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducer({
  formreducer : formReducer,
  sectionListReducer : sectionListReducer
});

export default rootReducer;