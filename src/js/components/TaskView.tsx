import * as React from 'react';
import ClassNames from 'classnames';

const styles = require('./TaskView.scss');

interface Props {
    task: Task
    onChange: any
}
export class TaskView extends React.Component<Props, {}> {
  render() {
    const { task, onChange } = this.props;
    return (
      <div className={styles['task-wrapper']}>
        <div className='clearfix'>
          <span className={styles['task-content']}>{task.content}</span>
          <label className={styles.checkbox}>
            <input className={styles['checkbox-input']} type='checkbox' checked={task.isDone} onChange={() => {onChange(task.id)}}/>
            <span className={styles['checkbox-span']}></span>
          </label>
        </div>
      </div>
    )
  }
}