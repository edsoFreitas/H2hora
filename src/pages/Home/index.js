import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import React from 'react';
import styles from './styles.js'

export default function Home({ navigation }) {

    function Registercreen(){
        navigation.navigate('Register');
      }
    
    function LoginScreen(){
        navigation.navigate('Login');
      }

    return (
    <ImageBackground
      source={require('../../imagens/woman.webp')}
      style={styles.backgroundImage}
    >

      <View style={styles.container}>
        <View style={{ marginBottom: 110, marginTop: 60 }}>
          <Image
            source={require('../../imagens/logo.png')}
            style={{ width: 280, height: 130, borderRadius: 100, borderColor: 'white', borderWidth: 10 }}
          />
        </View>
        <View style={{ width: 300 }}>
        <TouchableOpacity style={{ backgroundColor: '#1E2F44', paddingVertical: 12, alignItems: 'center', borderRadius: 10 }}
        onPress={Registercreen}>
            <Text style={{ color: '#ffffff', fontSize: 36}}>NOVA CONTA</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: 300, marginTop: 25}}>
          <TouchableOpacity onPress={LoginScreen} style={{ backgroundColor: '#1E2F44', paddingVertical: 12, alignItems: 'center', borderRadius: 10 }}>
            <Text style={{ color: '#ffffff', fontSize: 36}}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>

</ImageBackground>
    );
  }