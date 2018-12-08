export enum ACTIONS {
  ADD_TASK = "ADD_TASK",
  TOGGLE_TASK = "TOGGLE_TASK"
}

// TodoListにTaskを追加
function addTask(taskContent: string) {
  return {
       type: ACTIONS.ADD_TASK as ACTIONS.ADD_TASK,
       taskContent: taskContent 
  }  
}

// TodoListの状態を切り替えるaction
function toggleTask(id: number) {
  return {
       type: ACTIONS.TOGGLE_TASK as ACTIONS.TOGGLE_TASK,
       id: id  
  }  
}

export const creators = { addTask, toggleTask }
type AnyFunction = (...args: any[]) => any
type ReturnTypes<FS> = {
  [F in keyof FS]: FS[F] extends AnyFunction ?
                   ReturnType<FS[F]> :
                   never

}
type ReturnsMap = ReturnTypes<typeof creators>
type MapToUnion<T> = T extends {[K in keyof T]: infer U} ? U : never
export type UnionedAction = MapToUnion<ReturnsMap>
