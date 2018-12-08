import {
    ReducersMapObject,
    combineReducers
  } from 'redux'
  
  import {todoReducer, TodoState} from './todo'
  
  export type AppState = {
    todo: TodoState
  }
  
  const reducerMap: ReducersMapObject<AppState> = {
    todo: todoReducer
  }
  
  const reducer = combineReducers(reducerMap)
  
  export default reducer
  