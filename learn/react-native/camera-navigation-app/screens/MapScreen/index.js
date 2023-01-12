import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Colors from '../../constants/Colors';

const MapScreen = props => {

  const initialLocation = props.navigation.getParam('initialLocation');
  const readonly = props.navigation.getParam('readonly');

  //deltalar zoom yani yakinlastirma foktorudur. Yani etrafinda ne kadar alan gormek istedigin anlaminda
  const mapRegion = {
    latitude: initialLocation ? initialLocation.lat : 37.7,
    longitude: initialLocation ? initialLocation.lng : -122,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }

  const [selectedLocation, setSelectedLocation] = useState(initialLocation);

  //Mapde yapilan onPress isleminden dolayi event bize kordinat verir. Bu ozel bir fonksiyon degildir yani.
  //Bu even bize cok genis bir info bilgisi verir fakat bniz sadece markeri kullanmak icin asagidaki yollardan latitude ve longitude kordinatlarini aliyoruz. Detayli siz inceleyebilirsiniz console log yapip.
  const selectLocationHandler = event => {
    if (readonly) {
      return;
    }
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude
    })
  }

  let markerCoordinates;

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng
    }
  }

  const savePickLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      //could show alert if you want
      return;
    }
    props.navigation.navigate('NewPlace', {
      pickedLocation: selectedLocation
    });
  }, [selectedLocation])

  useEffect(() => {
    props.navigation.setParams({ saveLocation: savePickLocationHandler });
  }, [savePickLocationHandler]);

  return (
    //region => Yuklendiginde nereye odaklansin
    <MapView
      style={styles.map}
      region={mapRegion}
      onPress={selectLocationHandler} >
      {
        markerCoordinates
        &&
        <Marker
          title="Picked Location"
          coordinate={markerCoordinates} />
      }
    </MapView>
  )
}

MapScreen.navigationOptions = navData => {

  const saveFn = navData.navigation.getParam('saveLocation');
  const readonly = props.navigation.getParam('readonly');
  if (readonly) {
    return {}
  }

  return {
    headerRight: () => (
      <TouchableOpacity style={styles.headerButton}>
        <Text
          style={styles.headerButtonText}
          onPress={saveFn}>
          Save</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  headerButton: {
    marginHorizontal: 20
  },
  headerButtonText: {
    fontSize: 16,
    color: Platform.OS === 'android' ? Colors.white : Colors.primary
  }
});

export default MapScreen;