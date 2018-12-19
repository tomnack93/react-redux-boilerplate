import * as React from "react";
import { withCookies, ReactCookieProps } from 'react-cookie';
import Container from './containers';

class App extends React.Component<ReactCookieProps> {
  render() {
    const { cookies } = this.props;
    return (
      <Container cookies={cookies}/>
    )
  }
}
export default withCookies(App);