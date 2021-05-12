import * as actions from '../../actions/index';

describe('FastTable actions', () => {
  it('deleteSection should create DELETE_SECTION action', () => {
    expect(actions.deleteSection(1)).toEqual({
      type: 'DELETE_SECTION',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });
  
  it('updateForm should create UPDATE_FORM action', () => {
    expect(actions.updateForm()).toEqual({
      type: 'UPDATE_FORM'
    });
  });

  it('addSection should create ADD_SECTION action', () => {
    expect(actions.addSection({      
    name: "Joe",
    tableCount: 3,
    originalCount: 3,
    id: 1})).toEqual({
      type: 'ADD_SECTION',
      name: "Joe",
      tableCount: 3,
      originalCount: 3,
      id: 1
    });
  });
  
  it('selectSection should create SELECT_SECTION action', () => {
    expect(actions.selectSection({      
    name: "Joe",
    tableCount: 3,
    originalCount: 3,
    id: 1})).toEqual({
      type: 'SELECT_SECTION',
      section : { 
      name: "Joe",
      tableCount: 3,
      originalCount: 3,
      id: 1 }
    });
  });
});