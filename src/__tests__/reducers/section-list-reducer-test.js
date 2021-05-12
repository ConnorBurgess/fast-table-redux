import sectionListReducer from '../../reducers/section-list-reducer';

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
  const sectionData = {
    type: 'ADD_SECTION',
    name: "Joe",
    tableCount: 3,
    originalCount: 3,
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(sectionListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new section data to completeSectionList', () => {
    const { type, name, tableCount, originalCount, id } = sectionData;
    action = {
      type: type,
      name: name,
      tableCount: tableCount,
      originalCount: originalCount,
      id: id
    };

    expect(sectionListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        tableCount: tableCount,
        originalCount: originalCount,
        id: id
      }
    });
    
  });
  test('Should successfully delete a section', () => {
    action = {
      type: 'DELETE_SECTION',
      id: 1
    };
    expect(sectionListReducer(currentState, action)).toEqual({
      2: { name: "Janine",
      tableCount: 3,
      originalCount: 3,
      id: 2 }
    });
  });
  

});
