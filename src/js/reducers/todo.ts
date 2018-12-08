import { ACTIONS, UnionedAction } from '../actions';

export interface TodoState {
  tasks: Task[]
  id: number
}

const initialState: TodoState = {
  tasks: [],
  id: 0
}

export function todoReducer(state = initialState, action: UnionedAction) {
  const { tasks, id } = state

  switch (action.type) {
    case ACTIONS.ADD_TASK:
      const newId = id + 1
      const task: Task = {
        id: newId,
        content: action.taskContent,
        isDone: false
      }
      return Object.assign({}, state, {
        tasks: [
          ...tasks,
          task
        ],
        id: newId
      })

      case ACTIONS.TOGGLE_TASK:
      const i = tasks.findIndex((v, _) => { return v.id === action.id});
      tasks[i].isDone = !tasks[i].isDone;
      return Object.assign({}, state, {
        tasks: tasks
      })

    default:
      ((_: never): void => { return })(action);
      return state  
  }
}