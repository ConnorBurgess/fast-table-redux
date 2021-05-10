import formReducer from './form-reducer';
import sectionListReducer from './section-list-reducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  formVisibleOnPage : formReducer,
  completeSectionList : sectionListReducer
});

export default rootReducer;