import { ACTIONS } from '../../actions';
import { todoReducer, initialState } from '../todo';

// e.g. database connection object
// const globalVariables = 'test';

describe('todo reducer', () => {
  it('count up id & add task to list', () => {

    expect(todoReducer(initialState, {
      type: ACTIONS.ADD_TASK,
      taskContent: '1,000 push-ups',
    })).toEqual({
      id: 1,
      tasks: [
        {
          id: 1,
          content: '1,000 push-ups',
          isDone: false
        }
      ]
    })

  });
});