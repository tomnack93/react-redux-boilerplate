import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie';

import App from './app'
import store from './store'

import '../css/style.scss'

ReactDOM.render(
  <CookiesProvider>
    <Provider store={store()}>
      <App/>
    </Provider>
  </CookiesProvider>
  , document.getElementById('root')
)