import selectSectionReducer from '../../reducers/select-section-reducer';
describe('sectionListReducer', () => {

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(selectSectionReducer(null, { type: null })).toEqual(null);
  });

});
