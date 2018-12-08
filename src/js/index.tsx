import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Container from './containers'
import store from './store'

import '../css/style.scss'

ReactDOM.render(
  <Provider store={store()}>
    <Container/>
  </Provider>
  , document.getElementById('root')
)