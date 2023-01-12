/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { PermissionsAndroid, StyleSheet, Text, TouchableOpacity, View, Platform, Image, FlatList, Dimensions } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';
import Icon from 'react-native-vector-icons/Ionicons';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

const Camera = () => {

  const [ image, setImage ] = useState();
  const [ isCameraLoaded, setIsCameraLoaded ] = useState(false);



  const requestStoragePermission = async (callback) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Galeri kaydetme izni gerekiyor',
          message: 'Fotoğrafınızın galeriye kaydedilmesi için izin veriniz',
          buttonNeutral: 'Daha sonra sor',
          buttonNegative: 'İptal',
          buttonPositive: 'Tamam',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('✅İzin verildi');
        callback();
      } else {
        console.log('❌İzin verilmedi');
      }
    } catch (err) {
      console.warn(err);
    }
  }



  const checkAndroidPermission = async () => {
    try {
      const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
      await PermissionsAndroid.request(permission);
      Promise.resolve();
    } catch (error) {
      Promise.reject(error);
    }
  };



  const takePicture = async function(camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    if (Platform.OS === 'android'){
      await checkAndroidPermission();
    }
    CameraRoll.saveToCameraRoll(data.uri)
      .then(res => {
        getPictures();
      });
  };



  // Bu iptal edildi istersen bunu kullanip resimleri cekip kendi galerini olusturabilirsin ama image pickerla hazir galeriyi kullanip acip yapmak varken niye bununla ugrasasin ki ? :)
  const getPictures = async function() {
    CameraRoll.getPhotos({first: 1}).then(
      (data) =>{
        const assets = data.edges;
        const image = assets.map((asset) => asset.node.image);        
        setIsCameraLoaded(true);
        setImage(image);
        console.log(image);
      },
      (error) => {
        console.warn(error);
      }
    );
  };



  if (isCameraLoaded) {
    return (
      <View style={styles.galleryContainer}>
        <View>
          <Image source={{uri: image[0].uri}} style={{width: '100%', height: '100%'}} />
        </View>
        <View style={styles.galleryButtons}>
          <Text style={styles.buttonItem} onPress={() => setIsCameraLoaded(false)}>BACK</Text>
          <Text style={styles.buttonItem} onPress={() => setIsCameraLoaded(false)}>NEXT</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      >
        {({ camera, status, recordAudioPermissionStatus }) => {
          if (status !== 'READY') return <PendingView />;
          return (
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
              <View style={styles.buttons}>
              <TouchableOpacity onPress={() => console.log(image)} style={styles.gallery}>
                <Icon style={{color: 'white'}} name={Platform.OS === 'android' ? 'md-images' : 'ios-images'} size={50} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => takePicture(camera)} style={styles.capture}></TouchableOpacity>
              <TouchableOpacity style={{
                width: 50,
                height: 50}}>
              </TouchableOpacity>
              </View>
            </View>
          );
        }}
      </RNCamera>
    </View>
  );
}



Camera.navigationOptions = navData => {

  return {
    tabBarVisible: false,
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttons:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '5%',
  },
  capture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 10,
    borderColor: 'white',
  },
  gallery: {
    width: 50,
    height: 50,
  },
  galleryContainer: {
    position: 'relative',
  },
  galleryButtons: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: '5%',
  },
  buttonItem: {
    width: '30%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});

export default Camera;




























// /* eslint-disable prettier/prettier */
// import React, { PureComponent } from 'react';
// import { PermissionsAndroid, StyleSheet, Text, TouchableOpacity, View, Platform, Image, FlatList, Dimensions } from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import CameraRoll from '@react-native-community/cameraroll';
// import Icon from 'react-native-vector-icons/Ionicons';

// const PendingView = () => (
//   <View
//     style={{
//       flex: 1,
//       backgroundColor: 'lightgreen',
//       justifyContent: 'center',
//       alignItems: 'center',
//     }}
//   >
//     <Text>Waiting</Text>
//   </View>
// );

// class Camera extends PureComponent {

//   state = {
//     images: [],
//     isCameraLoaded: false
//   }

//   render() {
//     if (this.state.isCameraLoaded) {
//       console.log(this.state.images);
//       return (
//         <View style={styles.galleryContainer}>
//           <View>
//             <FlatList
//               data={this.state.images}
//               keyExtractor={item => item.uri}
//               numColumns={3}
//               columnWrapperStyle={{justifyContent: 'space-between'}}
//               renderItem={itemData => (
//                 <TouchableOpacity
//                 activeOpacity={0.7}
//                 style={{
//                   width: Dimensions.get('window').width / 3 - 1,
//                   height: Dimensions.get('window').width / 3 - 1,
//                   marginBottom:1,
//                 }}>
//                   <Image source={{uri: itemData.item.uri}} style={{
//                     width: '100%',
//                     height: '100%',
//                   }} />                
//                 </TouchableOpacity>
//               )} />
//           </View>
//           <View style={styles.galleryButtons}>
//             <Text style={styles.buttonItem} onPress={() => this.setState({isCameraLoaded: false})}>BACK</Text>
//             <Text style={styles.buttonItem} onPress={() => this.setState({isCameraLoaded: false})}>NEXT</Text>
//           </View>
//         </View>
//         );
//     }
//     return (
//       <View style={styles.container}>
//         <RNCamera
//           style={styles.preview}
//           type={RNCamera.Constants.Type.back}
//           flashMode={RNCamera.Constants.FlashMode.on}
//           androidCameraPermissionOptions={{
//             title: 'Permission to use camera',
//             message: 'We need your permission to use your camera',
//             buttonPositive: 'Ok',
//             buttonNegative: 'Cancel',
//           }}
//           androidRecordAudioPermissionOptions={{
//             title: 'Permission to use audio recording',
//             message: 'We need your permission to use your audio',
//             buttonPositive: 'Ok',
//             buttonNegative: 'Cancel',
//           }}
//         >
//           {({ camera, status, recordAudioPermissionStatus }) => {
//             if (status !== 'READY') return <PendingView />;
//             return (
//               <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
//                 <View style={styles.buttons}>
//                 <TouchableOpacity onPress={() => this.getPictures()} style={styles.gallery}>
//                   <Icon style={{color: 'white'}} name={Platform.OS === 'android' ? 'md-images' : 'ios-images'} size={50} />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}></TouchableOpacity>
//                 <TouchableOpacity style={{
//                   width: 50,
//                   height: 50}}>
//                 </TouchableOpacity>
//                 </View>
//               </View>
//             );
//           }}
//         </RNCamera>
//       </View>
//     );
//   }

//   requestStoragePermission = async (callback) => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//         {
//           title: 'Galeri kaydetme izni gerekiyor',
//           message: 'Fotoğrafınızın galeriye kaydedilmesi için izin veriniz',
//           buttonNeutral: 'Daha sonra sor',
//           buttonNegative: 'İptal',
//           buttonPositive: 'Tamam',
//         },
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log('✅İzin verildi');
//         callback();
//       } else {
//         console.log('❌İzin verilmedi');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   }

//   checkAndroidPermission = async () => {
//     try {
//       const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
//       await PermissionsAndroid.request(permission);
//       Promise.resolve();
//     } catch (error) {
//       Promise.reject(error);
//     }
//   };
//   takePicture = async function(camera) {
//     const options = { quality: 0.5, base64: true };
//     const data = await camera.takePictureAsync(options);
//     //  eslint-disable-next-line
//     console.log(data.uri);
//     if (Platform.OS === 'android'){
//       await this.checkAndroidPermission();
//     }
//     CameraRoll.saveToCameraRoll(data.uri)
//       .then(res => this.setState(prevState => ({
//         images: [...prevState.images, res]
//       })));
//   };


//   getPictures = async function() {
//     CameraRoll.getPhotos({first: 500}).then(
//       (data) =>{
//         const assets = data.edges;
//         const images = assets.map((asset) => asset.node.image);
//         this.setState({
//           isCameraLoaded: true,
//           images: images
//         })
//       },
//       (error) => {
//         console.warn(error);
//       }
//     );
//   };
// }

// Camera.navigationOptions = navData => {

//   return {
//     tabBarVisible: false,
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'black',
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   buttons:{
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '100%',
//     padding: '5%',
//   },
//   capture: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     borderWidth: 10,
//     borderColor: 'white',
//   },
//   gallery: {
//     width: 50,
//     height: 50,
//   },
//   galleryContainer: {
//     position: 'relative',
//   },
//   galleryButtons: {
//     width: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     padding: '5%',
//   },
//   buttonItem: {
//     width: '30%',
//     height: 40,
//     backgroundColor: 'white',
//     borderRadius: 5,
//     fontSize: 20,
//     textAlign: 'center',
//     textAlignVertical: 'center',
//   }
// });

// export default Camera;