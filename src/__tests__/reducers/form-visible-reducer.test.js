import formReducer from '../../reducers/form-reducer';
describe('sectionListReducer', () => {

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(formReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle form visibility state to true', () => {
    expect(formReducer(false, { type: 'TOGGLE_FORM' })).toEqual(true);
  });
});
