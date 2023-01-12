import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  FlatList
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButton';
import { useSelector, useDispatch } from 'react-redux';
import PlaceItem from '../../components/PlaceItem';
import { loadPlaces } from '../../store/actions/placesAction';

const PlacesListScreen = props => {

  const dispatch = useDispatch();

  const places = useSelector(state => state.places.places);

  useEffect(() => {
    dispatch(loadPlaces());
  }, [dispatch]);

  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <PlaceItem
          image={itemData.item.imageUri}
          title={itemData.item.title}
          address={itemData.item.address}
          onSelect={
            () => props.navigation.navigate(
              'PlaceDetail',
              {
                placeTitle: itemData.item.title,
                placeId: itemData.item.id
              })
          } />
      )} />
  )
}

PlacesListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'All Places',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add Place"
          iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
          onPress={() => navData.navigation.navigate('NewPlace')} />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({

});

export default PlacesListScreen;