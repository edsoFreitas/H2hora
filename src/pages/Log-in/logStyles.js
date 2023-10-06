import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
 
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008FBE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  caixa: {
    backgroundColor: '#1E2F44',
    height: 60,
    color: 'white',
    marginTop: 24,
    borderRadius: 10,
    fontSize: 20,
    textAlign: 'center',
    width: 310,
  },
  button: {
    backgroundColor: '#1E2F44', 
    paddingVertical: 12, 
    paddingHorizontal: 35, 
    borderRadius: 10 
  }
    });