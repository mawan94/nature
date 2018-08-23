import React from 'react'
import {combineReducers} from 'redux'

import {CHANGE_PAGE} from './actionTypes'

const page = (state = 0,action) => {
    switch (action.type){
        case CHANGE_PAGE:
            return Object.assign({}, state, action.data);
        default :
            return state;
    }
};

export default combineReducers({page});