import * as c from './ActionTypes'
export const deleteSection = id => ({
  type: c.DELETE_SECTION,
  id
});

export const updateSection = id => ({
  type: c.DELETE_SECTION,
  id
});

export const addSection = section => {
  const {name, tableCount, originalCount, id} = section;

  return {
  type: c.ADD_SECTION,
  name: name,
  tableCount: tableCount,
  originalCount: originalCount,
  id: id
}};

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

