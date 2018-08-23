import React from 'react'
import {CHANGE_PAGE} from './actionTypes'

export const changePage = (pageName) => ({type:CHANGE_PAGE,data:pageName});