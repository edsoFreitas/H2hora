import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
 
export default StyleSheet.create({
    container: {
      flex: 1,
    },
    caixa: {
      backgroundColor: '#1E2F44',
      height: 60,
      color: 'white',
      marginTop: 24,
      borderRadius: 10,
      fontSize: 16,
      textAlign: 'center',
      width: 310,
    },
    ImageBackground:{
      flex: 1,
      backgroundColor: '#008FBE',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#1E2F44', 
      paddingVertical: 12, 
      borderRadius: 10, 
      marginBottom: 20
    },
    buttonText: {
      color: '#ffffff', 
      fontSize: 32, 
      textAlign: 'center',
    },
    containerText: {
      fontSize: 32, fontFamily: 'bold, sans-serif', textAlign: 'center', color: 'white'
    },
  });