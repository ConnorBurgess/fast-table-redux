import sectionListReducer from '../../reducers/section-list-reducer';

describe('sectionListReducer', () => {
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

});
