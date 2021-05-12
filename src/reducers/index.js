import addFormReducer from './form-reducer';
import updateFormReducer from './update-form-reducer';
import sectionListReducer from './section-list-reducer';
import selectSectionReducer from './select-section-reducer'
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  formVisibleOnPage : addFormReducer,
  updateFormVisible : updateFormReducer,
  completeSectionList : sectionListReducer,
  selectedSection : selectSectionReducer
});

export default rootReducer;