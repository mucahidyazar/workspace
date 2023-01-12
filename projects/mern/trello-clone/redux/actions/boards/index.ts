import { ADD_BOARD, SET_LISTORDER, SET_NEWLIST } from '../../types'

export const addBoard = (data) => ({
  type: ADD_BOARD,
  payload: data,
})

export const setListorder = (data, index) => ({
  type: SET_LISTORDER,
  payload: data,
  index,
})

export const setNewlist = (data, index) => ({
  type: SET_NEWLIST,
  payload: data,
  index,
})
