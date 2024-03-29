// import React, { Component } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { RNCamera } from 'react-native-camera';
//
// export default class Camera extends Component {
//
// render() {
//         return (
//             <View style={styles.container}>
//                 <RNCamera
//                     ref={ref => {
//                         this.camera = ref;
//                     }}
//                     style={styles.preview}
//                     type={RNCamera.Constants.Type.back}
//                     flashMode={RNCamera.Constants.FlashMode.on}
//                     androidCameraPermissionOptions={{
//                         title: 'Permission to use camera',
//                         message: 'We need your permission to use your camera',
//                         buttonPositive: 'Ok',
//                         buttonNegative: 'Cancel',
//                     }}
//                     androidRecordAudioPermissionOptions={{
//                         title: 'Permission to use audio recording',
//                         message: 'We need your permission to use your audio',
//                         buttonPositive: 'Ok',
//                         buttonNegative: 'Cancel',
//                     }}
//                     onGoogleVisionBarcodesDetected={({ barcodes }) => {
//                         console.log(barcodes);
//                     }}
//                 />
//                 <View style={{ position: 'absolute',top: 100, left: 100, flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
//
//                 </View>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//     },
//     preview: {
//         flex: 1,
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//     },
//     capture: {
//         flex: 0,
//         backgroundColor: '#fff',
//         borderRadius: 5,
//         padding: 15,
//         paddingHorizontal: 20,
//         alignSelf: 'center',
//         margin: 20,
//     },
// });
