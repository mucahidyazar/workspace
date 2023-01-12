import { ADD_PLACE, SET_PLACES } from '../types';
import Place from '../../models/Place';

const initialState = {
  places: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(
        action.placeData.id.toString(),
        action.placeData.title,
        action.placeData.image,
        action.placeData.address,
        action.placeData.coords.lat,
        action.placeData.coords.lng
      );
    case SET_PLACES:
      return {
        ...state,
        places: action.places.map(pl => new Place(pl.id.toString(), pl.title, pl.imageUri, pl.address, pl.lat, pl.lng))
      }
    default:
      return state;
  }
}