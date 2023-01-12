import { ADD_PLACE, SET_PLACES } from '../types';
import * as FileSystem from 'expo-file-system';
import { insertPlace, fetchPlaces } from '../../helpers/db';
import ENV from '../../env';

export const addPlace = (title, image, location) => {
  return async dispatch => {
    // 'someFolder/myimage.jpg' => ['someFolder', 'myimage.jpg'] => 'myimage.jpg' => Yani pop splitten gelen son elemani seciyor.
    const fileName = image.split('/').pop();
    //FileSystem.cacheDirectory => Fotograflari cektigimizde gecisi olarak saklanan yer
    //FileSystem.bundleDirectory => iyi bir yer degil fotograf saklamak icin
    //FileSystem.documentDirectory => Fotograflarin kalici olarak saklanabilmesi icin en iyi yer
    const newPath = FileSystem.documentDirectory + fileName;

    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${ENV}`)
    if (!response.ok) {
      throw new Error('Something went wrong!');
    }
    const resData = await response.json();
    if (!resData.results) {
      throw new Error('Something went wrong!');
    }
    const address = resData.result[0].formatted_address;
    try {
      FileSystem.moveAsync({
        from: image,
        to: newPath
      });
      const dbResult = await insertPlace(
        title, newPath,
        'Dummy Address',
        location.lat,
        location.lng
      );
      dispatch({
        id: dbResult.insertId,
        type: ADD_PLACE,
        placeData: {
          title,
          newPath,
          image: newPath,
          address,
          coords: {
            lat: location.lat,
            lng: location.lng
          }
        }
      })
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export const loadPlaces = () => {
  return async dispatch => {
    try {
      const dbResult = await fetchPlaces();
      dispatch({
        type: SET_PLACES,
        places: dbResult.rows._array
      });
    } catch (err) {
      throw err;
    }
  }
}