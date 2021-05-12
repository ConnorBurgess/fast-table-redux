import updateFormReducer from '../../reducers/update-form-reducer';
describe('updateFormReducer', () => {

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(updateFormReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle update form visibility state to true', () => {
    expect(updateFormReducer(false, { type: 'UPDATE_FORM' })).toEqual(true);
  });
});
