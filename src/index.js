import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import rootReducers from './reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
const createStoreMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreMiddleware(rootReducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
)
