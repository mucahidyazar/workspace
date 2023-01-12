import { ADD_BOARD, SET_LISTORDER, SET_NEWLIST } from '../../types'

import {
  backgrounds,
  personal,
  recentlyViewed,
  templates,
  boards,
} from '../../../config/dummy/boards'

const INITIAL_STATE = {
  backgrounds,
  personal,
  recentlyViewed,
  templates,
  boards,
}

export const BoardsReducer = (state = INITIAL_STATE, action) => {
  let newBoards = [...state.boards]
  switch (action.type) {
    case ADD_BOARD:
      return {
        ...state,
        personal: [...state.personal, action.payload],
      }
    case SET_LISTORDER:
      newBoards[action.index].listOrder = action.payload
      return {
        ...state,
        boards: newBoards,
      }
    case SET_NEWLIST:
      newBoards[action.index].lists = action.payload
      return {
        ...state,
        boards: newBoards,
      }
    default:
      return state
  }
}
