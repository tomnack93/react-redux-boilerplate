import * as React from "react";
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { creators } from '../actions';
import { AppState } from '../reducers';

import { Todo } from '../components/Todo';
import { ReactCookieProps, Cookies } from "react-cookie";
 
interface State {
  state: AppState
  cookies: Cookies
}
type Props = typeof creators & State

class Container extends React.Component<Props> {
  componentDidMount() {
    const { addTask, cookies } = this.props
    cookies.set('name', 'value');
    const c = cookies.get('name');
    console.log(c);

    const taskContents: string[] = [
      'DO NOT talk about F.C.',
      'DO NOT talk about F.C.'
    ];

    taskContents.map(c => {
      addTask(c);
    })
  }

  render() {
    const { addTask, toggleTask } = this.props;
    const { todo } = this.props.state
    
    return (
      <Todo tasks={todo.tasks} onChangeTask={toggleTask} onSubmitButton={addTask}/>
    )
  }
}

const mapStateToProps = (state: AppState, ownProps: ReactCookieProps) => {
  return ({
    state: state,
    cookies: ownProps.cookies
  })
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(creators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);