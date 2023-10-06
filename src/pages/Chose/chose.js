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

      <View style={{marginTop: 28, marginBottom: 200}}>
        <Text style={styles.containerText}>CADASTRO</Text>
      </View>
      <View style={{width: '80%', marginBottom: 250}}>
        <Text style={styles.containerText}>Deseja configurar seu perfil?</Text>
      </View>
      <View style={{width: '80%',}}>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Configurar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mais tarde</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
}




