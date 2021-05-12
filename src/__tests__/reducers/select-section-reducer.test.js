import selectSectionReducer from '../../reducers/select-section-reducer';
describe('sectionListReducer', () => {
  const currentState = {
    1: { name: "Joe",
    tableCount: 3,
    originalCount: 3,
    id: 1 },
    2: { name: "Janine",
    tableCount: 3,
    originalCount: 3,
    id: 2 }
  }
  let action;

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(selectSectionReducer(null, { type: null })).toEqual(null);
  });

  test('Should successfully return a section', () => {
    action = {
      type: 'SELECT_SECTION',
      section: { name: "Janine",
      tableCount: 3,
      originalCount: 3,
      id: 2 }
    };
    expect(selectSectionReducer(currentState, action)).toEqual({
      name: "Janine",
      tableCount: 3,
      originalCount: 3,
      id: 2 
    });
  });
});
