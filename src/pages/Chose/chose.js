//PRIMEIRA TELA APÓS ENTRAR NA CONTA

import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from './choseStyles.js';

export default function Chose() {
  return (
    <View style={styles.container}>

      <ImageBackground
      source={require('../../../imagens/fundo2.jpg')}
      style={styles.ImageBackground}>

      <View style={{marginTop: 32, marginBottom: 150}}>
        <Text style={{fontSize: 32, fontFamily: 'bold, sans-serif', textAlign: 'center', color: 'white'}}>CADASTRO</Text>
      </View>
      <View style={{width: '80%', marginBottom: 250}}>
        <Text style={{fontSize: 32, fontFamily: 'bold, sans-serif', textAlign: 'center', color: 'white'}}>Deseja configurar seu perfil?</Text>
      </View>
      <View style={{width: '80%',}}>
      <TouchableOpacity style={{ backgroundColor: '#1E2F44', paddingVertical: 16, borderRadius: 10, marginBottom: 20 }}>
          <Text style={{ color: '#ffffff', fontSize: 32, textAlign: 'center'}}>Configurar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#1E2F44', paddingVertical: 16,  borderRadius: 10 }}>
          <Text style={{ color: '#ffffff', fontSize: 32, textAlign: 'center'}}>Mais tarde</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
}




