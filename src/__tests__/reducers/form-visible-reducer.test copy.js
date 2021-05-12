import updateFormReducer from '../../reducers/update-form-reducer';
describe('sectionListReducer', () => {

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(updateFormReducer(false, { type: null })).toEqual(false);
  });

});
