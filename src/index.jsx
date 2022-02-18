import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

//nosso middlewares, o primeiro é para usar middlewares e criar a store
import { applyMiddleware, createStore } from 'redux'
import multi from 'redux-multi'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

import App from './main/App'
import reducers from './main/reducers'

//dev tools do redux
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
        && window.__REDUX_DEVTOOLS_EXTENSION__()

// o store deve estar nessa ordem, se nao tiver middleware, so tirar o appyMidd...
const store =  applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))