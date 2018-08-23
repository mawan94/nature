import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./main/main";

import {Provider} from 'react-redux'
import store from './main/store'

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>
    , document.getElementById('root'));
