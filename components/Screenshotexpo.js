
import * as MediaLibrary from 'expo-media-library';
import React, { useState , useRef} from "react";
import { captureRef } from "react-native-view-shot";
import * as Sharing from 'expo-sharing';



import {
  SafeAreaView,
  StyleSheet,
  Image,
  Button,
  View,
} from "react-native"


const Screenshotexpo = () => {
  const imageRef = useRef();
  const [imageURI, setImageURI] = useState(
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png"
  )
  const [status, requestPermission] = MediaLibrary.usePermissions();
  

  if (status === null) {
    requestPermission();
  }


  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert("Saved!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  
  

  let takeScreenShot = () => {
    
  
  captureRef(imageRef, {
    format: "jpg",
    quality: 0.8,
  }).then(
    (uri) => setImageURI(uri),
    (error) => console.error("Oops, snapshot failed", error)
  );
  };

  const onShare = async () => {
    Sharing.shareAsync(imageURI)
  }



  

    return (
      <View ref={imageRef} collapsable={false}>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.preview}
          source={{ uri: imageURI  }}
        />
        <Button title="TakeScreenshot" onPress={takeScreenShot} />
        <Button title="Share" onPress={onShare} />
         
          <Button title="Save" onPress={onSaveImageAsync} />
    
        <Button title="Discard" onPress={() => setImageURI(undefined)} />
      </SafeAreaView>
      </View>
    );
  }

  


export default Screenshotexpo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#fff",
    alignSelf: "flex-end",
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
});

