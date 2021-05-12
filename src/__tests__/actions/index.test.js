import * as actions from '../../actions/index';

describe('FastTable actions', () => {
  it('deleteSection should create DELETE_SECTION action', () => {
    expect(actions.deleteSection(1)).toEqual({
      type: 'DELETE_SECTION',
      id: 1
    });
  });


});