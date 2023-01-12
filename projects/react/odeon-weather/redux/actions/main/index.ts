import Axios from 'axios'
import { GET_WEATHER, DELETE_WEATHER } from '../../types'

export const getWeather = (cityName?: string) => {
  return async (dispatch) => {
    let weatherDatas = JSON.parse(localStorage.getItem('weatherDatas')) || []

    if (cityName) {
      const { data } = await Axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&mode=json&units=metric&appid=${process.env.NEXT_PUBLIC_OWM_API_ID}`
      )
      weatherDatas.push(data)
    }

    localStorage.setItem('weatherDatas', JSON.stringify(weatherDatas))

    dispatch({
      type: GET_WEATHER,
      data: weatherDatas,
    })
  }
}

export const deleteWeather = (index) => {
  return {
    type: DELETE_WEATHER,
    index,
  }
}
