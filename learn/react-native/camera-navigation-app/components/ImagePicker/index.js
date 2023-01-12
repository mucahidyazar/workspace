import React, { useState } from 'react';
import { View, Button, Image, Text, Alert, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const ImgPicker = props => {

  const [pickedImage, setPickedImage] = useState();

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL); //CAMERA_ROLL => galeri erisimi
    //User kabul etmezse
    if (result.status !== 'granted') {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant camera permissions to use this app.', [{ text: 'Okey' }]
      )
      return false;
    }
    return true;
  }

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      //Basit kesme kirpma gibi islemlere izin verir
      allowsEditing: true,
      //Ekran ayari
      aspect: [16, 9],
      //Resim kalitesi ayari 1 en iyisi
      quality: 0.5,
    });

    setPickedImage(image.uri);
    props.onImageTaken(image.uri);
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {
          pickedImage
            ? <Image style={styles.image} source={{ uri: pickedImage }} />
            : <Text>No image picked yet!</Text>
        }
      </View>
      <Button
        title="Take Image"
        color={Colors.primary}
        onPress={takeImageHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center',
    marginBottom: 15
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.grey,
    borderWidth: 1
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default ImgPicker;