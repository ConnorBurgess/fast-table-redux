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

});