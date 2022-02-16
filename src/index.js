import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './app'
import promise from "redux-promise";

import { Provider } from "react-redux";
import { applyMiddleware, createStore} from 'redux'
import reducers from './redux/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__()
//const store = createStore(reducers, devTools)
const store = applyMiddleware(promise)(createStore)(reducers, devTools)//para aplicar o middleware

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
</Provider>
, document.getElementById('app'))