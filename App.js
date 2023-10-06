
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Chose from './src/pages/Chose/chose';
import Login from './src/pages/Log-in/log';
import Register from './src/pages/Register/register';

const Stack = createNativeStackNavigator();

const navigationOptions = {
  headerShown: false,
};


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={navigationOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Chose" component={Chose} />
          </Stack.Navigator>
        </NavigationContainer>
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

