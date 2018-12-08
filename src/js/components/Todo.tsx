import * as React from "react"

import { TaskView } from "./TaskView";
import { Input } from "./Input";

const styles = require('./Todo.scss');

interface Props {
    tasks: Task[]
    onChangeTask: any
    onSubmitButton: any
}

const createTasks= (tasks: Task[], onChangeTask) => {
  return tasks.map((t) => {
    return <TaskView key={t.id} task={t} onChange={onChangeTask}></TaskView>
  });
}
  
export class Todo extends React.Component<Props, {}> {
  constructor(props) {
      super(props);
      //this.createTasks = this.createTasks.bind(this);
  }

  render() {
    const { tasks, onChangeTask, onSubmitButton } = this.props;
    return (
      <div className={styles['todo-wrapper']}>
        {createTasks(tasks, onChangeTask)}
        <Input onClick={onSubmitButton}>Add</Input>
      </div>
    )
  }
}