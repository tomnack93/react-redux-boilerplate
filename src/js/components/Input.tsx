import * as React from 'react';
import classNames from 'classnames';

import { creators } from '../actions';
const styles = require('./Input.scss');

interface Props {
    onClick: typeof creators.addTask;
}

interface State {
  text: string
}

export class Input extends React.Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.onTextAreaChange = this.onTextAreaChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  onTextAreaChange(e) {
    this.setState({text: e.target.value})
  }

  onSubmitClick(e) {
    e.preventDefault()
    const { onClick } = this.props
    const { text } = this.state

    if (text.length === 0) {
      return;
    }
    onClick(text);

    this.setState({text: ''})
  }

  render() {
    const { children } = this.props;
    const { text } = this.state;

    return (
      <div>
        <div className={classNames(styles['button-wrapper'], 'clearfix')}>
          <textarea value={text} onChange={this.onTextAreaChange}></textarea>
          <button onClick={this.onSubmitClick} className={styles.button}>{children}</button>
        </div>
      </div>
    )
  }
}