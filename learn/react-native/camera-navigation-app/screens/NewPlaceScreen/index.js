import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button
} from 'react-native';
import Colors from '../../constants/Colors';
import { addPlace } from '../../store/actions/placesAction';
import { useDispatch } from 'react-redux';
import ImagePicker from '../../components/ImagePicker';
import LocationPicker from '../../components/LocationPicker';

const NewPlaceScreen = props => {

  const dispatch = useDispatch();
  const [titleValue, setTitleValue] = useState('');
  const [selectedImage, setSelectedImage] = useState();
  const [selectedLocation, setSelectedLocation] = useState();

  const titleChangeHandler = text => {
    //You could add validation
    setTitleValue(text);
  }

  const imageTakenHandler = imagePath => {
    setSelectedImage(imagePath);
  }

  const savePlaceHandler = () => {
    dispatch(addPlace(titleValue, selectedImage, selectedLocation));
  }

  const locationPickedHandler = useCallback(location => {
    setSelectedLocation(location);
  }, []);

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue} />
        <ImagePicker
          onImageTaken={imageTakenHandler} />
        <LocationPicker
          navigation={props.navigation}
          onLocationPicked={locationPickedHandler} />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={savePlaceHandler} />
      </View>
    </ScrollView>
  )
}

NewPlaceScreen.navigationOptions = () => {
  return {
    headerTitle: 'Add Place'
  }
}

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  label: {
    fontSize: 18,
    marginBottom: 15
  },
  textInput: {
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2
  }
});

export default NewPlaceScreen;