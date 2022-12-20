import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Screenshotnative from './components/Screenshotnative';
import Screenshotexpo from './components/Screenshotexpo';

export default function App() {
  return (
    <View style={styles.container}>
      <Screenshotexpo/>
      {/* <Screenshotnative/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
