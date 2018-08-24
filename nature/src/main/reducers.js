import React from 'react'
import {combineReducers} from 'redux'

import {CHANGE_PAGE} from './actionTypes'
import {route} from "../common/common";

const currentPage = (state = '/', action) => {
    switch (action.type) {
        case CHANGE_PAGE:
            return route[action.data];
        default :
            return state;
    }
};

export default combineReducers({currentPage});