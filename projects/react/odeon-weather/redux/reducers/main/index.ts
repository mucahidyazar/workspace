import { GET_WEATHER, DELETE_WEATHER } from '../../types'

const INITIAL_STATE = {
  datas: [],
}

export const MainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        datas: action.data,
      }

    case DELETE_WEATHER:
      const weatherDatas = JSON.parse(localStorage.getItem('weatherDatas'))
      weatherDatas.splice(action.index, 1)
      localStorage.setItem('weatherDatas', JSON.stringify(weatherDatas))

      return {
        ...state,
        datas: weatherDatas,
      }

    default:
      return state
  }
}
