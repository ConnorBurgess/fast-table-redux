import * as c from './ActionTypes'
export const deleteSection = id => ({
  type: c.DELETE_SECTION,
  id
});

export const updateSection = section => ({
  type: c.UPDATE_SECTION,
  section
});
export const selectSection = section => ({
  type: c.SELECT_SECTION,
  section
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

export const updateForm = () => ({
  type: c.UPDATE_FORM
});

