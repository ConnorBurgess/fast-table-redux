import sectionListReducer from '../../../reducers/section-list-reducer';

describe('sectionListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(sectionListReducer({}, { type: null })).toEqual({});
  });
});