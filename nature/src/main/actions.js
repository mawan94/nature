import React from 'react'
import {CHANGE_PAGE} from './actionTypes'

export const changePage = (pageIndex) => ({type: CHANGE_PAGE, data: pageIndex});