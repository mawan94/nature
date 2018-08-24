import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import Main from "./main/main";
import store from './main/store'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
