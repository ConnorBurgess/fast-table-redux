import rootReducer from '../../reducers/index';
import formVisibleReducer from '../../reducers/form-reducer';
import sectionListReducer from '../../reducers/section-list-reducer';
import selectSectionReducer from '../../reducers/select-section-reducer';

import { createStore } from 'redux';

describe("rootReducer", () => {

  let store = createStore(rootReducer);
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      formVisibleOnPage: false,
      completeSectionList: {},
      updateFormVisible: false,
      selectedSection: null
    });
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that initial state of sectionListReducer matches root reducer', () => {
    expect(store.getState().completeSectionList).toEqual(sectionListReducer(undefined, { type: null }));
  });

  test('Check that initial state of selectSectionReducer matches root reducer', () => {
    expect(store.getState().selectedSection).toEqual(selectSectionReducer(undefined, { type: null }));
  });
});