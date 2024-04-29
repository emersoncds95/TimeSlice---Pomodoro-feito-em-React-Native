import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet,SafeAreaView,} from 'react-native';
import TelaBranca from './src/components/TelaBranca';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./assets/background-circulos.png')} style={styles.image}>
        <TelaBranca />
        <StatusBar style="auto" />
      </ImageBackground>
      
    
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4DFFDF',
    height: '100%'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
});
